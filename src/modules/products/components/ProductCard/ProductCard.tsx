import { Product } from "@design-system/types";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
const { productWrapper, productImg } = styles;

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={productWrapper}>
      <div className={productImg}>
        <img src={product.img} alt={product.title} />
      </div>
      <h2>{product.title}</h2>
      <h3>{product.price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
}
