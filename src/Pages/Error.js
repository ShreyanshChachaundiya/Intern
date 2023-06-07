import React from 'react'

const Error = () => {
    
  
    return (
      <div>
        <div className=" ">
          <img
            src="icons/background.png"
            className="object-fill absolute w-[100%] h-screen"
          />
          <img
            src="icons/squareLogo.png"
            alt="error-logo"
            className="absolute z-10 w-[10%] inline left-2 top-[2%]"
          />
  
          <img
            src="icons/final_logo.png"
            className="absolute inline w-[5%] top-[10%] left-[46%] h-[20%] "
          />
          <div className="absolute text-white block w-[45%] left-[25%] top-[30%] text-center text-[120%]">
            <div>
              <span className='text-[50px]'>
                 You Have Landed Into <span className="text-orange-400">Error</span>
              </span>
            </div>
          </div>
  
        
          <div className="absolute bottom-[4%] w-[55%] right-0 text-[10px] text-start">
            <span className="text-blue-300">
              Log in / Sign up / #Hashtags / Videos / Music / Podcast / Stream /
              Chat / News / Messaging / Platform / Blog / Games / Signature for
              Kids /
            </span>
            Search / About / Ads / Groups / Marketing / Shop / Privacy / Help /
            Terms / Cookies / Developers / Jobs / Languages / Press / Location /
            Features / Imprint
          </div>
  
          <div className="absolute bottom-0 right-0 text-start text-[10px] flex justify-between w-[400px]">
            <div className="">JBLSignature © 2020 All rights reserved</div>
            <div className="text-white flex align-middle ">
              English
              <img src="icons/america.png" className="h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Error
