import React from "react";
import './App.css'
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIcon from "@mui/icons-material/Phone";

function App() {
  return (
    <>
      <header class="text-gray-600 body-font bg-indigo-700">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "
            href="/"
          >
            <span class="ml-3 text-xl text-white">
              <img src="logo.png" alt="logo" />
            </span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900 text-white">Track Order |</a>
            <a class="mr-5 hover:text-gray-900">
              <SearchIcon style={{ color: "white" }} />
            </a>
            <a class="mr-5 hover:text-gray-900">
              <PersonIcon style={{ color: "white" }} />
            </a>
            <a class="mr-5 hover:text-gray-900">
              <ShoppingCartIcon style={{ color: "white" }} />
            </a>
          </nav>
        </div>
      </header>






      <div className="container">
        <h1 className="text-left text-3xl m-8">Shopping Cart</h1>
        <table class="table-auto border-2 border-gray-300 bg-white rounded-lg shadow-2xl w-9/12 mx-auto my-8 ">
          <thead className=" text-black">
            <tr className="p-2">
              <th>Product</th>
              <th>Price</th>
              <th>Qauntity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="p-4">
              <td>Earphone</td>
              <td>1290 $</td>
              <td>0</td>
              <td>1290 $</td>
            </tr>
            <tr>
              <td>Earphone</td>
              <td>1290 $</td>
              <td>0</td>
              <td>1290 $</td>
            </tr>
            <tr>
              <td>Earphone</td>
              <td>1290 $</td>
              <td>0</td>
              <td>1290 $</td>
            </tr>
          </tbody>
        </table>
      </div>












      <footer class="text-gray-600 body-font bg-gray-900 text-white">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a
              class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
              href="#"
            >
              <span class="ml-3 text-xl text-white text-xl">CALL US</span>
            </a>
            <p class="mt-2 text-sm text-gray-500">Monday-Friday (8AM to 9PM)</p>
            <PhoneIcon />
            <span className="text-2xl mx-2">1800-123-1234</span>
          </div>
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <hr />
        <div class="bg-gray-900">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2020 TEST —
              <a
                href="#"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                Prashant Rai
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
