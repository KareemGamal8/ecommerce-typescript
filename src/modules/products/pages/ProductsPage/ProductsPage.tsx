import GridList from "@design-system/components/GridList";
import Loading from "@design-system/components/Loading";
import ProductCard from "@modules/products/components/ProductCard";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getProductsAction } from "@store/products/productsActions";
import { productsCleanup } from "@store/products/productsSlice";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  const params = useParams();

  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);

  const { loading, records, error } = useAppSelector((state) => state.products);

  const productsList = records.map((record) => ({
    ...record,
    quantity: cartItems[record.id] || 0,
  }));

  useEffect(() => {
    dispatch(getProductsAction(params.prefix as string));
    return () => {
      dispatch(productsCleanup());
    };
  }, [dispatch, params]);

  return (
    <Row>
      <Loading error={error} loading={loading}>
        <GridList
          records={productsList}
          renderItem={(record) => <ProductCard product={record} />}
        />
      </Loading>
    </Row>
  );
}
