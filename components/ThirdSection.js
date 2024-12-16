// 'use client';
// import Link from "next/link";

// export default function Third() {
//   return (

//     <div className="
//     h-[1022px] relative"
//            style={{
//          backgroundImage: `
//            url('/images/group.png'), 
//            linear-gradient(to bottom, #141416, #261300, #301800)`,
//          backgroundPosition: "left 385px top 220px, center", // Image first, gradient second
//          backgroundRepeat: "no-repeat, no-repeat",
//          backgroundSize: "auto 800px, cover", // Image first, gradient second
//        }}
//     >
//       <div className="text-center p-20">
//         <span className="text-white text-[40px] font-bold">Why </span><span className="text-[#e97f18] text-[40px] font-bold">Artists</span><span className="text-white text-[40px] font-bold"> </span><span className="text-[#e97f18] text-[40px] font-bold">Trust</span><span className="text-white text-[40px] font-bold"> Young CEO Entertainment</span>
//         <div className="text-center text-white text-2xl font-normal">More than distribution—your partner in success.</div>  
//       </div>  
        
//       <div className="w-[1093px] h-[808.24px] left-[203px] top-[213.69px] absolute">
//         <div className="w-[449px] h-[62px] left-[345px] top-[544.97px] absolute justify-start items-start gap-[41.20px] inline-flex">
//           <div className="grow shrink basis-0 h-[62px] px-[74px] py-4 rounded-lg border border-[#e97f18] justify-center items-center gap-2.5 flex">
//             <div className="w-[94px] text-[#e97f18] text-xl font-semibold hover"> <Link href="/signup">Join Now</Link> </div>
//           </div>
//         </div>

//         {[
//           { top: '32.28px', text: 'Global Reach' },
//           { top: '104.28px', text: 'Simple & Fast' },
//           { top: '176.28px', text: 'Affordable Plans' },
//           { top: '248.28px', text: 'Powerful Analytics' },
//           { top: '320.28px', text: 'Smart Links' },
//           { top: '392.28px', text: 'Dedicated Support' },
//           { top: '464.28px', text: 'Powerful Analytics' },
//         ].map((box, index) => (
//           <div key={index} className={`w-[268px] h-[52px] left-0 top-[${box.top}] absolute`}>
//             <div className="w-[210px] h-[52px] left-0 top-0 text-center rounded-lg border border-[#ebebeb]" />
//             <div className="left-[14px] top-[11px] absolute text-center text-white text-xl font-normal ">{box.text}</div>
          
//           </div>
//         ))}

//         <div className="left-[318px] top-[114.97px] absolute text-center text-white text-xl font-normal ">Upload once, distribute everywhere in minutes.</div>
//         <div className="left-[318px] top-[186.97px] absolute text-center text-white text-xl font-normal ">Tailored pricing for independent artists and labels.</div>
//         <div className="left-[318px] top-[258.97px] absolute text-center text-white text-xl font-normal ">Track performance and audience insights with ease</div>
//         <div className="left-[318px] top-[330.97px] absolute text-center text-white text-xl font-normal ">Share your music with one link across all platforms.</div>
//         <div className="left-[318px] top-[402.97px] absolute text-center text-white text-xl font-normal ">24/7 assistance to help you every step of the way.</div>
//         <div className="left-[318px] top-[474.97px] absolute text-center text-white text-xl font-normal ">Track performance and audience insights with ease</div>
//         <div className="left-[318px] top-[43.28px] absolute text-center text-white text-xl font-normal ">Get your music on 40+ platforms, including Spotify, Apple Music, and Amazon.</div>
//       </div>
//     </div>

//   );
// }

'use client';

import Link from "next/link";

