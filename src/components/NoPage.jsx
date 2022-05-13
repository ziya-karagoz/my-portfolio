import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-[#1b1b1a]'>
      <h1 className='text-9xl font-extrabold text-white tracking-widest'>
        404
      </h1>
      <div className='bg-yellow-500 px-2 text-sm rounded font-medium rotate-12 absolute'>
        Page Not Found
      </div>
      <button className='mt-5'>
        <a className='relative inline-block text-sm font-medium text-yellow-500 group active:text-yellow-500 focus:outline-none focus:ring'>
          <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-yellow-500 group-hover:translate-y-0 group-hover:translate-x-0'></span>

          <span className='relative block px-8 py-3 bg-[#1b1b1a] border border-current'>
            <Link to='/'>Go Home</Link>
          </span>
        </a>
      </button>
    </div>
  );
};

export default NoPage;
