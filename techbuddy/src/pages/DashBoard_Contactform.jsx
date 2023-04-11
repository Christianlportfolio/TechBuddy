import './css/DashBoard_Contactform.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react'


const ContactForm = () => {

const [APIdata, setAPIData] = useState([]);
 useEffect(() => {
       axios.get('https://localhost:5001/api/dashboard/getallcustomerquestionformdata')
       .then((response) => {
        setAPIData(response.data);
       })
 }, [])

 const onDelete = (id) => {
  axios.delete('https://localhost:5001/api/dashboard/deletecustomerquestionformdata/' + id)
  .then(() => {
    getData();
})
}

const setIsChecked = (id) => {
  axios.get("https://localhost:5001/api/dashboard/formischecked/" + id)
  .then(() => {
    getData();
})
}

const getData = () => {
  axios.get(`https://localhost:5001/api/dashboard/getallcustomerquestionformdata`)
      .then((getData) => {
           setAPIData(getData.data);
       })
}


    return (
      <div className='div-contactform'>
          <Table celled>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Dato</Table.HeaderCell>
                      <Table.HeaderCell>Opfølgning</Table.HeaderCell>
                      <Table.HeaderCell>Emne</Table.HeaderCell>
                      <Table.HeaderCell>Spørgsmål</Table.HeaderCell>
                      <Table.HeaderCell>Navn</Table.HeaderCell>
                      <Table.HeaderCell>Adresse</Table.HeaderCell>
                      <Table.HeaderCell>By</Table.HeaderCell>
                      <Table.HeaderCell>Postnummer</Table.HeaderCell>
                      <Table.HeaderCell>Telefonnummer</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>Kundenummer</Table.HeaderCell>
                      <Table.HeaderCell>Installationsnummer</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>

              <Table.Body>
                {APIdata.map((data) =>{
                  return (
                    <Table.Row key={data.customerQuestionID}>
                    <Table.Cell>{data.submitDate}</Table.Cell>
                    <Table.Cell>{data.isChecked.toString()}</Table.Cell>
                    <Table.Cell>{data.subject}</Table.Cell>
                    <Table.Cell>{data.question}</Table.Cell>
                    <Table.Cell>{data.name}</Table.Cell>
                    <Table.Cell>{data.address}</Table.Cell>
                    <Table.Cell>{data.city}</Table.Cell>
                    <Table.Cell>{data.postalCode}</Table.Cell>
                    <Table.Cell>{data.phoneNumber}</Table.Cell>
                    <Table.Cell>{data.email}</Table.Cell>
                    <Table.Cell>{data.customerNumber}</Table.Cell>
                    <Table.Cell>{data.installationNumber}</Table.Cell>
                    <Table.Cell><button onClick={() => setIsChecked(data.customerQuestionID)}>Opfølg</button></Table.Cell>
                    <Table.Cell><button onClick={() => onDelete(data.customerQuestionID)}>Slet</button></Table.Cell>
                </Table.Row>
                  )
                })}        
              </Table.Body>
          </Table>
      </div>);
  };
  
export default ContactForm;




debugger;