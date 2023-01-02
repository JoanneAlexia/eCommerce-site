import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useContext(AuthContext);

  return (
    <header className={styles.Header}>
      <h1 className={styles.Header_title}>Cocktail Blasts</h1>
      <div className={styles.Links}>
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
