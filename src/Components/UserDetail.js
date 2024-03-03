import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserDetail() {
  const data = useContext(UserContext);
  console.log(data);

  return (
    <>
      <h1>userDetail</h1>
      <h3>Name: {data.name}</h3>
      <h3>Country: {data.country}</h3>
      <h3>Age: {data.age}</h3>
    </>
  );
}

export default UserDetail;