import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1b1b1a] justify-center'>
      {/** Container */}

      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-500'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-5xl md:text-7xl  font-bold text-gray-300'>
          Ziya Karagöz
        </h1>
        <h2 className='text-4xl sm:text-5xl md:text-7xl font-bold text-gray-400'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-gray-400 py-4 max-w-[500px]'>
          I'm a full-stack developer specializing in building exceptional
          digital experiences. Currently I'm focused on building responsive
          full-stack web applications.
        </p>
        <div>
          <Link to='work' smooth={true} duration={1000}>
            <div>
              <button className='text-gray-400 group border-2 border-gray-500 rounded-sm 0.125rem px-6 py-3 my-2 flex items-center hover:bg-[#e6b800] hover:border-gray-900 hover:text-[#1a1a1a]'>
                View Work
                <span className=' group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
