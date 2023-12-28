import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchEngine from './components/SearchEngine.jsx';
import{
QueryClientProvider,QueryClient,
} from 'react-query'

export const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<SearchEngine />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
