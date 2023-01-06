import styles from "./Cocktail.module.scss";
import AddToCartBtn from "../AddToCartBtn";
import QuantitySelector from "../QuantitySelector";
import CocktailImg from "../CocktailImg";
import SizeSelector from "../SizeSelector";
import Favourite from "../Favourite/Favourite";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
  const [quantity, setQuantity] = useState(1);
  const [packSize, setPackSize] = useState(1);
  const [price, setPrice] = useState(cocktail.priceSingle);
  const [errorStyles, setErrorStyles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (packSize === 1 && cocktail.quantityInStockSingle < quantity) {
      setErrorStyles([styles.error]);
      setErrorMsg(`Only ${cocktail.quantityInStockSingle} left`);
    } else if (packSize === 4 && cocktail.quantityInStockFourPack < quantity) {
      setErrorStyles([styles.error]);
      setErrorMsg(`Only ${cocktail.quantityInStockFourPack} left`);
    } else if (packSize === 6 && cocktail.quantityInStockSixPack < quantity) {
      setErrorStyles([styles.error]);
      setErrorMsg(`Only ${cocktail.quantityInStockSixPack} left`);
    } else {
      setErrorStyles([styles.error, styles.error_hidden]);
      setErrorMsg("");
    }
  }, [quantity]);

  useEffect(() => {
    if (packSize === 1 && cocktail.quantityInStockSingle <= 0) {
      setErrorStyles([styles.error]);
      setErrorMsg("Sold Out");
    } else if (packSize === 4 && cocktail.quantityInStockFourPack <= 0) {
      setErrorStyles([styles.error]);
      setErrorMsg("Sold Out");
    } else if (packSize === 6 && cocktail.quantityInStockSixPack <= 0) {
      setErrorStyles([styles.error]);
      setErrorMsg("Sold Out");
    } else {
      setErrorStyles([styles.error, styles.error_hidden]);
      setErrorMsg("Sold Out");
    }
  }, [packSize]);

  return (
    <div className={styles.Cocktail}>
      <Favourite cocktail={cocktail} />
      <div className={errorStyles.join(" ")}>
        <p>{errorMsg}</p>
      </div>
      <Link to={`/CocktailPage/${cocktail.id}`} className={styles.Link}>
        <CocktailImg cocktail={cocktail} />
      </Link>
      <div className={styles.quantity}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </div>
      <SizeSelector
        cocktail={cocktail}
        setPackSize={setPackSize}
        setPrice={setPrice}
      />
      <Link to={`/CocktailPage/${cocktail.id}`} className={styles.Link}>
        <p className={styles.Cocktail_name}>{cocktail.name}</p>
      </Link>
      <p className={styles.price}>{`$${price}`}</p>
      <div className={styles.cartBtn}>
        <AddToCartBtn
          quantity={quantity}
          cocktail={cocktail}
          packSize={packSize}
        />
      </div>
    </div>
  );
};

export default Cocktail;
