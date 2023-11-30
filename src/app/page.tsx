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
    <>
      <div id="toast-default" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z" />
          </svg>
          <span className="sr-only">Fire icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">Set yourself free.</div>
        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
          <span className="sr-only">Close</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>

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
            <br/>
            <p className="flex text-lg text-white mb-2">Subscribe to our monthly newsletter</p>
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
    </>
  )
}
