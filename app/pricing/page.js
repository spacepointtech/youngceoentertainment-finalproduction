
// 'use client';
// import { useState } from 'react';

// export default function Pricing() {
//   const [activeTab, setActiveTab] = useState('subscription');

//   return (
//     <div className="w-[1440px] h-[1543px] relative bg-black font-p">
//       {/* Top Section */}
//       <div className="left-[268px] top-[141.66px] absolute">
//         <div className="text-center">
//           <span className="text-[#e97f18] text-[40px] font-bold">Flexible Plans </span>
//           <span className="text-white text-[40px] font-bold">for Every Artist</span>
//         </div>
//         <div className="text-center text-white text-2xl font-normal">
//           Choose a plan that fits your journey—from your first track to global success.

//         </div>

//       </div>

//       {/* Toggle Buttons */}
//       <div className="w-[286px] h-11 left-[598px] top-[282px] absolute">
//         <div className="w-[286px] h-11 left-0 top-0 absolute bg-[#383838] rounded-[22px] border-[#383838]" />
//         <div
//           className={`w-[143px] h-11 left-0 top-0 absolute rounded-[22px] shadow ${
//             activeTab === 'subscription' ? 'bg-[#e97f18]' : ''
//           }`}
//         />
//         <div
//           className={`w-[143px] h-11 left-[143px] top-0 absolute rounded-[22px] shadow ${
//             activeTab === 'singleTrack' ? 'bg-[#e97f18]' : ''
//           }`}
//         />
//         <button
//           onClick={() => setActiveTab('subscription')}
//           className="left-[19px] top-[10px] absolute text-center text-white text-base font-medium tracking-wide"
//         >
//           Subscription
//         </button>
//         <button
//           onClick={() => setActiveTab('singleTrack')}
//           className="w-[106.37px] left-[156.98px] top-[10px] absolute text-center text-white text-base font-normal tracking-wide"
//         >
//           Single Track
//         </button>
//       </div>

//       {activeTab === 'subscription' && (
//         <>
//           {/* Subscription Section */}
                 
//         <div className="left-[428px] top-[366px] absolute text-[#a6a6a6] text-xl font-normal">This plan is only available on an annual subscription basis.</div>
//           <div className="left-[109px] top-[436px] absolute justify-start items-center gap-[29px] inline-flex">
//             {/* Plan - 1 */}
//             <div className="w-[394px] h-[1014px] relative bg-[#0b0b0d] rounded-2xl border border-[#9f9fa1] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18] hover:mt-5 ">
//               <div className="left-[27px] top-[20px] absolute text-[#e97f18] text-[28px] font-bold leading-[35px]">
//                 Independent Artist Plan
//               </div>
//               <div className="left-[78px] top-[115px] absolute justify-start items-center gap-2.5 inline-flex">
//                 <div className="text-[#e97f18] text-[40px] font-bold leading-[66px]">₹ 1001/ Year</div>
//               </div>
//               <div className="left-[139px] top-[75px] absolute text-white text-base font-normal leading-tight">
//                 ₹ 83.41/ Month
//               </div>
//               <div className="h-[242px] left-[31px] top-[221px] absolute flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium ">1 Artist</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium ">
//                   Upload Unlimited Songs and Lyrics
//                 </div>
//                 <div className="w-[331px] text-center text-[#e1e6f0] text-lg font-normal ">
//                   Spotify Verification
//                 </div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium ">Create royalty splits</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium ">Release Dashboard</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Track Status Monitoring</div>
//               </div>
//               <div className="w-[308px] left-[43px] top-[921.53px] absolute justify-start items-start inline-flex">
//                 <div className="grow shrink basis-0 h-[72px] px-[38px] py-[20px] bg-[#e97f18] rounded-[96px] justify-center items-center gap-1.5 flex">
//                   <button className="text-center text-white text-xl font-bold leading-tight">Get started</button>
//                 </div>
//               </div>
//             </div>

//                    {/* Plan - 2 */}
        
//         <div className="w-[394px] h-[1014px] relative bg-[#0b0b0d] rounded-2xl border border-[#9f9fa1] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18] hover:mt-5">

