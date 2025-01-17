
 
 
// 'use client';
// import { useState } from 'react';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Header from '@/app/dashboard/components/Header';

// export default function AudiencePage() {
//   const [selectedSection, setSelectedSection] = useState("Smart Link");

//   const handleLogout = () => {
//     console.log('Logged out');
//   };

//   const sections = ["Smart Link", "Overview", "Segments", "Location"];

//   // Calculate the left offset based on selected section index
//   const underlineOffset = sections.indexOf(selectedSection) * 120;

//   return (
//     <div className="flex w-full h-[1742px] bg-[#0F0F0F]">
//       <Sidebar progress={20} onLogout={handleLogout} />
//       <main className="flex-1 p-6 flex flex-col gap-6 text-white">
//         <Header />

//         {/* TOP SECTION */}
//         <div className="flex items-center justify-between">
//           <div className="text-white text-4xl font-semibold font-['Inter'] leading-[54px]">
//             Audience
//           </div>
//           <div className="flex gap-4">
//             {['7 Days', '25 Days', '12 Months', 'Filters'].map((label) => (
//               <div
//                 key={label}
//                 className="w-[106.54px] h-[26.64px] rounded-xl flex items-center justify-center bg-[#757575] hover:bg-[#e97f18] transition duration-300"
//               >
//                 <span className="text-white text-xs font-normal font-['Poppins'] leading-[18.80px]">
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center gap-10 mt-6">
//           {sections.map((section) => (
//             <div
//               key={section}
//               onClick={() => setSelectedSection(section)}
//               className={`text-xl font-normal font-['Inter'] leading-snug cursor-pointer ${
//                 selectedSection === section ? 'text-white' : 'text-[#757575]'
//               }`}
//             >
//               {section}
//             </div>
//           ))}
//         </div>

//         {/* Dynamic Underline */}
//         <div
//           className="w-[110px] border-2 border-[#e97f18] transition-all duration-300"
//           style={{ transform: `translateX(${underlineOffset}px)` }}
//         ></div>

//         {/* Separator Line */}
//         <div className="w-full border-t border-neutral-800 mt-4"></div>

//         {/* Section Content */}
//         <div className="mt-10">
//           {selectedSection === "Smart Link" && (
//             <div>
//               <div className="text-white text-4xl font-semibold font-['Poppins'] leading-[45.51px]">
//                 Smart Link Traffic
//               </div>

//               <div className="w-[945px] h-[198px] mt-6 bg-[#191919] rounded-[36px] shadow border border-[#c7c7c7] p-6 flex items-center gap-6">
//                 <img
//                   className="w-[139.41px] h-[150.06px] rounded-2xl"
//                   src="https://via.placeholder.com/139x150"
//                   alt="Placeholder"
//                 />
//                 <div className="flex-1">
//                   <div className="text-[#757575] text-sm font-normal font-['Poppins'] leading-[21px] underline">
//                     SMART LINK
//                   </div>
//                   <div className="text-[#ebebeb] text-base font-semibold mt-2">
//                     Mai Khush Hun, Meri Kya Galti
//                   </div>
//                   <div className="text-[#757575] text-xs font-normal mt-2">
//                     Last updated 3 hours ago
//                   </div>
//                 </div>
//                 <div className="w-[163px] h-[107px] rounded-2xl border border-[#a6a6a6] flex flex-col items-center justify-center">
//                   <div className="text-[#e97f18] text-[28px] font-medium">6,420</div>
//                   <div className="text-[#e97f18] text-xl font-normal">Clicks</div>
//                 </div>
//               </div>
//             </div>
//           )}
//           {selectedSection === "Overview" && <div>{/* Overview code goes here */}</div>}
//           {selectedSection === "Segments" && <div>{/* Segments code goes here */}</div>}
//           {selectedSection === "Location" && <div>{/* Location code goes here */}</div>}
//         </div>
//       </main>
//     </div>
//   );
// }


// 'use client';
// import { useState } from 'react';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Header from '@/app/dashboard/components/Header';

// export default function AudiencePage() {
//   const [selectedSection, setSelectedSection] = useState("Smart Link");

//   const handleLogout = () => {
//     console.log('Logged out');
//   };

//   const sections = ["Smart Link", "Overview", "Segments", "Location"];

//   // Calculate the left offset based on selected section index
//   const underlineOffset = sections.indexOf(selectedSection) * 120;

