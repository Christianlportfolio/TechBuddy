import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './noanswerform.css'

const NoAnswerForm = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [subject, setSubject] = useState("Spørgsmål til regning");
    const [fetchData, setFetchData] = useState();

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleChageSelector = (event) => {
        const value = event.target.value;
        setSubject(value);
    }
  
     const handleSubmit = (event) => {
      event.preventDefault();
     
        const requestOptions = {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify
            (
                {
                    subject: subject,
                    question: inputs.question,
                    name: inputs.name,
                    address: inputs.address,
                    city: inputs.city,
                    postalcode: inputs.postalcode,
                    phonenumber: inputs.phonenumber,
                    email: inputs.email,
                    customernumber: inputs.customernumber,
                    installationnumber: inputs.installationnumber
                
                }
            )
        };
        fetch("https://localhost:5001/api/techbuddy/createcustomerquestionform", requestOptions)
        
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            setFetchData(data)
            alert("Dit spørgsmål er sendt afsted :)")
            navigate('/');

        })
        .catch(error => {
            setFetchData({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
        
        console.log(fetchData);

    }
  
    return (
        <div className='form-div'>
            <p>Hej! velkommen til vores kundeservice. Du ønsker hjælp uden for vores åbningstider og bedes kontakte os i vores åbningstider 8-16 mandag til torsdag eller 8-15.30 fredag. Du kan udfylde nedenstående formular, så vender vi tilbage hurtigst muligt med et svar på dit spørgsmål</p>
            <form onSubmit={handleSubmit}>
                <label className='form-label'>Emne*:
                    <select className='form-input'
                        value={subject}
                        onChange={handleChageSelector}>
                        <option value="Spørgsmål til regning">Spørgsmål til regning</option>
                        <option value="Spørgsmål til forbrug">Spørgsmål til forbrug</option>
                        <option value="Spørgsmål til rykker">Spørgsmål til rykker</option>
                        <option value="Spørgsmål til afdragsordning">Spørgsmål til afdragsordning</option>
                        <option value="Spørgsmål til opsigelse eller fortrydelse">Spørgsmål til opsigelse eller fortrydelse</option>
                        <option value="andet">andet</option>
                    </select>
                </label>
                <label className='form-label'>Spørgsmål*:
                    <textarea required className='form-input'
                        type="text"
                        name="question"
                        value={inputs.question || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className='form-label'>Navn*:
                    <input required className='form-input'
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>
                <label required className='form-label'>adresse*:
                    <input className='form-input'
                        type="text"
                        name="address"
                        value={inputs.address || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className='form-label'>By*:
                    <input required className='form-input'
                        type="text"
                        name="city"
                        value={inputs.city || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className='form-label'>postnummer*:
                    <input required className='form-input'
                        type="text"
                        name="postalcode"
                        value={inputs.postalcode || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className='form-label'>Telefonnummer*:
                    <input required className='form-input'
                        type="text"
                        name="phonenumber"
                        value={inputs.phonenumber || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className='form-label'>E-mail*:
                    <input required className='form-input'
                        type="email"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className='form-label'>Kundenummer(valgfrit):
                    <input className='form-input'
                        type="text"
                        name="customernumber"
                        value={inputs.customernumber || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className='form-label'>installationsnummer(valgfrit):
                    <input className='form-input'
                        type="text"
                        name="installationnumber"
                        value={inputs.installationnumber || ""}
                        onChange={handleChange}
                    />
                </label>
                <input className='form-button' type="submit" />
            </form>
        </div>
    )

}

export default NoAnswerForm;