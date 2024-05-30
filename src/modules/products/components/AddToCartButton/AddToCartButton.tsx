import { Product } from "@design-system/types";
import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";

export default function AddToCartButton({
  product,
  quantityReachedToMax,
}: {
  product: Product;
  quantityReachedToMax: boolean;
}) {
  const dispatch = useAppDispatch();

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (!isDisabled) return;

    setIsDisabled(true);

    const debounce = setTimeout(() => {
      setIsDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(product.id));
    setIsDisabled(true);
    toast.success(`Added to cart successfully`);
  };

  return (
    <Button
      variant="info"
      disabled={isDisabled || quantityReachedToMax}
      onClick={addToCartHandler}
      className={`text-white ${!isDisabled ? "btn-disabled" : ""}`}
    >
      {isDisabled ? (
        <>
          <Spinner animation="border" size="sm" /> Loading...
        </>
      ) : (
        "Add to cart"
      )}
    </Button>
  );
}
