import React from "react";

const workgrid = {
  gridHover:
    "hover:bg-opacity-70 hover:bg-black opacity-0 group-hover:opacity-100",
  gridHeader: "text-2xl font-bold text-white tracking-wider",
  gridButtonContainer: "pt-8 text-center",
  gridButton:
    "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg",
};

const Work = () => {
  return (
    <div
      name='work'
      className='w-full  md:h-screen h-fit text-gray-300 bg-[#1b1b1a]'
    >
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-500'>
            Work
          </p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div className='bg-cover bg-top bg-[url("/src/assets/pqr.png")] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className={workgrid.gridHover}>
              <span className={workgrid.gridHeader}>
                Personal QR Application (React Native + Expo)
              </span>
              <div className={workgrid.gridButtonContainer}>
                <a href='http://ziyakaragoz.com/download'>
                  <button className={workgrid.gridButton}>Demo</button>
                </a>
                <a href='https://github.com/ziya-karagoz/Personal_QR'>
                  <button className={workgrid.gridButton}>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className='bg-cover bg-top bg-[url("/src/assets/belge-chain.jpg")] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className={workgrid.gridHover}>
              <span className={workgrid.gridHeader}>
                Document Transfer App on Blockchain (React + Nodejs)
              </span>
              <div className={workgrid.gridButtonContainer}>
                <a href='https://github.com/mnsgl/test'>
                  <button className={workgrid.gridButton}>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div className='bg-contain bg-center bg-[url("/src/assets/recycle-mapp.png")] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className={workgrid.gridHover}>
              <span className={workgrid.gridHeader}>
                Recycle Mapp (Android Studio Project)
              </span>
              <div className={workgrid.gridButtonContainer}>
                <a href='https://github.com/ziya-karagoz/TrashCanApp'>
                  <button className={workgrid.gridButton}>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className='bg-cover bg-top bg-[url("/src/assets/social-app.png")] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className={workgrid.gridHover}>
              <span className={workgrid.gridHeader}>
                Social App (Android Studio Project)
              </span>
              <div className={workgrid.gridButtonContainer}>
                <a href='https://github.com/enesbilalseker/socialapp'>
                  <button className={workgrid.gridButton}>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div className='bg-cover bg-center bg-[url("/src/assets/infinite-bouncer.png")] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className={workgrid.gridHover}>
              <span className={workgrid.gridHeader}>
                Infinite Bouncer (Unity Porject)
              </span>
              <div className={workgrid.gridButtonContainer}>
                <a href='https://play.google.com/store/apps/details?id=com.AftermathGames.InfiniteBouncer'>
                  <button className={workgrid.gridButton}>Demo</button>
                </a>
                <a href='https://github.com/ziya-karagoz/InfiniteBouncerGithub'>
                  <button className={workgrid.gridButton}>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className='bg-fill bg-top bg-[url("/src/assets/gone-hat.png")] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className={workgrid.gridHover}>
              <span className={workgrid.gridHeader}>
                Gone Hat Project (Unity Game)
              </span>
              <div className={workgrid.gridButtonContainer}>
                <a href='https://github.com/ziya-karagoz/GoneHatGithub'>
                  <button className={workgrid.gridButton}>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className='bg-cover bg-top bg-[url("/src/assets/scoretahmin.jpg")] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className={workgrid.gridHover}>
              <span className={workgrid.gridHeader}>
                Football Score App (React Native + Firebase)
              </span>
              <div className={workgrid.gridButtonContainer}>
                <a href='https://github.com/ziya-karagoz/GoneHatGithub'>
                  <button className={workgrid.gridButton}>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className='bg-cover bg-top bg-[url("/src/assets/pqr-server.png")] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className={workgrid.gridHover}>
              <span className={workgrid.gridHeader}>
                Personal Qr App's Server (Express + MongoDB)
              </span>
              <div className={workgrid.gridButtonContainer}>
                <a href='https://github.com/ziya-karagoz/PQRServer'>
                  <button className={workgrid.gridButton}>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
