// 'use client';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMusic, faUsers, faTshirt, faVideo, faCog, faSignOutAlt, faUser, faBolt } from '@fortawesome/free-solid-svg-icons';
// import { useRouter, usePathname } from 'next/navigation';
// // import { signOut } from "next-auth/react";

// export default function Sidebar({ progress }) {
//   const router = useRouter();
//   const pathname = usePathname(); // Get the current path

//   // Function to determine if a menu item is active
//   const isActive = (path) => pathname === path;


//   const handleCompleteProfile = () => {
//     router.push('/dashboard/profile-questions');
//   };

//   const handleUpgrade = () => {
//     router.push('/subscription/upgrade');
//   };

//   return (
//     <aside className="w-[310px] h-[1412px] p-6 flex flex-col gap-6" style={{ backgroundColor: '#EBEBEB', borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
//       {/* Profile Box */}
//       <div className="bg-black opacity-[77%] p-4 rounded-2xl flex items-center justify-between gap-2 w-full">
//         {/* Left: User Icon */}
//         <div className="flex items-center gap-2">
//           <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
//         </div>

//         {/* Right: Progress Bar, Percentage and Button */}
//         <div className="flex flex-col items-end gap-2 w-[75%]">
//           {/* Progress Bar Container */}
//           <div className="flex items-center w-full mt-2">
//             {/* Progress Bar */}
//             <div className="w-[80%] h-2 bg-gray-700 rounded-full">
//               <div className="h-2 bg-white rounded-full" style={{ width: `${progress}%` }}></div>
//             </div>

//             {/* Progress Percentage */}
//             <div className="text-white text-sm ml-6">{progress}%</div>
//           </div>

//           <button onClick={handleCompleteProfile} 
//           className="text-white border border-white px-2 py-2 text-sm rounded-2xl mt-2 inline-block">
//            Complete Your profile
//           </button>
//         </div>
//       </div>

//       {/* Logo */}
//       <Image src="/images/blogo.png" alt="Logo" width={184} height={169} className="w-[184px] h-[169px] mx-auto" />

//       {/* Menu */}
//       <nav className="flex flex-col justify-center ml-10 gap-4 text-lg font-semibold">
//         <div
//           onClick={() => router.push('/dashboard')}
//           className={`flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer ${isActive('/dashboard') ? 'text-white' : 'text-black'}`}
//         >
//           <FontAwesomeIcon icon={faMusic} />
//           <span> Music </span>
//         </div>
//         <div
//           onClick={() => router.push('/dashboard/audience')}
//           className={`flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer ${isActive('/dashboard/audience') ? 'text-white' : 'text-black'}`}
//         >
//           <FontAwesomeIcon icon={faUsers} />
//           <span> Audience </span>
//         </div>
//         <div className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-not-allowed">
//           <FontAwesomeIcon icon={faTshirt} className="text-black" />
//           <span className="text-black"> Merch </span>
//         </div>
//         <div className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-not-allowed">
//           <FontAwesomeIcon icon={faVideo} className="text-black" />
//           <span className="text-black"> Video & Visuals </span>
//         </div>
//         <div
//           onClick={() => router.push('/dashboard/settings')}
//           className={`flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer ${isActive('/dashboard/settings') ? 'text-white' : 'text-black'}`}
//         >
//           <FontAwesomeIcon icon={faCog} />
//           <span> Settings</span>
//         </div>
//       </nav>

//       {/* Logout Button */}
//       <button 
//       //  onClick={() => signOut()}
//       className="bg-black text-white px-4 py-3 mt-4 rounded-md">
//         <FontAwesomeIcon icon={faSignOutAlt} />
//         <span> Logout </span>
//       </button>

//       {/* Flex-grow content */}
//       <div className="flex-grow" />

//       {/* Upgrade Box at the bottom */}
//       <div className="h-[265px] w-[226px] bg-[#121212] rounded-2xl shadow-lg flex flex-col items-center justify-center mt-8 relative">
//         {/* Outer Circle */}
//         <div className="w-[130px] h-[130px] rounded-full bg-[#333] flex items-center justify-center mt-6">
//           {/* Inner Circle */}
//           <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center">
//             <FontAwesomeIcon icon={faBolt} className="text-white text-2xl" />
//           </div>
//         </div>

//         {/* Upgrade Button */}
//         <button 
//         onClick={handleUpgrade} 
//         className="text-white font-bold bg-[#0F0F0F] border border-[#757575] px-6 py-2 rounded-md mt-6">
//           UPGRADE
//         </button>
//       </div>
//     </aside>
//   );
// }


