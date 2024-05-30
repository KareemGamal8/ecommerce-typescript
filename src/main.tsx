import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import "./axios/axios-global.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster position="top-right" />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </>
);
