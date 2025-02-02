import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const Navber = () => {
    const allPath= <>
    <li><Link href='/' >Home</Link></li>
    <li><Link href='/about' >About</Link></li>
    <li><Link href='/services' >Services</Link></li>
    <li><Link href='/blog' >Blog</Link></li>
    <li><Link href='/contact' >Contact</Link></li>
    </>
    return (
        <div className="navbar container mx-auto bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {allPath}
      </ul>
    </div>
    <Image src='/assets/logo.svg' alt='/assets/logo.svg' width={100} height={20}></Image>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {allPath}
    </ul>
  </div>
  <div className="navbar-end">
    <Link href="/register" className='btn mr-4'>Register</Link>
    <Link href="/login" className='btn mr-4'>Login</Link>
    <a className="btn bg-white border ">Appointment</a>
  </div>
</div>
    );
};

export default Navber;