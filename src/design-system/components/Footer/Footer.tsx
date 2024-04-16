import styles from "./styles.module.css";

const { footerContainer } = styles;

export default function Footer() {
  const date = new Date();

  return (
    <div className={footerContainer}>
      © {date.getFullYear()} Our E-commerce. All rights reserved.
    </div>
  );
}
