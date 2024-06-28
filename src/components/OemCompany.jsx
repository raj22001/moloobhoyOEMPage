import React, { useState } from "react";
import { OEMDataElectronics } from "../data/data";
import { IoIosArrowRoundUp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const OemCompany = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleSearch = () => {
    setLoading(true);
    // Add your search logic here
    setTimeout(() => setLoading(false), 2000); // Simulate search delay
  };

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
  };

  return (
    <div className="mt-3 border-t-[1px] border-grayBorder border-opacity-105">
      {/* Search Function */}
      <div className="w-full mt-[4%]">
        <label
          className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border border-grayBorder rounded-3xl gap-2 shadow-2xl focus-within:border-grayBorder"
          htmlFor="search-bar"
        >
          <input
            id="search-bar"
            placeholder="Type here"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          />
          <button
            className="w-full md:w-auto px-12 py-3 bg-blue border-blue text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-3xl transition-all disabled:opacity-70"
            onClick={handleSearch}
            disabled={loading}
          >
            <div className="relative">
              {/* Loading animation change opacity to display */}
              <div
                className={`flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ${
                  loading ? "opacity-1" : "opacity-0"
                }`}
              >
                <svg
                  className="animate-spin w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>

              <div
                className={`flex items-center transition-all ${
                  loading ? "opacity-0" : "opacity-1"
                }`}
              >
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </div>
          </button>
        </label>
      </div>

      {/* <div className="mt-[2.5%]">
        <h1 className="text-center text-5xl font-normal text-blue">
          Electronics
        </h1>
      </div> */}

      <div className="w-full mt-14">
        <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-1/3 h-auto bg-bgTableColor sticky top-0">
            {OEMDataElectronics.map((OEMData, index) => (
              <div
                key={index}
                className={`py-2 text-center text-2xl cursor-pointer ${
                  selectedCategoryIndex === index ? "bg-cyanblue text-white" : ""
                }`}
                onClick={() => handleCategoryClick(index)}
              >
                {OEMData.CategorieTitle}
              </div>
            ))}
          </div>

          <div className="md:w-3/3 ">
            <div className="w-[100%] mx-auto ">
              {OEMDataElectronics[selectedCategoryIndex].CategoriesData.map(
                (companyInfo, index) => (
                  <div key={index} className="w-[94%]  mx-auto pt-4 border-[1px] border-opacity-20 border-gray rounded-2xl mb-6">
                    <div className="flex  w-[94%] mx-auto">
                      <img
                        src={companyInfo?.CompanyLogo}
                        alt={companyInfo?.CompanyName}
                      />
                      <div className="w-[80%] ml-4 h-[80%] flex flex-col justify-between">
                        <h2 className="text-lg font-semibold">
                          {companyInfo?.CompanyName}
                        </h2>
                        <div>
                           {
                              companyInfo.CompanyWebsiteData.map((info) => (
                                 <div className="flex w-[90%] mt-[3%] justify-between">
                                    <p className="flex underline w-[30%] cursor-pointer"><span className="rotate-45 ml-1"><IoIosArrowRoundUp size={25} /></span>Visit Website</p>
                                    <p className="flex w-[30%] cursor-pointer"><span className="mr-1"><MdOutlineEmail size={25}/></span>Email</p>
                                    <p className="flex  w-[40%] cursor-pointer"><span><IoLocationOutline size={25}/></span>
                                    
                                    {
                                       info.companyLocation.map((location , index) => (
                                          <div key={index}>
                                             <p className="ml-1">{location.companyLocationName} {info?.companyLocation.length > 1 && index !== info?.companyLocation.length - 1 && " /"}  </p>
                                          </div>
                                       ))
                                    }
                                    </p>
                                 </div>
                              ))
                           }
                        </div>
                      </div>
                    </div>
                      <p className="mt-2 w-[94%] mx-auto">{companyInfo.CompanyDescription}</p>
                      <div className="w-full py-3 bg-[#94C9ED] rounded-b-2xl"> 
                           <div className="flex flex-wrap w-[94%] mx-auto">
                              {
                                 companyInfo.CompanyCertificate.map((certificate , index) => (
                                    <div key={index} className="pl-4 mt-4">
                                       <button className="py-2 px-5  border-gray rounded-xl bg-white">
                                          {certificate.companyCertificateTitle}
                                       </button>
                                    </div>
                                 ))
                              }
                           </div>
                      </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OemCompany;