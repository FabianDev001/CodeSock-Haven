// ProductShowcase component

import React from 'react';
import Image from 'next/image';
import { parse } from 'path';

async function getData(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAGE}/api/products/${id}`, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const product = await res.json();

  return product;
}

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {

  const product = await getData(parseInt(id));
 
  return (
    <div className="flex items-center justify-center mt-16">
      {/* Centered Wrapper */}
      <div className="flex items-center space-x-8">
        {/* Left Component - Neumorphism Box with Product Image */}
        <div className="bg-gray-300 rounded-lg p-8 shadow-md">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={200} // Adjust the width as needed
            height={200} // Adjust the height as needed
            className="rounded-lg"
          />
        </div>

        {/* Right Component - Product Details */}
        <div className="text-left">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <div className="flex items-center space-x-2 mt-2">
            {/* Rating System */}
            <div className="flex items-center">
              {[...Array(product.rating | 0)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 fill-current ${
                    i < 4 ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27l-5.27 3.18 1.27-5.82-4.23-3.67 5.86-.5L12 5l2.37 5.46 5.86.5-4.23 3.67 1.27 5.82z" />
                </svg>
              ))
            }
              <span className="ml-1">20 votes</span>
            </div>
          </div>
          <p className="font-bold mt-2">Details:</p>
          <p className="font-light mt-3 to-white">{product.largeDescription}</p>
          <div className="text-lg font-bold mt-4">
            {product.quantity} Products
            <div className="flex items-center space-x-2 mt-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
