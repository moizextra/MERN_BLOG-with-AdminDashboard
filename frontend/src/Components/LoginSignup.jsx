import React, { useState } from 'react';

const LoginSignupPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  const switchToLogin = () => {
    setActiveTab('login');
  };

  const switchToSignup = () => {
    setActiveTab('signup');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className=" m-10 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={switchToLogin}
            className={`text-lg font-semibold p-2 cursor-pointer ${
              activeTab === 'login' ? 'text-gray-800 ' : 'text-gray-600'
            }`}
          >
            Login
          </button>
          <button
            onClick={switchToSignup}
            className={`text-lg font-semibold p-2 cursor-pointer ${
              activeTab === 'signup' ? 'text-gray-800 ' : 'text-gray-600'
            }`}
          >
            Signup
          </button>
        </div>
        {activeTab === 'login' ? (
          // Login form
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-gray-800 text-white rounded-lg"
            >
              Login
            </button>
          </form>
        ) : (
          // Signup form
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-800"
            >
              Signup
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignupPage;
