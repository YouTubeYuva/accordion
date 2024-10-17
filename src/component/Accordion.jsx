import React, { useState } from 'react';
import "./accordion.css";

const Accordion = (props) => {
  const { question, answer } = props; 
  const [isActive, setIsActive] = useState(false); 

  return (
    <div className="accordion-item">
      <div className="accordion-question" onClick={() => setIsActive(!isActive)}>
        <div>{question}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-answer">{answer}</div>}
    </div>
  );
};

export default Accordion;