export default function Third() {
  return (

    <div className=" 
     h-[1022px] relative font-poppins"
            style={{
          backgroundImage: `
            url('/images/group.png'), 
            linear-gradient(to bottom, #141416, #261300, #301800)`,
          backgroundPosition: "left 387px top 220px, center", // Image first, gradient second
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "auto 800px, cover", // Image first, gradient second
       }}
    >
    <div className="text-center p-20">
         <span className="text-white text-[40px] font-bold">Why </span><span className="text-[#e97f18] text-[40px] font-bold">Artists</span><span className="text-white text-[40px] font-bold"> </span><span className="text-[#e97f18] text-[40px] font-bold">Trust</span><span className="text-white text-[40px] font-bold"> Young CEO Entertainment</span>
         <div className="text-center text-white text-2xl font-normal">More than distribution—your partner in success.</div>  
         </div>  
        
         
    <div className="w-[1093px] h-[808.24px] left-[203px] top-[213.69px] absolute">
        <div className="w-[449px] h-[62px] left-[345px] top-[544.97px] absolute justify-start items-start gap-[41.20px] inline-flex">
            <div className="grow shrink basis-0 h-[62px] px-[74px] py-4 rounded-lg border border-[#e97f18] text-[#e97f18] font-semibold text-xl justify-center items-center gap-2.5 flex hover:bg-[#e97f18] hover:text-white cursor">
              <Link href="/signup">  Join Now </Link>   
            </div>
        </div>
        <div className="w-[329.76px] h-[808.24px] left-[182px] top-0 absolute">
        </div>
        <div className="w-[268px] h-[52px] left-[2px] top-[32.28px] absolute">
        <div className="absolute top-[26px] left-[212px] w-[58px] h-[1px] border-separate border-t border-white"></div>
            <div className="w-[210px] h-[52px] left-0 top-0 absolute rounded-lg border border-[#ebebeb]" />
            <div className="left-[38px] top-[11px] absolute text-center text-white text-xl font-normal ">Global Reach</div>
        </div>
        <div className="w-[268px] h-[52px] left-0 top-[104.28px] absolute">
        <div className="absolute top-[26px] left-[212px] w-[58px] h-[1px] border-separate border-t border-white"></div>
            <div className="w-[210px] h-[52px] left-0 top-0 absolute rounded-lg border border-[#ebebeb]" />
            <div className="left-[38px] top-[11px] absolute text-center text-white text-xl font-normal ">Simple & Fast</div>
        </div>
        <div className="w-[268px] h-[52px] left-0 top-[176.28px] absolute">
        <div className="absolute top-[26px] left-[212px] w-[58px] h-[1px] border-separate border-t border-white"></div>
            <div className="w-[210px] h-[52px] left-0 top-0 absolute rounded-lg border border-[#ebebeb]" />
            <div className="left-[23px] top-[11px] absolute text-center text-white text-xl font-normal ">Affordable Plans</div>
        </div>
        <div className="w-[268px] h-[52px] left-0 top-[248.28px] absolute">
        <div className="absolute top-[26px] left-[212px] w-[58px] h-[1px] border-separate border-t border-white"></div>
            <div className="w-[210px] h-[52px] left-0 top-0 absolute rounded-lg border border-[#ebebeb]" />
            <div className="left-[14px] top-[11px] absolute text-center text-white text-xl font-normal ">Powerful Analytics</div>
        </div>
        <div className="w-[268px] h-[52px] left-0 top-[320.28px] absolute">
        <div className="absolute top-[26px] left-[212px] w-[58px] h-[1px] border-separate border-t border-white"></div>
            <div className="w-[210px] h-[52px] left-0 top-0 absolute rounded-lg border border-[#ebebeb]" />
            <div className="left-[48px] top-[11px] absolute text-center text-white text-xl font-normal ">Smart Links</div>
        </div>
        <div className="w-[268px] h-[52px] left-0 top-[392.28px] absolute">
        <div className="absolute top-[26px] left-[212px] w-[58px] h-[1px] border-separate border-t border-white"></div>
            <div className="w-[210px] h-[52px] left-0 top-0 absolute rounded-lg border border-[#ebebeb]" />
            <div className="left-[11px] top-[11px] absolute text-center text-white text-xl font-normal ">Dedicated Support</div>
        </div>
        <div className="w-[268px] h-[52px] left-0 top-[464.28px] absolute">
        <div className="absolute top-[26px] left-[212px] w-[58px] h-[1px] border-separate border-t border-white"></div>
            <div className="w-[210px] h-[52px] left-0 top-0 absolute rounded-lg border border-[#ebebeb]" />
            <div className="left-[14px] top-[11px] absolute text-center text-white text-xl font-normal ">Powerful Analytics</div>
        </div>
        <div className="left-[310px] top-[114.97px] absolute text-center text-white text-xl font-normal ">Upload once, distribute everywhere in minutes.</div>
        <div className="left-[310px] top-[186.97px] absolute text-center text-white text-xl font-normal ">Tailored pricing for independent artists and labels.</div>
        <div className="left-[310px] top-[258.97px] absolute text-center text-white text-xl font-normal ">Track performance and audience insights with ease</div>
        <div className="left-[310px] top-[330.97px] absolute text-center text-white text-xl font-normal ">Share your music with one link across all platforms.</div>
        <div className="left-[310px] top-[402.97px] absolute text-center text-white text-xl font-normal ">24/7 assistance to help you every step of the way.</div>
        <div className="left-[310px] top-[474.97px] absolute text-center text-white text-xl font-normal ">Track performance and audience insights with ease</div>
        <div className="left-[310px]  top-[43.28px] absolute text-center text-white text-xl font-normal ">Get your music on 150+ platforms, including Spotify, Apple Music, and Amazon.</div>
    </div>
</div>

  );
}
