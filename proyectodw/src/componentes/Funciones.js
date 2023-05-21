import React, { useState } from "react";
//carnes
import carne1 from '../../src/imgs/1.jpg';
import carne2 from '../../src/imgs/2.jpg';
import carne3 from '../../src/imgs/3.jpg';
import carne4 from '../../src/imgs/4.jpg';
import carne5 from '../../src/imgs/5.jpg';
import carne6 from '../../src/imgs/6.jpg';
import carne7 from '../../src/imgs/7.jpg';
import carne8 from '../../src/imgs/8.jpg';
//hamburguesas
import burger1 from '../../src/imgs/h1.jpg';
import burger2 from '../../src/imgs/h2.jpg';
import burger3 from '../../src/imgs/h3.jpg';
import burger4 from '../../src/imgs/h4.jpg';
import burger5 from '../../src/imgs/h5.jpg';
import burger6 from '../../src/imgs/h6.jpg';
import burger7 from '../../src/imgs/h7.jpg';
import burger8 from '../../src/imgs/h8.jpg';
//bebidas
import bebida1 from '../../src/imgs/b1.jpg';
import bebida2 from '../../src/imgs/b2.jpg';
import bebida3 from '../../src/imgs/b3.jpg';
import bebida4 from '../../src/imgs/b4.jpg';
import bebida5 from '../../src/imgs/b5.jpg';
import bebida6 from '../../src/imgs/b6.jpg';
import bebida7 from '../../src/imgs/b7.jpg';
import bebida8 from '../../src/imgs/b8.jpg';

import { Imagen } from './Imagen';

export const Funciones = () => {
  const [isFulImgVisible, setIsFulImgVisible] = useState(false);
  const [fulImgSrc, setFulImgSrc] = useState("");

  const openFulImg = (reference) => {
    setIsFulImgVisible(true);
    setFulImgSrc(reference);
  };

  const closeImg = () => {
    setIsFulImgVisible(false);
    setFulImgSrc("");
  };

  return (
    <div>
      <h1>
        <samp>Carnes</samp>
      </h1>

      {isFulImgVisible && (
        <div className="ful-img" id="fulImgBox">
          <img src={fulImgSrc} id="fulImg" alt="" />
          <span onClick={closeImg}>X</span>
        </div>
      )}

      <h1>
        <span>Image Gallery</span>
      </h1>

      <div className="img-gallery">
        <Imagen imageUrl={carne1} onClick={() => openFulImg(carne1)} alt="" />
        <Imagen imageUrl={carne2} onClick={() => openFulImg(carne2)} alt="" />
        <Imagen imageUrl={carne3} onClick={() => openFulImg(carne3)} alt="" />
        <Imagen imageUrl={carne4} onClick={() => openFulImg(carne4)} alt="" />
        <Imagen imageUrl={carne5} onClick={() => openFulImg(carne5)} alt="" />
        <Imagen imageUrl={carne6} onClick={() => openFulImg(carne6)} alt="" />
        <Imagen imageUrl={carne7} onClick={() => openFulImg(carne7)} alt="" />
        <Imagen imageUrl={carne8} onClick={() => openFulImg(carne8)} alt="" />
      </div>
    </div>
  );
};

export const Funciones2 = () => {
    const [isFulImgVisible, setIsFulImgVisible] = useState(false);
    const [fulImgSrc, setFulImgSrc] = useState("");
  
    const openFulImg = (reference) => {
      setIsFulImgVisible(true);
      setFulImgSrc(reference);
    };
  
    const closeImg = () => {
      setIsFulImgVisible(false);
      setFulImgSrc("");
    };
  
    return (
      <div>
        <h1>
          <samp>Hamburguesas</samp>
        </h1>
  
        {isFulImgVisible && (
          <div className="ful-img" id="fulImgBox">
            <img src={fulImgSrc} id="fulImg" alt="" />
            <span onClick={closeImg}>X</span>
          </div>
        )}
  
        <h1>
          <span>Image Gallery</span>
        </h1>
  
        <div className="img-gallery">
          <Imagen imageUrl={burger1} onClick={() => openFulImg(burger1)} alt="" />
          <Imagen imageUrl={burger2} onClick={() => openFulImg(burger2)} alt="" />
          <Imagen imageUrl={burger3} onClick={() => openFulImg(burger3)} alt="" />
          <Imagen imageUrl={burger4} onClick={() => openFulImg(burger4)} alt="" />
          <Imagen imageUrl={burger5} onClick={() => openFulImg(burger5)} alt="" />
          <Imagen imageUrl={burger6} onClick={() => openFulImg(burger6)} alt="" />
          <Imagen imageUrl={burger7} onClick={() => openFulImg(burger7)} alt="" />
          <Imagen imageUrl={burger8} onClick={() => openFulImg(burger8)} alt="" />
        </div>
      </div>
    );
  };

  export const Funciones3 = () => {
    const [isFulImgVisible, setIsFulImgVisible] = useState(false);
    const [fulImgSrc, setFulImgSrc] = useState("");
  
    const openFulImg = (reference) => {
      setIsFulImgVisible(true);
      setFulImgSrc(reference);
    };
  
    const closeImg = () => {
      setIsFulImgVisible(false);
      setFulImgSrc("");
    };
  
    return (
      <div>
        <h1>
          <samp>Bebidas</samp>
        </h1>
  
        {isFulImgVisible && (
          <div className="ful-img" id="fulImgBox">
            <img src={fulImgSrc} id="fulImg" alt="" />
            <span onClick={closeImg}>X</span>
          </div>
        )}
  
        <h1>
          <span>Image Gallery</span>
        </h1>
  
        <div className="img-gallery">
          <Imagen imageUrl={bebida1} onClick={() => openFulImg(bebida1)} alt="" />
          <Imagen imageUrl={bebida2} onClick={() => openFulImg(bebida2)} alt="" />
          <Imagen imageUrl={bebida3} onClick={() => openFulImg(bebida3)} alt="" />
          <Imagen imageUrl={bebida4} onClick={() => openFulImg(bebida4)} alt="" />
          <Imagen imageUrl={bebida5} onClick={() => openFulImg(bebida5)} alt="" />
          <Imagen imageUrl={bebida6} onClick={() => openFulImg(bebida6)} alt="" />
          <Imagen imageUrl={bebida7} onClick={() => openFulImg(bebida7)} alt="" />
          <Imagen imageUrl={bebida8} onClick={() => openFulImg(bebida8)} alt="" />
        </div>
      </div>
    );
  };



