

'use client';
import Image from "next/image";

export default function Platform() {
  return (
    <div className="bg-black p-28 font-poppins">
      {/* Heading Section */}
      <div className="text-center"><span className="text-[#e97f18] text-[40px] font-bold">Flexible Plans </span><span className="text-white text-[40px] font-bold">for Every Artist</span></div>
      <div className="text-center text-white text-2xl font-normal">Choose a plan that fits your journey—from your first track to global success.</div>
       
      <div className="w-[286px] ml-[498px] h-11 bg-[#0b0b0d] rounded-[22px] border-[#0b0b0d]">
      <button className="text-center mt-10 rounded-[22px] shadow h-11 bg-[#e97f18] text-white w-[143px]"> Subscription </button>
      <button className="text-center mt-10 rounded-[22px] shadow h-11  text-white w-[143px]"> Single Track </button>
         </div>

         <div className="text-[#a6a6a6] mt-20 text-center text-xl font-normal">This plan is only available on an annual subscription basis.</div>


         {/* Pricing Details  */}

         {/* Plan - 1 */}

         <div className="w-[394px] h-[1014px] relative bg-[#0b0b0d] rounded-2xl border border-[#9f9fa1] mt-10">
    <div className="left-[27px] top-[20px] absolute text-[#e97f18] text-[28px] font-bold font-['Poppins'] leading-[35px]">Independent Artist Plan</div>
    <div className="left-[78px] top-[115px] absolute justify-start items-center gap-2.5 inline-flex">
        <div className="text-[#e97f18] text-[40px] font-bold font-['Poppins'] leading-[66px]">₹ 1001/ Year</div>
    </div>
    <div className="h-[242px] left-[31px] top-[221px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium ">1 Artist</div>
        <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Upload Unlimited Songs and Lyrics</div>
        <div className="w-[331px] text-center text-[#e1e6f0] text-lg font-normal">Spotify Verification</div>
        <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Create royalty splits</div>
        <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Release Dashboard</div>
        <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Track Status Monitoring</div>
    </div>
    <div className="left-[139px] top-[75px] absolute text-white text-base font-normal leading-tight">₹ 83.41/ Month</div>
    <div className="w-[308px] left-[43px] top-[921.53px] absolute justify-start items-start inline-flex">
        <div className="grow shrink basis-0 h-[72px] px-[38px] py-[26px] bg-[#e97f18] rounded-[96px] justify-center items-center gap-1.5 flex">
            <div className="text-center text-white text-xl font-bold font-['Poppins'] leading-tight">Get started</div>
        </div>
    </div>
</div>

      {/* Plan - 2 */}
    </div>
  );
}