//             <div className="left-[133px] top-[20px] absolute text-[#e97f18] text-[28px] font-bold leading-[35px]">Duo Plan</div>
//             <div className="left-[78px] top-[115px] absolute justify-start items-center gap-2.5 inline-flex">
//                 <div className="text-[#e97f18] text-[40px] font-bold leading-[66px]">₹ 2001/ Year</div>
//             </div>
//             <div className="left-[139px] top-[75px] absolute text-white text-base font-normal  leading-tight">₹ 83.41/ Month</div>
//             <div className="h-[414px] left-[31px] top-[221px] absolute flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium ">2 Artist</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Upload Unlimited Songs and Lyrics</div>
//                 <div className="w-[331px] text-center text-[#e1e6f0] text-lg font-normal">Spotify Verification</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Create royalty splits</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Release Dashboard</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Track Status Monitoring</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Synced Lyrics in Apple Music</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Daily Streaming Stats</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Customized Release Date</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Custom Itune  pricing</div>
//             </div>
//             <div className="w-[308px] left-[43px] top-[921.53px] absolute justify-start items-start inline-flex">
//                 <div className="grow shrink basis-0 h-[72px] px-[38px] py-[26px] bg-[#e97f18] rounded-[96px] justify-center items-center gap-1.5 flex ">
//                     <button className="text-center text-white text-xl font-bold  leading-tight">Get started</button>
//                 </div>
//             </div>
//         </div>
          
//           {/* Plan - 3 Box */}
        
//         <div className="w-[394px] h-[1014px] relative bg-[#0b0b0d] rounded-2xl border border-[#9f9fa1] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18] hover:mt-5">
//             <div className="left-[133px] top-[20px] absolute text-[#e97f18] text-[28px] font-bold leading-[35px]">Label Plan</div>
//             <div className="left-[78px] top-[115px] absolute justify-start items-center gap-2.5 inline-flex">
//                 <div className="text-[#e97f18] text-[40px] font-bold leading-[66px]">₹ 4899/ Year</div>
//             </div>
//             <div className="left-[139px] top-[75px] absolute text-white text-base font-normal leading-tight">₹ 83.41/ Month</div>
//             <div className="h-[586px] left-[31px] top-[295.53px] absolute flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">2 Artist</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Upload Unlimited Songs and Lyrics</div>
//                 <div className="w-[331px] text-center text-[#e1e6f0] text-lg font-normal">Spotify Verification</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Create royalty splits</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Release Dashboard</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Track Status Monitoring</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Synced Lyrics in Apple Music</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Daily Streaming Stats</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Customized Label name</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Customized Release Date</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Custom Itune  pricing</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">1TB Instant File Sharing</div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">RIAA gold </div>
//                 <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Platinum Monitoring</div>
//             </div>
//             <div className="w-[321px] h-[54.53px] left-[36px] top-[201px] absolute">
//                 <div className="w-[321px] h-[13.53px] left-0 top-[41px] absolute">
//                       {/* Slider Bar for artists Change */}
//                     <div className="w-[321px] h-[0px] left-0 top-[8.53px]  absolute border-4  border-[#757575]"></div>
//                     <div className="w-[43px] h-[0px] left-0 top-[8.65px] absolute border-4 border-[#e97f18]"></div>
//                     <div className="w-[13.53px] h-[13.53px] left-[36.45px] top-1 absolute bg-white rounded-full border border-[#e97f18]" />
//                 </div>
//                    {/* Artist number */}
//                 <div className="w-[52px] h-[25px] pt-px pb-[5px] left-[17px] top-0 absolute bg-[#e97f18] rounded-2xl justify-center items-center inline-flex">
//                     <div className="w-[11px] h-[19px] text-center text-white text-base font-medium ">5</div>
//                 </div>
//             </div>

//             <div className="w-[308px] left-[43px] top-[921.53px] absolute justify-start items-start inline-flex">
//                 <div className="grow shrink basis-0 h-[72px] px-[38px] py-[26px] bg-[#e97f18] rounded-[96px] justify-center items-center gap-1.5 flex">
//                     <button className="text-center text-white text-xl font-bold leading-tight">Get started</button>
//                 </div>
//             </div>
//         </div>
//     </div>
        
//         </>
//       )}