//   return (
//     <div className="flex w-full h-[1742px] bg-[#0F0F0F]">
//       <Sidebar progress={20} onLogout={handleLogout} />
//       <main className="flex-1 p-6 flex flex-col gap-6 text-white">
//         <Header />

//         {/* TOP SECTION */}
//         <div className="flex items-center justify-between">
//           <div className="text-white text-4xl font-semibold font-['Inter'] leading-[54px]">
//             Audience
//           </div>
//           <div className="flex gap-4">
//             {['7 Days', '25 Days', '12 Months', 'Filters'].map((label) => (
//               <div
//                 key={label}
//                 className="w-[106.54px] h-[26.64px] rounded-xl flex items-center justify-center bg-[#757575] hover:bg-[#e97f18] transition duration-300"
//               >
//                 <span className="text-white text-xs font-normal font-['Poppins'] leading-[18.80px]">
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center gap-10 mt-6">
//           {sections.map((section) => (
//             <div
//               key={section}
//               onClick={() => setSelectedSection(section)}
//               className={`text-xl font-normal font-['Inter'] leading-snug cursor-pointer ${
//                 selectedSection === section ? 'text-white' : 'text-[#757575]'
//               }`}
//             >
//               {section}
//             </div>
//           ))}
//         </div>

//         {/* Dynamic Underline and Separator Line */}
//         <div className="relative mt-2">
//           <div
//             className="absolute w-[110px] border-2 border-[#e97f18] transition-all duration-300"
//             style={{ transform: `translateX(${underlineOffset}px)` }}
//           ></div>
//           <div className="absolute w-full border-t border-neutral-800 top-[2px]"></div>
//         </div>

//         {/* Section Content */}
//         <div className="mt-10">
//           {selectedSection === "Smart Link" && (
//             <div>
//               <div className="text-white text-4xl font-semibold font-['Poppins'] leading-[45.51px]">
//                 Smart Link Traffic
//               </div>

//               <div className="w-[990px] h-[198px] mt-6 bg-[#191919] rounded-[36px] shadow border border-[#c7c7c7] p-6 flex items-center gap-6">
//                 <img
//                   className="w-[139.41px] h-[150.06px] rounded-2xl"
//                   src="https://via.placeholder.com/139x150"
//                   alt="Placeholder"
//                 />
//                 <div className="flex-1">
//                   <div className="text-[#757575] text-sm font-normal font-['Poppins'] leading-[21px] underline">
//                     SMART LINK
//                   </div>
//                   <div className="text-[#ebebeb] text-base font-semibold mt-2">
//                     Mai Khush Hun, Meri Kya Galti
//                   </div>
//                   <div className="text-[#757575] text-xs font-normal mt-2">
//                     Last updated 3 hours ago
//                   </div>
//                 </div>
//                 <div className="w-[163px] h-[107px] rounded-2xl border border-[#a6a6a6] flex flex-col items-center justify-center">
//                   <div className="text-[#e97f18] text-[28px] font-medium">6,420</div>
//                   <div className="text-[#e97f18] text-xl font-normal">Clicks</div>
//                 </div>
//               </div>
//             </div>
//           )}
//           {selectedSection === "Overview" && <div>{/* Overview code goes here */}</div>}
//           {selectedSection === "Segments" && <div>{/* Segments code goes here */}</div>}
//           {selectedSection === "Location" && <div>{/* Location code goes here */}</div>}
//         </div>
//       </main>
//     </div>
//   );
// }

// 'use client';
// import { useState } from 'react';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Header from '@/app/dashboard/components/Header';

// export default function AudiencePage() {
//   const [selectedSection, setSelectedSection] = useState("Smart Link");

//   const handleLogout = () => {
//     console.log('Logged out');
//   };

//   const sections = ["Smart Link", "Overview", "Segments", "Location"];

//   // Calculate the left offset based on selected section index
//   const underlineOffset = sections.indexOf(selectedSection) * 120;

//   return (
//     <div className="flex w-full h-[1742px] bg-[#0F0F0F]">
//       <Sidebar progress={20} onLogout={handleLogout} />
//       <main className="flex-1 p-6 flex flex-col gap-6 text-white">
//         <Header />

