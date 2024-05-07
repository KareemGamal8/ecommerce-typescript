import GridList from "@design-system/components/GridList";
import Loading from "@design-system/components/Loading";
import CategoryCard from "@modules/categories/components/CategoryCard";
import getCategoriesAction from "@store/categories/actions/getCategoriesAction";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { Row } from "react-bootstrap";

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

  return (
    <Row>
      <Loading error={error} loading={loading}>
        <GridList
          records={records}
          renderItem={(record) => <CategoryCard category={record} />}
        />
      </Loading>
    </Row>
  );
}
