import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserState from "./Components/UserState";
import UserDetail from "./Components/UserDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserState>
      <App />
      <UserDetail />
    </UserState>
  </React.StrictMode>
);
