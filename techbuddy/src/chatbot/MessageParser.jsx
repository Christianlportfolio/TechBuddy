import React from 'react';

const MessageParser = ({ children, actions }) => {
    
   
    const parse = (message) => {
        if (message ==='hej' || message ==="Hej" || message ==="hejsa" ) {
            actions.handleHello();
        }

        if (message === "guide" || message === "Guide"){
            actions.handleGuideList();
        }

        if (message.includes(message !== "hej" && message !== "Hej" && message !== "hejsa" && message !== "Guide" && message !=="guide" && message)){
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
