import React from "react";
import { Card } from "react-bootstrap";

import { FaChevronRight } from "react-icons/fa";

function Ecommerce() {
  return (
    <div className="container pt-5">
      <div className="row pt-5 link-primary-size">
        <Card className="col-10 mx-auto bg-transparent pt-5 pb-5">
          <Card.Header className="text-white text-uppercase h5">
            C2 projet web, agence de communication création site internet
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-white" style={{ fontSize: "2.5rem" }}>
              Création de site internet
            </Card.Title>
            <Card.Subtitle
              className="text-primary"
              style={{ fontSize: "2rem" }}
            >
              Site vitrine et e-commerce
            </Card.Subtitle>
          </Card.Body>
        </Card>

        <Card className="col-10 mx-auto bg-transparent pb-5">
          <Card.Body className="text-white ">
            <Card.Title className="pb-3 fw-bold">
              Site internet vitrine
            </Card.Title>
            <Card.Text>
              Vous souhaitez présenter vos produits et services à vos clients et
              développer votre image de marque ?
              <strong>
                {" "}
                Optez pour la création d’un site internet sur mesure avec C2
                Projet Web !
              </strong>
            </Card.Text>
            <Card.Text>
              A ce jour, près de 80% des clients ayant acheté en magasin se sont
              renseigné sur le web, donc inutile de vous dire que c’est
              important d’être présent sur internet et dans les moteurs de
              recherche. Les habitudes ont changé, internet a changé, votre site
              doit être adapté !
            </Card.Text>
            <Card.Text>
              Pour que votre site internet soit efficace, il doit être adapté à
              votre cible en se démarquant de la concurrence. C’est là que C2
              Projet Web intervient avec ses sites sur mesure.
            </Card.Text>
            <Card.Subtitle className="pb-3 fw-bold">
              Pourquoi un site internet sur mesure ?
            </Card.Subtitle>
            <Card.Text>
              Le sur mesure c’est réellement l’opportunité de construire votre
              site internet adapté à votre cible mais également à votre
              utilisation. Le back office adapté, l’expérience utilisateur
              unique, sont autant de facteurs qui garantissent la réussite de
              votre site internet. En adoptant avec du sur mesure, vous vous
              démarquez de vos concurrents en affirmant votre identité au
              travers des{" "}
              <Card.Link href="/charte-graphique-webdesign">
                graphismes uniques.
              </Card.Link>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-10 mx-auto bg-transparent pb-5">
          <Card.Body className="text-white ">
            <Card.Title className="pb-3 fw-bold">
              Site internet e-commerce
            </Card.Title>
            <Card.Text>
              Vous souhaitez développer votre chiffre d’affaires avec la vente
              de vos produits sur internet ? Optez pour du sur-mesure avec C2
              Projet Web !
            </Card.Text>
            <Card.Text>
              Près de 38 millions de français achètent en ligne et pourquoi
              cette masse de clients potentiels ne viendrait pas chez vous ?
              Pourquoi pas vous ?
            </Card.Text>
            <Card.Text>
              Le e-commerce n’est pas réservé qu’aux grandes entreprises ou aux
              entreprises ayant 4000 références. Il faut « sortir des sentiers
              battus » et se dire « pourquoi pas moi ? ».
            </Card.Text>

            <Card.Text>
              En optant pour un site e-commerce sur mesure, vous vous
              garantissez le droit de faire évoluer votre site, au rythme de vos
              ventes. C’est réellement l’avantage. Votre expérience utilisateur
              et le back office adapté sera un gage de réussite pour votre CA !
            </Card.Text>

            <Card.Text>
              Avoir un site e-commerce sur mesure avec C2 Projet Web vous
              permettra de décider du parcours d’achat de votre client en
              adaptant la demande pour permettre des ventes multiples.
            </Card.Text>
            <Card.Text className="pb-3 ">
              Le sur mesure c’est réellement l’opportunité de construire votre
              site internet adapté à votre cible mais également à votre
              utilisation. Le back office adapté, l’expérience utilisateur
              unique, sont autant de facteurs qui garantissent la réussite de
              votre site internet. En adoptant avec du sur mesure, vous vous
              démarquez de vos concurrents en affirmant votre identité au
              travers des graphismes unique.
            </Card.Text>
            <Card.Link
              href="/contact"
              className="text-secondary text-uppercase"
            >
              un projet ? contactez-nous !
              <FaChevronRight
                style={{ verticalAlign: "middle", marginBottom: "4px" }}
                size="1.3rem"
              />
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="col-10 mx-auto bg-transparent pb-5">
          <Card.Body className="text-white ">
            <Card.Subtitle className="pb-3 fw-bold">
              Quelques outils utilisés
            </Card.Subtitle>
            <Card.Text>
              Nous adaptons des outils sur mesure ou proposons des outils open
              source, adaptés à vos besoins. Notre objectif est d’être le plus
              efficace avec un site qui répond à 100% à vos demandes.
            </Card.Text>
            <ul>
              <li>Création d’un environnement unique pour l’administrateur</li>
              <li>Formation à la création des contenus</li>
              <li>WordPress, Prestashop, Shopify, Magento</li>
              <li>MarketPlace</li>
            </ul>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Ecommerce;
