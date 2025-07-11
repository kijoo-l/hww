import React from 'react';
import { useCartStore } from '../store/useCartStore';

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🛒 장바구니</h1>

      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                width: '320px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                textAlign: 'center',

              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}
              />
              <h3 style={{ margin: '10px 0 5px' }}>{item.name}</h3>
              <p>수량: {item.quantity}</p>
              <p>가격: {(item.price * item.quantity).toLocaleString()}원</p>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginTop: '10px',
                  padding: '6px 12px',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                ❌ 삭제
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <>
          <hr style={{ margin: '30px 0' }} />
          <h3>총 금액: {totalPrice.toLocaleString()}원</h3>
          <button
            onClick={clearCart}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#fff',
              border: '1px solid #888',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            🧹 장바구니 비우기
          </button>
        </>
      )}
    </div>
  );
}