//         {/* TOP SECTION */}
//         <div className="flex items-center justify-between">
//           <div className="text-white text-4xl font-semibold font-['Inter'] leading-[54px]">
//             Audience
//           </div>
//           <div className="flex gap-4">
//             {['7 Days', '25 Days', '12 Months', 'Filters'].map((label) => (
//               <div
//                 key={label}
//                 className="w-[106.54px] h-[26.64px] rounded-xl flex items-center justify-center bg-[#757575] hover:bg-[#e97f18] transition duration-300"
//               >
//                 <span className="text-white text-xs font-normal font-['Poppins'] leading-[18.80px]">
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center gap-10 mt-6">
//           {sections.map((section) => (
//             <div
//               key={section}
//               onClick={() => setSelectedSection(section)}
//               className={`text-xl font-normal font-['Inter'] leading-snug cursor-pointer ${
//                 selectedSection === section ? 'text-white' : 'text-[#757575]'
//               }`}
//             >
//               {section}
//             </div>
//           ))}
//         </div>

//         {/* Dynamic Underline and Separator Line */}
//         <div className="relative mt-2">
//           <div
//             className="absolute w-[110px] border-2 border-[#e97f18] transition-all duration-300"
//             style={{ transform: `translateX(${underlineOffset}px) translateY(-2px)` }}
//           ></div>
//           <div className="absolute w-full border-t border-neutral-800 top-[2px]"></div>
//         </div>
         
        
//         <div className="mt-10 p-6 bg-gradient-to-r from-black via-[#2d2d2d] to-black rounded-2xl">
//           <div className="text-white text-3xl  mb-10 mt-10 font-bold">Welcome to your Analytics</div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
//             {['Listeners', 'Streams', 'Average', 'Saves'].map((title, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="bg-gradient-to-tr from-[#3d3d3d] via-[#2c2c2c] to-[#969696] w-full h-40 rounded-lg flex flex-col justify-center items-center">
//                 <div className="text-[# ] text-sm uppercase">{title}</div>
//                   <div className="text-white text-2xl font-bold">112</div>
                 
//                 </div>
//                 <div className="w-3/4 h-4 bg-[#616161] mt-2 rounded-lg"></div>
//               </div>
//             ))}
//           </div>
//         </div>


//         {/* Section Content */}
//         <div className="mt-10">
//           {selectedSection === "Smart Link" && (
//             <div>
//               <div className="text-white text-4xl font-semibold font-['Poppins'] leading-[45.51px]">
//                 Smart Link Traffic
//               </div>

//               <div className="w-[990px] h-[198px] mt-6 bg-[#191919] rounded-[36px] shadow border border-[#c7c7c7] p-6 flex items-center gap-6">
//                 <img
//                   className="w-[139.41px] h-[150.06px] rounded-2xl"
//                   src="https://via.placeholder.com/139x150"
//                   alt="Placeholder"
//                 />
//                 <div className="flex-1">
//                   <div className="text-[#757575] text-sm font-normal font-['Poppins'] leading-[21px] underline">
//                     SMART LINK
//                   </div>
//                   <div className="text-[#ebebeb] text-base font-semibold mt-2">
//                     Mai Khush Hun, Meri Kya Galti
//                   </div>
//                   <div className="text-[#757575] text-xs font-normal mt-2">
//                     Last updated 3 hours ago
//                   </div>
//                 </div>
//                 <div className="w-[163px] h-[107px] rounded-2xl border border-[#a6a6a6] flex flex-col items-center justify-center">
//                   <div className="text-[#e97f18] text-[28px] font-medium">6,420</div>
//                   <div className="text-[#e97f18] text-xl font-normal">Clicks</div>
//                 </div>
//               </div>
//             </div>
//           )}
//           {selectedSection === "Overview" && <div>{/* Overview code goes here */}</div>}
//           {selectedSection === "Segments" && <div>{/* Segments code goes here */}</div>}
//           {selectedSection === "Location" && <div>{/* Location code goes here */}</div>}
//         </div>
//       </main>
//     </div>
//   );
// }

// 'use client';
// import { useState } from 'react';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Header from '@/app/dashboard/components/Header';

// export default function AudiencePage() {
//   const [selectedSection, setSelectedSection] = useState("Smart Link");
//   const [selectedTimeFilter, setSelectedTimeFilter] = useState("7 Days"); // Default selection

//   const handleLogout = () => {
//     console.log('Logged out');
//   };

//   const sections = ["Smart Link", "Overview", "Segments", "Location"];
//   const timeFilters = ["7 Days", "25 Days", "12 Months", "Filters"];

//   // Calculate the left offset based on selected section index
//   const underlineOffset = sections.indexOf(selectedSection) * 120;

