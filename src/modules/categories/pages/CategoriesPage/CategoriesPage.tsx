import CategoryCard from "@modules/categories/components/CategoryCard";
import { Col, Row } from "react-bootstrap";

export default function CategoriesPage() {
  return (
    <Row>
      {Array.from(Array(10).keys()).map((_, index) => (
        <Col
          xs={6}
          key={index}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          <CategoryCard />
        </Col>
      ))}
    </Row>
  );
}
