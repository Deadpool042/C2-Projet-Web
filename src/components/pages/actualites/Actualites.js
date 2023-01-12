import React from "react";
import { Breadcrumb, Button, Card, Row } from "react-bootstrap";

import Menu from "./Menu";

function Actualites() {
  return (
    <>
      <Row>
        <Card className="col-12 p-5 text-center bg-dark ">
          <Card.Header className="text-uppercase text-muted">
            développement sites web, réseaux sociaux, graphisme
          </Card.Header>
          <Card.Body>
            <Card.Subtitle
              className="text-muted"
              style={{ fontSize: "2.5rem" }}
            >
              Quoi de neuf chez C2 Projet Web ?
            </Card.Subtitle>
            <Card.Text className="h3 text-white">News et Actualités</Card.Text>

            <Breadcrumb className="actu-link">
              <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
              <Breadcrumb.Item href="/news-et-actualites">
                news-et-actualites
              </Breadcrumb.Item>
            </Breadcrumb>

            <Button>Retour aux actus</Button>
          </Card.Body>
        </Card>
      </Row>
      <Menu />
    </>
  );
}

export default Actualites;
