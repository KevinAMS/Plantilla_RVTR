import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import reduxLogo from "../../assets/redux.svg";
import tsLogo from "../../assets/TS.svg";
import style from "../index/index.module.css";
import "./index.module.css";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux-slices/counterSlice";
import { addName } from "../../redux-slices/ejemploSlice";
import { useNavigate } from "react-router-dom";

function Index() {
  const count = useSelector((state: RootState) => state.counter.value);
  const [countlocaLocal, setCountLocal] = useState(0);
  const { name } = useSelector((state: RootState) => state.formulario);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={`${style["container"]}`}>
      <a href="https://vitejs.dev" target="_blank">
        <img
          src={viteLogo}
          className={`${style["logo-vite"]}`}
          alt="Vite logo"
        />
      </a>

      <a href="https://react.dev" target="_blank">
        <img
          src={reactLogo}
          className={`${style["logo-react"]}`}
          alt="React logo"
        />
      </a>

      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={tsLogo} className={`${style["logo-ts"]}`} alt="Ts logo" />
      </a>

      <a href="https://redux.js.org/" target="_blank">
        <img
          src={reduxLogo}
          className={`${style["logo-redux"]}`}
          alt="Redux logo"
        />
      </a>

      <h1 style={{ fontSize: 60, color: "white" }}>
        Vite + React + Redux + TS
      </h1>

      <div>
        <button
          className={`${style["button"]}`}
          onClick={() => setCountLocal((count) => count + 1)}
        >
          Count is {countlocaLocal}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div style={{ padding: 5 }}>
        <h1 style={{ fontSize: 60, color: "white" }}>{count}</h1>

        <button
          style={{ border: "2px solid", margin: 5 }}
          onClick={() => dispatch(decrement())}
          className={`${style["button"]}`}
        >
          Decrement
        </button>

        <button
          style={{ border: "2px solid", margin: 5 }}
          onClick={() => dispatch(increment())}
          className={`${style["button"]}`}
        >
          Increment
        </button>
      </div>

      <div>
        <input
          onChange={(e) => dispatch(addName(e.target.value))}
          className={`${style["input"]}`}
          placeholder="Ingresa tu nombre"
          value={name}
        />
        <h1 style={{ fontSize: 60, color: "white" }}>Mi nombre es {name} </h1>

        <button
          className={`${style["button"]}`}
          onClick={() => navigate(`/about`)}
        >
          Sobre esta plantilla
        </button>
      </div>
    </div>
  );
}

export default Index;
