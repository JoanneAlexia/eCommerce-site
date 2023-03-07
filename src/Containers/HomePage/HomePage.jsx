import Header from "../../Components/Header/Header";
import CocktailList from "../CocktailList/CocktailList";
import Home from "../Home/Home";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <Header />
      <Home />
      <CocktailList />
    </div>
  );
};

export default HomePage;
