import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="products/:productId" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
