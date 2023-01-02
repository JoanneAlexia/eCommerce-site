import Header from "../../Components/Header/Header";
import CocktailList from "../CocktailList/CocktailList";
import Banner from "../../Components/Banner/Banner";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <Header />
      <Banner />
      <CocktailList />
    </div>
  );
};

export default HomePage;
