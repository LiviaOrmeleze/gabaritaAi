import React from "react";
import Cards from "react-credit-cards-2";

const CartaoDeCredito = (props) => {
  return (
    <div>
      <Cards
        number={props.numeroCartao}
        expiry={props.dataValidade}
        cvc={props.codigoSeguranca}
        name={props.nome}
        focused={props.focus}
      />
    </div>
  );
};

export default CartaoDeCredito;
