import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const ProductDetail = {
    item: "Crockery",
    price:  "Rs1200" ,
    quantity: 22
  };

  return(
    <>
        <ProductContext.Provider value={ProductDetail}>
            {props.children}
        </ProductContext.Provider>
    </>
    ) 
};

export default ProductState;