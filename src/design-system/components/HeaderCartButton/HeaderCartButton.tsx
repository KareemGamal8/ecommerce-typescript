import Cart from "@assets/icons/cart.svg?react";
import styles from "./style.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartQuantitySelector } from "@store/categories/categoriesSelectors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const { basketContainer, basketQuantity, pumpCartQuantity } = styles;

export default function HeaderCartButton() {
  const [isAnimated, setIsAnimated] = useState(false);

  const navigate = useNavigate();

  const totalItems = useAppSelector(getCartQuantitySelector);

  const basketStyles = `${basketQuantity} ${
    isAnimated ? pumpCartQuantity : ""
  }`;

  useEffect(() => {
    if (!totalItems) return;

    setIsAnimated(true);

    const debounce = setTimeout(() => setIsAnimated(false), 300);

    return () => clearTimeout(debounce);
  }, [totalItems]);

  return (
    <div className={basketContainer} onClick={() => navigate("/cart")}>
      <Cart />
      <span className={basketStyles}>{totalItems}</span>
    </div>
  );
}
