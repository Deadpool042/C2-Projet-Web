import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import Logo from "../logo/Logo";
import ButtonNavbar from "../svg/ButtonNavbar";

function Header() {
  const [show, setShow] = useState(true);

  window.addEventListener("scroll", function () {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 500);
  });

  return (
    <>
      <Container fluid>
        <Offcanvas
          placement="top"
          show={show}
          scroll
          backdrop={false}
          className="bg-transparent mx-auto "
          style={{ height: "150px" }}
        >
          <Navbar bg="transparent" expand={false} className="mb-3 p-3">
            <Navbar.Brand href="/">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-false"}>
              <ButtonNavbar />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={"offcanvasNavbar-expand-$false"}
              aria-labelledby={"offcanvasNavbarLabel-expand-false"}
              placement="end"
              className="bg-black text-nowrap"
            >
              <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title
                  id={"offcanvasNavbarLabel-expand-false}"}
                  className="mx-auto"
                >
                  <Logo />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" h5 pe-3 text-white link-primary">
                  <Nav.Link className="text-white " href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="text-white "
                    href="/l-agence-C2-projet-web"
                  >
                    L'Agence
                  </Nav.Link>
                  <Nav.Link className="text-white" href="/nos-services">
                    Nos services
                  </Nav.Link>
                  <Nav.Link className="text-white" href="/news-et-actualites">
                    Quoi de neuf ?
                  </Nav.Link>
                  <Nav.Link
                    className="text-white"
                    href="/ils-nous-font-confiance"
                  >
                    Ils nous font confiance
                  </Nav.Link>
                  <Nav.Link className="text-white" href="/contact">
                    Contact
                  </Nav.Link>
                </Nav>

                <Nav className=" pe-3 text-white link-primary-size">
                  <Nav.Link
                    className="text-white"
                    href="/gestion-reseaux-sociaux"
                  >
                    <small>Déléguez la gestion de vos réseaux sociaux</small>
                  </Nav.Link>
                  <Nav.Link
                    className="text-white"
                    href="/creation-charte-graphique"
                  >
                    <small>
                      La création de charte graphique par C2 Projet Web
                    </small>
                  </Nav.Link>
                  <Nav.Link
                    className="text-white"
                    href="/gestion-reseaux-sociaux/attila"
                  >
                    <small>Gestion des réseaux sociaux par C2 Projet Web</small>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </Offcanvas>
      </Container>
    </>
  );
}

export default Header;

// <Offcanvas
// className="bg-transparent"
// scroll
// show={show}
// placement="top"
// backdrop={false}
// style={{ height: "0px" }}
// >
// <div className={`container-fluid `}>
//   <div className="row">
//     <div className="col-5 ps-md-5 ">
//       <NavLink to="/">
//         <img
//           src={logoC2}
//           alt="logo C2 projet Web"
//           style={{ width: "80px" }}
//           className="pt-3"
//         />
//       </NavLink>
//     </div>

//     <Navbar />
//   </div>
// </div>
// </Offcanvas>
