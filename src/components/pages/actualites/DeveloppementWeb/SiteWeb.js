import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import iquipeImg from "../../../../images/Creations/Site-Vitrine/Creation-site-internet-lIquipe.jpg";
import bargeAutoImg from "../../../../images/Creations/Site-Vitrine/Creation-site-internet-Barge-Automobiles.jpg";

function SiteWeb({ title }) {
  return (
    <>
      <Container
        fluid
        className="actu-background-color "
      >
        <Row className="justify-content-center  p-md-4">
          <Col className="col-12 col-xl-6 col-xxl-5 p-0 ">
            <Card className="bg-light  flex-md-row align-items-center  bg-transparent">
              <Col className="col-11 col-md-6 align-self-center bg-transparent">
                <Card.Img
                  className="fluid"
                  src={iquipeImg}
                  alt="L'iquipe, site parodique du journal sportif L'Equipe"
                ></Card.Img>
              </Col>

              <Col className="col-11 col-md-6 bg-transparent ">
                <Card.Body className="pt-5">
                  <Card.Header className="text-muted text-uppercase ps-0 bg-transparent">
                    {title}
                  </Card.Header>
                  <Card.Title className="text-bold">
                    <Card.Link href="/developpement-web/l-iquipe">
                      Création de site internet L'iquipe
                    </Card.Link>
                  </Card.Title>

                  <Card.Text>
                    Création d’un site vitrine pour le site parodique de
                    www.liquipe.fr. Nous avons répondu à la demande très précise
                    et ultra technique des 28 chefs d’entreprise qui gèrent
                    cette multinationale. « L’iquipe » est une parodie du
                    journal sportif « L’Equipe ».
                  </Card.Text>
                  <Card.Footer
                    className="text-uppercase text-primary ps-0 py-0 bg-transparent"
                    style={{
                      fontSize: "0.7rem",
                    }}
                  >
                    octobre 31, 2022
                  </Card.Footer>
                </Card.Body>
              </Col>
            </Card>
          </Col>

          <Col className="col-11 col-md-12 col-xl-6 col-xxl-3 p-0 ">
            <Card
              className=" flex-row  bg-transparent p-2 "
              style={{ height: "125px" }}
            >
              <Col
                style={{
                  maxWidth: "fit-content",
                }}
                className="col-xxl-12"
              >
                <Card.Img
                  src={bargeAutoImg}
                  alt="Barge Automobile, vente de véchicules neufs et d'occasion"
                  style={{
                    width: "150px",
                    height: "100px",
                  }}
                ></Card.Img>
              </Col>

              <Col>
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "0.9rem",
                    }}
                    className="col-12"
                  >
                    Création Originale pour Barge Automobile
                  </Card.Title>
                  <Card.Footer
                    className=" text-uppercase text-primary ps-0 py-0 bg-transparent"
                    style={{
                      fontSize: "0.8rem",
                    }}
                  >
                    août 1, 2022
                  </Card.Footer>
                </Card.Body>
              </Col>
            </Card>

            <Card className=" flex-row bg-transparent p-2 ">
              <Col
                style={{
                  maxWidth: "fit-content",
                }}
                className="col-xxl-12"
              >
                <Card.Img
                  src={bargeAutoImg}
                  alt="Barge Automobile, vente de véchicules neufs et d'occasion"
                  style={{ width: "150px", height: "100px" }}
                ></Card.Img>
              </Col>
              <Col className="col-lg-8">
                <Card.Body className="col-12">
                  <Card.Title
                    style={{
                      fontSize: "0.9rem",
                    }}
                  >
                    Rendezvouscontes.fr, nouvelle création Originale
                  </Card.Title>
                  <Card.Footer
                    className=" text-uppercase text-primary ps-0 py-0 bg-transparent"
                    style={{
                      fontSize: "0.8rem",
                    }}
                  >
                    juillet 5, 2022
                  </Card.Footer>
                </Card.Body>
              </Col>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SiteWeb;
