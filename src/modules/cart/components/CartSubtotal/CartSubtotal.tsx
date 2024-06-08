import { Product } from "@design-system/types";
import styles from "../style.module.css";

export default function CartSubtotal({ products }: { products: Product[] }) {
  const subtotal = products.reduce((acc, el) => {
    const price = el.price;
    const quantity = el.quantity as number;
    if (!quantity) return acc;
    return acc + price * quantity;
  }, 0);

  return (
    <div className={styles.container}>
      <span className="font-weight-bolder">Subtotal:</span>
      <span>{subtotal.toFixed(2)} EGP</span>
    </div>
  );
}
