import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navi from "./Components/navigation/Navi";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import { Provider, useDispatch } from "react-redux";
import movieSlice from "./Components/movies/moviesSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
