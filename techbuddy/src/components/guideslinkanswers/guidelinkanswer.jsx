import React, {useEffect, useState} from "react";
import './guidelinkanswer.css'

const GuideLinkAnswer = (props) => {

    //const [array, setArray] = useState(props.state.messages);

    const [answer, setAnswer] = useState([]);
    useEffect(() => {
        
        fetch('https://localhost:7223/api/techbuddy/Hvad er prisen på el?')
        .then((res) => res.json())
        .then((data) => setAnswer(data));
    }, []);



  
    // return (            
    //     <div>
    //         {answer.map((item, index) => (
    //             <div key={index}>
    //                 <p>{item.botAnswer}</p>
    //                 <a href={item.botPrompt.displayText}>Læs mere her</a>
                    
    //             </div>
    //         ))}
    //     </div>
    // );

    //Udfordring med re-rendering...??
    return (
        <div>
          {answer.map((item, index) => {
            if (item.classID  === 1) {
              return <div className="answer-div" key={index}><p>{item.botAnswer}</p></div>;
            }
            return <div className="answer-div"  key={index}><p>{item.botAnswer}</p><a href={item.botPrompt.displayText}>Læs mere her</a></div>
          })}
        </div>
      );




};


export default GuideLinkAnswer;