import React from "react";
import { Card } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";

function Agence() {
  return (
    <div className="container pt-5">
      <div className="row pt-5">
        <Card className="col-10 mx-auto bg-transparent pt-5 pb-5">
          <Card.Header className="text-white text-uppercase h5">
            C2 projet web, agence de communication C2 projet web
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-white" style={{ fontSize: "2.5rem" }}>
              L'agence de communication qui vous accompagne
            </Card.Title>
            <Card.Subtitle
              className="text-primary"
              style={{ fontSize: "2rem" }}
            >
              sur le web et dans vos supports
            </Card.Subtitle>
          </Card.Body>
        </Card>

        <Card className="col-10 mx-auto bg-transparent pb-5">
          <Card.Body className="text-white ">
            <Card.Title className="pb-3 fw-bold">
              Votre agence C2 Projet Web pour une communication 360°
            </Card.Title>
            <Card.Text>
              L’agence <strong>C2 Projet Web</strong> est installée à Villerest
              à quelques kilomètres de Roanne, entre Saint-Etienne (Loire, 42)
              et Lyon (Rhône, 69). Au cœur d’un bourg médiéval classé au
              patrimoine, l’agence C2 Projet Web y a toute sa place. La
              singularité de C2 Projet réside dans sa capacité à s’appuyer sur
              les meilleurs pour fournir un service de qualité.
            </Card.Text>
            <Card.Text>
              Nous sommes spécialisés dans la création de sites web sur mesure,
              qu’ils soient vitrine ou e-commerce. L’accompagnement fait autour
              de la création de sites web est un atout pour nos clients, qui
              sont issus de tous les secteurs d’activité. Peu importe votre
              marché, nous nous adaptons et proposons un service sur mesure.
            </Card.Text>

            <Card.Subtitle className="pb-3 fw-bold">
              Une équipe adaptée !
            </Card.Subtitle>

            <Card.Text>
              Notre équipe Webmarketing accompagne les entreprises souhaitant
              booster leur communication sur les différents canaux : réseaux
              sociaux, mailing, campagne Google, SMS… Nos services sont variés
              et peuvent aller de la simple création et diffusion des contenus à
              une présence sur site de nos collaborateurs.
            </Card.Text>
            <Card.Text>
              La plume de notre équipe de référenceurs est un atout pour C2
              Projet Web car, en plus de créer des sites web sur mesure, nous
              sommes capable d’y ajouter un référencement naturelle SEO de haut
              niveau. Ceci est un gage de qualité pour nos clients. Sans changer
              d’agence de communication, nos graphistes vous dessinent vos
              créations pour les mettre en avant sur l’ensemble de vos supports
              de communication.
            </Card.Text>

            <Card.Subtitle className="pb-3 fw-bold">
              Une agence jeune et dynamique
            </Card.Subtitle>
            <Card.Text>
              Notre équipe est composée de professionnels du web ou du print
              passionnés par leur travail. Nous effectuons une veille permanente
              sur les tendances, les évolutions technologiques afin de proposer
              à nos clients de nouvelles alternatives.
            </Card.Text>
            <Card.Text>
              Le développement de nos sites est toujours construits selon la
              volonté du client, son appétence à la gestion du back office que
              nous proposons et à l’utilisation de ses nombreux visiteurs. La
              relation avec l’équipe SEO est importante car nos site ont
              toujours une réflexion de positionnement sur les moteurs de
              recherche.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-10 mx-auto bg-transparent pb-5">
          <Card.Body className="text-white ">
            <Card.Title className="pb-3 fw-bold">
              Votre agence C2 Projet Web pour une communication 360°
            </Card.Title>
            <Card.Text>
              Choisir notre agence est la volonté d’avoir un service sur mesure
              qui répond à 100% de vos demandes, qu’elles soient difficiles ou «
              facile ». Nous adaptons nos contenus selon la demande. Nous vous
              proposons un accompagnement complet et total dans le développement
              de votre activité. Que ce soit la création des sites, la gestion
              de vos boites mails, ou encore la création de vos cartes de
              visite, C2 Projet Web est votre solution complète, et totalement
              360°.
            </Card.Text>

            <Card.Link href="/contact" className="navLink text-uppercase">
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
  );
}

export default Agence;