// 'use client';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMusic, faUsers, faTshirt, faVideo, faCog, faSignOutAlt, faUser, faBolt } from '@fortawesome/free-solid-svg-icons';
// import { useRouter, usePathname } from 'next/navigation';
// // import { signOut } from "next-auth/react";

// export default function Sidebar({ progress }) {
//   const router = useRouter();
//   const pathname = usePathname(); // Get the current path

//   // Function to determine if a menu item is active
//   const isActive = (path) => pathname === path;

//   const handleCompleteProfile = () => {
//     router.push('/dashboard/profile-questions');
//   };

//   const handleUpgrade = () => {
//     router.push('/subscription/upgrade');
//   };

//   return (
//     <aside
//       className="w-[310px] h-[1412px] p-6 flex flex-col gap-6"
//       style={{
//         backgroundColor: '#EBEBEB',
//         borderTopRightRadius: '20px',
//         borderBottomRightRadius: '20px',
//       }}
//     >
//       {/* Profile Box */}
//       <div className="bg-black opacity-[77%] p-4 rounded-2xl flex items-center justify-between gap-2 w-full">
//         {/* Left: User Icon */}
//         <div className="flex items-center gap-2">
//           <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
//         </div>

//         {/* Right: Progress Bar, Percentage and Button */}
//         <div className="flex flex-col items-end gap-2 w-[75%]">
//           {/* Progress Bar Container */}
//           <div className="flex items-center w-full mt-2">
//             {/* Progress Bar */}
//             <div className="w-[80%] h-2 bg-gray-700 rounded-full">
//               <div className="h-2 bg-white rounded-full" style={{ width: `${progress}%` }}></div>
//             </div>

//             {/* Progress Percentage */}
//             <div className="text-white text-sm ml-6">{progress}%</div>
//           </div>

//           <button
//             onClick={handleCompleteProfile}
//             className="text-white border border-white px-2 py-2 text-sm rounded-2xl mt-2 inline-block"
//           >
//             Complete Your profile
//           </button>
//         </div>
//       </div>

//       {/* Logo */}
//       <Image
//         src="/images/blogo.png"
//         alt="Logo"
//         width={184}
//         height={169}
//         className="w-[184px] h-[169px] mx-auto"
//       />

//       {/* Menu */}
//       <nav className="flex flex-col justify-center ml-10 gap-4 text-[22px] font-medium font-poppins">
//         {[
//           { label: 'Music', path: '/dashboard', icon: faMusic },
//           { label: 'Audience', path: '/dashboard/audience', icon: faUsers },
//           { label: 'Merch', path: null, icon: faTshirt, disabled: true },
//           { label: 'Video & Visuals', path: null, icon: faVideo, disabled: true },
//           { label: 'Settings', path: '/dashboard/settings', icon: faCog },
//         ].map(({ label, path, icon, disabled }) => (
//           <div
//             key={label}
//             onClick={() => path && !disabled && router.push(path)}
//             className={`flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer ${
//               isActive(path)
//                 ? 'bg-black text-white'
//                 : disabled
//                 ? 'cursor-not-allowed text-black'
//                 : 'text-black'
//             }`}
//             style={{
//               borderTopLeftRadius: '20px',
//               borderBottomLeftRadius: '20px',
//               borderTopRightRadius: isActive(path) ? '15px' : '0px',
//               borderBottomRightRadius: isActive(path) ? '15px' : '0px',
//             }}
//           >
//             <FontAwesomeIcon icon={icon} className={`${!disabled && 'text-lg'}`} />
//             <span>{label}</span>
//           </div>
//         ))}
//       </nav>

//       {/* Logout Button */}
//       <button
//         //  onClick={() => signOut()}
//         className="bg-black text-white px-4 py-3 mt-4 rounded-md"
//       >
//         <FontAwesomeIcon icon={faSignOutAlt} />
//         <span> Logout </span>
//       </button>

//       {/* Flex-grow content */}
//       <div className="flex-grow" />

//       {/* Upgrade Box at the bottom */}
//       <div className="h-[265px] w-[226px] bg-[#121212] rounded-2xl shadow-lg flex flex-col items-center justify-center mt-8 relative">
//         {/* Outer Circle */}
//         <div className="w-[130px] h-[130px] rounded-full bg-[#333] flex items-center justify-center mt-6">
//           {/* Inner Circle */}
//           <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center">
//             <FontAwesomeIcon icon={faBolt} className="text-white text-2xl" />
//           </div>
//         </div>