//   return (
//     <div className="flex w-full h-[1742px] bg-[#0F0F0F]">
//       <Sidebar progress={20} onLogout={handleLogout} />
//       <main className="flex-1 p-6 flex flex-col gap-6 text-white">
//         <Header />

//         {/* TOP SECTION */}
//         <div className="flex items-center justify-between">
//           <div className="text-white text-4xl font-semibold font-['Inter'] leading-[54px]">
//             Audience
//           </div>
//           <div className="flex gap-4">
//             {timeFilters.map((label) => (
//               <div
//                 key={label}
//                 onClick={() => setSelectedTimeFilter(label)}
//                 className={`w-[106.54px] h-[26.64px] rounded-xl flex items-center justify-center transition duration-300 cursor-pointer ${
//                   selectedTimeFilter === label
//                     ? 'bg-[#e97f18]'
//                     : 'bg-[#757575] hover:bg-[#e97f18]'
//                 }`}
//               >
//                 <span className="text-white text-xs font-normal font-['Poppins'] leading-[18.80px]">
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center gap-10 mt-6">
//           {sections.map((section) => (
//             <div
//               key={section}
//               onClick={() => setSelectedSection(section)}
//               className={`text-xl font-normal font-['Inter'] leading-snug cursor-pointer transition-colors duration-300 ${
//                 selectedSection === section ? 'text-[#e97f18]' : 'text-[#757575]'
//               }`}
//             >
//               {section}
//             </div>
//           ))}
//         </div>

//         {/* Dynamic Underline and Separator Line */}
//         <div className="relative mt-2">
//           <div
//             className="absolute w-[110px] border-2 border-[#e97f18] transition-all duration-300"
//             style={{ transform: `translateX(${underlineOffset}px) translateY(-2px)` }}
//           ></div>
//           <div className="absolute w-full border-t border-neutral-800 top-[2px]"></div>
//         </div>

//         {/* Analytics Box */}
//         <div className="mt-10 p-6 bg-gradient-to-r from-black via-[#2d2d2d] to-black rounded-2xl">
//           <div className="text-white text-3xl mb-10 mt-10 font-bold">Welcome to your Analytics</div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
//             {['Listeners', 'Streams', 'Average', 'Saves'].map((title, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="bg-gradient-to-tr from-[#3d3d3d] via-[#2c2c2c] to-[#969696] w-full h-40 rounded-lg flex flex-col justify-center items-center">
//                   <div className="text-sm uppercase">{title}</div>
//                   <div className="text-white text-2xl font-bold">112</div>
//                 </div>
//                 <div className="w-3/4 h-4 bg-[#616161] mt-2 rounded-lg"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Section Content */}
//         <div className="mt-10">
//           {selectedSection === "Smart Link" && (
//             <div>
//               <div className="text-white text-4xl font-semibold font-['Poppins'] leading-[45.51px]">
//                 Smart Link Traffic
//               </div>

//               <div className="w-[990px] h-[198px] mt-6 bg-[#191919] rounded-[36px] shadow border border-[#c7c7c7] p-6 flex items-center gap-6">
//                 <img
//                   className="w-[139.41px] h-[150.06px] rounded-2xl"
//                   src="https://via.placeholder.com/139x150"
//                   alt="Placeholder"
//                 />
//                 <div className="flex-1">
//                   <div className="text-[#757575] text-sm font-normal font-['Poppins'] leading-[21px] underline">
//                     SMART LINK
//                   </div>
//                   <div className="text-[#ebebeb] text-base font-semibold mt-2">
//                     Mai Khush Hun, Meri Kya Galti
//                   </div>
//                   <div className="text-[#757575] text-xs font-normal mt-2">
//                     Last updated 3 hours ago
//                   </div>
//                 </div>
//                 <div className="w-[163px] h-[107px] rounded-2xl border border-[#a6a6a6] flex flex-col items-center justify-center">
//                   <div className="text-[#e97f18] text-[28px] font-medium">6,420</div>
//                   <div className="text-[#e97f18] text-xl font-normal">Clicks</div>
//                 </div>
//               </div>
//             </div>
//           )}
//           {selectedSection === "Overview" && <div>{/* Overview code goes here */}</div>}
//           {selectedSection === "Segments" && <div>{/* Segments code goes here */}</div>}
//           {selectedSection === "Location" && <div>{/* Location code goes here */}</div>}
//         </div>
//       </main>
//     </div>
//   );
// }


