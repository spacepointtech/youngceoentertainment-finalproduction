

// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-black text-white p-10 fixed w-full z-10">
//       <div className="absolute bottom-0 w-full px-6 py-4 bg-transparent flex justify-start items-center z-10 font-poppins gap-[60px]">
//         {/* Logo Placeholder */}
//         <Link href="/">
//           <div className="w-[65.76px] h-[53.66px] ml-10 mr-10 relative cursor-pointer">
//             <Image
//               className="object-cover"
//               src="/navbarlogo.png"
//               alt="Logo"
//               fill
//               priority
//             />
//           </div>
//         </Link>

//         {/* Navbar Items */}
//         <div className="flex items-center gap-[30px]">
//           {[
//             { name: "Home", path: "/" },
//             { name: "Artist Engagement", path: "/artist-engagement" },
//             { name: "Pricing", path: "/pricing" },
//             { name: "Services", path: "/services" },
//             { name: "Support", path: "/support" },
//             { name: "Contact Us", path: "/contact" },
//           ].map((item) => (
//             <Link key={item.name} href={item.path}>
//               <div className="text-white text-xl leading-none font-medium cursor-pointer">
//                 {item.name}
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Navbar Buttons */}
//         <div className="flex items-center gap-4 mr-14">
//           <Link href="/login">
//             <button className="px-6 py-2.5 rounded-[10px] text-white font-semibold">
//               Log In
//             </button>
//           </Link>
//           <Link href="/signup">
//             <button className="px-6 py-2.5 bg-[#e97f18] rounded-[10px] text-white font-semibold">
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-[30%] text-white p-10 fixed w-full z-10">
      <div className="absolute bottom-0 w-full px-6 py-4 bg-transparent flex justify-start items-center z-10 font-poppins gap-[60px]">
        {/* Logo Placeholder */}
        <Link href="/">
          <div className="w-[65.76px] h-[53.66px] ml-10 mr-10 relative cursor-pointer">
            <Image
              className="object-cover"
              src="/navbarlogo.png"
              alt="Logo"
              fill
              priority
            />
          </div>
        </Link>

        {/* Navbar Items */}
        <div className="flex items-center gap-[30px]">
          {[
            { name: "Home", path: "/" },
            { name: "Artist Engagement", path: "/artist-engagement" },
            { name: "Pricing", path: "/pricing" },
            { name: "Services", path: "/services" },
            { name: "Support", path: "/support" },
            { name: "About Us", path: "/about" },
          ].map((item) => (
            <Link key={item.name} href={item.path}>
              <div className="relative group">
                <span className="text-white text-xl leading-none font-medium cursor-pointer">
                  {item.name}
                </span>
                <span className="absolute bottom-[-2px] left-0 w-0 h-[3px] bg-[#E97F18] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          ))}
        </div>

        {/* Navbar Buttons */}
        <div className="flex items-center gap-4 mr-14">
          <Link href="/login">
            <button className="px-6 py-2.5 rounded-[10px] text-white font-semibold">
              Log In
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-6 py-2.5 bg-[#e97f18] rounded-[10px] text-white font-semibold">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
