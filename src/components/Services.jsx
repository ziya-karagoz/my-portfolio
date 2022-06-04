import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <div name='services' className='w-ful bg-[#1b1b1a] text-gray-300'>
      <div className='max-w-[1200px] mx-auto h-fit p-4 flex flex-col justify-center w-full '>
        <div className='mb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-500 '>
            Services
          </p>
        </div>
        <div class='py-6 '>
          <div class='container  m-auto px-6 text-gray-300 md:px-12 xl:px-0'>
            <div class='mx-auto  grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3'>
              <div class='hover:bg-[#1f1f1e] border border-gray-500 rounded-b-3xl shadow-xl hover:scale-105 duration-500'>
                <div class='mb-12 space-y-4 '>
                  <h3 class=' text-2xl pb-6 font-semibold pt-6 text-center text-yellow-500'>
                    Backend Development
                  </h3>

                  <ul className='mb-6 list-reset'>
                    <li className='p-3 pl-12 mb-4 '>
                      <FaAngleDoubleRight className='self-center' />
                      Experienced in Mongodb
                    </li>
                    <li className=' p-3 pl-12 mb-4 self-center '>
                      <FaAngleDoubleRight />
                      Experienced in Firebase
                    </li>
                    <li className=' p-3 pl-12 mb-4  self-center '>
                      <FaAngleDoubleRight />
                      Worked with Express.js and Node.js
                    </li>
                    <li className=' p-3 pl-12 mb-4  self-center '>
                      <FaAngleDoubleRight />
                      Experienced in OOP
                    </li>
                  </ul>
                  <Link
                    to='contact'
                    className='block font-medium p-3 pl-12 text-center text-yellow-500'
                    smooth={true}
                    duration={1000}
                  >
                    <a href='#'>Know more</a>
                  </Link>
                </div>
              </div>
              <div class='hover:bg-[#1f1f1e] border border-gray-500 rounded-b-3xl shadow-xl hover:scale-105 duration-500'>
                <div class='mb-12 space-y-4 '>
                  <h3 class=' text-2xl pb-6 font-semibold pt-6 text-center text-yellow-500'>
                    Web Development
                  </h3>

                  <ul className='mb-6 list-reset'>
                    <li className='p-3 pl-12 mb-4  self-center '>
                      <FaAngleDoubleRight />
                      Determinant in HTTP requests.
                    </li>
                    <li className=' p-3 pl-12 mb-4 self-center '>
                      <FaAngleDoubleRight />
                      Experienced in Axios
                    </li>
                    <li className=' p-3 pl-12 mb-4  self-center '>
                      <FaAngleDoubleRight />
                      Experienced in React
                    </li>
                    <li className=' p-3 pl-12 mb-4  self-center '>
                      <FaAngleDoubleRight />
                      Experienced in node packages
                    </li>
                  </ul>

                  <Link
                    to='contact'
                    className='block font-medium p-3 pl-12 text-center text-yellow-500'
                    smooth={true}
                    duration={1000}
                  >
                    <a href='#'>Know more</a>
                  </Link>
                </div>
              </div>
              <div class='hover:bg-[#1f1f1e] border border-gray-500 rounded-b-3xl shadow-xl hover:scale-105 duration-500'>
                <div class='mb-12 space-y-4 '>
                  <h3 class=' text-2xl pb-6 font-semibold pt-6 text-center text-yellow-500'>
                    UI Design
                  </h3>

                  <ul className='mb-6 list-reset'>
                    <li className='p-3 pl-12 mb-4  self-center '>
                      <FaAngleDoubleRight /> Know various stylesheet languages
                      (tailwind, sass)
                    </li>
                    <li className=' p-3 pl-12 mb-4 self-center '>
                      <FaAngleDoubleRight />
                      Good knowledge of HTML, CSS, and JavaScript
                    </li>
                    <li className=' p-3 pl-12 mb-4  self-center '>
                      <FaAngleDoubleRight />
                      Familiar with React UI modules
                    </li>
                    <li className=' p-3 pl-12 mb-4  self-center '>
                      <FaAngleDoubleRight />
                      Experienced with UX best practices
                    </li>
                  </ul>
                  <Link
                    to='contact'
                    className='block font-medium p-3 pl-12 text-center text-yellow-500'
                    smooth={true}
                    duration={1000}
                  >
                    <a href='#'>Know more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
