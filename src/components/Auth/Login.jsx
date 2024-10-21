import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Fixed the method name

    // Here you can add your login logic (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='border-2 border-red-600 p-8 rounded-xl'>
        <form className='flex flex-col justify-center items-center space-y-4' onSubmit={handleSubmit}>
          <input 
            type='email' 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Corrected value retrieval
            placeholder='Enter Your Email' 
            className='border-2 border-red-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400' 
          />
          <input 
            type='password' 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Corrected value retrieval
            placeholder='Enter your Password' 
            className='border-2 border-red-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400' 
          />
          <button className='bg-red-600 text-white py-2 px-8 rounded-full text-lg mt-5'>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
