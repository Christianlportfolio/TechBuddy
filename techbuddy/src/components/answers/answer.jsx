import React, {useEffect, useState} from "react";
import './answer.css'




const Answer = (props) => {

    const [array, setArray] = useState(props.state.messages);

    const [answer, setAnswer] = useState([]);
    useEffect(() => {
        const user = array.filter(mes => mes.type === 'user');
        const lastItem = user.slice(-1).pop();
        const lastMessage = lastItem.message;

        fetch('https://localhost:7223/api/techbuddy/' + lastMessage)
        .then((res) => res.json())
        .then((data) => setAnswer(data));
    }, [array]);



  
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
            if (item.classID  === 2) {
              return <div className="answer-div" key={index}><p>{item.botAnswer}</p><a href={item.botPrompt.displayText}>Læs mere her</a></div>
            }
            return <div className="answer-div" key={index}><p>{item.botAnswer}</p><p>{item.botAnswerSecond}</p><button className="answer-button" onClick={props.state.actionProviderHandleNoAnswerForm}>Hjælp</button></div>;
          })}
        </div>
      );
};

debugger;
export default Answer;