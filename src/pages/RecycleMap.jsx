import React, { useEffect } from "react";
const RecycleMap = () => {
  useEffect(() => {
    console.log("first");
  }, []);

  return (
    <div className='flex h-screen w-full bg-gradient-to-r from-purple-500 to-blue-200 justify-center items-center text-blue-600'>
      <div className='col-span-6 mt-5 bg-opacity-50 border border-gray-500 rounded shadow-sm  hover:shadow-lg duration-500  md:col-span-3 lg:col-span-2  '>
        <div className='flex flex-row px-2 py-3 mx-3 justify-center'>
          <div className='flex flex-col mt-1 mb-2 ml-4'>
            <div className='text-2xl  font-bold'>Recycle Mapp</div>
          </div>
        </div>

        <div className='flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400'>
          <img
            src='Mapp.png'
            className='w-[300px] h-[300px]  rounded-full hover:shadow-2xl object-cover hover:scale-[1.03] duration-1000 bg-gradient-to-br from-purple-200'
          />
        </div>

        <div className='mb-5 border-t mx-3 '>
          <div className='flex flex-wrap  mx-5 mt-6 text-xs justify-center '>
            <div className='flex mb-2 mr-4 font-normal  underline text-lg'>
              <button className='border'>
                <a href='app-debug.apk' download>
                  Download
                </a>
              </button>
            </div>
            <div className='flex w-full mt-1 justify-end '>
              <div className='mr-1 text-xs text-fuchsia-600 cursor-pointer hover:italic font-base'>
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
