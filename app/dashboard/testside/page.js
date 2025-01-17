

'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faUsers, faTshirt, faVideo, faCog, faSignOutAlt, faUser, faBolt } from '@fortawesome/free-solid-svg-icons';
import { useRouter, usePathname } from 'next/navigation';
// import { signOut } from "next-auth/react";
import { Icon } from "@iconify/react";
import { FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar({ progress }) {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Function to determine if a menu item is active
  const isActive = (path) => pathname === path;

  
  const navigateToProfileQuestions = () => {
    router.push('/dashboard/profile-questions'); // Replace with the correct route if different
  };

  const handleUpgrade = () => {
    router.push('/subscription/upgrade');
  };

  return (
    <div className="w-[1440px] h-[1598px] relative bg-[#0f0f0f] rounded-[30px]  overflow-hidden">
    <div className="w-[310px] h-[1383px] left-0 top-[4px] absolute rounded-[33.91px] shadow-[11.38527774810791px_12.650309562683105px_79.69693756103516px_0px_rgba(63,62,62,0.24)] border  overflow-hidden">
        <img className="w-[310px] h-[1412px] left-0 top-[-29px] absolute rounded-[31.37px]" src="https://via.placeholder.com/310x1412" />
        <div className="w-[184px] h-[169.93px] left-[72px] top-[205px] absolute">
        </div>
        <div className="w-[135px] h-6 left-[75px] top-[540px] absolute">
            <div className="w-[103px] h-[23px] left-[32px] top-[0.01px] absolute text-white text-xl font-semibold font-['Poppins']">Audience</div>
            <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden">
                <div className="w-[22px] h-4 relative">
                </div>
            </div>
        </div>
        <div className="left-[75px] top-[690px] absolute">
            <div className="w-6 h-6 left-0 top-[2.78px] absolute justify-center items-center inline-flex overflow-hidden">
                <div className="w-6 h-6 relative">
                </div>
            </div>
            <div className="left-[32px] top-0 absolute text-white text-xl font-semibold font-['Poppins'] leading-[30px]">Video & Visuals</div>
        </div>
        <div className="w-[135px] h-[26.65px] left-[75px] top-[770px] absolute">
            <div className="w-[103px] h-[23px] left-[32px] top-0 absolute text-white text-xl font-semibold font-['Poppins']">Setttings</div>
            <div className="w-6 h-6 left-0 top-[2.65px] absolute  overflow-hidden" />
        </div>
        <div className="pl-[13.87px] pr-[75.96px] py-[13.10px] left-[45px] top-[842px] absolute bg-[#0f0f0f] rounded-2xl border border-[#4f4f4f] justify-start items-start gap-[42.64px] inline-flex overflow-hidden">
            <div className="w-[18.49px] h-[18.49px] relative flex-col justify-start items-start flex overflow-hidden" />
            <div className="w-[75.04px] self-stretch relative">
                <div className="w-[18.49px] h-[18.49px] left-0 top-[0.77px] absolute flex-col justify-start items-start inline-flex overflow-hidden" />
                <div className="w-[48.55px] h-[20.81px] left-[26.49px] top-0 absolute text-[#ebebeb] text-sm font-semibold font-['Poppins']">Logout</div>
            </div>
        </div>
        <div className="w-[92px] left-[75px] top-[460.10px] absolute">
            <div className="left-[32px] top-0 absolute text-[#e97f18] text-xl font-semibold font-['Poppins']">Music</div>
            <div className="w-6 h-6 left-0 top-[2.90px] absolute justify-center items-center inline-flex overflow-hidden">
                <div className="w-6 h-6 relative">
                </div>
            </div>
        </div>
        <div className="w-[145px] h-[26px] left-[75px] top-[614px] absolute">
            <div className="w-[113px] h-[23px] left-[32px] top-0 absolute text-white text-xl font-semibold font-['Poppins']">Merch</div>
            <div className="w-6 h-6 left-0 top-[2px] absolute justify-center items-center inline-flex overflow-hidden">
                <div className="w-6 h-6 relative">
                </div>
            </div>
        </div>
        <div className="w-[267px] px-2 py-[30px] left-[18px] top-[18px] absolute bg-[#0b0b0d] rounded-3xl shadow-[0px_12.105263710021973px_24.210527420043945px_0px_rgba(0,0,0,0.24)] border border-[#4f4f4f] backdrop-blur-[36.32px] justify-center items-start gap-2 inline-flex">
            <div className="w-[297px] h-[69px] relative">
                <img className="w-[40.67px] h-[40.67px] left-[36.33px] top-0 absolute rounded-full" src="https://via.placeholder.com/41x41" />
                <div className="w-[53.17px] h-[25.43px] left-[30px] top-[43.67px] absolute text-white text-[16.95px] font-semibold font-['Poppins']">Aman</div>
                <div className="w-[161px] h-[22px] left-[97px] top-0 absolute justify-start items-center gap-2 inline-flex">
                    <div className="h-2 pl-[236.60px] bg-[#615f5f] rounded-[100px] justify-between items-start flex overflow-hidden">
                        <div className="w-[50px] h-2 relative rounded-[59px]">
                            <div className="w-[626px] h-2 left-[-770.30px] top-[-0px] absolute bg-white rounded-[100px]" />
                        </div>
                    </div>
                    <div className="w-7 h-[22px] text-white text-sm font-normal font-['Roboto'] leading-snug">20%</div>
                </div>
                <div className="w-[172px] h-[34px] px-[21.51px] py-4 left-[97px] top-[35px] absolute rounded-[76.81px] shadow-[0px_1.5362318754196167px_0px_0px_rgba(0,0,0,0.04)] border border-white justify-start items-center gap-2 inline-flex overflow-hidden">
                    <div className="text-center text-white text-xs font-normal font-['Poppins'] leading-[18px]">Complete your profile</div>
                </div>
            </div>
        </div>
        <div className="w-[226px] h-[265px] left-[39px] top-[1054px] absolute">
            <div className="w-[226px] h-[265px] left-0 top-0 absolute bg-white/10 rounded-[36px] shadow-[0px_5px_5px_0px_rgba(0,0,0,0.20)] shadow-[0px_3px_14px_0px_rgba(0,0,0,0.12)] shadow-[0px_8px_10px_0px_rgba(0,0,0,0.14)]" />
            <div className="w-[132px] h-[141.62px] p-6 left-[47px] top-[37.55px] absolute bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a] rounded-[100px] border-2 border-[#333333] justify-center items-center gap-2.5 inline-flex overflow-hidden">
                <div className="p-5 bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a] rounded-[75px] border-2 border-[#333333] justify-start items-start gap-2.5 flex overflow-hidden">
                    <div className="w-11 h-11 relative  overflow-hidden" />
                </div>
            </div>
            <div className="pl-[13.87px] pr-[33px] pt-[13.87px] pb-[15.43px] left-[24px] top-[179.17px] absolute bg-[#0f0f0f] rounded-2xl border border-[#757575] justify-start items-start gap-[25.64px] inline-flex overflow-hidden">
                <div className="w-[18.49px] h-[18.49px] relative flex-col justify-start items-start flex overflow-hidden" />
                <div className="w-[87px] h-[21px] text-[#ebebeb] text-sm font-semibold font-['Poppins']">UPGRADE</div>
            </div>
        </div>
    </div>
    <div className="h-[193px] pl-[50px] pr-[496px] pt-5 pb-[134px] left-[392px] top-[219px] absolute rounded-[36px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-t border-b border-neutral-800 justify-start items-center inline-flex">
        <div className="w-[399px] self-stretch flex-col justify-end items-start gap-2 inline-flex">
            <div className="w-[303px] text-white text-[32px] font-medium font-['Poppins'] leading-[48px]">Hello Aman!</div>
            <div className="w-[450px] text-[#d1d1d6] text-xl font-normal font-['Poppins'] leading-[30px]">Launch your release today with Young CEO Entertainment!</div>
        </div>
    </div>
    <div className="w-[945px] h-[948px] left-[392px] top-[557px] absolute bg-black rounded-[36px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#4f4f4f]  overflow-hidden">
        <img className="w-[559px] h-[866px] left-[-77px] top-[82px] absolute" src="https://via.placeholder.com/559x866" />
        <div className="h-[104px] left-[338px] top-[170px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch text-white text-xl font-medium font-['Poppins']">Write Your Song Title Here!</div>
            <div className="w-[505px] h-16 relative">
                <div className="w-[505px] h-16 left-0 top-0 absolute bg-[#0b0b0d] rounded-[10px] border border-[#cdcdcd]" />
                <div className="w-[245px] h-[29px] left-[23px] top-[20px] absolute text-[#a6a6a6] text-base font-normal font-['Poppins']">mai khush hun, meri kya galti</div>
            </div>
        </div>
        <div className="h-[104px] left-[338px] top-[496px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch text-white text-xl font-normal font-['Poppins'] leading-[29.39px]">Language of the Titles</div>
            <div className="w-[505px] h-16 relative">
                <div className="w-[505px] h-16 left-0 top-0 absolute bg-[#0b0b0d] rounded-[10px] border border-white" />
                <div className="w-[245px] h-[29px] left-[23px] top-[20px] absolute text-[#a6a6a6] text-base font-normal font-['Poppins']">English</div>
                <div className="w-6 h-6 left-[457.37px] top-[20px] absolute flex-col justify-start items-start inline-flex" />
            </div>
        </div>
        <div className="h-[104px] left-[338px] top-[640px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch text-white text-xl font-normal font-['Poppins'] leading-[29.39px]">Release Type of your music</div>
            <div className="w-[505px] h-16 relative">
                <div className="w-[505px] h-16 left-0 top-0 absolute bg-[#0b0b0d] rounded-[10px] border border-white" />
                <div className="w-[245px] h-[29px] left-[23px] top-[20px] absolute text-[#a6a6a6] text-base font-normal font-['Poppins']">Single</div>
                <div className="w-6 h-6 left-[457.37px] top-[20px] absolute flex-col justify-start items-start inline-flex" />
            </div>
        </div>
        <div className="h-[142px] left-[338px] top-[314px] absolute">
            <div className="w-[505px] h-[104px] left-0 top-0 absolute flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch"><span class="text-white text-xl font-medium font-['Poppins']">Version </span><span class="text-white text-xl font-light font-['Poppins']">( Optional )</span></div>
                <div className="w-[505px] h-16 relative">
                    <div className="w-[505px] h-16 left-0 top-0 absolute bg-[#0b0b0d] rounded-[10px] border border-white" />
                    <div className="w-[245px] h-[29px] left-[23px] top-[20px] absolute text-[#a6a6a6] text-base font-normal font-['Poppins']">mai khush hun, meri kya galti</div>
                </div>
            </div>
            <div className="w-[505px] left-0 top-[112px] absolute text-[#c7c7c7] text-xs font-light font-['Poppins'] leading-[29.39px]">Specify how this release differs from the original (e.g., Remix, Radio Edit, Bonus Track)</div>
        </div>
        <div className="w-[505px] left-[338px] top-[752px] absolute text-[#c7c7c7] text-xs font-light font-['Poppins'] leading-[29.39px]">Choose your release type: Album, Single, EP, or Compilation</div>
        <div className="left-[431px] top-[842px] absolute justify-start items-center gap-5 inline-flex">
            <div className="h-[52.32px] px-4 py-3 rounded-[9.27px] shadow-[0px_2.316694498062134px_0px_0px_rgba(0,0,0,0.04)] border border-[#e97f18] justify-center items-center gap-2 flex overflow-hidden">
                <div className="text-center text-[#e97f18] text-xl font-medium font-['Poppins'] leading-relaxed">Cancel</div>
            </div>
            <div className="h-[52.32px] px-4 py-3 bg-[#e97f18] rounded-[9.27px] shadow-[0px_2.316694498062134px_0px_0px_rgba(0,0,0,0.04)] border border-black justify-center items-center gap-2 flex overflow-hidden">
                <div className="text-center text-white text-xl font-semibold font-['Poppins'] leading-relaxed">Next</div>
            </div>
        </div>
        <div className="left-[338px] top-[36px] absolute text-center text-white text-[32px] font-normal font-['Poppins'] leading-relaxed">Key Details of Your Release</div>
        <div className="w-[505px] pl-[236.60px] left-[338px] top-[102px] absolute bg-[#fff6ed] rounded-[100px] justify-between items-start inline-flex overflow-hidden">
            <div className="w-[50px] h-2 relative rounded-[59px]">
                <div className="w-[513px] h-2 left-[-769.80px] top-[-0px] absolute bg-[#e97f18] rounded-[100px]" />
            </div>
        </div>
    </div>
    <div className="pr-1.5 pt-5 left-[449px] top-[456px] absolute justify-start items-center inline-flex">
        <div className="w-[837px]"><span class="text-[#e97f18] text-[40px] font-medium font-['Poppins'] leading-[60px]">Essential Details</span><span class="text-white text-[40px] font-medium font-['Poppins'] leading-[60px]"> for Your Next Big Release</span></div>
    </div>
    <div className="w-[1094px] h-[88px] left-[338px] top-[8px] absolute flex-col justify-start items-end gap-[17.46px] inline-flex">
        <div className="self-stretch h-[77.70px] pl-[41.90px] pr-[87.30px] border justify-between items-center inline-flex">
            <div className="w-[598.88px] h-[63.73px] justify-start items-center gap-[17.46px] flex">
                <div className="h-[78.57px] justify-start items-center gap-[26.19px] flex">
                    <div className="w-[67.39px] h-[78.57px] relative" />
                </div>
            </div>
            <div className="w-24 h-[43.65px] justify-center items-start gap-[17.46px] flex">
                <div className="w-[34.92px] h-[43.65px] relative">
                    <div className="w-[34.92px] h-[34.92px] left-0 top-[8.73px] absolute bg-gray-100 rounded-full" />
                    <div className="w-[20.54px] h-[20.54px] left-[7.19px] top-[15.92px] absolute justify-center items-center inline-flex">
                        <div className="w-[20.54px] h-[20.54px] relative">
                        </div>
                    </div>
                    <div className="h-3.5 left-[20.95px] top-0 absolute bg-white/0 flex-col justify-center items-center inline-flex">
                        <div className="h-3.5 px-[3.49px] bg-[#ff4d4f] rounded-[87.30px] justify-center items-center inline-flex overflow-hidden">
                            <div className="w-[6.98px] h-[17.46px] text-center text-white text-xs font-normal font-['Roboto Mono'] leading-tight">99</div>
                        </div>
                    </div>
                </div>
                <img className="w-[43.65px] h-[43.65px] rounded-full" src="https://via.placeholder.com/44x44" />
            </div>
        </div>
    </div>
</div>
  );
}
