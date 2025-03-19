import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("");
  const [showNewColor, setShowNewColor] = useState(false);
  
  // Función para cambiar el color del semáforo (rojo -> amarillo -> verde -> purpura)
  const changeColor = () => {
    setColor((prevColor) => {
      if (prevColor === "red") return "yellow";
      if (prevColor === "yellow") return "green";
      if (prevColor === "green") return showNewColor ? "purple" : "red";
      return "red";
    });
  };

  // Función para el pulsado de peatón (amarillo -> rojo -> verde)
  const handleChangeColor = () => {
    setColor("yellow");
    setTimeout(() => {
      setColor("red");
    }, 3000);
    setTimeout(() => {
      setColor("green");
    }, 13000);
  };

  // Función para añadir un color extra (luz adicional)
  const addNewColor = () => {
    setShowNewColor(true); 
  };

  return (
    <div className="semaforo">
      <div className="container">
        <div className="lights">
          <div
            onClick={() => setColor("red")}
            className={"light red" + (color === "red" ? " brillo" : "")}
          ></div>
          <div
            onClick={() => setColor("yellow")}
            className={"light yellow" + (color === "yellow" ? " brillo" : "")}
          ></div>
          <div
            onClick={() => setColor("green")}
            className={"light green" + (color === "green" ? " brillo" : "")}
          ></div>
          {showNewColor && (
            <div
              onClick={() => setColor("purple")}
              className={"light purple" + (color === "purple" ? " brillo" : "")}
            ></div>
          )}
        </div>
      </div>
      <button onClick={handleChangeColor} className="peaton-btn">
        PEATON PULSE
      </button>
      <PeatonPulse toggleColor={changeColor} />
      <button onClick={addNewColor} className="add-new-color-btn">
        ADD NEW COLOR
      </button>
      
    </div>
  );
};

//cambiar el color
const PeatonPulse = ({ toggleColor }) => {
  return (
    <button onClick={toggleColor} className="peaton-btn">
      CHANGE COLOR
    </button>
  );
};

export default TrafficLight;