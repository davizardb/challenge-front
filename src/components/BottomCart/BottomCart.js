import React from "react";

import "./BottomCart.scss";

const BottomCart = ({ total }) => {
  return (
    <div className="bottom-cart">
      <div className="total">
        <p className="total-text">
          Total do Pedido:
          <span className="total-value">
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
      </div>
      <div className="checkout">
        <p className="checkout-text">Finalizar Compra</p>
      </div>
    </div>
  );
};

export default BottomCart;
