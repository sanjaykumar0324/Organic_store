import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./Redux/store.js";
// import sagaStore from "./Redux/SagaStore.js";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>

        <App />
      </PersistGate>
      </BrowserRouter>
    </Provider>
);
