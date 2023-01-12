import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

// Icones
import { BsGlobe2 } from "react-icons/bs";
import { MdSmartphone } from "react-icons/md";
import { BiPaint } from "react-icons/bi";
import { TfiStatsUp } from "react-icons/tfi";

import SiteWeb from "./DeveloppementWeb/SiteWeb";
import GraphismeConception from "./GraphismeEtConception/GraphismeConception";
import ReseauxSociaux from "./ReseauxSociaux/ReseauxSociaux";
import ReferencementSeo from "./ReferencementSEO/ReferencementSeo";

function Menu() {
  const [key, setKey] = useState("first");

  const classNameLink = "col-12 col-md-3 pt-5 d-flex menu bg-dark";

  return (
    <Tab.Container
      defaultActiveKey="first"
      activeKey={key}
      onSelect={(key) => setKey(key)}
    >
      <Row>
        <Col
          md={12}
          className="px-0"
        >
          <Nav className="justify-content-between align-items-center text-center ">
            <Nav.Link
              eventKey="first"
              className={classNameLink}
            >
              <BsGlobe2
                size={"50px"}
                className="text-white"
              />
              <span className="py-4">Développement Web</span>
            </Nav.Link>

            <Nav.Link
              eventKey="second"
              className={classNameLink}
            >
              <BiPaint
                size={"50px"}
                className="text-white"
              />
              <span className="py-4">Graphisme et Conception</span>
            </Nav.Link>

            <Nav.Link
              eventKey="third"
              className={classNameLink}
            >
              <MdSmartphone
                size={"50px"}
                className="text-white"
              />
              <span className="py-4">Réseaux Sociaux</span>
            </Nav.Link>

            <Nav.Link
              eventKey="fourth"
              className={classNameLink}
            >
              <TfiStatsUp
                size={"50px"}
                className="text-white"
              />
              <span className="py-4">Référencement Seo</span>
            </Nav.Link>
          </Nav>
        </Col>
        <Col
          md={12}
          className="p-0"
        >
          <Tab.Content className="">
            <Tab.Pane eventKey="first">
              <SiteWeb title="site web" />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <GraphismeConception title="Graphisme et Conception" />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <ReseauxSociaux title="Réseaux Sociaux" />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <ReferencementSeo title="Référencement SEO" />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Menu;
