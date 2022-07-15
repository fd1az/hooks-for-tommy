import React, { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "../style.css";
// LAS actions (ESTO LO DEFINIMOS NOSOTROS) ----> {type:"SUMAR"} / {type:"RESTAR"}
const reducerCounter = (state, action) => {
  switch (action.type) {
    case "SUMAR":
      return { ...state, counter: state.counter + 1 };
    case "RESTAR":
      console.log(action.payload);
      return {
        ...state,
        counter: state.counter - 1,
        error:
          state.counter < 1
            ? "Error: el contador no puede ser menor que 1"
            : null,
      };
    case "BORRAR_ERROR":
      return { ...state, counter: 0, error: null };
    default:
      return state;
  }
};

const Counter = () => {
  const [{ counter, error }, dispatch] = useReducer(reducerCounter, {
    counter: 0,
    error: null,
  });

  const handleSubtract = () => {
    dispatch({ type: "RESTAR", payload: "algo muy loco que envia la accion" });
  };

  const handleAdd = () => {
    dispatch({ type: "SUMAR" });
  };

  const cleanError = () => {
    dispatch({ type: "BORRAR_ERROR" });
  };

  const componente = (
    <div>
      <div className="counter">
        <div>
          <button type="button" className="btn" onClick={handleSubtract}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div className="number-counter">{counter}</div>
        <div>
          <button type="button" className="btn" onClick={handleAdd}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      {error && (
        <div style={{ margin: "20px" }}>
          <center>
            <button className="btn" onClick={cleanError}>
              Borrar error
            </button>
            <p style={{ color: "red" }}>{error}</p>
          </center>
        </div>
      )}
    </div>
  );
  console.log(componente);
  return componente;
};

export default Counter;

// val ? true : fals
