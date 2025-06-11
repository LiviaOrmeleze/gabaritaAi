import React from "react";
import Menu from "./Menu";
import raposa from "../assets/raposa.png";

const NewHeader = () => {
  return (
    <>
      <div className="d-flex justify-content-between  p-2 ">
        <div className="topo-container">
          <img src={raposa} alt="Raposa" className="raposa" />
          <h1 className="titulo-logo">GABARITA AI</h1>
        </div>

        <Menu />
      </div>
    </>
  );
};

export default NewHeader;
