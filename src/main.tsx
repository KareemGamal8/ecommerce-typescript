import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