//       {activeTab === 'singleTrack' && (
//      <div>
//     <div className="w-[1240px] h-[252px] justify-center items-center inline-flex">
//      </div>
//     <div className="w-[1240px] ml-20 mt-[120px] h-[252px] px-10 pt-5 pb-[22px] relative bg-[#0b0b0d] rounded-xl border border-[#9f9fa1] justify-center inline-flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18] hover:mr-10">
//     <div className="grow shrink basis-0 self-stretch pl-px py-[3px] justify-center items-center inline-flex">
// <div className="grow shrink basis-0 self-stretch justify-between items-center inline-flex">
// <div className="w-[689px] flex-col justify-start items-start gap-4 inline-flex">
// <div className="w-[424px] text-white text-[28px] font-bold font-['Poppins']">Distribute a Single Track</div>
// <div className="self-stretch h-[92px] text-white text-xl font-normal leading-[38px]">One-time distribution for a single song. Get your music on top platforms without a subscription.</div>
// <div className="self-stretch text-white text-xl font-bold leading-[38px]">Note: This plan does not include dashboard access.</div>
// </div>
// <div className="w-[275px] flex-col justify-start items-end gap-5 inline-flex">
// <div className="self-stretch text-center text-white text-[32px] ml-10 font-semibold ">₹ 399 / Track</div>
// <div className="h-14 px-16 py-[5px] bg-[#e97f18] rounded-[96px] justify-start items-center gap-2.5 inline-flex">
// <div className="text-center text-white text-xl font-medium leading-[44px]">Get Started</div>
// </div>
// </div>
// </div>
// </div>
//     </div>
//     </div>
 
//       )}
//     </div>
//   );
// }



