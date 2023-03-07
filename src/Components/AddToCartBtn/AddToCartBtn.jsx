import styles from "./AddToCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {
  addToCart,
  updateCart,
  updateCocktailList,
} from "../../services/cocktails";
import { CocktailListContext } from "../../context/CocktailListContext";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import CocktailList from "../../Containers/CocktailList/CocktailList";

const AddToCartBtn = ({ cocktail, quantity, packSize }) => {
  const { cocktailList, setModifiedCocktailList } =
    useContext(CocktailListContext);
  const { cart, modifiedCart, setModifiedCart } = useContext(CartContext);
  const [btnText, setBtnText] = useState("Add to Cart");
  const [btnStyles, setBtnStyles] = useState([styles.AddToCartBtn]);

  const addCartClickHandler = () => {
    //Check if can add to Cart
    if (
      (packSize === 1 && cocktail.quantityInStockSingle < quantity) ||
      (packSize === 4 && cocktail.quantityInStockFourPack < quantity) ||
      (packSize === 6 && cocktail.quantityInStockSixPack < quantity)
    ) {
    } else {
      //Change button layout
      setBtnText("Added!");
      setBtnStyles([...btnStyles, styles.AddToCartBtn_selected]);
      setTimeout(() => {
        setBtnText("Add to Cart");
        setBtnStyles([styles.AddToCartBtn]);
      }, 2000);
      //Check if cart contains cocktail
      let addingCocktail = cart.find(
        (cartCocktail) => cartCocktail.id === cocktail.id
      );
      //If cart does not already contain cocktail add cocktail data to cart otherwise modify qantity values in the cart entry that already exists.
      if (addingCocktail === undefined) {
        addingCocktail = {
          name: cocktail.name,
          imgCocktail: cocktail.imgCocktail,
          imgBlast: cocktail.imgBlast,
          quantitySingle: 0,
          priceSingle: cocktail.priceSingle,
          quantityFour: 0,
          priceFour: cocktail.priceFour,
          quantitySix: 0,
          priceSix: cocktail.priceSix,
        };
        if (packSize === 6) {
          addingCocktail.quantitySix += quantity;
        } else if (packSize === 4) {
          addingCocktail.quantityFour += quantity;
        } else {
          addingCocktail.quantitySingle += quantity;
        }
        addToCart(cocktail.id, addingCocktail);
      } else {
        if (packSize === 6) {
          updateCart(cocktail.id, {
            quantitySix: addingCocktail.quantitySix + quantity,
          });
          updateCocktailList(cocktail.id, {
            quantityInStockSixPack: cocktail.quantityInStockSixPack - quantity,
          });
        } else if (packSize === 4) {
          updateCart(cocktail.id, {
            quantityFour: addingCocktail.quantityFour + quantity,
          });
          updateCocktailList(cocktail.id, {
            quantityInStockFourPack:
              cocktail.quantityInStockFourPack - quantity,
          });
        } else {
          updateCart(cocktail.id, {
            quantitySingle: cocktail.quantitySingle + quantity,
          });
          updateCocktailList(cocktail.id, {
            quantityInStockSingle: cocktail.quantityInStockSingle - quantity,
          });
        }
      }
      //Change modify cart state so that cart data reloaded.
      setModifiedCart(!modifiedCart);
      setModifiedCocktailList(!cocktailList);
    }
  };

  return (
    <div className={btnStyles.join(" ")} onClick={addCartClickHandler}>
      <FontAwesomeIcon
        className={styles.AddToCartBtn_icon}
        icon={faBagShopping}
      />
      <p className={styles.AddToCartBtn_text}>{btnText}</p>
    </div>
  );
};

export default AddToCartBtn;
