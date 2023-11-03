import React, { useState } from 'react';
import Loading from './Loading';
import { RegisterUser } from '../UserSlices/Signup';
import { useDispatch, useSelector } from 'react-redux';
const LoginSignupPage = () => {
  const dispatch=useDispatch();
  const [activeTab, setActiveTab] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [password, setPassword] = useState('');
  const isLoading=useSelector((state)=>state.UserSignup.isLoading)
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
  const handleChange = (e) => {
    if(e.target.name == "name"){
      setName(e.target.value);
    }else if(e.target.name == "email"){
     setEmail(e.target.value);
    }else if(e.target.name == "password"){
     setPassword(e.target.value);
    }
     
       if (e.target.name === "avatar") {
         const reader = new FileReader();
         reader.onload = () => {
           if (reader.readyState === 2) {
             setAvatar(reader.result);
           }
         };
   
         reader.readAsDataURL(e.target.files[0]);
       }
     };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Userdata={
      name:name,
      email:email,
      password:password,
      avatar:avatar
    }
    dispatch(RegisterUser(Userdata));
  };
if(isLoading){
  return <Loading/>
}
  return (
    <div className="m-10 flex items-center justify-center">
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
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Your Password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
              Avatar
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="avatar"
              type="file"
              name="avatar"
              onChange={handleChange}
              accept="image/*" // Allow only image files
            />
          </div>
      
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignupPage;