// 'use client';
// import { useState } from 'react';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Header from '@/app/dashboard/components/Header';

// export default function AudiencePage() {
//   const [selectedSection, setSelectedSection] = useState("Smart Link");
//   const [selectedTimeFilter, setSelectedTimeFilter] = useState("7 Days"); // Default selection

//   const handleLogout = () => {
//     console.log('Logged out');
//   };

//   const sections = ["Smart Link", "Overview", "Segments", "Location"];
//   const timeFilters = ["7 Days", "25 Days", "12 Months", "Filters"];

//   // Calculate the left offset based on selected section index
//   const underlineOffset = sections.indexOf(selectedSection) * 120;

//   return (
//     <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#0F0F0F] font-poppins">
//       <Sidebar progress={20} onLogout={handleLogout} />
//       <main className="flex-1 p-4 sm:p-6 flex flex-col gap-6 text-white">
//         <Header />

//         {/* TOP SECTION */}
//         <div className="flex flex-wrap items-center justify-between gap-4">
//           <div className="text-white text-2xl sm:text-4xl font-semibold font-poppins leading-tight">
//             Audience
//           </div>
//           <div className="flex gap-2 sm:gap-4 flex-wrap">
//             {timeFilters.map((label) => (
//               <div
//                 key={label}
//                 onClick={() => setSelectedTimeFilter(label)}
//                 className={`w-auto px-4 py-2 rounded-xl flex items-center font-poppins justify-center transition duration-300 cursor-pointer ${
//                   selectedTimeFilter === label
//                     ? 'bg-[#e97f18]'
//                     : 'bg-[#757575] hover:bg-[#e97f18]'
//                 }`}
//               >
//                 <span className="text-white text-xs sm:text-sm font-normal font-['Poppins'] leading-[18.80px]">
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* SECTION NAVIGATION */}
//         <div className="flex items-center gap-4 sm:gap-10 mt-6 overflow-x-auto font-poppins">
//           {sections.map((section) => (
//             <div
//               key={section}
//               onClick={() => setSelectedSection(section)}
//               className={`text-sm sm:text-xl font-poppins font-normal leading-snug cursor-pointer transition-colors duration-300 ${
//                 selectedSection === section ? 'text-[#e97f18]' : 'text-[#757575]'
//               }`}
//             >
//               {section}
//             </div>
//           ))}
//         </div>

//         {/* Dynamic Underline and Separator Line */}
//         <div className="relative mt-2">
//           <div
//             className="absolute w-[110px] border-2 border-[#e97f18] transition-all duration-300"
//             style={{ transform: `translateX(${underlineOffset}px) translateY(-2px)` }}
//           ></div>
//           <div className="absolute w-full border-t border-neutral-800 top-[2px]"></div>
//         </div>

//         {/* Analytics Box */}
//         <div className="mt-10 p-4 sm:p-6 bg-gradient-to-r from-black via-[#2d2d2d] to-black rounded-2xl">
//           <div className="font-poppins text-white text-xl sm:text-3xl mb-6 sm:mb-10 font-bold">
//             Welcome to your Analytics
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
//             {['Listeners', 'Streams', 'Average', 'Saves'].map((title, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="bg-gradient-to-tr from-black via-black to-black w-full h-32 sm:h-40 rounded-lg flex flex-col justify-center items-center">
//                   <div className="text-sm uppercase">{title}</div>
//                   <div className="text-white text-lg sm:text-2xl font-bold">112</div>
//                 </div>
//                 <div className="w-3/4 h-2 sm:h-4 bg-[#616161] mt-2 rounded-lg"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Section Content */}
//         <div className="mt-10">
//           {selectedSection === "Smart Link" && (
//             <div>
//               <div className="text-white text-2xl sm:text-4xl font-semibold font-['Poppins'] leading-tight">
//                 Smart Link Traffic
//               </div>

