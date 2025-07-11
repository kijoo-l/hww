import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { motion } from 'motion/react';

// 이미지 import
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

const dummyProducts = [
  { id: 1, name: '캣타워', price: 150000, image: img11 },
  { id: 2, name: '츄르 10개입', price: 8000, image: img7 },
  { id: 3, name: '스크래쳐', price: 30000, image: img3 },
  { id: 4, name: '고양이 낚싯대', price: 8000, image: img4 },
  { id: 5, name: '숨숨집', price: 45000, image: img10 },
  { id: 6, name: '고양이 화장실', price: 30000, image: img6 },
  { id: 7, name: '고양이 화장실 모래 4kg', price: 20000, image: img2 },
  { id: 8, name: '고양이 빗', price: 8000, image: img8 },
  { id: 9, name: '고양이 구강케어 칫솔+치약 세트', price: 15000, image: img9 },
  { id: 10, name: '캣 휠', price: 100000, image: img5 },
  { id: 11, name: '고양이 장난감', price: 5000, image: img1 },
];

export default function HomePage() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div style={{ position: 'relative', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontWeight: 'bold' }}>토리 살림들</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '20px',
          justifyItems: 'center',
        }}
      >
        {dummyProducts.map((product) => (
          <div
            key={product.id}
            style={{
              width: '220px',
              height: '420px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '4px',
              }}
            />
            <h3 style={{ margin: '10px 0 5px', fontWeight: 'bold' }}>{product.name}</h3>
            <p style={{ margin: '0 0 10px' }}>
              {product.price.toLocaleString()}원
            </p>

            <motion.button
              whileTap={{ scale: 1.1, scale: 0.95}}
              onClick={() => addToCart(product)}
              style={{
                padding: '8px 12px',
                fontSize: '14px',
                cursor: 'pointer',
                border: '1px solid #888',
                borderRadius: '4px',
                background: '#fff',
              }}
            >
              장바구니 담기
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
}
