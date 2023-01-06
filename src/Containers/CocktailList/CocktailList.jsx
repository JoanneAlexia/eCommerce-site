import styles from "./CocktailList.module.scss";
import Cocktail from "../../Components/Cocktail";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const CocktailList = () => {
  const { cocktailList } = useContext(AuthContext);

  return (
    <>
      <div className={styles.CocktailList}>
        {cocktailList.map((cocktail) => {
          return <Cocktail key={cocktail.id} cocktail={cocktail} />;
        })}
      </div>
    </>
  );
};

export default CocktailList;
