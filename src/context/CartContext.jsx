import { useState, createContext, useReducer } from "react";
import { getCart } from "../services/cocktails";
//import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [modifiedCart, setModifiedCart] = useState(false);

  const data = {
    cart,
    setCart,
    modifiedCart,
    setModifiedCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
