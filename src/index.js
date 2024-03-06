import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserState from "./User Data/UserState";
import UserDetail from "./User Data/UserDetail";
import ProductDetail from "./Product Data/ProductDetail";
import ProductState from "./Product Data/ProductState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserState>
      <App />
      <UserDetail />
    </UserState>
    <ProductState>
      <ProductDetail />
    </ProductState>
  </React.StrictMode>
);
