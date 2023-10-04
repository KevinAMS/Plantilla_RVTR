import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../about/about.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function About() {
  const navigate = useNavigate();
  const { name } = useSelector((state: RootState) => state.formulario);
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className={`${style["container"]}`}>
      <h2>Acerca de la Plantilla</h2>
      <p>
        Bienvenido {name} "Acerca de la plantilla". Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Minima commodi laboriosam ipsum doloremque
        at iste adipisci dolore amet, eveniet veniam quidem cum corrupti quis
        consectetur aspernatur, aliquam, vitae magni quibusdam?...
      </p>
      <h2>{count}</h2>
      <div>
        <button className={`${style["button"]}`} onClick={() => navigate(`/`)}> Home </button>
      </div>
    </div>
  );
}

export default About;
