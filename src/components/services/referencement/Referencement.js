import React from "react";
import { Card } from "react-bootstrap";

import { FaChevronRight } from "react-icons/fa";

function Referencement() {
  return (
    <div>
      <div>
        <div className="container pt-5">
          <div className="row pt-5 link-primary-size">
            <Card className="col-10 mx-auto bg-transparent pt-5 pb-5">
              <Card.Header className="text-white text-uppercase h5">
                C2 projet web, agence de communication référencement naturel seo
              </Card.Header>
              <Card.Body>
                <Card.Title
                  className="text-white"
                  style={{ fontSize: "2.5rem" }}
                >
                  Référencement naturel SEO
                </Card.Title>
                <Card.Subtitle
                  className="text-primary"
                  style={{ fontSize: "2rem" }}
                >
                  Référencement, contenu et positionnement
                </Card.Subtitle>
              </Card.Body>
            </Card>

            <Card className="col-10 mx-auto bg-transparent pb-5">
              <Card.Body className="text-white ">
                <Card.Title className="pb-3 fw-bold">
                  Agence spécialisée en référencement naturel SEO
                </Card.Title>
                <Card.Text>
                  Le référencement naturel, aussi appelé SEO (Search Engine
                  Optimization), est complémentaire aux campagnes d’acquisition
                  payantes (Google Ads, Facebook Ads,…). Il représente dans la
                  plupart des cas, le levier d’acquisition le plus rentable car
                  il permet de générer un nombre illimité de prospects, mais
                  également car il est durable dans le temps. Avec votre site
                  sur mesure bien indexé pour les moteurs de recherche, vous
                  pourrez générer un flux plus important de visites. L’agence de
                  communication C2 Projet Web se positionne pour accompagner les
                  entreprises dans cette stratégie.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-10 mx-auto bg-transparent pb-5">
              <Card.Body className="text-white ">
                <Card.Title className="pb-3 fw-bold">
                  Le content marketing, la clé du succès
                </Card.Title>
                <Card.Text>
                  Le contenu prend aujourd’hui des formes de plus en plus
                  diverses pour satisfaire au mieux les internautes dans leurs
                  recherches web et mobiles. Nous ne parlons plus de simples
                  lignes de textes, paraphages, introductions, etc… nous parlons
                  de brand content, contenus chauds ou froids, illustrations en
                  lien avec votre contenu, vidéos, fonds, etc…. Avoir un contenu
                  unique, comme un site internet unique sur mesure vous
                  permettra de vous démarquer de vos concurrents. C’est la
                  stratégie à adopter si vous souhaitez que les moteurs de
                  recherche soient vos amis.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-10 mx-auto bg-transparent pb-5">
              <Card.Body className="text-white ">
                <Card.Link href="/contact" className=" text-uppercase ">
                  un projet ? contactez-nous !
                  <FaChevronRight
                    style={{ verticalAlign: "middle", marginBottom: "4px" }}
                    size="1.3rem"
                  />
                </Card.Link>

                <Card.Title className="pb-3 pt-3 fw-bold">
                  C2 Projet Web, est votre interlocuteur principal dans la
                  réalisation de votre SEO
                </Card.Title>
                <Card.Text>
                  L’algorithme Google se repose sur trois piliers pour
                  positionner un site dans les moteurs de recherche :
                </Card.Text>

                <ol>
                  <li>
                    <span className="fw-bold">Le contenu</span> : le site doit
                    disposer d’un contenu de qualité, sans contenu dupliqué
                    (Google n’aime pas du tout).
                  </li>
                  <li>
                    <span className="fw-bold">La technique</span> : le site doit
                    être optimisé techniquement pour faciliter la lecture par
                    les robot Google. La vitesse, la qualité des images, les
                    contenus, les liens internes ou externes, la sécurité, etc…
                    autant d’aspects qui prennent leur importance pour les
                    moteurs de recherche.
                  </li>
                  <li>
                    <span className="fw-bold">Le maillage</span> : qu’il soit
                    interne ou externe, il est nécessaire d’avoir des «
                    connexions » entre vos pages, des « ouvertures » vers des
                    pages externe mais aussi des « entrées » avec des connexions
                    depuis d’autres sites.
                  </li>
                </ol>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referencement;
