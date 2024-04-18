export type Category = {
  id: number;
  title: string;
  prefix: string;
  img: string;
};

export type Product = {
  id: number;
  title: string;
  cat_prefix: string;
  img: string;
  price: string;
};

export type Loading = "idle" | "pending" | "fulfilled" | "rejected";
