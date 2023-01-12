import React from "react";
import { Card } from "react-bootstrap";

import { FaChevronRight } from "react-icons/fa";

function StrategieDigitale() {
  return (
    <div>
      <div>
        <div className="container pt-5">
          <div className="row pt-5 link-primary-size">
            <Card className="col-10 mx-auto bg-transparent pt-5 pb-5">
              <Card.Header className="text-white text-uppercase h5">
                C2 projet web, agence de communication gestion réseaux sociaux
                roanne
              </Card.Header>
              <Card.Body>
                <Card.Title
                  className="text-white"
                  style={{ fontSize: "2.5rem" }}
                >
                  Gestion des réseaux sociaux à Roanne
                </Card.Title>
                <Card.Subtitle
                  className="text-primary"
                  style={{ fontSize: "2rem" }}
                >
                  Community Management et gestion des réseaux
                </Card.Subtitle>
              </Card.Body>
            </Card>

            <Card className="col-10 mx-auto bg-transparent pb-5">
              <Card.Body className="text-white ">
                <Card.Title className="pb-3 fw-bold">
                  Agence spécialisée dans la gestion des réseaux sociaux
                </Card.Title>
                <Card.Text>
                  Si vous cherchez à booster votre communication et votre
                  marketing en pays roannais, il vous faut trouver une agence
                  digitale spécialiste des réseaux sociaux qui se situe à
                  Roanne. C2 Projet Web, c’est l’agence réseaux sociaux qui
                  s’occupe de l’animation de vos réseaux sociaux à 360° :
                  création des contenus, animation et modération de vos comptes,
                  publicités, etc… Les réseaux sociaux sont aujourd’hui un canal
                  indispensable pour mettre en avant vos contenus !
                </Card.Text>

                <Card.Text>
                  De nos jours, les médias et les réseaux sociaux font partie
                  intégrante de la vie quotidienne des entreprises, des
                  organisations et même des professionnels, tous secteurs
                  confondus. Se faire connaître, promouvoir ses activités, ses
                  services, ses marques, optimiser sa visibilité sur le web…les
                  possibilités offertes par ces nouveaux canaux de communication
                  sont quasi illimitées.
                </Card.Text>
                <Card.Text>
                  Notre équipe développe, fédère vos abonnés, anime et manage
                  vos différents comptes avec comme principal objectif :
                  développer votre audience avec des{" "}
                  <Card.Link href="/charte-graphique-webdesign">
                    graphismes uniques
                  </Card.Link>
                  .
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-10 mx-auto bg-transparent pb-5">
              <Card.Body className="text-white ">
                <Card.Link href="/contact" className="text-uppercase ">
                  un projet ? contactez-nous !
                  <FaChevronRight
                    style={{ verticalAlign: "middle", marginBottom: "4px" }}
                    size="1.3rem"
                  />
                </Card.Link>

                <Card.Title className="pb-3 pt-3 fw-bold">
                  C2 Projet Web gère vos réseaux sociaux à Roanne.
                </Card.Title>
                <Card.Text>
                  Le référencement d’un site internet dépend des mots clés
                  travaillés mais également du volume de trafic généré sur le
                  site via les réseaux sociaux, les moteurs de recherche ou les
                  liens directs. Il
                </Card.Text>

                <Card.Text>
                  Facebook, Instagram, Twitter, Snapchat, LinkedIn, Pinterest,
                  Youtube… C2 Projet Web maîtrise toutes les plateformes et vous
                  propose un outil global de gestion, de lecture de statistiques
                  avec des reportings clairs et adaptés à chaque entreprise.
                  Nous sélectionnons les audiences les plus pertinentes, nous
                  gérons votre budget et nous rédigeons vos annonces.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategieDigitale;
