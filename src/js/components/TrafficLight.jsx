import React, { useState } from "react";

const TrafficLight =()=> {
    const [ color , setColor ] = useState("");


    const changeColor = () => {
        setColor((prevColor) => {
          if (prevColor === "red") return "yellow";
          if (prevColor === "yellow") return "green";
          return "red";
        });
      };
    

      //peaton pulse//
      const handleChangeColor = () => {
        setColor("yellow");
        setTimeout(() => {
          setColor("red");
        }, 3000);
        setTimeout(() => {
          setColor("green");
        }, 13000); 
      };
    

//devuelve el semaforo dentro de root//
    return (
    <div className="semaforo">
         <div className="container">
        <div className="lights"> 
            <div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " brillo" : "" )}></div>
            <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " brillo" : "" )}></div>
            <div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " brillo" : "" )}></div>
        </div>
        </div>
        <button onClick={handleChangeColor} className="peaton-btn">
       PEATON PULSE
      </button>
        <PeatonPulse toggleColor={changeColor} />
    </div>
  );
};
const PeatonPulse = ({ toggleColor }) => {
    return (
      <button onClick={toggleColor} className="peaton-btn">
        CHANGE COLOR
      </button>
    );
  };
  



  export default TrafficLight;
