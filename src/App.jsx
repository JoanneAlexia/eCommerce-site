import styles from "./App.module.scss";
import HomePage from "./Containers/HomePage";
import CocktailPage from "./Containers/CocktailPage";
import CartPage from "./Containers/CartPage";
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Cart" element={<CartPage />}></Route>
          <Route path="/CocktailPage/:id" element={<CocktailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
