import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Ask from "./pages/Ask.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import MainSearchPage from "./pages/MainSearchPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <MainSearchPage /> },
      {
        path: "/ask",
        element: <Ask />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RecoilRoot>
);
