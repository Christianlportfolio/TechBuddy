import React from "react";
import "./guide.css";

const Guide = (props) => {



    const options = [
      { text: "El", 
      handler: props.state.actionProviderTest, 
      id: 1 },
      { text: "Naturgas", handler: () => {}, id: 2 },
      { text: "Fibernet", handler: () => {}, id: 3 },
      { text: "Ladestandere", handler: () => {}, id: 4 },
      { text: "Varmepumper", handler: () => {}, id: 5 },
      { text: "Solceller", handler: () => {}, id: 6 },
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="guide-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="guide-options-container">{optionsMarkup}</div>;
  };
  

  export default Guide;