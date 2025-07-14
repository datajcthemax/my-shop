'use client';

import React from "react";
import { useCart } from '../../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">장바구니</h1>
        <div className="mb-4">장바구니가 비어 있습니다.</div>
        <Link href="/products" className="text-blue-600 underline">상품 보러가기</Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">장바구니</h1>
      <table className="w-full mb-6">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-left">상품</th>
            <th className="py-2">수량</th>
            <th className="py-2">가격</th>
            <th className="py-2">삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 flex items-center gap-3">
                <div className="relative w-16 h-16">
                  <Image src={item.image} alt={item.name} fill style={{objectFit:'cover'}} className="rounded" />
                </div>
                <span>{item.name}</span>
              </td>
              <td className="py-2">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={e => updateQuantity(item.id, Number(e.target.value))}
                  className="w-16 border rounded px-2 py-1 text-center"
                />
              </td>
              <td className="py-2">{(item.price * item.quantity).toLocaleString()}원</td>
              <td className="py-2">
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-bold">총 합계: {total.toLocaleString()}원</div>
        <button onClick={clearCart} className="text-sm text-gray-500 underline">장바구니 비우기</button>
      </div>
      <Link href="/checkout" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">결제하기</Link>
    </div>
  );
};

export default CartPage; 