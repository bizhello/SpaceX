import React from 'react';
import { NavLink } from "react-router-dom";

function Contacts() {
  return(
    <section className="contacts">
      <NavLink className="back" to="../">Назад</NavLink>
    </section>
  )
}

export default Contacts;