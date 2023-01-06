import bannerImg from "../../assets/images/header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Banner.module.scss";

const Banner = () => {
  const { cocktailList } = useContext(AuthContext);
  const randomCocktailSelector = () => {
    const randomIndex = Math.floor(Math.random() * cocktailList.length);
    return cocktailList[randomIndex];
  };

  const [randomCocktail1, setRandomCocktail1] = useState(
    randomCocktailSelector()
  );
  const [randomCocktail2, setRandomCocktail2] = useState(
    randomCocktailSelector()
  );

  const [defaultBanner, setDefaultBanner] = useState(true);
  const [showBanner2, setShowBanner2] = useState(true);
  const [banner2Styles, setBanner2Styles] = useState([]);

  useEffect(() => {
    setBanner2Styles([styles.Banner, styles.banner2]);
  }, []);

  const randomProductHandler = () => {
    if (showBanner2) {
      setRandomCocktail2(randomCocktailSelector());
      setBanner2Styles([
        styles.Banner,
        styles.banner2,
        styles.banner2_showBanner2,
      ]);
      setTimeout(() => setDefaultBanner(false), 3000);
    } else {
      setRandomCocktail1(randomCocktailSelector());
      setBanner2Styles([
        styles.Banner,
        styles.banner2,
        styles.banner2_hideBanner2,
      ]);
    }
    setShowBanner2(!showBanner2);
  };

  return (
    <div>
      {defaultBanner ? (
        <div className={styles.Banner}>
          <img className={styles.defaultImg} src={bannerImg}></img>
        </div>
      ) : (
        <div className={styles.Banner}>
          <div className={styles.cocktailInfo}>
            <img
              className={styles.cocktailInfo_img}
              src={randomCocktail1.imgCocktail}
            ></img>
            <h2>{randomCocktail1.name}</h2>
          </div>
        </div>
      )}
      <div className={banner2Styles.join(" ")}>
        <div className={styles.cocktailInfo}>
          <img
            className={styles.cocktailInfo_img}
            src={randomCocktail2.imgCocktail}
          ></img>
          <h2>{randomCocktail2.name}</h2>
        </div>
      </div>
      <div className={styles.productDesc}>
        <p>
          Add a cocktail blast to your favourite spirt and have a delicious
          cocktail ready in seconds.
        </p>
        <div className={styles.cantDecide}>
          <p>Can't decide? Click below</p>
          <FontAwesomeIcon
            onClick={randomProductHandler}
            className={styles.cocktailIcon}
            icon={faMartiniGlass}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
