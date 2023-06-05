import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Input from "../input/Input.jsx";
import '../headBar/HeadBar.css'


const HeadBar = ({onChangeNav, lista}) => {
  const handlerSearch = (e) => {
    const search = e.target.value;
    const resultado = lista.filter(
      (u) =>
      u.nombre.includes(search) ||
      u.id.toString().includes(search) ||
      u.correo.includes(search)
    );
    onChangeNav(resultado)
  } 

  return (
    <div className="navCss">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Buscador de trabajadores</Navbar.Brand>
          <Nav className="">
            <Input type="text" placeholder="Buscar" onChangeInput={(e) => handlerSearch(e)} />
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default HeadBar;
