import React, { useState } from "react";
import "./Inicio.css";

export const Inicio = () => {
  const [opinion, setOpinion] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const handleChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Agregar la lógica para enviar la opinión del cliente aquí
    console.log(opinion);
    setComentarios([...comentarios, opinion]);
    setOpinion("");
  };

  return (
    <div>

<ul className="Contenedor">
        <a id="maps" href="https://www.google.com/maps/place/Fundaci%C3%B3n+Caminos+-+La+Naranja+mec%C3%A1nica/@6.283115,-75.5394985,20z/data=!4m6!3m5!1s0x8e4428b1e2a18ad3:0xb9545c95934ffa12!8m2!3d6.2830183!4d-75.5393039!16s%2Fg%2F11gg65n311?hl=es">
          Maps
        </a>
        <a id="azul" href="https://www.facebook.com/">
          Facebook
        </a>
        <a id="rosa" href="https://www.instagram.com/">
          Instagram
        </a>
        <a id="verde" href="https://wa.me/573052911727">
          Wattsapp
        </a>
       
      </ul>

      <nav className="Contenedor2">
        <ul className="hijo1">
          <p>
            
            <br></br>
            <br></br>

            En nuestro establecimiento, creemos que la comida es mucho más que simplemente satisfacer el hambre.
            Es una forma de expresión cultural, una oportunidad para explorar nuevos sabores y texturas, y un medio para reunir a
            las personas en torno a una mesa compartiendo momentos especiales. 
            <br></br>
            <br></br>

            Nuestro equipo de chefs talentosos y apasionados se dedica a crear platos excepcionales utilizando
            los ingredientes más frescos y de la más alta calidad. 

          </p>
        </ul>

        <ul className="hijo1">
          <p>
            Pero más allá de nuestra deliciosa comida y nuestro hermoso espacio, lo que realmente nos
            distingue es nuestro equipo. Nuestro personal está comprometido a brindar un servicio
            excepcional y hacer que cada visita sea especial. Nos esforzamos por conocer a nuestros
            comensales, entender sus preferencias y necesidades, y superar sus expectativas en cada
            interacción. Creemos en la importancia de la atención al detalle y nos esforzamos por brindar
            un servicio amable, atento y personalizado en todo momento.

            <br></br>
            <br></br>

            En resumen, en nuestro restaurante de comidas, nos consideramos mucho más que simplemente un lugar
            para comer. Somos una experiencia gastronómica completa, donde los sabores se combinan con la hospitalidad,
            la creatividad se une a la tradición y cada plato cuenta
            </p>
            </ul>
          
            
            

<ul className="hijo1">
  <p>
    Pero más allá de nuestra deliciosa comida y nuestro hermoso espacio, lo que realmente nos
    distingue es nuestro equipo. Nuestro personal está comprometido a brindar un servicio
    excepcional y hacer que cada visita sea especial. Nos esforzamos por conocer a nuestros
    comensales, entender sus preferencias y necesidades, y superar sus expectativas en cada
    interacción. Creemos en la importancia de la atención al detalle y nos esforzamos por brindar
    un servicio amable, atento y personalizado en todo momento.

    <br></br>
    <br></br>

  </p>
  
</ul>
</nav>

        <ul class="josu">

            
      <form onSubmit={handleSubmit}>
        <h2 id="h22">Opinión del cliente:</h2>
        <br></br>
        <textarea value={opinion} onChange={handleChange} />
        <br></br>
        <br></br>
        <button id="butt" type="submit">Enviar</button>
      </form>

    
        <br></br>
        <h3 id="h33">Comentarios:</h3>
        <ul className="jo">
          {comentarios.map((comentario, index) => (
            <li key={index}>{comentario}</li>
          ))}
        </ul>
    
      </ul>


      

      
      
    </div>
  );
};


