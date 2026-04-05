import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Why from './pages/Why';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why" element={<Why />} />
      </Routes>
    </BrowserRouter>
  );
}
