'use client';
import { useCart } from '../../context/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [done, setDone] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setDone(true);
    clearCart();
  };

  if (done) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-6">결제가 완료되었습니다!</h1>
        <button onClick={() => router.push('/')} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">홈으로 이동</button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-6">결제</h1>
        <div className="mb-4">장바구니가 비어 있습니다.</div>
        <button onClick={() => router.push('/products')} className="text-blue-600 underline">상품 보러가기</button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">결제</h1>
      <ul className="mb-6">
        {cart.map(item => (
          <li key={item.id} className="flex items-center gap-4 mb-2">
            <div className="relative w-12 h-12">
              <Image src={item.image} alt={item.name} fill style={{objectFit:'cover'}} className="rounded" />
            </div>
            <span>{item.name} x {item.quantity}</span>
            <span className="ml-auto">{(item.price * item.quantity).toLocaleString()}원</span>
          </li>
        ))}
      </ul>
      <div className="text-xl font-bold mb-6">총 결제금액: {total.toLocaleString()}원</div>
      <button onClick={handleCheckout} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full">결제하기</button>
    </div>
  );
};

export default CheckoutPage; 