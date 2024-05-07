import { LoadingTypes } from "@design-system/types";
import React from "react";

type LoadingTypesProps = {
  loading: LoadingTypes;
  error: string | null;
  children: React.ReactNode;
};

export default function Loading({
  children,
  error,
  loading,
}: LoadingTypesProps) {
  if (loading === "pending") {
    return <p>Loading Please Wait...</p>;
  }

  if (loading === "rejected") {
    return <p>{error}</p>;
  }

  return <>{children}</>;
}
