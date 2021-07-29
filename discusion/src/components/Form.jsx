import React, { useState } from "react";
import Todo from "./Todo";
const Form = ({ todo, index, deleteTodo }) => {
  const [compra, setCompra] = useState({ compra: '', cantidad: '' });
  const [compras, setCompras] = useState([
    { compra: "compra1", cantidad: 2 },
    { compra: "compra2", cantidad: 3 },
    { compra: "compra3", cantidad: 4 },
  ]);
  const deleteCompra = (indice) => {
    const newCompras = [...compras];
    newCompras.splice(indice, 1);
    setCompras(newCompras);
  };
  const handleClick = (e) => {
      if(Object.keys(compra).length===0 || compra.compra.trim()===0 || compra.cantidad.trim()===0){
        alert("El campo no puede estar vacio");
        return;
      }
      setCompras([...compras,compra])
  };
  const handleChange = (e) => {
      //Para poder manejar varios inputs en un solo handleChange es de usar ...*nombre state* para dejar los datos que ya estan
    setCompra({...compra, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="compra">Añadir producto</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Producto"
          name="compra"
          id="compra"
        />
        <input
          type="number"
          onChange={handleChange}
          placeholder="Cantidad"
          name="cantidad"
          id="cantidad"
        />
        <button onClick={handleClick}>Añadir</button>
      </form>
      {compras.map((value, index) => (
        <Todo
          compra={value.compra}
          cantidad={value.cantidad}
          key={index}
          index={index}
          deleteCompra={deleteCompra}
        />
      ))}
    </>
  );
};
export default Form;
