import React from "react";
import { Card, Nav } from "react-bootstrap";

import { FaChevronRight } from "react-icons/fa";

function WebDesign() {
  return (
    <div>
      <div className="container pt-5">
        <div className="row pt-5 link-primary-size">
          <Card className="col-10 mx-auto bg-transparent pt-5 pb-5">
            <Card.Header className="text-white text-uppercase h5">
              C2 projet web, agence de communication création charte graphique
              et webdesign
            </Card.Header>
            <Card.Body>
              <Card.Title className="text-white" style={{ fontSize: "2.5rem" }}>
                Graphisme et Conception
              </Card.Title>
              <Card.Subtitle
                className="text-primary"
                style={{ fontSize: "2rem" }}
              >
                Charte graphique et webdesign
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card className="col-10 mx-auto bg-transparent pb-5">
            <Card.Body className="text-white ">
              <Card.Title className="pb-3 fw-bold">
                Conception charte graphique digitale et print
              </Card.Title>
              <Card.Text>
                C2 Projet Web définit ou redéfinit votre identité visuelle avec
                une charte graphique et un webdesign unique pour répondre à tous
                objectifs. Votre logo est l’élément de base et le sur mesure
                vous permettra de valoriser votre image. De la conception du
                logo à vos cartes de visite, en passant par vos signatures mail,
                C2 Projet Web est votre agence globale pour vos supports
                digitaux ou Print.
              </Card.Text>

              <Card.Subtitle className="pb-3 fw-bold">
                Renvoyez une image moderne et dynamique.
              </Card.Subtitle>
              <Card.Text>
                Nous réalisons l’ensemble de vos supports visuels, affiches,
                flyers, banderoles, etc… Notre volonté reste de vous accompagner
                dans le développement de vos supports de communication.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="col-10 mx-auto bg-transparent pb-5">
            <Card.Body className="text-white ">
              <Card.Title className="pb-3 fw-bold">Webdesign</Card.Title>
              <Card.Text>
                Votre site internet doit vous ressembler et le sur mesure est
                fait pour ça, pour vous différencier de vos concurrents. C’est
                pourquoi nous travaillons toutes les pages de votre site web
                pour vous proposer des designs à votre image et modernes.
              </Card.Text>
              <Card.Text>
                Nous réalisons une maquette sur mesure qui répond à la
                particularité et la singularité de votre charte graphique afin
                que votre image soit en rapport avec votre site web. Nous
                accordons beaucoup d’importance à l’expérience utilisateur sur
                nos sites car c’est un élément central de cette expérience. Le
                graphisme et le positionnement des balises pour le référencement
                sont autant d’atouts qui vous permettrons d’avoir un site web
                unique.
              </Card.Text>
              <Card.Text>
                Votre site{" "}
                <Card.Link href="/services/creation-de-site-internet-sur-mesure">
                  site sur mesure{" "}
                </Card.Link>
                sera placé temporairement sur une adresse C2 Projet Web, ce qui
                vous permettra de suivre l’avancée et de tester avant de mettre
                en ligne.
              </Card.Text>

              <Card.Link href="/contact/" className="navLink text-uppercase">
                un projet ? contactez-nous !
                <FaChevronRight
                  style={{ verticalAlign: "middle", marginBottom: "4px" }}
                  size="1.3rem"
                />
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default WebDesign;
