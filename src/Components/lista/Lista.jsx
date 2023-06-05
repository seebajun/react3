import React from "react";
import '../lista/lista.css'

const Lista = ({ lista }) => {

  return (
    <div className="listaCss">
      <h1>Lista de Trabajadores</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((trabajador) => (
            <tr key={trabajador.id}>
              <td>{trabajador.id}</td>
              <td>{trabajador.nombre}</td>
              <td>{trabajador.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lista;
