/* import MainSearchPage from "./pages/MainSearchPage"; */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import { useState } from "react";
import axios from "axios";

const queryClient = new QueryClient();

function App() {

  // const [isLogin, setIsLogin] = useState(false);
  // const [accessToken, setAccessToken] = useState('');

  // const getAccessToken = async (authorizationCode) => {
  //   try {
  //     const result = await axios.post('http://localhost:8080/callback', {
  //       authorizationCode,
  //     });
  //     const { accessToken } = result.data;
  //     setIsLogin(true);
  //     setAccessToken(accessToken);
  //   } catch (err) {
  //     alert(err);
  //   }
  // };
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <Footer />
    </>
  );
}

export default App;
