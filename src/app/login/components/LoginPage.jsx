import React from 'react';

const LoginPage = () => {
    

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
  };
    return (
        <form className="mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" name="email"  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input type="password" name="password"  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <button type="submit" className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">Sign In</button>
          </form>
    );
};

export default LoginPage;