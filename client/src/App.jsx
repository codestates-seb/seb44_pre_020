import { RecoilRoot } from "recoil";
import MainSearchPage from "./pages/MainSearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <MainSearchPage />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
