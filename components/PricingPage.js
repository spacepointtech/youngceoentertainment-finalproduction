// 'use client';
// import Image from "next/image";
// import Link from "next/link";

// export default function Pricing() {
//   return (
//     <div className="bg-black font-poppins">
//       <div className="text-center p-20">
//         <span className="text-[#e97f18] text-[40px] font-bold">Affordable</span>
//         <span className="text-white text-[40px] font-bold"> Music Distribution for Every Artist</span>
//         <div className="text-center text-white text-2xl font-normal">
//           Click below to explore all pricing options!
//         </div>
//       </div>

//       <div className="w-[1250px] h-auto px-10 pt-[17px] pb-5 bg-[#0b0b0d] rounded-xl border border-[#9f9fa1] ml-20 inline-flex">
//         <div className="w-full h-auto relative flex flex-col justify-start items-start">
//           <div className="font-bold text-white text-2xl flex justify-between w-full">
//             <span>Independent Artist Plan</span>
//             <span className="mr-12 font-semibold text-[34px]">₹ 1001 / Year</span>
//           </div>
//           <div className="flex justify-between items-start w-full mt-5">
//             <span className="text-white text-xl font-normal leading-relaxed w-3/4">
//               Annual subscription for solo artists, offering global music
//               <br />
//               distribution to top platforms. Simple, transparent, and hassle-free.
//             </span>
//             <div className="h-14 px-12 text-center text-[#e97f18] text-xl font-normal leading-[46px] hover:text-white py-[5px] rounded-lg border border-[#e97f18] inline-flex items-center hover:bg-[#e97f18]">
             
