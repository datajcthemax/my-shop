'use client';
import React from "react";
import { products } from '../../../data/products';
import Image from 'next/image';
import { useCart } from '../../../context/CartContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductDetailPage = ({ params }: any) => {
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCart();
  if (!product) return <div>상품을 찾을 수 없습니다.</div>;
  return (
    <div className="p-8 max-w-xl mx-auto">
      <div className="w-full h-80 relative mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded"
        />
      </div>
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <div className="text-gray-500 mb-4">{product.price.toLocaleString()}원</div>
      <div className="mb-6">{product.description}</div>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => addToCart(product)}
      >
        장바구니에 담기
      </button>
    </div>
  );
};

export default ProductDetailPage; 