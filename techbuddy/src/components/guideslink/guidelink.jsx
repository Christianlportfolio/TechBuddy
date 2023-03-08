import React from "react";

import "./guidelink.css";

const GuideLink = (props) => {


  
  

  const options = [
    { text: "Hvad er prisen på el?", 
    handler: props.state.actionProviderHandleEletricityAnswer, 
    id: 1 },
    { text: "Hvordan forstår jeg min elregning?",handler: () => {}, id: 2 },
    { text: "Kan jeg få reduktion i elafgiften?",handler: () => {}, id: 3 },
    { text: "Hvad er nettariffer?",handler: () => {}, id: 4 },
    { text: "Hvorfor svinger elprisen?",handler: () => {}, id: 5 },
    { text: "Kan jeg vælge at få min elregning hver måned?",handler: () => {}, id: 6 },
  ];

  

  const linkMarkup = options.map((option) => (

    <button
    className="guidelink-option-button"
    key={option.id}
    onClick={option.handler}
  >
    {option.text}
  </button>
  ));
  console.log(linkMarkup)

  return <div>{linkMarkup}</div>;
};



  

export default GuideLink;