import styles from "./CocktailList.module.scss";
import Cocktail from "../../Components/Cocktail";
import { useContext } from "react";
import { CocktailListContext } from "../../context/CocktailListContext";

const CocktailList = () => {
  const { cocktailList } = useContext(CocktailListContext);

  return (
    <div id="cocktailList" className={styles.CocktailList}>
      <div className={styles.header}>
        <hr noshade className={styles.header_Leftline} />
        <h1>Menu</h1>
        <hr className={styles.header_Rightline} />
      </div>
      <div className={styles.Cocktail}>
        {cocktailList.map((cocktail) => {
          return <Cocktail key={cocktail.id} cocktail={cocktail} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
