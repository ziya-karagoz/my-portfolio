import React, { useRef } from "react";
import emailjs from "emailjs-com";
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
      className='w-full  md:h-screen h-fit bg-[#1b1b1a] flex justify-center items-center p-4'
    >
      <div className=' max-w-[1000px] w-auto grid grid-cols-2 gap-8 justify-center items-center'>
        <div>
          <form
            method='POST'
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col max-w-[600px] w-full'
          >
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-300'>
                Contact
              </p>
              <p className='text-gray-300 py-4'>
                // Submit the form below or shoot me an email -
                ziyakargoz42_@outlook.com
              </p>
            </div>
            <input
              className='bg-transparent  border border-yellow-500 p-2'
              type='text'
              placeholder='Name'
              name='name'
            />
            <input
              className='my-4 p-2 bg-transparent border border-yellow-500'
              type='email'
              placeholder='Email'
              name='email'
            />
            <textarea
              className='bg-transparent  border border-yellow-500 p-2'
              name='message'
              rows='10'
              placeholder='Message'
            ></textarea>
            <button className='text-white text-lg border-2 hover:bg-yellow-500 hover:border-yellow-500 hover:text-gray-900 px-4 py-3 my-8 mx-auto flex items-center'>
              Let's Collaborate
            </button>
          </form>
        </div>
        <div className='hidden lg:flex text-white h-auto w-48   flex-col '>
          <div className='w-48 h-48 border m-2'>
            <article>Messenger</article>
          </div>
          <div className='w-48 h-48 border m-2'>
            <article>Whatsapp</article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
