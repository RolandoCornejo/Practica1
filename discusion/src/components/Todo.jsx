import React from "react";
const Todo = ({ compra, cantidad, index, deleteCompra }) => {
  return (
    <>
      <div className='list'>
        <h3>{cantidad} - {compra}</h3><button className='btn-delete' onClick={()=>deleteCompra(index)}>x</button>
      </div>
    </>
  );
};
export default Todo;