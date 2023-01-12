import React from "react";
import Card from "react-bootstrap/Card";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import logoC2 from "../../images/logoC2.png";
import { Nav } from "react-bootstrap";

function Footer() {
  const year = new Date();

  return (
    <footer className="container-fluid container-lg mx-0 mx-lg-auto px-0 pt-3  ">
      <div className="row ">
        <Card className="col-12 col-md-3 bg-transparent text-white p-0">
          <Card.Img
            variant="top"
            src={logoC2}
            style={{ width: "60px" }}
            className="mx-auto"
          />
          <Card.Body className="text-center">
            <Card.Text>
              <small>
                Tous droits réservés - {year.getFullYear()} - C2 Projet Web
              </small>
              <br />
              <small>
                <strong>Fait avec passion à Roanne</strong>
              </small>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-12 col-md-3 bg-transparent text-white text-center">
          <Card.Body>
            <Card.Title className="text-secondary text-nowrap">
              Rencontrons-nous
            </Card.Title>
            <Card.Text>
              <small>
                4 place Jules Rabourdin, <br />
                42300 Villerest
              </small>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-12 col-md-3 bg-transparent text-white text-center link-primary-scale">
          <Card.Body>
            <Card.Title className="text-secondary">Discutons</Card.Title>
            <Nav.Link
              className="text-white"
              onClick={(e) => {
                window.location.href = "tel: +330477786988";
              }}
            >
              <small>04 77 78 69 88</small>
            </Nav.Link>

            <Nav.Link
              className="text-white navLink text-nowrap"
              onClick={(e) => {
                window.location.href = "mailto:contact@c2projetweb.fr";
              }}
            >
              <small>contact@c2projetweb.fr</small>
            </Nav.Link>
          </Card.Body>
        </Card>

        <Card className="col-12 col-md-3 bg-transparent align-items-center">
          <Card.Body className="p-0">
            <Nav className=" pb-2 pb-md-0 link-secondary-scale flex-md-nowrap ">
              <Nav.Link
                className="text-primary "
                href="https://www.facebook.com/c2projetweb"
              >
                <FaFacebook size="1.5rem" />
              </Nav.Link>
              <Nav.Link
                className="text-primary "
                href="https://twitter.com/c2projetweb"
              >
                <FaTwitter size="1.5rem" />
              </Nav.Link>
              <Nav.Link
                className="text-primary"
                href="https://www.linkedin.com/company/c2projetweb"
              >
                <FaLinkedin size="1.5rem" />
              </Nav.Link>
              <Nav.Link
                className="text-primary"
                href="https://www.instagram.com/c2projetweb"
              >
                <FaInstagram size="1.5rem" />
              </Nav.Link>
            </Nav>

            <Nav className="flex-column text-center link-primary-scale text-nowrap text-md-end">
              <Nav.Link
                href=""
                className=" pt-0 pb-0 text-white"
              >
                <small>Mentions légales</small>
              </Nav.Link>

              <Nav.Link
                href=""
                className=" pt-0 pb-0 text-white"
              >
                <small>Politique de confidentialités</small>
              </Nav.Link>

              <Nav.Link
                href=""
                className=" pt-0 pb-0 text-white"
              >
                <small>Utilisation des cookies</small>
              </Nav.Link>

              <Nav.Link
                href=""
                className=" pt-0 pb-0 text-white"
              >
                <small>Plan du site</small>
              </Nav.Link>
            </Nav>
          </Card.Body>
        </Card>
      </div>
    </footer>
  );
}

export default Footer;
