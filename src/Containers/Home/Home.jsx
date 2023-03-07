import styles from "./Home.module.scss";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.Banner}>
        <div className={styles.Banner_imgBackground}>
          <div className={styles.Banner_img}></div>
        </div>
        <div className={styles.Banner_text}>
          <p className={styles.productDesc}>
            Add a cocktail blast to your favourite spirt and have a delicious
            cocktail ready in seconds.
          </p>
          <Link to="#cocktailList" className={styles.Link}>
            <button className={styles.menuBtn}>Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
