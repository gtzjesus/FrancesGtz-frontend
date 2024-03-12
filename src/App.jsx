import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import GlobalStyles from './styles/GlobalStyles';
import './styles/App.css';

// Integrate react query (used for our queries)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// Create router using react-router-dom
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  // Code logic to load all pages at the top
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
