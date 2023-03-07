import styles from "./Favourite.module.scss";
import { updateCocktailList } from "../../services/cocktails";
import { CocktailListContext } from "../../context/CocktailListContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const Favourite = ({ cocktail }) => {
  const { modifiedCocktailList, setModifiedCocktailList } =
    useContext(CocktailListContext);

  const handleFavourite = () => {
    updateCocktailList(cocktail.id, { favourite: !cocktail.favourite });
    setModifiedCocktailList(!modifiedCocktailList);
  };

  return (
    <div onClick={handleFavourite}>
      {cocktail.favourite ? (
        <FontAwesomeIcon
          className={styles.Heart}
          icon={faHeartSolid}
        ></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon
          className={styles.Heart}
          icon={faHeart}
        ></FontAwesomeIcon>
      )}
    </div>
  );
};

export default Favourite;
