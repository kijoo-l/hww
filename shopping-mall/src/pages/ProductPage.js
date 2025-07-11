import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

import img1 from '../asserts/1.jpg';
import img2 from '../asserts/2.jpg';
import img3 from '../asserts/3.jpg';
import img4 from '../asserts/4.jpg';
import img5 from '../asserts/5.jpg';
import img6 from '../asserts/6.jpg';
import img7 from '../asserts/7.jpg';
import img8 from '../asserts/8.jpg';
import img9 from '../asserts/9.jpg';
import img10 from '../asserts/10.jpg';
import img11 from '../asserts/11.jpg';

const dummyProducts = {
  1: { id: 1, name: '캣타워', price: 150000, image: img11 },
  2: { id: 2, name: '츄르 10개입', price: 8000, image: img7 },
  3: { id: 3, name: '스크래쳐', price: 30000, image: img3 },
  4: { id: 4, name: '고양이 낚싯대', price: 8000, image: img4 },
  5: { id: 5, name: '숨숨집', price: 45000, image: img10 },
  6: { id: 6, name: '고양이 화장실', price: 30000, image: img6 },
  7: { id: 7, name: '고양이 화장실 모래 4kg', price: 20000, image: img2 },
  8: { id: 8, name: '고양이 빗', price: 8000, image: img8 },
  9: { id: 9, name: '고양이 구강케어 세트', price: 15000, image: img9 },
  10: { id: 10, name: '캣 휠', price: 100000, image: img5 },
  11: { id: 11, name: '고양이 장난감', price: 5000, image: img1 },
};

export default function ProductPage() {
  const { id } = useParams();
  const product = dummyProducts[id];
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <div
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center',
      }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name}
              style={{ width: '50%', height: '400px', objectFit:'cover', borderRadius: '4px' }}
            />
      <p>가격: {product.price.toLocaleString()}원</p>
      <button onClick={() => addToCart(product)}>장바구니에 담기</button>
      <br />
      <Link to="/cart"
      style={{
          position: 'absolute',
          top: 20,
          right: 20,
          textDecoration: 'none',
          color: 'black',
          fontWeight: 'bold',
        }}>🛒 장바구니 가기</Link>
    </div>
  );
}
