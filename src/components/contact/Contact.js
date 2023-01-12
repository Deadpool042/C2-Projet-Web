import React from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="row bg-primary mt-5 ">
        <div className="col text-center  p-5">
          <p className="h1 text-black">DEMANDEZ VOTRE DEVIS FACILEMENT</p>
          <p className="text-muted">
            C'est le moment de donner du sens à votre communication
          </p>
          <NavLink to="/contact" className="text-muted contact-link">
            PARLEZ-NOUS DE VOTRE PROJET !
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Contact;