'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('subscription');
  const [artistCount, setArtistCount] = useState(5); // Default value
  const artistOptions = [5, 10, 15, 20, 30, 40];
  const artistPrices = {
    5: 4899,
    10: 8199,
    15: 10299,
    20: 12899,
    30: 15699,
    40: 18199,
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setArtistCount(artistOptions[value]);
  };

 
  
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
                 
        <div className="left-[428px] top-[366px] absolute text-[#a6a6a6] text-xl font-normal">This plan is only available on an annual subscription basis.</div>
          <div className="left-[109px] top-[436px] absolute justify-start items-center gap-[29px] inline-flex">
            {/* Plan - 1 */}
            <div className="w-[394px] h-[1014px] relative bg-[#0b0b0d] rounded-2xl border border-[#9f9fa1] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18] hover:mt-5 ">
              <div className="left-[27px] top-[20px] absolute text-[#e97f18] text-[28px] font-bold leading-[35px]">
                Independent Artist Plan
              </div>
              <div className="left-[78px] top-[115px] absolute justify-start items-center gap-2.5 inline-flex">
                <div className="text-[#e97f18] text-[40px] font-bold leading-[66px]">₹ 1001/ Year</div>
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
                <div className="grow shrink basis-0 h-[72px] px-[38px] py-[20px] bg-[#e97f18] rounded-[96px] justify-center items-center gap-1.5 flex">
                <Link href="/signup" className="text-center text-white text-xl font-bold leading-tight">Get started</Link>
                </div>
              </div>
            </div>

                   {/* Plan - 2 */}
        
        <div className="w-[394px] h-[1014px] relative bg-[#0b0b0d] rounded-2xl border border-[#9f9fa1] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18] hover:mt-5">

            <div className="left-[133px] top-[20px] absolute text-[#e97f18] text-[28px] font-bold leading-[35px]">Duo Plan</div>
            <div className="left-[78px] top-[115px] absolute justify-start items-center gap-2.5 inline-flex">
                <div className="text-[#e97f18] text-[40px] font-bold leading-[66px]">₹ 2001/ Year</div>
            </div>
            <div className="left-[139px] top-[75px] absolute text-white text-base font-normal  leading-tight">₹ 166.75/ Month</div>
            <div className="h-[414px] left-[31px] top-[221px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium ">2 Artist</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Upload Unlimited Songs and Lyrics</div>
                <div className="w-[331px] text-center text-[#e1e6f0] text-lg font-normal">Spotify Verification</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Create royalty splits</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Release Dashboard</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Track Status Monitoring</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Synced Lyrics in Apple Music</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Daily Streaming Stats</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Customized Release Date</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Custom Itune  pricing</div>
            </div>
            <div className="w-[308px] left-[43px] top-[921.53px] absolute justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[72px] px-[38px] py-[26px] bg-[#e97f18] rounded-[96px] justify-center items-center gap-1.5 flex ">
                <Link href="/signup" className="text-center text-white text-xl font-bold leading-tight">Get started</Link>
                </div>
            </div>
        </div>
          
          {/* Plan - 3 Box */}
        
        <div className="w-[394px] h-[1014px] relative bg-[#0b0b0d] rounded-2xl border border-[#9f9fa1] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18] hover:mt-5">
            <div className="left-[133px] top-[20px] absolute text-[#e97f18] text-[28px] font-bold leading-[35px]">Label Plan</div>
            <div className="left-[78px] top-[115px] absolute justify-start items-center gap-2.5 inline-flex">
                <div className="text-[#e97f18] text-[40px] font-bold leading-[66px]">₹  {artistPrices[artistCount]} / Year</div>
            </div>
            <div className="left-[139px] top-[75px] absolute text-white text-base font-normal leading-tight">₹ {(artistPrices[artistCount] / 12).toFixed(2)} / Month</div>
            <div className="h-[586px] left-[31px] top-[295.53px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">5+ Artist</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Upload Unlimited Songs and Lyrics</div>
                <div className="w-[331px] text-center text-[#e1e6f0] text-lg font-normal">Spotify Verification</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Create royalty splits</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Release Dashboard</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Track Status Monitoring</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Synced Lyrics in Apple Music</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Daily Streaming Stats</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Customized Label name</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Customized Release Date</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Custom Itune  pricing</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">1TB Instant File Sharing</div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">RIAA gold </div>
                <div className="self-stretch text-center text-[#e1e6f0] text-lg font-medium">Platinum Monitoring</div>
            </div>
            <div className="w-[321px] h-[54.53px] left-[36px] top-[201px] absolute">
                <div className="w-[321px] h-[13.53px] left-0 top-[41px] absolute">
                      {/* Slider Bar for artists Change */}
                      <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={artistOptions.indexOf(artistCount)}
                onChange={handleSliderChange}
                className="slider w-full bg-[#e97f18] "
                style={{  background: `#e97f18`, }}
              />
                    
                </div>
                   {/* Artist number */}
                <div className="w-[52px] h-[25px] pt-px pb-[5px] left-[17px] top-0 absolute bg-[#e97f18] rounded-2xl justify-center items-center inline-flex">
                    <div className="w-[11px] h-[19px] text-center text-white text-base font-medium "> {artistCount} </div>
                </div>
            </div>

            <div className="w-[308px] left-[43px] top-[921.53px] absolute justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[72px] px-[38px] py-[26px] bg-[#e97f18] rounded-[96px] justify-center items-center gap-1.5 flex">
             <Link href="/signup" className="text-center text-white text-xl font-bold leading-tight">Get started</Link>
                </div>
            </div>
        </div>
    </div>
        
        </>
      )}

      {activeTab === 'singleTrack' && (
     <div>
    <div className="w-[1240px] h-[252px] justify-center items-center inline-flex">
     </div>
    <div className="w-[1240px] ml-20 mt-[120px] h-[252px] px-10 pt-5 pb-[22px] relative bg-[#0b0b0d] rounded-xl border border-[#9f9fa1] justify-center inline-flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18] hover:mr-10">
    <div className="grow shrink basis-0 self-stretch pl-px py-[3px] justify-center items-center inline-flex">
<div className="grow shrink basis-0 self-stretch justify-between items-center inline-flex">
<div className="w-[689px] flex-col justify-start items-start gap-4 inline-flex">
<div className="w-[424px] text-white text-[28px] font-bold font-['Poppins']">Distribute a Single Track</div>
<div className="self-stretch h-[92px] text-white text-xl font-normal leading-[38px]">One-time distribution for a single song. Get your music on top platforms without a subscription.</div>
<div className="self-stretch text-white text-xl font-bold leading-[38px]">Note: This plan does not include dashboard access.</div>
</div>
<div className="w-[275px] flex-col justify-start items-end gap-5 inline-flex">
<div className="self-stretch text-center text-white text-[32px] ml-10 font-semibold ">₹ 399 / Track</div>
<div className="h-14 px-16 py-[5px] bg-[#e97f18] rounded-[96px] justify-start items-center gap-2.5 inline-flex">
<Link href="/signup" className="text-center text-white text-xl font-bold leading-tight">Get started</Link>
</div>
</div>
</div>
</div>
    </div>
    </div>
 
      )}
    </div>
  );
}

