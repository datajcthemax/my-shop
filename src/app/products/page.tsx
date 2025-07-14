import React from "react";
import { products } from '../../data/products';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">상품 목록</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border rounded-lg p-4 hover:shadow-lg transition"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
              />
            </div>
            <div className="font-semibold">{product.name}</div>
            <div className="text-gray-500">{product.price.toLocaleString()}원</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage; 