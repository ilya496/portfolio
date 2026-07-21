import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./scss/styles.scss";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./components/AuthContext";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ReactQueryDevtools />
        <Outlet />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
