import styles from "./SizeSelector.module.scss";
import { useState } from "react";

const SizeSelector = ({ cocktail, setPackSize, setPrice }) => {
  const [packSizeStyles, setPackSizeStyles] = useState({
    single: [styles.packSize_option, styles.packSize_option_active],
    four: [styles.packSize_option],
    six: [styles.packSize_option],
  });

  const handleSinglePackSelection = () => {
    setPackSizeStyles({
      single: [styles.packSize_option, styles.packSize_option_active],
      four: [styles.packSize_option],
      six: [styles.packSize_option],
    });
    setPrice(cocktail.priceSingle);
    setPackSize(1);
  };

  const handleFourPackSelection = () => {
    setPackSizeStyles({
      single: [styles.packSize_option],
      four: [styles.packSize_option, styles.packSize_option_active],
      six: [styles.packSize_option],
    });
    setPrice(cocktail.priceFour);
    setPackSize(4);
  };

  const handleSixPackSelection = () => {
    setPackSizeStyles({
      single: [styles.packSize_option],
      four: [styles.packSize_option],
      six: [styles.packSize_option, styles.packSize_option_active],
    });
    setPrice(cocktail.priceSix);
    setPackSize(6);
  };

  return (
    <div className={styles.packSize}>
      <div
        onClick={handleSinglePackSelection}
        className={packSizeStyles.single.join(" ")}
      >
        <p>Single</p>
      </div>
      <div
        onClick={handleFourPackSelection}
        className={packSizeStyles.four.join(" ")}
      >
        <p>Four Pack</p>
      </div>
      <div
        onClick={handleSixPackSelection}
        className={packSizeStyles.six.join(" ")}
      >
        <p>Six Pack</p>
      </div>
    </div>
  );
};

export default SizeSelector;
