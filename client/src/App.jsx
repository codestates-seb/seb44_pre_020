/* import MainSearchPage from "./pages/MainSearchPage"; */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";

const queryClient = new QueryClient();

function App() {
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
