


'use client';
import { useState } from 'react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('subscription');

  return (
    <div className="w-[1440px] h-[1543px] relative bg-black font-p">
      {/* Top Section */}
      <div className="left-[268px] top-[141.66px] absolute">
        <div className="text-center">
          <span className="text-[#e97f18] text-[40px] font-bold">Flexible Plans </span>
          <span className="text-white text-[40px] font-bold">for Every Artist</span>
        </div>
        <div className="text-center text-white text-2xl font-normal">
          Choose a plan that fits your journey—from your first track to global success.
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="w-[286px] h-11 left-[598px] top-[282px] absolute">
        <div className="w-[286px] h-11 left-0 top-0 absolute bg-[#383838] rounded-[22px] border-[#383838]" />
        <div
          className={`w-[143px] h-11 left-0 top-0 absolute rounded-[22px] shadow ${
            activeTab === 'subscription' ? 'bg-[#e97f18]' : ''
          }`}
        />
        <div
          className={`w-[143px] h-11 left-[143px] top-0 absolute rounded-[22px] shadow ${
            activeTab === 'singleTrack' ? 'bg-[#e97f18]' : ''
          }`}
        />
        <button
          onClick={() => setActiveTab('subscription')}
          className="left-[19px] top-[10px] absolute text-center text-white text-base font-medium tracking-wide"
        >
          Subscription
        </button>
        <button
          onClick={() => setActiveTab('singleTrack')}
          className="w-[106.37px] left-[156.98px] top-[10px] absolute text-center text-white text-base font-normal tracking-wide"
        >
          Single Track
        </button>
      </div>

      {activeTab === 'subscription' && (
        <>
          {/* Subscription Section */}
          <div className="left-[428px] top-[366px] absolute text-[#a6a6a6] text-xl font-normal">
            This plan is only available on an annual subscription basis.
          </div>
          <div className="left-[109px] top-[436px] absolute justify-start items-center gap-[29px] inline-flex">
            {/* Plan Boxes */}
            <div className="w-[394px] h-[1014px] relative bg-[#0b0b0d] rounded-2xl border border-[#9f9fa1] hover:scale-105 hover:bg-[#e97f18] hover:shadow-[0_4px_20px_#e97f18] group transition-all hover:mt-5">
              <div className="left-[27px] top-[20px] absolute text-[#e97f18] text-[28px] font-bold leading-[35px] group-hover:text-white">
                Independent Artist Plan
              </div>
              <div className="left-[78px] top-[115px] absolute justify-start items-center gap-2.5 inline-flex">
                <div className="text-[#e97f18] text-[40px] font-bold leading-[66px] group-hover:text-white">
                  ₹ 1001/ Year
                </div>
              </div>
              <div className="left-[139px] top-[75px] absolute text-white text-base font-normal leading-tight">
                ₹ 83.41/ Month
              </div>
              <div className="h-[242px] left-[31px] top-[221px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium ">1 Artist</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium ">
                  Upload Unlimited Songs and Lyrics
                </div>
                <div className="w-[331px] text-center text-[#e1e6f0] text-lg font-normal ">
                  Spotify Verification
                </div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium ">Create royalty splits</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium ">Release Dashboard</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Track Status Monitoring</div>
              </div>
              <div className="w-[308px] left-[43px] top-[921.53px] absolute justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[72px] px-[38px] py-[20px] rounded-[96px] justify-center items-center gap-1.5 flex bg-[#e97f18] group-hover:bg-white transition-all">
                  <button className="text-center text-white text-xl font-bold leading-tight group-hover:text-[#e97f18]">
                    Get started
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Plans */}
            {/* Add more plan boxes here with the same hover styles */}
          </div>
        </>
      )}

      {activeTab === 'singleTrack' && (
        <div>
          {/* Single Track Section */}
        </div>
      )}
    </div>
  );
}
