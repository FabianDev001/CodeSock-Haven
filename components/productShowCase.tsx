// pages/[id].tsx
import { FC } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface ProductPageProps {
  product: Product | undefined;
}

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-600">Price: {product.price}</p>
      <Image src={product.imageUrl} alt={product.name} width={150} height={150} className="mt-4" />
    </main>
  );
};

export default ProductPage;

// Use getServerSideProps to fetch data at request time
export const getServerSideProps = (async (parms) => {
  // Fetch the product details based on the ID
  const productId = parseInt(parms.id);
  // Replace the following line with your actual data fetching logic
  const product: Product = {
    id: productId,
    name: `Product ${productId}`,
    price: `$${(Math.random() * 100).toFixed(2)}`,
    imageUrl: `/path/to/product${productId}.jpg`,
  };

  return {
    props: { product },
  };
});

