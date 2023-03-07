import { useState, createContext } from "react";
export const CocktailListContext = createContext();

const CocktailListContextProvider = ({ children }) => {
  const [cocktailList, setCocktailList] = useState([]);
  const [modifiedCocktailList, setModifiedCocktailList] = useState(false);

  const data = {
    cocktailList,
    setCocktailList,
    modifiedCocktailList,
    setModifiedCocktailList,
  };

  return (
    <CocktailListContext.Provider value={data}>
      {children}
    </CocktailListContext.Provider>
  );
};

export default CocktailListContextProvider;
