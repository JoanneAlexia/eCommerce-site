import styles from "./QuantitySelector.module.scss";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const handleChange = (event) => {
    if (event.target.value >= 1) {
      setQuantity(event.target.value);
    }
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQunatity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.QuantitySelector}>
      <button
        className={styles.QuantitySelector_button}
        onClick={minusQunatity}
      >
        -
      </button>
      <input
        className={styles.QuantitySelector_input}
        type="text"
        value={quantity}
        onChange={handleChange}
      />
      <button className={styles.QuantitySelector_button} onClick={addQuantity}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
