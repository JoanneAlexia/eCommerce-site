import { useState, createContext, useEffect } from "react";
import { getCart } from "../services/cocktails";
import { getCocktailList } from "../services/cocktails";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [cocktailList, setCocktailList] = useState([]);
  const [modifiedCocktailList, setModifiedCocktailList] = useState(false);

  const [cart, setCart] = useState([]);
  const [modifiedCart, setModifiedCart] = useState(false);

  useEffect(() => {
    const wrapper = async () => {
      const cocktailListData = await getCocktailList();
      setCocktailList(cocktailListData);
    };

    wrapper();
  }, [modifiedCocktailList]);

  useEffect(() => {
    const wrapper = async () => {
      const initalCart = await getCart();
      setCart(initalCart);
    };

    wrapper();
  }, [modifiedCart]);

  const data = {
    cocktailList,
    modifiedCocktailList,
    setModifiedCocktailList,
    modifiedCart,
    setModifiedCart,
    cart,
    setCart,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
