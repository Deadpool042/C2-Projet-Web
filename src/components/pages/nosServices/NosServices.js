import React from "react";
import { Card, Container } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";

function NosServices() {
  return (
    <Container pt-5>
      <div className="row pt-5 link-primary-size text-white">
        <Card className="col-10 mx-auto bg-transparent pt-5 pb-5">
          <Card.Header className="text-white text-uppercase h5">
            Création de site internet, communication, graphique à roanne
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Nos services sur mesure pour tous vos projets
            </Card.Title>
            <Card.Text>
              Vous souhaitez donner un élan à votre communication ? Vous avez
              d’un renouveau sur votre site internet, les contenus de vos pages
              ou souhaitez être conseillé dans votre stratégie ?
            </Card.Text>
            <Card.Text>Notre agence propose un service global 360°.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-10 mx-auto bg-transparent pt-5 pb-5">
          <Card.Body>
            <Card.Title>Création de sites internet</Card.Title>
            <Card.Text>
              Vous souhaitez présenter vos produits et services à vos clients et
              développer votre image de marque ? Optez pour la création d’un
              site internet sur mesure avec C2 Projet Web !
            </Card.Text>
            <Card.Text>Logo</Card.Text>
            <Card.Link
              href="/creation-de-site-internet-sur-mesure"
              className="text-secondary text-uppercase"
            >
              en savoir plus
              <FaChevronRight
                style={{ verticalAlign: "middle", marginBottom: "4px" }}
                size="1.3rem"
              />
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="col-10 mx-auto bg-transparent pt-5 pb-5">
          <Card.Body>
            <Card.Title>Graphisme et Conception</Card.Title>
            <Card.Text>
              C2 Projet Web définit ou redéfinit votre identité visuelle avec
              une charte graphique et un webdesign unique pour répondre à tous
              objectifs. Votre site internet doit vous ressembler et le sur
              mesure est fait pour ça, pour vous différencier de vos
              concurrents. C’est pourquoi nous travaillons toutes les pages de
              votre site web pour vous proposer des designs à votre image et
              modernes.
            </Card.Text>
            <Card.Text>Logo</Card.Text>
            <Card.Link
              href="/charte-graphique-webdesign"
              className="text-secondary text-uppercase"
            >
              en savoir plus
              <FaChevronRight
                style={{ verticalAlign: "middle", marginBottom: "4px" }}
                size="1.3rem"
              />
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="col-10 mx-auto bg-transparent pt-5 pb-5">
          <Card.Body>
            <Card.Title>Stratégie digitale</Card.Title>
            <Card.Text>
              Si vous cherchez à booster votre communication et votre marketing
              en pays roannais, il vous faut trouver une agence digitale
              spécialiste des réseaux sociaux qui se situe à Roanne. C2 Projet
              Web, c’est l’agence réseaux sociaux qui s’occupe de l’animation de
              vos réseaux sociaux à 360° : création des contenus, animation et
              modération de vos comptes, publicités, etc… Les réseaux sociaux
              sont aujourd’hui un canal indispensable pour mettre en avant vos
              contenus !
            </Card.Text>
            <Card.Text>Logo</Card.Text>
            <Card.Link
              href="/strategie-digitale-et-reseaux-sociaux"
              className="text-secondary text-uppercase"
            >
              en savoir plus
              <FaChevronRight
                style={{ verticalAlign: "middle", marginBottom: "4px" }}
                size="1.3rem"
              />
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="col-10 mx-auto bg-transparent pt-5 pb-5">
          <Card.Body>
            <Card.Title>Référencement naturel SEO</Card.Title>
            <Card.Text>
              Le référencement naturel, aussi appelé SEO (Search Engine
              Optimization), est complémentaire aux campagnes d’acquisition
              payantes (Google Ads, Facebook Ads,…). Il représente dans la
              plupart des cas, le levier d’acquisition le plus rentable car il
              permet de générer un nombre illimité de prospects, mais également
              car il est durable dans le temps. Avec votre site sur mesure bien
              indexé pour les moteurs de recherche, vous pourrez générer un flux
              plus important de visites. L’agence de communication C2 Projet Web
              se positionne pour accompagner les entreprises dans cette
              stratégie.
            </Card.Text>
            <Card.Text>Logo</Card.Text>
            <Card.Link
              href="/referencement-naturel-seo"
              className="text-secondary text-uppercase"
            >
              en savoir plus
              <FaChevronRight
                style={{ verticalAlign: "middle", marginBottom: "4px" }}
                size="1.3rem"
              />
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default NosServices;
