'use client';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Image from 'next/image';
import { FaPencilAlt, FaArrowUp, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaCheckCircle, FaSpotify, FaItunes, FaAmazon } from 'react-icons/fa';
// import { useSession } from "next-auth/react";
import Header from '@/app/dashboard/components/Header';


export default function Profile() {
    // const { data: session } = useSession();
  return (
    <div className="flex flex-auto w-full h-[2100px] bg-[#0F0F0F]">
      <Sidebar progress={100}/>
    
      <main className="flex-1 p-6 flex flex-col gap-6 text-white">
      <Header /> 
  
         {/* Profile Section */}
         <div className="w-[947px] ml-14 h-[369px] relative bg-gradient-to-b from-[#7f7f7f] to-[#191919] rounded-[32px]">
  <div className="w-[410px] h-8 left-[535px] top-[87px] absolute text-white text-4xl font-semibold font-['Poppins'] leading-[18.49px]">Enjoy all benefits</div>
  <div className="w-[381px] left-[535px] top-[131px] absolute text-white text-sm font-normal font-['Poppins'] leading-snug">
    Get access to exclusive features and content available only to premium members. Elevate your experience with our premium offerings today!
  </div>
  <div className="w-[400px] h-14 px-8 left-[535px] top-[227px] absolute bg-white rounded-[100px] flex justify-center items-center">
    <div className="text-black whitespace-nowrap text-xl font-semibold font-['Poppins']">Get Premium</div>
  </div>
</div>



<div className="w-[947px] ml-14 h-[718px] relative bg-[#191919] rounded-[32px]">
    <div className="h-[580px] left-[31px] top-[78px] absolute flex-col justify-start items-start gap-5 inline-flex">
        <div className="w-[890px] h-20 relative">
            <div className="w-[890px] h-20 left-0 top-0 absolute bg-[#0f0f0f] rounded-[30px] border border-[#757575]" />
            <div className="w-6 h-6 left-[827px] top-[26px] absolute justify-center items-center inline-flex">
                <div className="w-6 h-6 relative">
                </div>
            </div>
            <div className="w-[133px] h-7 left-[46px] top-[26px] absolute">
                <div className="w-7 h-7 left-0 top-0 absolute justify-center items-center inline-flex">
                    <div className="w-7 h-7 relative">
                    </div>
                </div>
                <div className="w-[85px] h-[19px] left-[48px] top-[4px] absolute">
                    <div className="left-0 top-0 absolute text-white text-xl font-medium font-['Poppins'] leading-[18.49px]">Account</div>
                </div>
            </div>
        </div>
        <div className="w-[890px] h-20 relative">
            <div className="w-[890px] h-20 left-0 top-0 absolute bg-[#0f0f0f] rounded-[30px] border border-[#757575]" />
            <div className="w-6 h-6 left-[827px] top-[26px] absolute bg-[#0f0f0f] justify-center items-center inline-flex">
                <div className="w-6 h-6 relative">
                </div>
            </div>
            <div className="w-[164px] h-7 left-[46px] top-[26px] absolute">
                <div className="w-[116px] h-[19px] left-[48px] top-[4px] absolute">
                    <div className="left-0 top-0 absolute text-white text-xl font-medium font-['Poppins'] leading-[18.49px]">Notification</div>
                </div>
                <div className="w-7 h-7 left-0 top-0 absolute bg-[#0f0f0f] justify-center items-center inline-flex">
                    <div className="w-7 h-7 relative">
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[890px] h-20 relative">
            <div className="w-[890px] h-20 left-0 top-0 absolute bg-[#0f0f0f] rounded-[30px] border border-[#757575]" />
            <div className="w-6 h-6 left-[827px] top-[26px] absolute justify-center items-center inline-flex">
                <div className="w-6 h-6 relative">
                </div>
            </div>
            <div className="w-[253px] h-7 left-[46px] top-[25px] absolute">
                <div className="w-[205px] h-[19px] left-[48px] top-[5px] absolute">
                    <div className="left-0 top-0 absolute text-white text-xl font-medium font-['Poppins'] leading-[18.49px]">Password & Security</div>
                </div>
                <div className="w-7 h-7 left-0 top-0 absolute justify-center items-center inline-flex">
                    <div className="w-7 h-7 relative">
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[890px] h-20 relative">
            <div className="w-[890px] h-20 left-0 top-0 absolute bg-[#0f0f0f] rounded-[30px] border border-[#757575]" />
            <div className="w-6 h-6 left-[827px] top-[26px] absolute bg-[#0f0f0f] justify-center items-center inline-flex">
                <div className="w-6 h-6 relative">
                </div>
            </div>
            <div className="w-[92px] h-7 left-[50px] top-[27px] absolute">
                <div className="w-7 h-7 left-0 top-0 absolute flex-col justify-start items-start inline-flex" />
                <div className="w-11 h-[19px] left-[48px] top-[4px] absolute">
                    <div className="left-0 top-0 absolute text-white text-xl font-medium font-['Poppins'] leading-[18.49px]">Plan</div>
                </div>
            </div>
        </div>
        <div className="w-[890px] h-20 relative">
            <div className="w-[890px] h-20 left-0 top-0 absolute bg-[#0f0f0f] rounded-[30px] border border-[#757575]" />
            <div className="w-6 h-6 left-[827px] top-[26px] absolute bg-[#0f0f0f] justify-center items-center inline-flex">
                <div className="w-6 h-6 relative">
                </div>
            </div>
            <div className="w-[140px] h-[19px] left-[98px] top-[32px] absolute">
                <div className="left-0 top-0 absolute text-white text-xl font-medium font-['Poppins'] leading-[18.49px]">Privacy policy</div>
            </div>
            <div className="w-7 h-7 left-[46px] top-[26px] absolute justify-center items-center inline-flex">
                <div className="w-7 h-7 relative">
                </div>
            </div>
        </div>
        <div className="w-[890px] h-20 relative">
            <div className="w-[890px] h-20 left-0 top-0 absolute bg-[#0f0f0f] rounded-[30px] border border-[#757575]" />
            <div className="w-6 h-6 left-[827px] top-[26px] absolute bg-[#0f0f0f] justify-center items-center inline-flex">
                <div className="w-6 h-6 relative">
                </div>
            </div>
            <div className="w-[88px] h-7 left-[50px] top-[28px] absolute">
                <div className="w-10 h-[19px] left-[48px] top-[4px] absolute">
                    <div className="left-0 top-0 absolute text-white text-xl font-medium font-['Poppins'] leading-[18.49px]">FAQ</div>
                </div>
                <div className="w-7 h-7 left-0 top-0 absolute justify-center items-center inline-flex">
                    <div className="w-7 h-7 relative">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      </main>
    </div>
  );
}