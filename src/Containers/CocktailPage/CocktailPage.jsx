import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../Components/Header/Header";
import AddToCartBtn from "../../Components/AddToCartBtn";
import QuantitySelector from "../../Components/QuantitySelector";
import SizeSelector from "../../Components/SizeSelector";
import CocktailImg from "../../Components/CocktailImg";
import Favourite from "../../Components/Favourite";
import styles from "./CocktailPage.module.scss";

const CocktailPage = () => {
  const { id } = useParams();
  const { cocktailList } = useContext(AuthContext);
  const [cocktail, setCocktail] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [packSize, setPackSize] = useState(1);
  const [price, setPrice] = useState(0);
  const [ingredients, setIngredients] = useState([]);

  /*Identify cocktail from list*/
  useEffect(() => {
    const cocktailData = cocktailList.find((cocktail) => cocktail.id === id);
    setCocktail(cocktailData);
    setPrice(cocktailData.priceSingle);
  }, [id]);

  useEffect(() => {
    setIngredients(cocktail.ingredients);
  }, [cocktail]);

  return (
    <div className={styles.CocktailPage}>
      <Header />
      <div className={styles.OuterWrapper}>
        <div className={styles.CocktailDetails}>
          <Favourite cocktail={cocktail} />
          <h3 className={styles.CocktailDetails_header}>{cocktail.name}</h3>
          <div className={styles.CocktailDetails_middle}>
            <div className={styles.section1}>
              <CocktailImg cocktail={cocktail} />
              <SizeSelector
                cocktail={cocktail}
                setPackSize={setPackSize}
                setPrice={setPrice}
              />
              <div className={styles.quantity}>
                <QuantitySelector
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </div>
            </div>
            <div className={styles.section2}>
              <p className={styles.section2_description}>
                {cocktail.description}
              </p>
              <h4 className={styles.section2_title}>Recipe</h4>
              <h5 className={styles.section2_subtitle}>Ingredients</h5>
              <ul className={styles.section2_ingredients}>
                {ingredients
                  ? ingredients.map((ingredient, index) => {
                      return <li key={index}>{ingredient}</li>;
                    })
                  : ""}
              </ul>
              <h5 className={styles.section2_subtitle}>Method</h5>
              <p className={styles.section2_recipe}>{cocktail.recipe}</p>
            </div>
          </div>
          <div className={styles.CocktailDetails_footer}>
            <p>{`Price: $${price}`}</p>
            <div className={styles.cart}>
              <AddToCartBtn
                className={styles.footer_btn}
                cocktail={cocktail}
                quantity={quantity}
                packSize={packSize}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailPage;
