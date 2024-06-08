import { Product } from "@design-system/types";
import CartItem from "../CartItem/CartItem";

type CartItemsListProps = {
  products: Product[];
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

export default function CartItemsList({
  products,
  changeQuantityHandler,
  removeItemHandler,
}: CartItemsListProps) {
  return (
    <>
      {products.map((product) => (
        <CartItem
          product={product}
          changeQuantityHandler={changeQuantityHandler}
          removeItemHandler={removeItemHandler}
          key={product.id}
        />
      ))}
    </>
  );
}
