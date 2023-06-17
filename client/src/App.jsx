import MainSearchPage from "./pages/MainSearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainSearchPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
