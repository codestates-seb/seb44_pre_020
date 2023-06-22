import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/header/Header.jsx";
import AskPage from "./pages/AskPage.jsx";
import QuestionsPage from "./pages/QuestionsPage.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import MainSearchPage from "./pages/MainSearchPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import Signup from "./pages/Siginup/Signup.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <MainSearchPage /> },
      {
        path: "/ask",
        element: <AskPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/questions/:id",
        element: <QuestionsPage />,
      },
      {
        path: "/signup",
        element: <Signup />,
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
