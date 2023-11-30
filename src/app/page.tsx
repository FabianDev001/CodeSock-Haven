import Image from 'next/image'
import Link from 'next/link';





export default function Home() {
  const products = [
    { id: 1, name: 'CodeSock 1', price: '$19.99', imageUrl: "/images/ProgrammingSocks1.jpg" },
    { id: 2, name: 'CodeSock 2', price: '$24.99', imageUrl: "/images/ProgrammingSocks2.jpg" },
    { id: 3, name: 'CodeSock 3', price: '$19.99', imageUrl: "/images/ProgrammingSocks3.jpg" },
    // Add more products as needed
  ];



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<div className="bg-gray-900 text-white">

      {/* Navbar */}
      <nav className="bg-black p-4">
        {/* Add your navbar content here */}
      </nav>

      {/* Banner */}
      <div className="bg-cover bg-center h-96 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">CodeSock Haven</h1>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto mt-8 grid grid-cols-3 gap-8">
      {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
              <div className="bg-white p-4 rounded">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">Price: {product.price}</p>
                <Image src={product.imageUrl} alt={product.name} width={150} height={150} className="mt-2" />
              </div>
          </Link>
        ))}
      </section>

      {/* Full Banner with Subscription */}
      <div className="bg-black h-32 flex items-center justify-center text-center">
          <p className="text-lg text-white mb-2">Subscribe to our monthly newsletter</p>
          <div className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-l px-2 py-1 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-1 rounded-r">Subscribe</button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black p-8">
        <div className="container mx-auto flex justify-between">
          {/* Add your footer links here */}
        </div>
      </div>
    </div>
    </main>
  )
}
