'use client';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Image from 'next/image';
import { FaPencilAlt, FaArrowUp, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaCheckCircle, FaSpotify, FaItunes, FaAmazon, FaFacebook } from 'react-icons/fa';
// import { useSession } from "next-auth/react";
import Header from '@/app/dashboard/components/Header';
import { Icon } from "@iconify/react";

export default function Profile() {
    // const { data: session } = useSession();
  return (
    <div className="flex flex-auto w-full h-[2100px] bg-[#0F0F0F]">
      <Sidebar progress={100}/>
    
      <main className="flex-1 p-6 flex flex-col gap-6 text-white">
      <Header /> 
  
         {/* Profile Section */}
         <div className="h-[308px] pl-[45px] pr-[434px] py-[74px] left-[330px] top-[120px] absolute bg-gradient-to-t from-black to-[#666666] rounded-[32px] justify-start items-center inline-flex"
         style={{
          backgroundImage: 'url(/dashboard/timer.svg)',
          backgroundSize: 'cover',  // Ensures the image covers the entire section
          backgroundPosition: 'center',  // Centers the image
        }}
         >
          <div className="w-[595px]  h-40 relative">
         
          <Icon 
            icon="mingcute:user-4-fill" 
            className='w-40 h-40 cursor-pointer bg-[#1A1A1A] left-0 top-0 absolute rounded-full shadow'
           
          />
           
         
            {/* <img className="w-40 h-40 bg-white left-0 top-0 absolute rounded-full shadow" src="https://via.placeholder.com/160x160" alt="Profile"/> */}
            <div className="w-[419px] h-[132px] left-[176px] top-[12px] absolute">
              <div className="h-[18px] left-0 top-0 absolute flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> {/* Verification icon */}
                <div className="text-white text-sm font-medium font-poppins leading-[14px]">Verified Artist</div>
              </div>
              <div className="h-3.5 left-0 top-[118px] absolute justify-start items-start gap-1 inline-flex">
                <div className="text-white text-sm font-medium font-poppins leading-[14px] tracking-wide">N/A</div>
                <div className="text-white text-sm font-medium font-poppins leading-[14px]">monthly listeners</div>
              </div>
              <div className="left-0 top-[20px] absolute text-white text-5xl font-bold font-poppins leading-[78px]"> Artists Name </div>
            </div>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="w-[630px] h-[356px] left-[330px] top-[473px] absolute bg-[#191919] rounded-[32px] shadow border border-neutral-800">
          <div className="left-[50px] top-[40px] absolute text-[#e97f18] text-xl font-semibold ">Personal Details</div>
          <div className="p-[5px] left-[550px] top-[43px] absolute  border border-[#e97f18] rounded-md flex items-center">
            <FaPencilAlt className="text-[#e97f18]" />
          </div>
          <div className="absolute left-[53px] top-[100px]">
            <div className="text-[#757575] text-base font-normal font-poppins">Your Name</div>
            <div className="text-white text-base font-normal font-poppins">First & Last</div>
          </div>
          <div className="absolute left-[53px] top-[182px]">
            <div className="text-[#757575] text-base font-normal font-poppins">Email</div>
            <div className="text-white text-base font-normal font-poppins">user@gmail.com</div>
          </div>
          <div className="absolute left-[53px] top-[264px]">
            <div className="text-[#757575] text-base font-normal font-poppins">Joined Date</div>
            <div className="text-white text-base font-normal font-poppins">15 November 2024</div>
          </div>
          <div className="absolute left-[475px] top-[182px]">
            <div className="text-[#757575] text-base font-normal font-poppins">Contact</div>
            <div className="text-white text-base font-normal font-poppins">1234567890</div>
          </div>
          <div className="absolute left-[475px] top-[100px]">
            <div className="text-[#757575] text-base font-normal font-poppins">Stage Name</div>
            <div className="text-white text-base font-normal font-poppins">Artist Name</div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="w-[404px] h-[534px] left-[990px] top-[473px] absolute bg-[#191919] rounded-[32px] shadow border border-neutral-800">
        <div className="p-[5px] left-[336px] top-[40px] absolute border border-[#e97f18] rounded-md justify-start items-start gap-2.5 inline-flex">
            <FaPencilAlt className="text-[#e97f18]" />
        </div>
          <div className="left-[43px] top-[40px] absolute text-[#e97f18] text-xl font-semibold font-poppins">Social Media Links</div>
          
          <div className="left-[43px] top-[100px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="justify-start items-end gap-5 inline-flex">
              <div className="p-[13px] bg-[#333333] rounded-xl justify-center items-center flex">
                <FaInstagram className="text-[#e97f18]" />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-center text-gray-400 text-sm font-normal leading-[21px]">Instagram</div>
                <div className="text-center text-white text-base font-medium  leading-normal"> @username</div>
              </div>
            </div>
            <div className="justify-start items-end gap-5 inline-flex">
              <div className="p-[13px] bg-[#333333] rounded-xl justify-center items-center flex">
                <FaFacebookF className="text-[#e97f18]" />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-center text-gray-400 text-sm font-normal  leading-[21px]">Facebook</div>
                <div className="text-center text-white text-base font-medium  leading-normal">@username</div>
              </div>
            </div>
            <div className="justify-start items-end gap-5 inline-flex">
              <div className="p-[13px] bg-[#333333] rounded-xl justify-center items-center flex">
                <FaTwitter className="text-[#e97f18]" />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-center text-gray-400 text-sm font-normal leading-[21px]">Twitter</div>
                <div className="text-center text-white text-base font-medium  leading-normal">@username</div>
              </div>
            </div>
            <div className="justify-start items-end gap-5 inline-flex">
              <div className="p-[13px] bg-[#333333] rounded-xl justify-center items-center flex">
                <FaYoutube className="text-[#e97f18]" />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-center text-gray-400 text-sm font-normal  leading-[21px]">YouTube</div>
                <div className="text-center text-white text-base font-medium  leading-normal">@Channelname</div>
              </div>
            </div>
          </div>
          <div className="w-[323px] h-[48px] border-dashed left-[43px] top-[430px] absolute bg-transparent border-[3px] py-8 border-[#333333] rounded-2xl flex items-center justify-center">
            <span className="text-[#e97f18] text-base font-medium text-center leading-normal">+ Add Account</span>
          </div>
        </div>

        {/* Additional sections would continue here as in the original code */}
        
        {/* Achievements & Activity Section */}
        <div className="w-[630px] h-[471px] left-[330px] top-[871px] absolute bg-[#191919] rounded-[32px] shadow border border-neutral-800">
          <div className="left-[50px] top-[40px] absolute text-[#e97f18] text-xl font-semibold">Achievements & Activity</div>
          <div className="p-[5px] left-[550px] top-[43px] absolute  border border-[#e97f18] rounded-md flex items-center">
          <Icon icon="tabler:arrow-up-right" width="24" height="24" className="text-[#e97f18]" />
          </div>
          <div className="absolute left-[50px] top-[100px] text-white">
            <p>Your Achievements will be displayed here</p>
          </div>
        </div>


         {/* Track record */}
         <div className="w-[630px] h-[471px] left-[330px] top-[1360px] absolute bg-[#191919] rounded-[32px] shadow border border-neutral-800">
          <div className="left-[50px] top-[40px] absolute text-[#e97f18] text-xl font-semibold">Track Record</div>
          <div className="p-[5px] left-[550px] top-[43px] absolute  border border-[#e97f18] rounded-md flex items-center">
          <Icon icon="tabler:arrow-up-right" width="24" height="24" className="text-[#e97f18]" />
          </div>
          <div className="absolute left-[50px] top-[100px] text-white">
            <p>Your Track Record will be displayed here</p>
          </div>
        </div>
        
           {/* Music Platforms Box */}
        <div className="w-[404px] h-[679px] left-[990px] top-[1037px] absolute bg-[#191919] rounded-[32px] shadow border-t border-b border-neutral-800">
        
        <div className="p-[5px] left-[336px] top-[40px] absolute border border-[#e97f18] rounded-md justify-start items-start gap-2.5 inline-flex">
            <FaPencilAlt className="text-[#e97f18]" />
        </div>
        <div className="left-[43px] top-[40px] absolute  text-xl font-semibold font-poppins text-[#e97f18]">Music Platforms</div>
        <div className="w-[323px] h-[48px] left-[43px] top-[550px] absolute bg-transparent border-[3px] border-[#333333] border-dashed py-8 rounded-2xl flex items-center justify-center mt-5">
      <span className="text-[#e97f18] text-base font-medium  leading-normal">+ Add Platform</span>
    </div>
        <div className="h-[410px] left-0 top-[100px] absolute flex-col justify-start items-center gap-5 inline-flex">
            <div className="w-80 justify-start items-start inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
               
                    <FaSpotify className="text-green-400" size={50} />
                 
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-center text-gray-500 text-sm font-medium font-poppins leading-[21px]">Spotify</div>
                        <div className="text-center text-white text-base font-medium font-poppins leading-normal">Deepesh@123456</div>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[0px] border border-[#333333]"></div>
            <div className="w-80 justify-start items-center inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                <FaItunes className="text-red-400" size={50} />
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-center text-gray-500 text-sm font-medium font-poppins leading-[21px]">Apple Music</div>
                        <div className="text-center text-white text-base font-medium font-poppins leading-normal">Deepesh@123456</div>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[0px] border border-[#333333]"></div>
            <div className="w-80 justify-start items-center gap-5 inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                    
                        <Image
                         width={47}
                         height={47}
                          src="/images/jiosavan.svg"
                          alt="jio"
                        className="w-[47px] h-[47px] text-green-400" 
                        />
                        
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-center text-gray-500 text-sm font-medium font-poppins leading-[21px]">JioSavan</div>
                        <div className="text-center text-white text-base font-medium font-poppins leading-normal">Deepesh@123456</div>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[0px] border border-[#333333]"></div>
            <div className="w-80 justify-start items-center gap-5 inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                <FaAmazon className="text-black-400" size={50} />
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-center text-gray-500 text-sm font-medium font-poppins leading-[21px]">Amazon Music</div>
                        <div className="text-center text-white text-base font-medium  leading-normal">Deepesh@123456</div>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[0px] border border-[#333333]"></div>
            <div className="w-80 justify-start items-center gap-5 inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                <FaYoutube className="text-red-400" size={50} />
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-center text-gray-500 text-sm font-medium  leading-[21px]">Youtube Music</div>
                        <div className="text-center text-white text-base font-medium  leading-normal">Deepesh@123456</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        {/* Subscription Details */}
    <div className="w-[404px] h-[264px] left-[990px] top-[1746px] absolute bg-[#191919] rounded-[32px] shadow border-t border-b border-neutral-800">
  <div className="left-[50px] top-[40px] absolute text-[#e97f18] text-xl font-semibold font-poppins">Subscription Details</div>
  <div className="p-[5px] left-[336px] top-[40px] absolute  border border-[#e97f18] rounded-md flex items-center">
          <Icon icon="tabler:arrow-up-right" width="24" height="24" className="text-[#e97f18]" />
          </div>
  <div className="flex flex-col gap-6 absolute left-[50px] top-[100px]">
    {/* Plan Type */}
    <div className="flex flex-col">
      <div className="text-[#757575] text-base font-normal font-poppins">Plan Type</div>
      <div className="text-white text-base font-normal font-poppins">Independent Artist Plan</div>
    </div>
    
    {/* Next Renewal Date */}
    <div className="flex flex-col">
      <div className="text-[#757575] text-base font-normal font-poppins">Next Renewal Date</div>
      <div className="text-white text-base font-normal font-poppins">October 1, 2024</div>
    </div>
  </div>
    <div className="w-6 h-6 flex items-center justify-center">
      <div className="w-6 h-6 relative"></div>
  </div>
</div>
      </main>
    </div>
  );
}