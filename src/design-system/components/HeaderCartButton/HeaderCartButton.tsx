import Cart from "@assets/icons/cart.svg?react";
import styles from "./style.module.css";

const { basketContainer, basketQuantity } = styles;

export default function HeaderCartButton() {
  return (
    <div className={basketContainer}>
      <Cart />
      <span className={basketQuantity}>0</span>
    </div>
  );
}
