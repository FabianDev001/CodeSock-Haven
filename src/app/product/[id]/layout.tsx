import React from 'react';
import Image from 'next/image';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex max-w-4xl mx-auto mb-60">{children}</main><br></br>
      <footer className="bg-white dark:bg-gray-900 fixed bottom-0 w-full">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://www.shitexpress.com/" className="flex items-center">
                <Image src="/CodeSocks-Haven.png" width={35} height={0} className="h-8" alt="CodeSock Haven Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeSock Haven</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">

                    <a href="https://nextjs.org/" className="hover:underline">Next.js</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/FabianDev001/CodeSock-Haven" className="hover:underline ">Github</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/V2R2Tx49Hg" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/legal/policy" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/legal/press" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">CodeSock Haven™</a>. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* Your social media links */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
