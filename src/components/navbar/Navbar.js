import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import logoC2 from "../../images/logoC2.png";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-2 col-md-1 offset-4 offset-sm-5 offset-md-6 pt-4 ps-0 ">
      <Button variant="primary" onClick={handleShow} className="me-2 ">
        end
      </Button>
      <Offcanvas
        scroll={true}
        show={show}
        onHide={handleClose}
        placement="end"
        backdrop="static"
        className="bg-black border-start ps-3 "
        style={{
          height: "100vh",
        }}
      >
        <Card className="bg-transparent ">
          <Offcanvas.Header closeButton closeVariant="white" />
          <Card.Img
            variant="top"
            src={logoC2}
            style={{ width: "80px" }}
            className="m-auto pb-5"
          />
          <Card.Title className="text-uppercase text-center text-nowrap h6">
            C2 projet web, agence de communication
          </Card.Title>

          <Card.Body>
            <Nav className="flex-column h5 text-white link-primary">
              <Nav.Link className="text-white " href="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-white " href="/l-agence-C2-projet-web">
                L'Agence
              </Nav.Link>
              <Nav.Link className="text-white" href="/nos-services">
                Nos services
              </Nav.Link>
              <Nav.Link className="text-white" href="/news-et-actualites">
                Quoi de neuf ?
              </Nav.Link>
              <Nav.Link className="text-white" href="/ils-nous-font-confiance">
                Ils nous font confiance
              </Nav.Link>
              <Nav.Link className="text-white" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Card.Body>

          <Card.Body>
            <Nav className="flex-column  text-white text-nowrap link-primary-scale">
              <Nav.Link className="text-white" href="/gestion-reseaux-sociaux">
                <small>Déléguez la gestion de vos réseaux sociaux</small>
              </Nav.Link>
              <Nav.Link
                className="text-white"
                href="/creation-charte-graphique"
              >
                <small>La création de charte graphique par C2 Projet Web</small>
              </Nav.Link>
              <Nav.Link
                className="text-white"
                href="/gestion-reseaux-sociaux/attila"
              >
                <small>Gestion des réseaux sociaux par C2 Projet Web</small>
              </Nav.Link>
            </Nav>
          </Card.Body>
        </Card>
      </Offcanvas>
    </div>
  );
}

export default Navbar;
