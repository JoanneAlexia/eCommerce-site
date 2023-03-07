import styles from "./CartItem.module.scss";
import CocktailImg from "../../Components/CocktailImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeCocktailFromCart } from "../../services/cocktails";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { modfifiedCart, setModifiedCart } = useContext(CartContext);
  const removeBtnHandler = () => {
    removeCocktailFromCart(item.id);
    setModifiedCart(!modfifiedCart);
  };

  return (
    <div className={styles.CartItem}>
      <CocktailImg cocktail={item} />
      <div className={styles.details}>
        <h2>{item.name}</h2>
        <button onClick={removeBtnHandler} className={styles.removeBtn}>
          <FontAwesomeIcon className={styles.removeBtn_icon} icon={faTrash} />
          Remove
        </button>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Quantity</th>
              <th>Price per Unit</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single:</td>
              <td>{item.quantitySingle}</td>
              <td>{`$${item.priceSingle}`}</td>
              <td>{`$${item.priceSingle * item.quantitySingle}`}</td>
            </tr>
            <tr>
              <td>Four Pack:</td>
              <td>{item.quantityFour}</td>
              <td>{`$${item.priceFour}`}</td>
              <td>{`$${item.priceFour * item.quantityFour}`}</td>
            </tr>
            <tr>
              <td>Six Pack:</td>
              <td>{item.quantitySix}</td>
              <td>{`$${item.priceSix}`}</td>
              <td>{`$${item.priceSix * item.quantitySix}`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItem;
