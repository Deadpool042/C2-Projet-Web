import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import charteGraphiqueImg from "../../../../images/Graphiques/Charte-graphique.png";
import VilleresthonImg from "../../../../images/Graphiques/Telethon-Villerest.png";

const GraphismeConception = ({ title }) => {
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
                  src={charteGraphiqueImg}
                  alt="L'iquipe, site parodique du journal sportif L'Equipe"
                ></Card.Img>
              </Col>

              <Col className="col-11 col-md-6 bg-transparent ">
                <Card.Body className="pt-5">
                  <Card.Header className="text-muted text-uppercase ps-0 bg-transparent">
                    {title}
                  </Card.Header>
                  <Card.Title className="text-bold">
                    La création de charte graphique par C2 Projet Web
                  </Card.Title>

                  <Card.Text>
                    Pour les entreprises, la création d'une charte graphique est
                    la première étape pour concevoir, développer et mettre en
                    oeuvre une stratégie de communication réussie.
                  </Card.Text>
                  <Card.Footer
                    className="text-uppercase text-primary ps-0 py-0 bg-transparent"
                    style={{
                      fontSize: "0.7rem",
                    }}
                  >
                    novembre 25, 2022
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
                  src={VilleresthonImg}
                  alt="Villeresthon, nouvelle création originale"
                  style={{
                    width: "150px",
                    height: "100px",
                  }}
                  title="Villeresthon, nouvelle création originale"
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
                    Villeresthon, nouvelle création originale
                  </Card.Title>
                  <Card.Footer
                    className=" text-uppercase text-primary ps-0 py-0 bg-transparent"
                    style={{
                      fontSize: "0.8rem",
                    }}
                  >
                    novembre 2, 2022
                  </Card.Footer>
                </Card.Body>
              </Col>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GraphismeConception;
