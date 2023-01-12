import React from "react";
import intro from "../../images/Graphiques/output_HD720.mp4";
import Carrousel from "./Carrousel";

function Video() {
  return (
    <div className="video d-none d-sm-flex ">
      <video autoPlay loop muted src={intro} />

      <Carrousel />
    </div>
  );
}

export default Video;
