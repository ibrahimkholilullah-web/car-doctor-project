import React from 'react';
import Link from 'next/link';
import registerUser from '@/app/actions/auth/registerUser';

const Registerpage = () => {

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const data = {name,email,password}
    registerUser(data)
  };
    return (
        <form className="mt-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" name="name"  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email"  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input type="password" name="password"  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
        </div>
        <button type="submit" className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">Sign Up</button>
      </form>
    );
};

export default Registerpage;