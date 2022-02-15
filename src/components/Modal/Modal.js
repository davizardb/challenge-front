import React, { useRef, useEffect } from "react";

import "./Modal.scss";
import Product from "../Product/Product";
import BottomCart from "../BottomCart/BottomCart";

import data from "../../data/products.json";
let items = data.cart.item;

const Modal = (props) => {
  const ref = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(event.target);
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!props.show) return null;

  const CheckoutValue = () => {
    const prices = items.map((ele) =>
      parseFloat((ele.bestPrice * 0.01).toFixed(2))
    );
    return prices.reduce((soma, price) => price + soma, 0);
  };
  return (
    <div ref={ref} className="dropdown-content">
      <div className="product-container">
        {items.map((data) => {
          return (
            <Product
              key={data.productId}
              name={data.name}
              sourceImage={data.image}
              quantity={data.quantity}
              price={data.bestPriceFormated}
            />
          );
        })}
      </div>
      <BottomCart total={CheckoutValue()} />
    </div>
  );
};

export default Modal;
