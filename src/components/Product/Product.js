import React from "react";

import "./Product.scss";

const Product = ({ name, sourceImage, quantity, price }) => {
  const imgName = sourceImage.replace("../../images/products/", "");
  const imagePath = require.context("../../images/products", true);
  let dynamicPath = imagePath(`./${imgName}`);
  return (
    <div className="product-list">
      <img src={dynamicPath} alt={name} />
      <div className="product-info">
        <div className="product-name">{name.substr(0, 26) + "..."}</div>
        <div className="product-numbers">
          <p className="quantity">Qtd.: {quantity}</p>
          <p className="price">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