//               <div className="w-full max-w-6xl h-auto sm:h-[198px] mt-6 bg-[#191919] rounded-[36px] shadow border border-[#c7c7c7] p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
//                 <img
//                   className="w-[100px] h-[100px] sm:w-[139.41px] sm:h-[150.06px] rounded-2xl"
//                   src="https://via.placeholder.com/139x150"
//                   alt="Placeholder"
//                 />
//                 <div className="flex-1">
//                   <div className="text-[#757575] text-xs sm:text-sm font-normal font-['Poppins'] leading-tight underline">
//                     SMART LINK
//                   </div>
//                   <div className="text-[#ebebeb] text-sm sm:text-base font-semibold mt-2">
//                     Mai Khush Hun, Meri Kya Galti
//                   </div>
//                   <div className="text-[#757575] text-xs font-normal mt-2">
//                     Last updated 3 hours ago
//                   </div>
//                 </div>
//                 <div className="w-full sm:w-[163px] h-[80px] sm:h-[107px] rounded-2xl border border-[#a6a6a6] flex flex-col items-center justify-center">
//                   <div className="text-[#e97f18] text-xl sm:text-[28px] font-medium">6,420</div>
//                   <div className="text-[#e97f18] text-base sm:text-xl font-normal">Clicks</div>
//                 </div>
//               </div>
//             </div>
//           )}
//           {selectedSection === "Overview" && <div>{/* Overview code goes here */}</div>}
//           {selectedSection === "Segments" && <div>{/* Segments code goes here */}</div>}
//           {selectedSection === "Location" && <div>{/* Location code goes here */}</div>}
//         </div>
//       </main>
//     </div>
//   );
// }


// 'use client';
// import { useState } from 'react';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Header from '@/app/dashboard/components/Header';
// import { FaFilter } from 'react-icons/fa';
// import { FaBars, FaTimes } from 'react-icons/fa';

// export default function AudiencePage() {
//   const [selectedSection, setSelectedSection] = useState("Smart Link");
//   const [selectedTimeFilter, setSelectedTimeFilter] = useState("7 Days"); // Default selection
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [progress, setProgress] = useState(20);

//   const handleLogout = () => {
//     console.log('Logged out');
//   };

//   const sections = ["Smart Link", "Overview", "Segments", "Location"];
//   const timeFilters = ["7 Days", "25 Days", "12 Months", "Filters"];

//   // Calculate the left offset based on selected section index
//   const underlineOffset = sections.indexOf(selectedSection) * 120;

//   return (
//     <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#0F0F0F] font-poppins">
//         {/* Sidebar */}
//             <button
//               className="lg:hidden text-white p-4"
//               onClick={() => setSidebarOpen(!isSidebarOpen)}
//             >
//               {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//             </button>
//             <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
//               <Sidebar progress={progress} />
//             </div>
//       <main className="flex-1 p-4 sm:p-6 flex flex-col gap-6 text-white">
//         <Header />

//         {/* TOP SECTION */}
//         <div className="flex flex-wrap items-center justify-between gap-4">
//           <div className="text-white text-2xl sm:text-4xl font-semibold font-poppins leading-tight">
//             Audience
//           </div>
//           <div className="flex gap-2 sm:gap-4 flex-wrap">
//             {timeFilters.map((label) => (
//               <div
//                 key={label}
//                 onClick={() => setSelectedTimeFilter(label)}
//                 className={`w-auto px-5 py-2 rounded-xl flex items-center justify-center font-poppins transition duration-300 cursor-pointer ${
//                   label === "Filters"
//                     ? selectedTimeFilter === label
//                       ? 'bg-white text-[#e97f18] border border-[#e97f18]'
//                       : 'bg-white text-black hover:bg-[#e97f18] hover:text-white hover:border-none'
//                     : selectedTimeFilter === label
//                     ? 'bg-[#e97f18] text-white'
//                     : 'bg-[#757575] hover:bg-[#e97f18] text-black' 
//                 }`}
//               >
//                 <span className="text-xs sm:text-sm font-normal font-['Poppins'] leading-[18.80px]">
//                   {label}
//                 </span>
//                 {label === "Filters" && (
//                   <FaFilter className="ml-2 text-sm sm:text-base" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* SECTION NAVIGATION */}
//         <div className="flex items-center gap-4 sm:gap-10 mt-6 overflow-x-auto font-poppins">
//           {sections.map((section) => (
//             <div
//               key={section}
//               onClick={() => setSelectedSection(section)}
//               className={`text-sm sm:text-xl font-poppins font-normal leading-snug cursor-pointer transition-colors duration-300 ${
//                 selectedSection === section ? 'text-[#e97f18]' : 'text-[#757575]'
//               }`}
//             >
//               {section}
//             </div>
//           ))}
//         </div>

