import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

import AppRouter from "./AppRouter/index.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>
);
