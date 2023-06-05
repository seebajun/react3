import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./input.css";

const Input = ({onChangeInput, placeholder,}) => {
  return (
    <div className="cardInput">
      <Form.Control
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChangeInput(e)}
      />
    </div> 
  );
};

export default Input;


