import Footer from "@design-system/components/Footer";
import Header from "@design-system/components/Header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const { container, wrapper } = styles;

export default function BaseLayout() {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
}
