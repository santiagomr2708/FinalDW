import React, { useState } from "react";
import "./Empresa.css";
import "../"

export const Empresa = () => {
  const [fulImgBoxVisible, setFulImgBoxVisible] = useState(false);
  const [fulImgSrc, setFulImgSrc] = useState("");

  const openFulImg = (reference) => {
    setFulImgBoxVisible(true);
    setFulImgSrc(reference);
  };

  const closeImg = () => {
    setFulImgBoxVisible(false);
  };

  return (
    <div>
      <h1>
        <samp>Carnes</samp>
      </h1>

      <div className={`ful-img ${fulImgBoxVisible ? "show" : ""}`} id="fulImgBox">
        <img src={fulImgSrc} id="fulImg" alt="" />
        <span onClick={closeImg}>X</span>
      </div>

      <h1>
        <span>Image Gallery</span>
      </h1>
      
      <div className="img-gallery">
        <img src="../imgs/1.jpg" onClick={() => opengFulImg("../imgs/1.jpg")} alt="" />
        <img src="src/imgs/2.jpg" onClick={() => openFulImg("src/imgs/2.jpg")} alt="" />
        <img src="src/imgs/3.jpg" onClick={() => openFulImg("src/imgs/3.jpg")} alt="" />
        <img src="src/imgs/4.jpg" onClick={() => openFulImg("src/imgs/4.jpg")} alt="" />
        <img src="src/imgs/5.jpg" onClick={() => openFulImg("src/imgs/5.jpg")} alt="" />
        <img src="src/imgs/6.jpg" onClick={() => openFulImg("src/imgs/6.jpg")} alt="" />
        <img src="src/imgs/7.jpg" onClick={() => openFulImg("src/imgs/7.jpg")} alt="" />
        <img src="src/imgs/8.jpg" onClick={() => openFulImg("src/imgs/8.jpg")} alt="" />
      </div>
    </div>
  );
};

