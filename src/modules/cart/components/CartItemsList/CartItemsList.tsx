import { Product } from "@design-system/types";
import CartItem from "../CartItem/CartItem";

export default function CartItemsList({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <CartItem product={product} />
      ))}
    </>
  );
}
