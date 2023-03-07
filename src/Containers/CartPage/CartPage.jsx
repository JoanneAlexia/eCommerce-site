import styles from "./CartPage.module.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Header from "../../Components/Header";
import CocktailImg from "../../Components/CocktailImg";
import CartItem from "../../Components/CartItem";

const CartPage = () => {
  const { cart, modifiedCart, setCart } = useContext(CartContext);
  const [totalPrice, setPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const price = cart.reduce((total, item) => {
      total += item.quantitySingle * item.priceSingle;
      total += item.quantityFour * item.priceFour;
      total += item.quantitySix * item.priceSix;
      return total;
    }, 0);
    setPrice(price);
  }, [cart]);

  return (
    <div className={styles.CartPage}>
      <Header />
      <div className={styles.CartPage_content}>
        <h2 className={styles.CartPage_header}>Cart</h2>
        <h3>{`Total: $${totalPrice}`}</h3>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CartPage;
