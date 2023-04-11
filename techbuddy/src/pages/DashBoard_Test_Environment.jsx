import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import './css/DashBoard_Test_Environment.css'



const TestEnvironment = () => {

    const [APIdata, setAPIData] = useState([]);
    const [GetAllQnA, setGetAllQnA] = useState([]);

    const [question, setQuestion] = useState('');

    const handleChange = (event) => {
      const value = event.target.value;
      setQuestion(value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
      fetch('https://localhost:5001/api/dashboard/admin/' + question)
      .then((res) => res.json())
      .then((data) => setAPIData(data));
  }

  const fetchGetAllQnA = () => {
    fetch('https://localhost:5001/api/dashboard/getallqnadata')
      .then((res) => res.json())
      .then((data) => setGetAllQnA(data));
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

       return (
         <div>
          <div>
           <form onSubmit={handleSubmit}>
             <label className='form-label'>Test af spørgsmål:
               <input required className='form-input'
                 type="text"
                 value={question}
                 onChange={handleChange}
               />
             </label>
             <input className='form-button Test-environment-btn1' type="submit" value="Hent"/>
           </form>
           </div>

           <div>
           <label className='form-label'>Hent all QnA fra database</label>
           <button className='form-button Test-environment-btn2' onClick={() => fetchGetAllQnA()}>Hent</button>
           </div>

           <div>
           <label className='form-label'>Ryd content</label>
           <button className='form-button Test-environment-btn3' onClick={refreshPage}>Ryd</button>
           </div>

          <Table celled>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Data</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
              {GetAllQnA.map((data) => {

                  return(
                    <Table.Row key={data.id}>
                    <Table.Cell>
                    <Table.Row><pre><b>id:</b>                      {data.id}</pre></Table.Row>
                    
                    {data.questions.map((item) => 
                    <>
                    <Table.Row><pre><b>spørgsmål:</b>               {item}</pre></Table.Row>
                    </>
                    )}

                    <Table.Row><pre><b>svar:</b>                    {data.answer}</pre></Table.Row>
                    <Table.Row><pre><b>Sidst opdateret:</b>         {data.lastUpdatedDateTime}</pre></Table.Row>
                    <Table.Row><pre><b>Kilde:</b>                   {data.source}</pre></Table.Row>
                    <Table.Row><pre><b>Kildenavn:</b>               {data.sourceDisplayName}</pre></Table.Row>
                    <Table.Row><pre><b>svar til kontekst:</b>       {data.dialog.isContextOnly.toString()}</pre></Table.Row>
                    
                    {data.dialog.prompts.map((item) => 
                    <>
                    <Table.Row><pre><b>rækkefølge:</b>              {item.displayOrder}</pre></Table.Row>
                    <Table.Row><pre><b>QnA id:</b>                  {item.qnaId}</pre></Table.Row>
                    <Table.Row><pre><b>prompt tekst:</b>            {item.displayText}</pre></Table.Row>
                    </>
                    )}

                    {data.activeLearningSuggestions.map((item) => 
                    <>
                    <Table.Row><pre><b>Foreslået spørgsmål:</b>                               {item.clusterHead}</pre></Table.Row>
                    <Table.Row><pre><b>totalAutoSuggestedCount:</b>                           {item.totalAutoSuggestedCount}</pre></Table.Row>
                    <Table.Row><pre><b>totalUserSuggestedCount:</b>                           {item.totalUserSuggestedCount}</pre></Table.Row>
                    <Table.Row><pre><b>totalAutoSuggestionCountFromGenerativeModel:</b>       {item.totalAutoSuggestionCountFromGenerativeModel}</pre></Table.Row>
                    
    

                    </>
                    )}
                    
                    </Table.Cell>
                    </Table.Row>
              )

                
                

              })}
              </Table.Body>

              <Table.Body>
                {APIdata.map((data, index) =>
                {
                  if (data.classID  === 1) 
                  {
                    return (
                      <Table.Row key={index}>
  
                      <Table.Row>
                      <Table.Cell>Spørgsmål:</Table.Cell>
                      <Table.Cell>{data.questions}</Table.Cell>
                      </Table.Row>
  
                      <Table.Row>
                      <Table.Cell>Svar:</Table.Cell>
                      <Table.Cell>{data.answer}</Table.Cell>
                      </Table.Row>
  
                      <Table.Row>
                      <Table.Cell>Confidence:</Table.Cell>
                      <Table.Cell>{data.confidence}</Table.Cell>
                      </Table.Row>
  
                      <Table.Row>
                      <Table.Cell>qnaId:</Table.Cell>
                      <Table.Cell>{data.qnaId}</Table.Cell>
                      </Table.Row>
  
                      <Table.Row>
                      <Table.Cell>source:</Table.Cell>
                      <Table.Cell>{data.source}</Table.Cell>
                      </Table.Row>
                  </Table.Row>
                    )
                  }

                  else if (data.classID  === 2) 
                  {
                    return (
                      <Table.Row key={index}>
  
                      <Table.Row>
                      <Table.Cell>Spørgsmål:</Table.Cell>
                      <Table.Cell>{data.questions}</Table.Cell>
                      </Table.Row>
  
                      <Table.Row>
                      <Table.Cell>Svar:</Table.Cell>
                      <Table.Cell>{data.answer}</Table.Cell>
                      </Table.Row>
  
                      <Table.Row>
                      <Table.Cell>Confidence:</Table.Cell>
                      <Table.Cell>{data.confidence}</Table.Cell>
                      </Table.Row>
  
                      <Table.Row>
                      <Table.Cell>qnaId:</Table.Cell>
                      <Table.Cell>{data.qnaId}</Table.Cell>
                      </Table.Row>
  
                      <Table.Row>
                      <Table.Cell>source:</Table.Cell>
                      <Table.Cell>{data.source}</Table.Cell>
                      </Table.Row>
  
                      {/* <Table.Row {...data.metadatas.map((item) => {
                        return(
                          <Table.Row></Table.Row>
                              <Table.Cell>metadata:</Table.Cell>
                              <Table.Cell>{item}</Table.Cell>
                          )
  
                      })}>
                      </Table.Row> */}
  
                      <Table.Row>
                      <Table.Cell>dialog:</Table.Cell>
                      <Table.Cell>
                      <Table.Cell>Is context only?: {data.isContextOnly.toString()}</Table.Cell>
                      <Table.Cell>Rækkefølge: {data.displayOrder}</Table.Cell>
                      <Table.Cell>Prompt ID: {data.promptQnaId}</Table.Cell>
                      <Table.Cell>prompt tekst: {data.displayText}</Table.Cell>
                      </Table.Cell>
                      </Table.Row>
                  </Table.Row>
                    )
                  }

                  else if (data.classID === 3) {
                    return (
                      <Table.Row key={index}>


                        <Table.Row>
                          <Table.Cell>Svar:</Table.Cell>
                          <Table.Cell>{data.answer}</Table.Cell>
                        </Table.Row>
                      </Table.Row>
                    )
                  }

                })}
        </Table.Body>
      </Table>
    </div>);
};

debugger;
  export default TestEnvironment;