import React, { useEffect } from "react";
import { MdDownloading } from "react-icons/md";
const RecycleMap = () => {
  useEffect(() => {
    console.log("first");
  }, []);

  return (
    <div className='flex h-screen w-full bg-[#1b1b1a] justify-center items-center'>
      <div className='col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-[#262626] md:col-span-3 lg:col-span-2  '>
        <div className='flex flex-row px-2 py-3 mx-3 justify-center'>
          <div className='flex flex-col mt-1 mb-2 ml-4'>
            <div className='text-2xl text-gray-600'>Recycle Mapp</div>
          </div>
        </div>

        <div className='flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400'>
          <img
            src='Mapp.png'
            className='w-[300px] h-[300px]  rounded-full shadow-2xl object-cover text-[#333333] bg-[#c0c0c0]'
          />
        </div>

        <div className='mb-5 border-t border-gray-50'>
          <div className='flex flex-wrap  mx-5 mt-6 text-xs justify-center '>
            <div className='flex mb-2 mr-4 font-normal text-gray-300 underline text-lg'>
              <a href='../assets/app-debug.apk' download>
                Download here
              </a>
            </div>
            <div className='flex w-full mt-1 justify-end'>
              <div className='mr-1 text-xs text-blue-700 cursor-pointer font-base'>
                By Ziya Karagöz
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecycleMap;
