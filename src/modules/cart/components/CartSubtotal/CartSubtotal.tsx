import styles from "../style.module.css";

export default function CartSubtotal() {
  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>200 EGP</span>
    </div>
  );
}
