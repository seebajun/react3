import React, { useState } from "react";
import Input from "../input/Input.jsx";
import Button from "react-bootstrap/Button";
import '../body/body.css'

const Body = ({ onClickAddWorker }) => {
  const [nombre, setNombre] = useState();
  const [correo, setCorreo] = useState();

  const handlerOnClick = () => {
    onClickAddWorker({
      nombre: nombre,
      correo: correo,
    });
  };

  return (
    <div className="inputContainer">
      <Input
        className="input" 
        type="text"
        placeholder="Nombre trabajador"
        value={nombre}
        onChangeInput={(e) => setNombre(e.target.value)}
      />
      <Input
        className="input" 
        type="text"
        placeholder="Correo trabajador"
        value={correo}
        onChangeInput={(e) => setCorreo(e.target.value)}
      />
      <Button 
      className="bontonCss"
      variant="success" 
      onClick={handlerOnClick}>
        Agregar
      </Button>
    </div>
  );
};

export default Body;
