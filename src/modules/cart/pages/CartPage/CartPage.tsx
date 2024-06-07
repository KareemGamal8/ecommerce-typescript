import Loading from "@design-system/components/Loading";
import CartItemsList from "@modules/cart/components/CartItemsList";
import CartSubtotal from "@modules/cart/components/CartSubtotal";
import { getCartItems } from "@store/cart/cartActions";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

export default function CartPage() {
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const products = productsFullInfo.map((product) => ({
    ...product,
    quantity: items[product.id],
  }));

  return (
    <>
      <h3 className="mb-3">Cart</h3>
      <Loading loading={loading} error={error}>
        <CartItemsList products={products} />
      </Loading>
      <CartSubtotal />
    </>
  );
}
