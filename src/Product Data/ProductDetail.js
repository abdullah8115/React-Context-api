import React, { useContext } from "react";
import ProductContext from "./ProductContext";

function ProductDetail() {
  const data = useContext(ProductContext);
  console.log(data);

  return (
    <>
      <h1>ProductDetail</h1>
      <h3>Item: {data.item}</h3>
      <h3>Price: {data.price}</h3>
      <h3>Quantity: {data.quantity}</h3>
    </>
  );
}

export default ProductDetail;