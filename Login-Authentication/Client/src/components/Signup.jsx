import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    console.log(name,email,password)
    // document.getElementById('myForm').reset();
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.json();
    console.log(data);
    
  }
  return (
    <>
      <Navbar />
      {/* {console.log(name,email,password)} */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create your account
              </h1>
              <form className="space-y-4 md:space-y-6" id="myForm" method="post" onSubmit={registerUser}>
                <div>
                  
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    placeholder="Enter Your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    placeholder="Set Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4  focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-900 dark:focus:ring-primary-800"
                  
                >
                  Create
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
