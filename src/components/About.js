import React from 'react';
import { NavLink } from "react-router-dom";

function About() {
  return(
    <section className="about">
      <NavLink className="back" to="../">Назад</NavLink>
    </section>
  )
}

export default About;