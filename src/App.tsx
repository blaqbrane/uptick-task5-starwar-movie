import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Movies from "./features/landing-page/movies"
import Home from "./features/landing-page"

function App() {
 const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <>
    <Home/>
    </>
    </QueryClientProvider>
  )
}

export default App
