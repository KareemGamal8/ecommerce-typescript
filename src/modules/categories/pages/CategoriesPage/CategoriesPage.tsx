import CategoryCard from "@modules/categories/components/CategoryCard";
import getCategoriesAction from "@store/categories/actions/getCategoriesAction";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export default function CategoriesPage() {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    // For not retrieve categories if a page change occurs
    if (!records.length) {
      dispatch(getCategoriesAction());
    }
  }, [dispatch, records]);

  if (records.length < 1) return "No Categories Found!";

  return (
    <Row>
      {records.map((category) => (
        <Col
          key={category.id}
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          <CategoryCard category={category} />
        </Col>
      ))}
    </Row>
  );
}
