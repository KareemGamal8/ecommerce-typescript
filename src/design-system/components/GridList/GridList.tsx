import React from "react";
import { Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};

export default function GridList<T extends { id: number }>({
  records,
  renderItem,
}: GridListProps<T>) {
  if (!records.length) return;

  return (
    <>
      {records.map((record) => (
        <Col
          key={record.id}
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </Col>
      ))}
    </>
  );
}
