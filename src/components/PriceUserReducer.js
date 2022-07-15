import React, { useReducer, useRef } from "react";

import "../style.css";

const toAddPercentaje = (v) => v / 100 + 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_PRICE":
      return {
        ...state,
        precio: action.payload,
        resultado: parseFloat(
          action.payload * toAddPercentaje(state.porcentaje)
        ),
      };
    case "CHANGE_PERCENTAGE":
      return {
        ...state,
        porcentaje: action.payload,
        resultado: parseFloat(state.precio * toAddPercentaje(action.payload)),
      };
    default:
      break;
  }
};

const PriceUserReducer = () => {
  const [{ precio, porcentaje, resultado }, dispatch] = useReducer(reducer, {
    precio: 0,
    porcentaje: 0,
    resultado: 0,
  });
  const inputPrecio = useRef();
  const inputPorcentaje = useRef();

  const handlePrice = () => {
    const value = inputPrecio.current.value;
    dispatch({ type: "CHANGE_PRICE", payload: value });
  };

  const handlePercentage = () => {
    const value = inputPorcentaje.current.value;
    dispatch({ type: "CHANGE_PERCENTAGE", payload: value });
  };

  const componente = (
    <div>
      <div className="counter">
        <div>
          <input
            ref={inputPrecio}
            type="number"
            value={precio}
            onChange={handlePrice}
          />
        </div>

        <div>
          <input
            ref={inputPorcentaje}
            type="number"
            value={porcentaje}
            onChange={handlePercentage}
          />
        </div>

        <div className="number-counter">{resultado.toFixed(2)}</div>
      </div>
    </div>
  );
  console.log(componente);
  return componente;
};

export default PriceUserReducer;

// val ? true : fals
