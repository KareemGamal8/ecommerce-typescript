import { Product } from "@design-system/types";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
const { productWrapper, productImg } = styles;

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product.id));
  };

  return (
    <div className={productWrapper}>
      <div className={productImg}>
        <img src={product.img} alt={product.title} />
      </div>
      <h2>{product.title}</h2>
      <h3>{product.price} EGP</h3>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
      >
        Add to cart
      </Button>
    </div>
  );
}