//         {/* Upgrade Button */}
//         <button
//           onClick={handleUpgrade}
//           className="text-white font-bold bg-[#0F0F0F] border border-[#757575] px-6 py-2 rounded-md mt-6"
//         >
//           UPGRADE
//         </button>
//       </div>
//     </aside>
//   );
// }


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
    <aside
      className="w-[310px] h-[1383px] p-6 flex flex-col gap-6 bg-black"
      style={{
   
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
      }}
    >
<div className="w-[267px] h-[129px] px-2 py-[30px] bg-[#0b0b0d] rounded-3xl shadow-[0px_12.105263710021973px_24.210527420043945px_0px_rgba(0,0,0,0.24)] border border-[#4f4f4f] backdrop-blur-[36.32px] flex items-center gap-2">

{/* Icon and Username */}
<div className="flex flex-col items-center justify-center left-1">
  <Icon 
    icon="mingcute:user-4-fill" 
    className="w-[41px] h-[41px] text-white"
  />
  <span className="text-white font-semibold text-[16px] mt-1">User</span>
</div>

{/* Progress Bar and Button */}
<div className="flex flex-col items-start gap-4 left-1 ml-2">
  {/* Progress Bar */}
  <div className="flex items-center">
    <div className="relative w-[139px] h-2 bg-[#615f5f] rounded-[100px] overflow-hidden">
      <div className="w-[20%] h-2 bg-white rounded-[100px]" />
    </div>
    <span className="text-white text-sm ml-2">20%</span>
  </div>

  {/* Button */}
  <button className="mt-2 w-[192px] h-[35px] px-4 py-1 text-[14px] font-medium text-white border border-white rounded-full"
  onClick={navigateToProfileQuestions}>
    Complete Your Profile
  </button>
</div>

</div>

      {/* Logo */}
      <Image
        src="/dashboard/orangelogo.svg"
        alt="Logo"
        width={100}
        height={109}
        className="w-[184px] h-[169px] mx-auto my-10"
      />

<nav className="flex flex-col justify-center mx-auto gap-4 text-[22px] font-semibold font-poppins">
  {[
    { label: 'Music', path: '/dashboard', icon: faMusic },
    { label: 'Audience', path: '/dashboard/audience', icon: faUsers },
    { label: 'Merch', path: null, icon: faTshirt, disabled: true },
    { label: 'Video & Visuals', path: null, icon: faVideo, disabled: true },
    { label: 'Settings', path: '/dashboard/settings', icon: faCog },
  ].map(({ label, path, icon, disabled }) => (
    <div
      key={label}
      onClick={() => path && !disabled && router.push(path)}
      className={`flex items-center gap-4 px-6 py-4 cursor-pointer ${
        isActive(path)
          ? 'bg-[#1E1E1E] text-[#e97f18]'
          : disabled
          ? 'cursor-not-allowed text-white'
          : 'text-white'
      }`}
      style={{
        width: '110%', // Ensures the background spans the full width
        borderTopLeftRadius: '28px',
        borderBottomLeftRadius: '28px',
        borderTopRightRadius: isActive(path) ? '0px' : '0px', // Upside curvy for active state
        borderBottomRightRadius: isActive(path) ? '0px' : '0px', // Downside curvy for active state
      }}
    >
      <FontAwesomeIcon icon={icon} className={`${!disabled && 'text-lg'}`} />
      <span>{label}</span>
    </div>
  ))}
</nav>



<button>
  <div className="w-[226px] h-[47px] bg-[#0f0f0f] rounded-2xl border border-[#4f4f4f] flex justify-center items-center gap-2">
    {/* Icon */}
    <FaSignOutAlt className="w-[20px] h-[20px] text-[#ebebeb]" />
    
    {/* Logout Text */}
    <span className="text-[#ebebeb] text-[20px] font-semibold font-poppins">Logout</span>
  </div>
</button>


      {/* Flex-grow content */}
      <div className="flex-grow" />

      {/* Upgrade Box at the bottom */}
      <div className="h-[265px] w-[226px] bg-[#121212] rounded-2xl shadow-lg flex flex-col items-center justify-center relative">
        {/* Outer Circle */}
        <div className="w-[132px] h-[141.62px] rounded-full bg-[#333] flex items-center justify-center mt-6">
          {/* Inner Circle */}
          <div className="w-[84px] h-[84px] rounded-full bg-black flex items-center justify-center">
            <FontAwesomeIcon icon={faBolt} className="text-white text-[44px]" />
          </div>
        </div>

        {/* Upgrade Button */}
        <button
          onClick={handleUpgrade}
          className="text-white font-semibold w-[178px] h-[50.43] bg-[#0F0F0F] border border-[#757575] px-10 py-4 rounded-2xl mt-6"
        >
          UPGRADE
        </button>
      </div>
    </aside>
  );
}
