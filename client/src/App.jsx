import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header/Header.jsx";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <div className="max-w-[1265px] mx-auto">
          <Outlet />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
