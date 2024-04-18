import ProductCard from "@modules/products/components/ProductCard";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import getProductsAction from "@store/products/actions/getProductsAction";
import { productsCleanup } from "@store/products/productsSlice";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, records, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsAction(params.prefix as string));
    return () => {
      dispatch(productsCleanup());
    };
  }, [dispatch, params]);

  return (
    <Row>
      {records.map((product) => (
        <Col
          key={product.id}
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}
