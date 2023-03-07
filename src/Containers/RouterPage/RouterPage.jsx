import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import CocktailPage from "../CocktailPage";
import CartPage from "../CartPage";
import { useContext, useEffect } from "react";
import { CocktailListContext } from "../../context/CocktailListContext";
import { CartContext } from "../../context/CartContext";
import { getCocktailList, getCart } from "../../services/cocktails";

const RouterPage = () => {
  const { setCocktailList, modifiedCocktailList } =
    useContext(CocktailListContext);

  useEffect(() => {
    const wrapper = async () => {
      const cocktailListData = await getCocktailList();
      setCocktailList(cocktailListData);
    };

    wrapper();
  }, [modifiedCocktailList]);

  const { setCart, modifiedCart } = useContext(CartContext);

  useEffect(() => {
    const wrapper = async () => {
      const initalCart = await getCart();
      setCart(initalCart);
    };

    wrapper();
  }, [modifiedCart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Cart" element={<CartPage />}></Route>
        <Route path="/CocktailPage/:id" element={<CocktailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
