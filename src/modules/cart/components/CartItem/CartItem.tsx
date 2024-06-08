import { Button, Form } from "react-bootstrap";
import styles from "../style.module.css";
import { Product } from "@design-system/types";
import React from "react";

const { cartItem, cart_product, productImg, productInfo, cartItemSelection } =
  styles;

type CartItemsProps = {
  product: Product;
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

function _CartItem({
  product,
  changeQuantityHandler,
  removeItemHandler,
}: CartItemsProps) {
  const submitChangeQuantity = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const quantity = +event.target.value;
    changeQuantityHandler(product.id, quantity);
  };

  return (
    <div className={cartItem}>
      <div className={cart_product}>
        <div className={productImg}>
          <img src={product.img} alt={product.title} />
        </div>
        <div className={productInfo}>
          <h2>{product.title} </h2>
          <h3>{product.price.toFixed(2)}</h3>
          <Button
            onClick={() => removeItemHandler(product.id)}
            variant="secondary"
            style={{ color: "white" }}
            className="mt-auto"
          >
            Remove
          </Button>
        </div>
      </div>
      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select
          onChange={submitChangeQuantity}
          aria-label="Default select example"
          value={product.quantity}
        >
          {Array(product.max)
            .fill(0)
            .map((_, index) => {
              const quantity = ++index;
              return (
                <option value={quantity} key={quantity}>
                  {quantity}
                </option>
              );
            })}
        </Form.Select>
      </div>
    </div>
  );
}

const CartItem = React.memo(_CartItem);

export default CartItem;
