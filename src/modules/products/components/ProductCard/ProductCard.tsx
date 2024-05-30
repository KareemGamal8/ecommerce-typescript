import { Product } from "@design-system/types";
import styles from "../styles.module.css";
import AddToCartButton from "../AddToCartButton";
import React from "react";
const { productWrapper, productImg } = styles;

function _ProductCard({ product }: { product: Product }) {
  const currentRemainingQuantity = product.max - (product.quantity ?? 0);

  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  return (
    <div className={productWrapper}>
      <div className={productImg}>
        <img src={product.img} alt={product.title} />
      </div>
      <h2>{product.title}</h2>
      <h3>{product.price} EGP</h3>
      {quantityReachedToMax ? (
        <p className="text-danger fw-semibold">You reached to the limit!</p>
      ) : (
        <p className="text-success fw-semibold">
          You can add {currentRemainingQuantity} items(s)
        </p>
      )}

      <AddToCartButton
        product={product}
        quantityReachedToMax={quantityReachedToMax}
      />
    </div>
  );
}

const ProductCard = React.memo(_ProductCard);

export default ProductCard;
