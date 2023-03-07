import CartContextProvider from "./context/CartContext";
import CocktailListContextProvider from "./context/CocktailListContext";
import RouterPage from "./Containers/RouterPage/RouterPage";

function App() {
  return (
    <CocktailListContextProvider>
      <CartContextProvider>
        <RouterPage />
      </CartContextProvider>
    </CocktailListContextProvider>
  );
}

export default App;
