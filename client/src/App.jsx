import { RecoilRoot } from "recoil";
import MainSearchPage from "./pages/MainSearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header/Header.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <MainSearchPage />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
