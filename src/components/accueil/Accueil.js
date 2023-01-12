import React from "react";
import { Card, Nav } from "react-bootstrap";

import { FaChevronRight } from "react-icons/fa";
import { BsGlobe2, BsFillPencilFill, BsChatLeftText } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";

import Video from "./Video";

function Accueil() {
  return (
    <>
      <Video />

      <div className="container-fluid container-md p-0 pt-5 ">
        <div className="row  pt-5 link-primary-scale">
          <Card className="col-12 mx-auto bg-transparent pb-5 ">
            <Card.Body className="text-white p-0">
              <Card.Title className="pb-3 fw-bold">
                Vous recherchez une agence de communication à Roanne ?
              </Card.Title>
              <Card.Text>
                C2 Projet Web est votre agence de communication tout-en-un basée
                à Villerest à quelques kilomètres de Roanne. Réussissez votre
                stratégie de communication avec C2 Projet Web, digitale ou
                print. C2 Projet Web vous accompagne de la création de votre
                site internet sur-mesure à la création d’une simple carte de
                visite que nous imprimons. Votre agence de communication à
                Roanne C2 Projet Web est votre unique interlocuteur pour
                l’ensemble de vos projets
              </Card.Text>
              <Card.Text>Contactez-nous!</Card.Text>
            </Card.Body>
          </Card>

          <Card className="col-12 col-sm-11 col-lg-10 col-xxl-9  mx-auto bg-transparent p-1 pt-5 pb-5 ">
            <Card.Body>
              <Card.Title
                className="text-white"
                style={{ fontSize: "2.5rem" }}
              >
                Création de site internet
              </Card.Title>
              <Card.Subtitle
                className="text-primary pb-3"
                style={{ fontSize: "2rem" }}
              >
                Site vitrine et e-commerce
              </Card.Subtitle>
              <Card.Text className="text-white">
                Notre agence de communication C2 Projet Web propose des sites
                internet entièrement personnalisés et modulables. Ils sont à
                votre image et répondent à l’ensemble de vos besoins graphiques,
                techniques ou fonctionnels. Que votre site soit une refonte ou
                une création, C2 Projet Web vous accompagne dans votre
                transformation pour atteindre vos objectifs.
              </Card.Text>
              <Nav.Link
                href="/creation-de-site-internet-sur-mesure"
                className=" text-uppercase pt-2  text-secondary text-center "
              >
                en savoir plus !
                <FaChevronRight
                  style={{ verticalAlign: "middle", marginBottom: "4px" }}
                  size="1.3rem"
                />
              </Nav.Link>
            </Card.Body>
          </Card>
          <BsGlobe2
            className="col-1 m-auto d-none d-lg-block"
            size="80px"
          />

          <Card className="col-12 col-sm-11 col-lg-10 col-xxl-9  mx-auto bg-transparent p-1 pt-5 pb-5">
            <Card.Body>
              <Card.Title
                className="text-white"
                style={{ fontSize: "2.5rem" }}
              >
                Graphisme et Conception
              </Card.Title>
              <Card.Subtitle
                className="text-primary pb-3"
                style={{ fontSize: "2rem" }}
              >
                Webdesign et identité visuelle
              </Card.Subtitle>
              <Card.Text className="text-white">
                La première impression que les gens auront de votre marque sera
                basée sur son identité visuelle. Et nous n’avons jamais
                l’occasion de faire une deuxième première impression. C’est
                pourquoi, C2 Projet Web, agence de communication à Roanne vous
                accompagne dans la conception et la réalisation de votre
                identité visuelle. Du logo à votre site internet, nous sommes
                votre seul et unique interlocuteur.
              </Card.Text>
              <Nav.Link
                href="/charte-graphique-webdesign"
                className=" text-uppercase pt-2 text-secondary text-center"
              >
                en savoir plus !
                <FaChevronRight
                  style={{ verticalAlign: "middle", marginBottom: "4px" }}
                  size="1.3rem"
                />
              </Nav.Link>
            </Card.Body>
          </Card>
          <BsFillPencilFill
            className="col-1 m-auto d-none d-lg-block"
            size="80px"
          />

          <Card className="col-12 col-sm-11 col-lg-10 col-xxl-9  mx-auto bg-transparent p-1 pt-5 pb-5">
            <Card.Body>
              <Card.Title
                className="text-white"
                style={{ fontSize: "2.5rem" }}
              >
                Stratégie digitale
              </Card.Title>
              <Card.Subtitle
                className="text-primary pb-3"
                style={{ fontSize: "2rem" }}
              >
                Réseaux sociaux et Community Management
              </Card.Subtitle>
              <Card.Text className="text-white">
                Référencement SEO, gestion des réseaux sociaux, mailing,
                campagne Google, Google Analytics… C2 Projet Web vous accompagne
                dans votre quotidien digital. Nous vous conseillons et mettons
                en place les outils adaptés, générateurs de trafic, en lien avec
                vos besoins et votre activité.
              </Card.Text>
              <Nav.Link
                href="/strategie-digitale-et-reseaux-sociaux"
                className=" text-uppercase pt-2 text-secondary text-center"
              >
                en savoir plus !
                <FaChevronRight
                  style={{ verticalAlign: "middle", marginBottom: "4px" }}
                  size="1.3rem"
                />
              </Nav.Link>
            </Card.Body>
          </Card>
          <BsChatLeftText
            className="col-1 m-auto d-none d-lg-block "
            size="80px"
          />

          <Card className="col-12 col-sm-11 col-lg-10 col-xxl-9  mx-auto bg-transparent p-1 pt-5 ">
            <Card.Body>
              <Card.Title
                className="text-white"
                style={{ fontSize: "2.5rem" }}
              >
                Référencement naturel SEO
              </Card.Title>
              <Card.Subtitle
                className="text-primary pb-3"
                style={{ fontSize: "2rem" }}
              >
                Référencement et rédaction
              </Card.Subtitle>
              <Card.Text className="text-white">
                Une parfaite écriture sur le web ou dans vos communiqués est un
                atout considérable dans le positionnement de votre entreprise.
                Le sérieux et le ton employés sont souvent synonymes de réussite
                ou d’échec. C2 Projet Web propose une vraie gestion sur le web
                ou dans vos écrits.
              </Card.Text>
              <Nav.Link
                href="/referencement-naturel-seo"
                className=" text-uppercase pt-2 text-secondary text-center"
              >
                en savoir plus !
                <FaChevronRight
                  style={{ verticalAlign: "middle", marginBottom: "4px" }}
                  size="1.3rem"
                />
              </Nav.Link>
            </Card.Body>
          </Card>
          <MdEditNote
            className="col-1 m-auto d-none d-lg-block"
            size="80px"
          />
        </div>
      </div>
    </>
  );
}

export default Accueil;
