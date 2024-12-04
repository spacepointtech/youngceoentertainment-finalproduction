'use client';
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Pricing() {
  return (
    <div className="bg-black font-poppins">
      <div className="text-center p-20">
        <span className="text-[#e97f18] text-[40px] font-bold">Affordable</span>
        <span className="text-white text-[40px] font-bold"> Music Distribution for Every Artist</span>
        <div className="text-center text-white text-2xl font-normal">
          Click below to explore all pricing options!
        </div>
      </div>

      <div className="w-[1250px] h-auto px-10 pt-[17px] pb-5 bg-[#0b0b0d] rounded-xl border border-[#9f9fa1] ml-20 inline-flex">
        <div className="w-full h-auto relative flex flex-col justify-start items-start">
          <div className="font-bold text-white text-2xl flex justify-between w-full">
            <span>Independent Artist Plan</span>
            <span className="mr-12 font-semibold text-[34px]">₹ 1001 / Year</span>
          </div>
          <div className="flex justify-between items-start w-full mt-5">
            <span className="text-white text-xl font-normal leading-relaxed w-3/4">
              Annual subscription for solo artists, offering global music
              <br />
              distribution to top platforms. Simple, transparent, and hassle-free.
            </span>
            <div className="h-14 px-12 py-[5px] rounded-lg border border-[#e97f18] inline-flex items-center hover:bg-[#e97f18]">
              <div className="text-center text-[#e97f18] text-xl font-normal leading-[46px] hover:text-white">
                View Plan Details
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1250px] mt-10 h-auto px-10 pt-[17px] pb-5 bg-[#0b0b0d] rounded-xl border border-[#9f9fa1] ml-20 inline-flex">
        <div className="w-full h-auto relative flex flex-col justify-start items-start">
          <div className="font-bold text-white text-2xl flex justify-between w-full">
            <span> Duo Plan</span>
            <span className="mr-10 text-[34px]">₹ 2001 / Year</span>
          </div>
          <div className="flex justify-between items-start w-full mt-5">
            <span className="text-white text-xl font-normal leading-relaxed w-3/4">
              Annual subscription for 2 artists, offering global music
              <br />
              distribution to top platforms. Simple, transparent, and hassle-free.
            </span>
            <div className="h-14 px-12 py-[5px] rounded-lg border border-[#e97f18] inline-flex items-center hover:bg-[#e97f18]">
              <div className="text-center text-[#e97f18] text-xl font-normal leading-[46px] hover:text-white">
                View Plan Details
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1250px] mt-10 h-auto px-10 pt-[17px] pb-5 bg-[#0b0b0d] rounded-xl border border-[#9f9fa1] ml-20 inline-flex">
        <div className="w-full h-auto relative flex flex-col justify-start items-start">
          <div className="font-bold text-white text-2xl flex justify-between w-full">
            <span> Independent Label Plan</span>
            <span className=" mr-7 text-[34px]">₹ 4899 / Year</span>
          </div>
          <div className="flex justify-between items-start w-full mt-5">
            <span className="text-white text-xl font-normal leading-relaxed w-3/4">
              Annual subscription for multiple artists, <span className="text-[#e97f18]"> Pricing adjusts based on the number of </span>
              <br />
               <span className="text-[#e97f18]">artists</span>--currently shown for 5 artists. Distribute globally with ease and flexibility.
            </span>
            <div className="h-14 px-12 py-[5px] rounded-lg border border-[#e97f18] inline-flex items-center hover:bg-[#e97f18]">
              <div className="text-center text-[#e97f18] text-xl font-normal leading-[46px] hover:text-white">
                View Plan Details
              </div>
            </div>
          </div>
        </div>
      </div>
          
      <div className="text-center mt-20 pb-10"><span className="text-white text-[40px] font-bold font-['Poppins']">Release a Single Song, </span><span className="text-[#e97f18] text-[40px] font-bold">No Subscription</span><span className="text-white text-[40px] font-bold"> Required</span></div>
      
      <div className="w-[1250px] mt-10 h-auto px-10 pt-[17px] pb-5 bg-[#0b0b0d] rounded-xl border border-[#9f9fa1] ml-20 inline-flex">
        <div className="w-full h-auto relative flex flex-col justify-start items-start">
          <div className="font-bold text-white text-2xl flex justify-between w-full">
            <span> Distribute a single track</span>
            <span className="mr-7 text-4xl mt-5">₹ 399 / Track</span>
          </div>
          <div className="flex justify-between items-start w-full mt-[6px]">
            <span className="text-[#a6a6a6] text-xl font-normal leading-relaxed w-3/4">
              One-time distribution for a single song. Get your music on top platforms 
              <br />
              without a subscription.
              <div className="text-white font-bold pt-8"> Note:  This plan does not include dashboard access. </div>

            </span>
           
            <div className=" mt-5 h-14 px-12 py-[5px] rounded-lg border border-[#e97f18] inline-flex items-center hover:bg-[#e97f18]">
            <div className="text-center text-[#e97f18] text-xl font-normal leading-[46px] hover:text-white ">
                View Plan Details
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <div className="w-auto text-center p-28 text-[#e97f18] text-3xl italic"> <span className="font-medium"> "Music is the divine way to tell beautiful </span> <span className="font-medium"> <br/> poetic things to the heart."</span> 
      <span className="text-white text-normal text-2xl"> <br/> – Pablo Casals </span> </div>
    </div>
  );
}
