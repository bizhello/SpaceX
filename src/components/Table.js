import React from 'react';
import { NavLink } from "react-router-dom";

function Table() {
  return(
    <section className="table">  
      <NavLink className="back" to="../">Назад</NavLink>
    </section>
  )
}

export default Table;