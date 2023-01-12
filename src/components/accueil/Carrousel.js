import React from "react";

import { FaChevronRight } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import { Card, Nav } from "react-bootstrap";

function Carrousel() {
  return (
    <div className="row  m-auto">
      <Card className="col  bg-transparent link-primary-scale">
        <Card.Header className="text-muted text-uppercase h3">
          C2 projet web, agence de communication à roanne
        </Card.Header>
        <Card.Body className="col">
          <Card.Text className="text-white h1">
            Agence de communication pour
          </Card.Text>

          <Carousel indicators={false} controls={false} className="col pb-5 ">
            <Carousel.Item interval={2000}>
              <p className=" w-100 h1">votre projet</p>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <p className=" w-100 h1">votre site</p>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <p className=" w-100 h1">vos réseaux</p>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <p className=" w-100 h1">vos supports</p>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <p className=" w-100 h1">votre image</p>
            </Carousel.Item>
          </Carousel>

          <Nav.Link
            href="/l-agence-C2-projet-web"
            className="h6 text-uppercase text-secondary text-center"
          >
            découvrir l'agence{" "}
            <FaChevronRight
              style={{ verticalAlign: "middle", marginBottom: "4px" }}
            />
          </Nav.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Carrousel;
