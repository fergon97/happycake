import React from "react";
import cake from "../cake.jpg";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <h1>
        Bienvenido a <strong>Happy Cake</strong>
      </h1>
      <p>El lugar de los pasteles felices</p>
      <img src={cake} alt="cake" />
    </div>
  );
}

export default Home;
