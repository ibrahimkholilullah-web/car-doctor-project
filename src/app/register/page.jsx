'use client';

import Link from 'next/link';
import Registerpage from './conponents/registerpage';

export default function SignUp() {
  

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="flex w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-8">
          <img src="/assets/images/login/login.svg" alt="Sign Up" className="max-w-sm" />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Sign Up</h2>
         <Registerpage></Registerpage>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Or Sign Up with</p>
            <div className="flex justify-center mt-2 space-x-4">
              <button className="p-2 border rounded-lg hover:bg-gray-200">
                <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
              </button>
              <button className="p-2 border rounded-lg hover:bg-gray-200">
                <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
              </button>
              <button className="p-2 border rounded-lg hover:bg-gray-200">
                <img src="/google-icon.png" alt="Google" className="w-6 h-6" />
              </button>
            </div>
          </div>
          <p className="mt-4 text-center text-gray-600">
            Already have an account? <Link href="/login" className="text-orange-500 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