//         {/* Dynamic Underline and Separator Line */}
//         <div className="relative mt-2">
//           <div
//             className="absolute w-[110px] border-2 border-[#e97f18] transition-all duration-300"
//             style={{ transform: `translateX(${underlineOffset}px) translateY(-2px)` }}
//           ></div>
//           <div className="absolute w-full border-t border-neutral-800 top-[2px]"></div>
//         </div>

//         {/* Analytics Box */}
//         <div className="mt-10 p-4 sm:p-6 bg-gradient-to-r from-black via-[#2d2d2d] to-black rounded-2xl">
//           <div className="font-poppins text-white text-xl sm:text-3xl mb-6 sm:mb-10 font-bold">
//             Welcome to your Analytics
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
//             {['Listeners', 'Streams', 'Average', 'Saves'].map((title, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="bg-gradient-to-tr from-black via-black to-black w-full h-32 sm:h-40 rounded-lg flex flex-col justify-center items-center">
//                   <div className="text-sm uppercase">{title}</div>
//                   <div className="text-white text-lg sm:text-2xl font-bold">112</div>
//                 </div>
//                 <div className="w-3/4 h-2 sm:h-4 bg-[#616161] mt-2 rounded-lg"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Section Content */}
//         <div className="mt-10">
//           {selectedSection === "Smart Link" && (
//             <div>
//               <div className="text-white text-2xl sm:text-4xl font-semibold font-['Poppins'] leading-tight">
//                 Smart Link Traffic
//               </div>

//               <div className="w-full max-w-6xl h-auto sm:h-[198px] mt-6 bg-[#191919] rounded-[36px] shadow border border-[#c7c7c7] p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
//                 <img
//                   className="w-[100px] h-[100px] sm:w-[139.41px] sm:h-[150.06px] rounded-2xl"
//                   src="https://via.placeholder.com/139x150"
//                   alt="Placeholder"
//                 />
//                 <div className="flex-1">
//                   <div className="text-[#757575] text-xs sm:text-sm font-normal font-['Poppins'] leading-tight underline">
//                     SMART LINK
//                   </div>
//                   <div className="text-[#ebebeb] text-sm sm:text-base font-semibold mt-2">
//                     Mai Khush Hun, Meri Kya Galti
//                   </div>
//                   <div className="text-[#757575] text-xs font-normal mt-2">
//                     Last updated 3 hours ago
//                   </div>
//                 </div>
//                 <div className="w-full sm:w-[163px] h-[80px] sm:h-[107px] rounded-2xl border border-[#a6a6a6] flex flex-col items-center justify-center">
//                   <div className="text-[#e97f18] text-xl sm:text-[28px] font-medium">6,420</div>
//                   <div className="text-[#e97f18] text-base sm:text-xl font-normal">Clicks</div>
//                 </div>
//               </div>
//             </div>
//           )}
//           {selectedSection === "Overview" && <div>{/* Overview code goes here */}</div>}
//           {selectedSection === "Segments" && <div>{/* Segments code goes here */}</div>}
//           {selectedSection === "Location" && <div>{/* Location code goes here */}</div>}
//         </div>
//       </main>
//     </div>
//   );
// }


