import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
const Deneme = () => {
  return (
    <div className='w-full flex flex-row flex-wrap'>
      <div className='w-full bg-indigo-100 h-screen flex flex-row flex-wrap justify-center '>
        {/* Begin Navbar*/}

        <div className='bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap'>
          <div className='w-full text-right'>
            <button className='p-2 fa fa-bars text-4xl text-gray-600'></button>
          </div>
        </div>

        <div className='w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg'>
          <div className='w-full h-screen antialiased flex flex-col  justify-between'>
            <div className='w-full h-screen antialiased flex flex-col  '>
              <div className='flex bg-gray-200 hover:bg-gray-300 justify-start items-center'>
                <MdOutlineEmail className='text-gray-600 text-2xl pr-1 pt-1 float-right ml-5' />
                <a
                  className=' border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold hover:cursor-pointer'
                  href=''
                >
                  Mesajlar
                </a>
              </div>
              <div className='flex bg-gray-200 hover:bg-gray-300 justify-start items-center'>
                <FiSettings className='text-gray-600 text-2xl pr-1 pt-1 float-right ml-5' />
                <a
                  className=' border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold hover:cursor-pointer'
                  href=''
                >
                  Ayarlar
                </a>
              </div>
              <div className='flex bg-gray-200 hover:bg-gray-300 justify-start items-center'>
                <BiLogOut className='text-gray-600 text-2xl pr-1 pt-1 float-right ml-5' />
                <a
                  className=' border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold hover:cursor-pointer'
                  href=''
                >
                  Çıkış
                </a>
              </div>
            </div>
            <div className='flex flex-col p-5 bg-white sticky top-0 justify-center items-center'>
              <img
                className='border w-[50px] h-[50px] border-indigo-100 shadow-lg rounded-full'
                src='http://lilithaengineering.co.za/wp-content/uploads/2017/08/person-placeholder.jpg'
                alt=''
              />
              <div className=' pt-2 border-t mt-5 w-full text-center text-xl text-gray-600'>
                Birey Bireyoglu
              </div>
            </div>
          </div>
        </div>

        {/*  End Navbar */}

        <div className='w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased'>
          <div className='bg-white w-full shadow rounded-lg p-5'>
            <textarea
              className='bg-gray-200 w-full rounded-lg shadow border p-2'
              rows='5'
              placeholder='Aklindan neler geciyor'
            ></textarea>

            <div className='w-full flex flex-row flex-wrap mt-3'>
              <div className='w-screen'>
                <button
                  type='button'
                  className='float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg'
                >
                  Gönder
                </button>
              </div>
            </div>
          </div>

          <div className='mt-3 flex flex-col'>
            <div className='bg-white mt-3'>
              <div className='bg-white border shadow p-5 text-xl text-gray-700 font-semibold'>
                bu gece rüyamda @enes' i gördüm kafası patlıyordu.
              </div>
              <div className='bg-white p-1 border shadow flex flex-row flex-wrap'>
                <div className='w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold'>
                  Beğen
                </div>
                <div className='w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold'>
                  Paylaş
                </div>
                <div className='w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold'>
                  Yorum yap
                </div>
              </div>

              <div className='border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap'>
                <div className='w-full'>
                  <div className='w-full text-left text-xl text-gray-600'>
                    @badu
                  </div>
                  rüyalar tersi çıkar hahahaha.
                </div>
              </div>
            </div>

            <div className='bg-white mt-3'>
              <div className='bg-white border shadow p-5 text-xl text-gray-700 font-semibold'>
                evren yoksa şu allahı kim yarattı
              </div>
              <div className='bg-white p-1 rounded-b-lg border shadow flex flex-row flex-wrap'>
                <div className='w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold'>
                  Beğen
                </div>
                <div className='w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold'>
                  Paylaş
                </div>
                <div className='w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold'>
                  Yorum yap
                </div>
              </div>
            </div>

            <div className='bg-white mt-3'>
              <div className='bg-white border shadow p-5 text-xl text-gray-700 font-semibold'>
                ben artık rüya göremiyorm acil yardım lazım pls!!!
              </div>
              <div className='bg-white p-1 rounded-b-lg border shadow flex flex-row flex-wrap'>
                <div className='w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold'>
                  Beğen
                </div>
                <div className='w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold'>
                  Paylaş
                </div>
                <div className='w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold'>
                  Yorum yap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deneme;
