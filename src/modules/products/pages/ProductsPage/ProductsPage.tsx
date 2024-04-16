import ProductCard from "@modules/products/components/ProductCard";
import { Col, Row } from "react-bootstrap";

export default function ProductsPage() {
  return (
    <Row>
      {Array.from(Array(10).keys()).map((_, index) => (
        <Col
          key={index}
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          <ProductCard />
        </Col>
      ))}
    </Row>
  );
}
