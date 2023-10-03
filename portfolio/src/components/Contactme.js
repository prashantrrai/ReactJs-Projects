import axios from "axios";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contactme() {

  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // const navigate = useNavigate()

  const url = "https://6331e2233ea4956cfb692ca9.mockapi.io/portfolio"

  const handleSubmit = (e) => {
    // debugger
    e.preventDefault();
    // console.log("clicked");
    document.getElementById("feedback-msg").innerText = "Feedback Submitted";
    document.getElementById("feedback-form").reset();
    
    axios.post(url, {
        email: email,
        msg: msg,
      }).then((e) => {
        // navigate("/myusers");
      });
  };

  return (
    <>
      <form
        class="text-gray-400 bg-gray-900 body-font relative"
        id="feedback-form"
      >
        <div class="absolute inset-0 bg-gray-900">
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: `grayscale(1) contrast(1.2) opacity(0.16);` }}
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 class="text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5">
              For Any Questions and Queries Reach out to us through your
              valuable feedback.
            </p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) =>{setEmail(e.target.value)}}
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={(e) =>{setMsg(e.target.value)}}
              ></textarea>
              {/* {email}
              {msg} */}
            </div>
            <button
              class="text-white bg-violet-600 border-0 py-2 px-6 focus:bg-violet-600 outline-none 
             hover:bg-violet-700 rounded text-lg"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <p class="text-xs text-gray-400 text-opacity-90 mt-3">
              Don't worry your Data will not be stored or shared Anywhere.
            </p>

            <p id="feedback-msg" className="md:text-center"></p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contactme;
