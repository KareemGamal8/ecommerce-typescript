export type Category = {
  id: number;
  title: string;
  prefix: string;
  img: string;
};

export type Product = {
  id: number;
  title: string;
  max: number;
  cat_prefix: string;
  img: string;
  price: string;
  quantity?: number | undefined;
};

export type LoadingTypes = "idle" | "pending" | "fulfilled" | "rejected";