//                <Link href="/pricing">  View Plan Details </Link>
             
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-[1250px] mt-10 h-auto px-10 pt-[17px] pb-5 bg-[#0b0b0d] rounded-xl border border-[#9f9fa1] ml-20 inline-flex">
//         <div className="w-full h-auto relative flex flex-col justify-start items-start">
//           <div className="font-bold text-white text-2xl flex justify-between w-full">
//             <span> Duo Plan</span>
//             <span className="mr-10 text-[34px]">₹ 2001 / Year</span>
//           </div>
//           <div className="flex justify-between items-start w-full mt-5">
//             <span className="text-white text-xl font-normal leading-relaxed w-3/4">
//               Annual subscription for 2 artists, offering global music
//               <br />
//               distribution to top platforms. Simple, transparent, and hassle-free.
//             </span>
//             <div className="h-14 text-center text-[#e97f18] text-xl font-normal leading-[46px] hover:text-white px-12 py-[5px] rounded-lg border border-[#e97f18] inline-flex items-center hover:bg-[#e97f18]">
              
//               <Link href="/pricing">  View Plan Details </Link>
           
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-[1250px] mt-10 h-auto px-10 pt-[17px] pb-5 bg-[#0b0b0d] rounded-xl border border-[#9f9fa1] ml-20 inline-flex">
//         <div className="w-full h-auto relative flex flex-col justify-start items-start">
//           <div className="font-bold text-white text-2xl flex justify-between w-full">
//             <span> Independent Label Plan</span>
//             <span className=" mr-7 text-[34px]">₹ 4899 / Year</span>
//           </div>
//           <div className="flex justify-between items-start w-full mt-5">
//             <span className="text-white text-xl font-normal leading-relaxed w-3/4">
//               Annual subscription for multiple artists, <span className="text-[#e97f18]"> Pricing adjusts based on the number of </span>
//               <br />
//                <span className="text-[#e97f18]">artists</span>--currently shown for 5 artists. Distribute globally with ease and flexibility.
//             </span>
//             <div className="h-14 px-12 py-[5px] text-center text-xl text-[#e97f18] font-normal hover:text-white rounded-lg border border-[#e97f18] inline-flex items-center hover:bg-[#e97f18]">
              
//               <Link href="/pricing">  View Plan Details </Link>
              
//             </div>
//           </div>
//         </div>
//       </div>
          
//       <div className="text-center mt-20 pb-10"><span className="text-white text-[40px] font-bold font-['Poppins']">Release a Single Song, </span><span className="text-[#e97f18] text-[40px] font-bold">No Subscription</span><span className="text-white text-[40px] font-bold"> Required</span></div>
      
//       <div className="w-[1250px] mt-10 h-auto px-10 pt-[17px] pb-5 bg-[#0b0b0d] rounded-xl border border-[#9f9fa1] ml-20 inline-flex">
//         <div className="w-full h-auto relative flex flex-col justify-start items-start">
//           <div className="font-bold text-white text-2xl flex justify-between w-full">
//             <span> Distribute a single track</span>
//             <span className="mr-7 text-4xl mt-5">₹ 399 / Track</span>
//           </div>
//           <div className="flex justify-between items-start w-full mt-[6px]">
//             <span className="text-[#a6a6a6] text-xl font-normal leading-relaxed w-3/4">
//               One-time distribution for a single song. Get your music on top platforms 
//               <br />
//               without a subscription.
//               <div className="text-white font-bold pt-8"> Note:  This plan does not include dashboard access. </div>

//             </span>
           
//             <div className="text-center text-[#e97f18] text-xl font-normal leading-[46px] hover:text-white  mt-5 h-14 px-12 py-[5px] rounded-lg border border-[#e97f18] inline-flex items-center hover:bg-[#e97f18]">
            
//             <Link href="/pricing">   View Plan Details </Link>
          
//             </div>
//           </div>
//         </div>
//       </div>
   
//       <div className="w-auto text-center p-28 text-[#e97f18] text-3xl italic"> <span className="font-medium"> "Music is the divine way to tell beautiful </span> <span className="font-medium"> <br/> poetic things to the heart."</span> 
//       <span className="text-white text-normal text-2xl"> <br/> – Pablo Casals </span> </div>
//     </div>
//   );
// }

'use client';
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="bg-black font-poppins">
      <div className="text-center p-10 md:p-20">
        <span className="text-[#e97f18] text-[30px]  md:text-[40px] font-bold">Affordable</span>
        <span className="text-white text-[30px] md:text-[40px] font-bold"> Music Distribution for Every Artist</span>
        <div className="text-center text-white text-xl md:text-2xl font-normal mt-1">
          Click below to explore all pricing options!
        </div> 
        <div className="max-w-[90%] mt-10 lg:max-w-[1250px] mx-auto grid gap-5 ">
        {[
          {
            plan: "Independent Artist Plan",
            price: "₹ 1001 / Year",
            description: `Annual subscription for solo artists, offering global music
            distribution to top platforms. Simple, transparent, and hassle-free.`,
          },
          {
            plan: "Duo Plan",
            price: "₹ 2001 / Year",
            description: `Annual subscription for 2 artists, offering global music
            distribution to top platforms. Simple, transparent, and hassle-free.`,
          },
          {
            plan: "Independent Label Plan",
            price: "₹ 4899 / Year",
            description: `Annual subscription for multiple artists. Pricing adjusts based on 
            the number of artists—currently shown for 5 artists. Distribute globally with ease and flexibility.`,
          },

        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#0b0b0d]transition-all duration-300 hover:scale-105  hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18] rounded-xl border border-[#9f9fa1] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10"
          >
            <div className="flex-1">
              <div className="text-white text-left text-2xl font-bold">{item.plan}</div>
              <div className="text-white text-left mt-4 text-xl font-normal">{item.description}</div>
            </div>
            <div className="text-right md:text-left">
              <div className="text-white text-[34px] font-semibold">{item.price}</div>
              <Link
                href="/pricing"
                className="block mt-4 text-[#e97f18] text-xl font-normal leading-[46px] hover:text-white py-2 px-8 rounded-lg border border-[#e97f18] hover:bg-[#e97f18] text-center"
              >
                View Plan Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-20 pb-10">
        <span className="text-white text-[30px] md:text-[40px] font-bold">Release a Single Song, </span>
        <span className="text-[#e97f18] text-[30px] md:text-[40px] font-bold">No Subscription</span>
        <span className="text-white text-[30px] md:text-[40px] font-bold"> Required</span>
      </div>
      <div className="max-w-[90%] lg:max-w-[1250px] mb-10 mx-auto grid gap-10 font-poppins">
        {[
          {
            plan: "Distribute a single track",
            price: "₹ 399 / Track",
            description: `One-time distribution for a single song. Get your music on top platforms 
            without a subscription.`,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#0b0b0d] hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18] rounded-xl border border-[#9f9fa1] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10"
          >
            
            <div className="flex-1">
              <div className="text-white text-left text-2xl font-bold">{item.plan}</div>
              <div className="text-white mt-4 text-left text-xl font-normal">{item.description}</div>
              <div className="text-white text-left items font-bold pt-8"> Note:  This plan does not include dashboard access. </div>
            </div>
            
            <div className="text-right md:text-left">
              <div className="text-[white] text-4xl font-semibold">{item.price}</div>
              <Link
                href="/pricing"
                className="block mt-4 text-[#e97f18] text-xl font-normal leading-[46px] hover:text-white py-2 px-8 rounded-lg border border-[#e97f18] hover:bg-[#e97f18] text-center"
              >
                View Plan Details
              </Link>
              
            </div>
            
          </div>
        ))}
      </div>
      <div className="w-auto text-center mt-24 text-[#e97f18] text-xl md:text-3xl italic">
        <span className="font-medium">"Music is the divine way to tell beautiful</span>
        <span className="font-medium">
          <br /> poetic things to the heart."
        </span>
        <div className="flex justify-center mt-2 items-center">
  <span className="text-white text-normal pb-10 text-lg md:text-2xl">
    – Pablo Casals
  </span>
</div>
        </div>
      </div>
      
      

     
     
    </div>
  );
}
