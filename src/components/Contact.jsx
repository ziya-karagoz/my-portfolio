import React, { useRef } from "react";
import emailjs from "emailjs-com";
import ZiyaImg from "../assets/ss.jpg";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vtlkmmt",
      "template_v4sb7hh",
      form.current,
      "woZMN5CHy2BZ64YCh"
    );

    e.target.reset();
  };

  return (
    <div
      name='contact'
      className='w-full  md:h-screen h-fit  bg-[#1b1b1a] flex justify-center items-center p-4'
    >
      <div className=' flex  w-auto gap-14 items-center'>
        <div>
          <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-300'>
              Contact
            </p>
            <p className='text-gray-300 py-4'>
              // Submit the form below or shoot me an email -
              ziyakargoz42_@outlook.com
            </p>
          </div>
          <form
            method='POST'
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col max-w-[500px] w-full'
          >
            <input
              className='bg-transparent  border border-gray-500 p-2 object-contain'
              type='text'
              placeholder='Name'
              name='name'
            />
            <input
              className='my-4 p-2 bg-transparent border border-gray-500'
              type='email'
              placeholder='Email'
              name='email'
            />
            <textarea
              className='bg-transparent lg: border border-gray-500 p-2'
              name='message'
              rows='7'
              placeholder='Message'
            ></textarea>
            <button className='text-white text-lg border-2 rounded-sm hover:bg-yellow-500 hover:border-yellow-500 hover:text-gray-900 px-4 py-3 my-8 mx-auto flex items-center'>
              Let's Collaborate
            </button>
          </form>
        </div>
        <div className=''>
          <div class='max-w-2xl w-full mx-auto'>
            <div class='max-w-sm bg-[#1b1b1c] rounded-sm  shadow-md  '>
              <div class='flex justify-end px-4 pt-4'></div>
              <div class='flex flex-col items-center pb-10'>
                <img
                  class='mb-3 w-24 h-24 rounded-full shadow-lg'
                  src={ZiyaImg}
                  alt='Ziya Image'
                />
                <h3 class='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                  Ziya Karagoz
                </h3>
                <span class='text-sm text-gray-500 dark:text-gray-400'>
                  Fullstack Developer
                </span>
                <div class='flex m-2 mb-1 space-x-3 lg:mt-6'>
                  <a
                    target='_blank'
                    href='https://www.messenger.com/t/100081018633542/'
                    class='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-300 bg-blue-800 rounded-md hover:bg-blue-700     '
                  >
                    <FaFacebookMessenger className='w-[25px] h-[25px] mr-2 ' />
                    Messenger
                  </a>
                  <a
                    target='_blank'
                    href='https://api.whatsapp.com/send?phone=905314253902'
                    class=' inline-flex items-center py-2 px-4 text-base font-medium text-center text-gray-300 bg-[#075E54] rounded-md hover:bg-[#097467]'
                  >
                    <FaWhatsapp className='w-[25px] h-[25px] mr-2' />
                    Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
