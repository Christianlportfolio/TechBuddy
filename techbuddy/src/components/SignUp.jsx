import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        setIsLoading(true);
        const response = await axios({
          method: 'POST',
          url: API_ROUTES.SIGN_UP,
          data: {
            userID: 0,
            username: inputs.username,
            password: inputs.password,
            salt: ""
          }
        });
        navigate(APP_ROUTES.SIGN_IN);
      }
      catch (err) {
        console.log('Some error occured during signing up: ', err);
      }
      finally {
        setIsLoading(false);
      }
  }

  return (
    <div>
    <h1>registrer</h1>
    <form onSubmit={handleSubmit}>
        <label className='form-label'>Brugernavn:
            <input required className='form-input'
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
            />
        </label>
        <label className='form-label'>Adgangskode:
            <input required className='form-input'
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
            />
        </label>
        <input className='form-button' type="submit" />
    </form>
    </div>
  );
}


export default SignUp;