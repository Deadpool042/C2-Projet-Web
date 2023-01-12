import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./components/accueil/Accueil";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Formulaire from "./components/formulaire/Formulaire";
import Header from "./components/header/Header";
import Actualites from "./components/pages/actualites/Actualites";
import Liquipe from "./components/pages/actualites/DeveloppementWeb/Liquipe";
import Agence from "./components/pages/agence/Agence";
import NosServices from "./components/pages/nosServices/NosServices";
import Partenaires from "./components/pages/partenaires/Partenaires";
import Ecommerce from "./components/services/eCommerce/Ecommerce";
import Referencement from "./components/services/referencement/Referencement";
import StrategieDigitale from "./components/services/StrategieDigitale/StrategieDigitale";
import WebDesign from "./components/services/webDesign/WebDesign";

function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Header />

          <Routes>
            {/* Accueil */}
            <Route
              path="/"
              element={<Accueil />}
            />
            <Route
              path="*"
              element={<Accueil />}
            />

            {/* NavBar */}
            <Route
              path="/l-agence-C2-projet-web"
              element={<Agence />}
            />
            <Route
              path="/nos-services"
              element={<NosServices />}
            />
            <Route
              path="/news-et-actualites"
              element={<Actualites />}
            />
            <Route
              path="/ils-nous-font-confiance"
              element={<Partenaires />}
            />

            {/* Services */}

            <Route
              path="/creation-de-site-internet-sur-mesure"
              element={<Ecommerce />}
            />
            <Route
              path="/charte-graphique-webdesign"
              element={<WebDesign />}
            />
            <Route
              path="/strategie-digitale-et-reseaux-sociaux"
              element={<StrategieDigitale />}
            />
            <Route
              path="/referencement-naturel-seo"
              element={<Referencement />}
            />

            {/* Actu Développement Web */}
            <Route
              path="/developpement-web/l-iquipe"
              element={<Liquipe />}
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={<Formulaire />}
            ></Route>
          </Routes>
          <Contact />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

