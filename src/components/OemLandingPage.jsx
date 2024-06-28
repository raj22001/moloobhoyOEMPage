import React from "react";
import Logo from "../assets/logo.png"
import OEMImage from "../assets/OEMlogo.png"
import OemCompany from "./OemCompany";

const OemLandingPage = () => {
  return (
    <div className="w-full h-auto">

   {/* Navbar  data  1*/}

      <div className="w-[100%] bg-cyanblue">
        <nav className="w-[90%] py-2 justify-between mx-auto flex text-white">
            <h1>A. S. Moloobhoy Pvt. Ltd.</h1>
            <div className=" flex uppercase font-normal text-sm items-center ">
               <h3 className="pr-2 border-r-[1px] cursor-pointer">Press kit</h3>
               <h3 className="pr-2 pl-2 border-r-[1px] cursor-pointer">Locate us</h3>
               <h3 className="pl-2 cursor-pointer">Contact us</h3>
            </div>
        </nav>
      </div>

      {/* Navbar Data 2 */}
      <div className="w-[100%]">
         <nav className="w-[90%] py-2 justify-between mx-auto flex ">
            <img src={Logo} alt="" />
            <div className="flex font-normal text-lg items-center text-blue gap-x-6">
               <h2>
                  About us
               </h2>
                <h2>
                  Sales
               </h2>
                <h2>
                  Services
               </h2>
                <h2>
                  Public Relations
               </h2>
                <h2>
                  Blog
               </h2>
            </div>
         </nav>
      </div>

   {/* OEM PAge Header  */}
      <div className="w-full h-[50vh]">
         <div className="w-[100%] h-[100%]  flex flex-col  items-center">
            <div className="w-[75%]  flex  mx-auto ">
               <img className="h-[80%]" src={OEMImage} alt="" />
               <div className="bg-[#94C9ED] mt-[2%] h-[60%]  rounded-3xl">
                  <div className="h-[90%] w-[90%] mx-auto flex flex-col justify-center">

                  <h1 className="text-6xl text-blue font-bold">OEM</h1>
                  <h2 className="text-4xl font-semibold text-cyanblue mt-1">Original Equipment Manufacturers</h2>
                  <p className="text-base mt-2.5 text-gray font-normal">A. S. Moloobhoy Pvt. Ltd. represent a host of various Original Equipment Manufacturers from around the world. Please refer to the relevant categories for a comprehensive list.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div>
         <OemCompany />
      </div>
    </div>
  );
};

export default OemLandingPage;
