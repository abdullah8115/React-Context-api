import UserContext from "./UserContext";

const UserState = (props) => {
  const UserDetail = {
    name: "Abdullah Mairaj",
    age: 18,
    country: "Pakistan",
  };

  const ProductDetail = {

  };

  return(
    <>
        <UserContext.Provider value={UserDetail}>
            {props.children}
        </UserContext.Provider>
    </>
    ) 
};

export default UserState;