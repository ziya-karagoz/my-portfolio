import React from "react";
import { FaTwitter, FaGithub, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col w-full h-[100px] justify-center items-center bg-black text-gray-600'>
      <span class='text-sm text-gray-500 '>
        Copyright © 2022 All rights reserved | Ziya Karagöz
      </span>
      <div className='flex  flex-row w-full justify-center items-center space-x-3 lg:mt-6 text-[#f2f2f2]'>
        <a href='https://twitter.com/ziya_bireyi'>
          <FaTwitter />
        </a>
        <a href='https://github.com/ziya-karagoz'>
          <FaGithub />
        </a>
        <a href='https://www.youtube.com/channel/UC5_UBaM2FTDMvfAE5aPVvJA'>
          <FaYoutube />
        </a>
        <a href='https://www.facebook.com/profile.php?id=100081018633542'>
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;

//Copyright © 2022 All rights reserved | Ziya Karagöz
