import styles from "./CocktailImg.module.scss";
import { useState } from "react";

const CocktailImg = ({ cocktail }) => {
  const [displayImg, setDisplayImg] = useState(cocktail.imgCocktail);
  const [imgStyles, setImgStyles] = useState(styles.imgCocktail);

  const imgSwitchEnterHandler = () => {
    setImgStyles(styles.imgBlast);
    setDisplayImg(cocktail.imgBlast);
  };

  const imgSwitchExitHandler = () => {
    setImgStyles(styles.imgCocktail);
    setDisplayImg(cocktail.imgCocktail);
  };
  return (
    <div
      className={styles.CocktailImg}
      onMouseEnter={imgSwitchEnterHandler}
      onMouseLeave={imgSwitchExitHandler}
    >
      <img className={imgStyles} src={displayImg} />
    </div>
  );
};

export default CocktailImg;
