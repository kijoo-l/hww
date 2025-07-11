import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { useCartStore } from './store/useCartStore'; // ✅ 장바구니 store 불러오기

function App() {
  const cart = useCartStore((state) => state.cart); // ✅ 상태 가져오기
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0); // 수량 합계

  return (
    <Router>
      {/* 상단 바 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 20px',
          borderBottom: '1px solid #ccc',
          position: 'sticky',
          top: 0,
          backgroundColor: '#fff',
          zIndex: 10,
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'black',
          }}
        >
          Likelion
        </Link>

        <Link
          to="/cart"
          style={{
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          🛒 Cart {totalQuantity}
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
