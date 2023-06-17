import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/header/Header.jsx";
import Ask from "./pages/Ask.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ask",
    element: <Ask />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <React.StrictMode>
      <Header />
      <RouterProvider router={router} />
    </React.StrictMode>
  </RecoilRoot>
);
