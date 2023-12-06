import Image from "next/image";
import Link from "next/link";


async function getData() {
  const res = await fetch(`http://127.0.0.1:5105/api/products`, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const products = await res.json();

  return products;
}



export default async function Home() {


  const products = await getData();


  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-gray-900 text-white w-full">
          {/* Navbar */}
          <nav className="bg-black p-4">
            {/* Add your navbar content here */}
          </nav>
        </div>

        {/* Banner */}
        <div className="bg-cover bg-center h-96 flex items-center justify-center w-full">
          <h1 className="text-4xl font-bold text-white">Welcome to CodeSock Haven</h1>
        </div>
        <p className="text-center">We sell socks with programming decorations. Our socks are perfect for developers, programmers, and anyone who loves coding!</p>

        {/* Horizontal Line */}
        <hr className="w-full border-t border-gray-300 my-8" />

        {/* Product Grid */}
        <section className="container mx-auto grid grid-cols-3 gap-8">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="bg-white p-4 rounded flex flex-col items-center text-center">
                <div className="flex-shrink-0 mb-2">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div> 
                <h3 className="text-lg font-semibold text-black text-block">{product.name}</h3>
                <p className="text-gray-600">Price: {product.price}</p>
                {product.smallDescription && (
                  <p className="text-sm text-gray-700 text-opacity-95">{product.smallDescription}</p>
                )}
              </div>
            </Link>
          ))}
        </section>

        {/* Full Banner with Subscription */}
        <div className="bg-black h-32 flex flex-col items-center justify-center text-center">
          <p className="text-lg text-white mb-2">
            Subscribe to our monthly newsletter
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-l px-2 py-1 focus:outline-none text-black"
            />
            <button className="bg-blue-700 text-white px-4 py-1 rounded-r hover:bg-blue-900 ">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black p-8">
          <div className="container mx-auto flex justify-between">
            {/* Add your footer links here */}
          </div>
        </div>
      </main>
  );
}
