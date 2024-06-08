import Loading from "@design-system/components/Loading";
import CartItemsList from "@modules/cart/components/CartItemsList";
import CartSubtotal from "@modules/cart/components/CartSubtotal";
import { getCartItems } from "@store/cart/cartActions";
import { cartItemChangeQuantity, removeItem } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";

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
  })) ;

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(removeItem({ id }));
    },
    [dispatch]
  );

  return (
    <>
      <h2 className="mb-3">Cart</h2>
      <Loading loading={loading} error={error}>
        <>
          {!products.length ? (
            <h4>Your Cart Is Empty!</h4>
          ) : (
            <>
              <CartItemsList
                products={products}
                changeQuantityHandler={changeQuantityHandler}
                removeItemHandler={removeItemHandler}
              />
              <CartSubtotal products={products} />
            </>
          )}
        </>
      </Loading>
    </>
  );
}
