import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../lib/customHooks';
import { storeTokenInLocalStorage } from '../lib/common';

const SignIn = () => {
  const navigate = useNavigate();
  const { user, authenticated } = useUser();
  if (user || authenticated) {
    navigate(APP_ROUTES.Dashboard)
  }

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
        method: 'post',
        url: API_ROUTES.SIGN_IN,
        data: {
            userID: 0,
            username: inputs.username,
            password: inputs.password,
            salt: ""
        }
      });
      if (!response?.data?.token) {
        console.log('Something went wrong during signing in: ', response);
        return;
      }
      storeTokenInLocalStorage(response.data.token);
      navigate(APP_ROUTES.Dashboard)
    }
    catch (err) {
      console.log('Some error occured during signing in: ', err);
    }
    finally {
      setIsLoading(false);
    }
  }


  return (
    <div>
    <h1>Login</h1>
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
debugger;
export default SignIn;