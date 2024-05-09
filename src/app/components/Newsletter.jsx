"use client"
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribed with email:", email, "and message:", message);
  };

  return (
    <div className='mt-20 mx-20'>
      <h2 className="font-bold text-3xl text-[#73C2FB] font-mono mb-8">
        Newsletter
      </h2>
      <div className="w-full p-8 bg-white rounded-lg shadow-lg">
  
      <div className="mb-1 mt-4">
        <input
          type="email"
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="border border-gray-300 rounded-md px-4 py-2 w-full h-36 resize-none focus:outline-none focus:border-blue-500"
          placeholder="Your Message"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>
    </div>
    </div>
  );
};

export default Newsletter;
