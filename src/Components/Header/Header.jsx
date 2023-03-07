import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className={styles.Header}>
      <h1 className={styles.Header_title}>Cocktail Blasts</h1>
      <div className={styles.Links}>
        <HashLink to="/#cocktailList">
          <FontAwesomeIcon className={styles.icon} icon={faList} />
        </HashLink>
        <Link to="/" className={styles.Link}>
          <FontAwesomeIcon className={styles.icon} icon={faHouse} />
        </Link>
        <Link to="/Cart" className={styles.Link}>
          <div className={styles.Cart}>
            <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
            <p className={styles.Cart_size}>{cart.length}</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
