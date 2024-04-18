import { Category } from "@design-system/types";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { categoryWrapper, categoryImg, categoryTitle } = styles;

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link to={`/categories/products/${category.prefix}`}>
      <div className={categoryWrapper}>
        <div className={categoryImg}>
          <img src={category.img} alt={category.title} />
        </div>
        <h4 className={categoryTitle}>{category.title}</h4>
      </div>
    </Link>
  );
}