'use client';
import { useState } from 'react';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Header from '@/app/dashboard/components/Header';
import { FaFilter } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function AudiencePage() {
  const [selectedSection, setSelectedSection] = useState("Smart Link");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("7 Days"); // Default selection
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [progress, setProgress] = useState(20);

  const handleLogout = () => {
    console.log('Logged out');
  };

  const sections = ["Smart Link", "Overview", "Segments", "Location"];
  const timeFilters = ["7 Days", "25 Days", "12 Months", "Filters"];

  // Calculate the left offset based on selected section index
  const underlineOffset = sections.indexOf(selectedSection) * 120;

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#0F0F0F] font-poppins">
      {/* Sidebar */}
      <button
        className="lg:hidden text-white p-4"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <Sidebar progress={progress} />
      </div>
      <main className="flex-1 p-4 sm:p-6 flex flex-col gap-6 text-white">
        <Header />

        {/* Container for left and right margin */}
        <div className="mx-5 lg:mx-10">   
          {/* 20 */}
          {/* TOP SECTION */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-white text-2xl sm:text-4xl font-semibold font-poppins leading-tight">
              Audience
            </div>
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              {timeFilters.map((label) => (
                <div
                  key={label}
                  onClick={() => setSelectedTimeFilter(label)}
                  className={`w-auto px-5 py-2 rounded-xl flex items-center justify-center font-poppins transition duration-300 cursor-pointer ${
                    label === "Filters"
                      ? selectedTimeFilter === label
                        ? 'bg-white text-[#e97f18] border border-[#e97f18]'
                        : 'bg-white text-black hover:bg-[#e97f18] hover:text-white hover:border-none'
                      : selectedTimeFilter === label
                      ? 'bg-[#e97f18] text-white'
                      : 'bg-[#757575] hover:bg-[#e97f18] text-black' 
                  }`}
                >
                  <span className="text-xs sm:text-sm font-normal font-['Poppins'] leading-[18.80px]">
                    {label}
                  </span>
                  {label === "Filters" && (
                    <FaFilter className="ml-2 text-sm sm:text-base" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SECTION NAVIGATION */}
          <div className="flex items-center gap-4 sm:gap-10 mt-6 overflow-x-auto font-poppins">
            {sections.map((section) => (
              <div
                key={section}
                onClick={() => setSelectedSection(section)}
                className={`text-sm sm:text-xl font-poppins font-normal leading-snug cursor-pointer transition-colors duration-300 ${
                  selectedSection === section ? 'text-[#e97f18]' : 'text-[#757575]'
                }`}
              >
                {section}
              </div>
            ))}
          </div>

          {/* Dynamic Underline and Separator Line */}
          <div className="relative mt-2">
            <div
              className="absolute w-[110px] border-2 border-[#e97f18] transition-all duration-300"
              style={{ transform: `translateX(${underlineOffset}px) translateY(-2px)` }}
            ></div>
            <div className="absolute w-full border-t border-neutral-800 top-[2px]"></div>
          </div>

          {/* Analytics Box */}
          <div className="mt-10 p-4 sm:p-6 bg-gradient-to-r from-black via-[#2d2d2d] to-black rounded-2xl"
          style={{
            backgroundImage: 'url(/dashboard/timer.svg)',
            backgroundSize: 'cover',  // Ensures the image covers the entire section
            backgroundPosition: 'center',  // Centers the image
          }}
          >
            <div className="font-poppins text-white text-xl sm:text-3xl mb-6 sm:mb-10 font-bold">
              Welcome to your Analytics
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
              {['Listeners', 'Streams', 'Average', 'Saves'].map((title, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-gradient-to-tr from-black via-black to-black w-full h-32 sm:h-40 rounded-lg flex flex-col justify-center items-center">
                    <div className="text-sm uppercase">{title}</div>
                    <div className="text-white text-lg sm:text-2xl font-bold">112</div>
                  </div>
                  <div className="w-3/4 h-2 sm:h-4 bg-[#616161] mt-2 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Content */}
          <div className="mt-10">
            {selectedSection === "Smart Link" && (
              <div>
                <div className="text-white text-2xl sm:text-4xl font-semibold font-['Poppins'] leading-tight">
                  Smart Link Traffic
                </div>

                <div className="w-full max-w-6xl h-auto sm:h-[198px] mt-6 bg-[#191919] rounded-[36px] shadow border border-[#e97f18] p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <img
                    className="w-[100px] h-[100px] sm:w-[139.41px] sm:h-[150.06px] rounded-2xl"
                    src="https://via.placeholder.com/139x150"
                    alt="Placeholder"
                  />
                  <div className="flex-1">
                    <div className="text-[#757575] text-xs sm:text-sm font-normal font-Poppins leading-tight underline">
                      SMART LINK
                    </div>
                    <div className="text-[#ebebeb] text-sm sm:text-base font-semibold mt-2">
                      Mai Khush Hun, Meri Kya Galti
                    </div>
                    <div className="text-[#757575] text-xs font-normal mt-2">
                      Last updated 3 hours ago
                    </div>
                  </div>
                  <div className="w-full sm:w-[163px] h-[80px] sm:h-[107px] rounded-2xl border border-dotted border-[#e97f18] flex flex-col items-center justify-center">
                    <div className="text-[#e97f18] text-xl sm:text-[28px] font-medium">6,420</div>
                    <div className="text-[#e97f18] text-base sm:text-xl font-normal">Clicks</div>
                  </div>
                </div>
              </div>
            )}
            {selectedSection === "Overview" && <div>{/* Overview code goes here */}</div>}
            {selectedSection === "Segments" && <div>{/* Segments code goes here */}</div>}
            {selectedSection === "Location" && <div>{/* Location code goes here */}</div>}
          </div>
        </div>
      </main>
    </div>
  );
}
