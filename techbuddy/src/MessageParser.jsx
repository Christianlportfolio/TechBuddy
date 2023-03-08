import React from 'react';

const MessageParser = ({ children, actions }) => {
    
   
    const parse = (message) => {
        if (message.includes('hej')) {
            actions.handleHello();
        }

        if (message.includes("guide")){
            actions.handleGuideList();
        }

        if (message.includes(message !== "hej" && message!=="guide" && message)){
            actions.handleAnswer();
        }

     
        
        
    
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
};

export default MessageParser;
