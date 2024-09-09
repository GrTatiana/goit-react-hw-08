import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import { store } from "./redux/store.js";

import "./index.css";
import persistStore from "redux-persist/es/persistStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
