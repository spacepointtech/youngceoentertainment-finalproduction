// 'use client';
// import { useState } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname(); // Get current route

//   return (
//     <nav className="text-white fixed w-full z-10">
//       <div className="flex justify-between items-center px-6 sm:px-10 md:px-16 lg:px-[100px] py-4">
//         {/* Logo */}
//         <Link href="/">
//           <div className="w-[65.76px] h-[53.66px] relative cursor-pointer">
//             <Image
//               className="object-cover"
//               src="/navbarlogo.png"
//               alt="Logo"
//               fill
//               priority
//             />
//           </div>
//         </Link>

//         {/* Desktop Navbar Items */}
//         <div className="hidden lg:flex items-center gap-[40px] font-poppins ">
//           {[
//             { name: "Home", path: "/" },
//             { name: "Artist Engagement", path: "/not" },
//             { name: "Pricing", path: "/pricing" },
//             { name: "Services", path: "/services" },
//             { name: "Support", path: "/support" },
//             { name: "About Us", path: "/about-us" },
//           ].map((item) => (
//             <Link key={item.name} href={item.path}>
//               <div className="relative group">
//                 <span
//                   className={`text-xl leading-none font-medium cursor-pointer ${
//                     pathname === item.path ? "text-[#E97F18]" : "text-white"
//                   }`}
//                 >
//                   {item.name}
//                 </span>
//                 <span
//                   className={`absolute bottom-[-2px] left-0 h-[3px] transition-all duration-300 ${
//                     pathname === item.path
//                       ? "w-full bg-[#E97F18]"
//                       : "w-0 bg-[#E97F18] group-hover:w-full"
//                   }`}
//                 ></span>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden lg:flex items-center gap-4 ">
//           <Link href="/login">
//             <button className="px-6 text-[17px] py-2.5 rounded-[10px] text-white font-semibold hover:scale-108 transition-transform duration-400 ease-in-out hover:border border-[#E97f18] hover:text-[#e97f18]">
//               Log In
//             </button>
//           </Link>
//           <Link href="/signup">
//             <button className="px-6 py-2.5 bg-[#e97f18] rounded-[10px] text-white font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">
//               Sign Up
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div
//           className="lg:hidden flex flex-col justify-center items-center cursor-pointer"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span
//             className={`block h-[2px] w-[25px] bg-white mb-[5px] transition-transform ${
//               isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
//             }`}
//           ></span>
//           <span
//             className={`block h-[2px] w-[25px] bg-white transition-opacity ${
//               isMenuOpen ? "opacity-0" : ""
//             }`}
//           ></span>
//           <span
//             className={`block h-[2px] w-[25px] bg-white mt-[5px] transition-transform ${
//               isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
//             }`}
//           ></span>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-black bg-opacity-90 text-white px-6 py-6 flex flex-col gap-4">
//           {[
//             { name: "Home", path: "/" },
//             { name: "Artist Engagement", path: "/artist-engagement" },
//             { name: "Pricing", path: "/pricing" },
//             { name: "Services", path: "/services" },
//             { name: "Support", path: "/support" },
//             { name: "About Us", path: "/about-us" },
//           ].map((item) => (
//             <Link
//               key={item.name}
//               href={item.path}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <span
//                 className={`text-xl font-medium cursor-pointer ${
//                   pathname === item.path ? "text-[#E97F18]" : "text-white"
//                 }`}
//               >
//                 {item.name}
//               </span>
//             </Link>
//           ))}

//           <div className="flex flex-col gap-2 mt-4">
//             <Link href="/login">
//               <button
//                 className="w-full px-6 py-2.5 rounded-[10px] text-white font-semibold border border-white"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Log In
//               </button>
//             </Link>
//             <Link href="/signup">
//               <button
//                 className="w-full px-6 py-2.5 bg-[#e97f18] rounded-[10px] text-white font-semibold"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Sign Up
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// 'use client';
// import { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true); // Navbar visibility
//   const pathname = usePathname(); // Get current route
//   let scrollTimeout = null; // Timeout to detect scrolling stop

//   // Handle scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(false); // Hide navbar while scrolling
//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout); // Clear any existing timeout
//       }
//       scrollTimeout = setTimeout(() => {
//         setIsVisible(true); // Show navbar when scrolling stops
//       }, 200); // Adjust the delay as needed
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout); // Cleanup timeout
//       }
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-10 transition-transform duration-500 ${
//         isVisible ? 'translate-y-0' : '-translate-y-full'
//       }`}
//     >
//       <div className="flex justify-between items-center px-6 sm:px-10 md:px-16 lg:px-[100px] py-4 ">  
//         {/* bg-black bg-opacity-90   */}
//         {/* Logo */}
//         <Link href="/">
//           <div className="w-[65.76px] h-[53.66px] relative cursor-pointer">
//             <Image
//               className="object-cover"
//               src="/navbarlogo.png"
//               alt="Logo"
//               fill
//               priority
//             />
//           </div>
//         </Link>

//         {/* Desktop Navbar Items */}
//         <div className="hidden lg:flex items-center gap-[40px] font-poppins">
//           {[
//             { name: 'Home', path: '/' },
//             { name: 'Artist Engagement', path: '/artist-engagement' },
//             { name: 'Pricing', path: '/pricing' },
//             { name: 'Services', path: '/services' },
//             { name: 'Support', path: '/support' },
//             { name: 'About Us', path: '/about-us' },
//           ].map((item) => (
//             <Link key={item.name} href={item.path}>
//               <div className="relative group">
//                 <span
//                   className={`text-xl leading-none font-medium cursor-pointer ${
//                     pathname === item.path ? 'text-[#E97F18]' : 'text-white'
//                   }`}
//                 >
//                   {item.name}
//                 </span>
//                 <span
//                   className={`absolute bottom-[-2px] left-0 h-[3px] transition-all duration-300 ${
//                     pathname === item.path
//                       ? 'w-full bg-[#E97F18]'
//                       : 'w-0 bg-[#E97F18] group-hover:w-full'
//                   }`}
//                 ></span>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden lg:flex items-center gap-4">
//           <Link href="/login">
//             <button className="px-6 text-[17px] py-2.5 rounded-[10px] text-white font-semibold hover:scale-108 transition-transform duration-400 ease-in-out hover:border border-[#E97f18] hover:text-[#e97f18]">
//               Log In
//             </button>
//           </Link>
//           <Link href="/signup">
//             <button className="px-6 py-2.5 bg-[#e97f18] rounded-[10px] text-white font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">
//               Sign Up
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div
//           className="lg:hidden flex flex-col justify-center items-center cursor-pointer"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span
//             className={`block h-[2px] w-[25px] bg-white mb-[5px] transition-transform ${
//               isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
//             }`}
//           ></span>
//           <span
//             className={`block h-[2px] w-[25px] bg-white transition-opacity ${
//               isMenuOpen ? 'opacity-0' : ''
//             }`}
//           ></span>
//           <span
//             className={`block h-[2px] w-[25px] bg-white mt-[5px] transition-transform ${
//               isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
//             }`}
//           ></span>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-black bg-opacity-90 text-white px-6 py-6 flex flex-col gap-4">
//           {[
//             { name: 'Home', path: '/' },
//             { name: 'Artist Engagement', path: '/artist-engagement' },
//             { name: 'Pricing', path: '/pricing' },
//             { name: 'Services', path: '/services' },
//             { name: 'Support', path: '/support' },
//             { name: 'About Us', path: '/about-us' },
//           ].map((item) => (
//             <Link
//               key={item.name}
//               href={item.path}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <span
//                 className={`text-xl font-medium cursor-pointer ${
//                   pathname === item.path ? 'text-[#E97F18]' : 'text-white'
//                 }`}
//               >
//                 {item.name}
//               </span>
//             </Link>
//           ))}

//           <div className="flex flex-col gap-2 mt-4">
//             <Link href="/login">
//               <button
//                 className="w-full px-6 py-2.5 rounded-[10px] text-white font-semibold border border-white"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Log In
//               </button>
//             </Link>
//             <Link href="/signup">
//               <button
//                 className="w-full px-6 py-2.5 bg-[#e97f18] rounded-[10px] text-white font-semibold"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Sign Up
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility
  const pathname = usePathname(); // Get current route
  let scrollTimeout = null; // Timeout to detect scrolling stop

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false); // Hide navbar while scrolling
      if (scrollTimeout) {
        clearTimeout(scrollTimeout); // Clear any existing timeout
      }
      scrollTimeout = setTimeout(() => {
        setIsVisible(true); // Show navbar when scrolling stops
      }, 200); // Adjust the delay as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout); // Cleanup timeout
      }
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center px-6 sm:px-10 md:px-16 lg:px-[100px] py-4 bg-black bg-opacity-5 ">
        {/* Logo */}
        <Link href="/">
          <div className="w-[65.76px] h-[53.66px] relative cursor-pointer">
            <Image
              className="object-cover"
              src="/navbarlogo.png"
              alt="Logo"
              fill
              priority
            />
          </div>
        </Link>

        {/* Desktop Navbar Items */}
        <div className="hidden lg:flex items-center gap-[40px] font-poppins  ">
          {[
            { name: 'Home', path: '/' },
            { name: 'Artist Engagement', path: '/artist-engagement' },
            { name: 'Pricing', path: '/pricing' },
            { name: 'Services', path: '/services' },
            { name: 'Support', path: '/support' },
            { name: 'About Us', path: '/about-us' },
          ].map((item) => (
            <Link key={item.name} href={item.path}>
              <div className="relative group hover:scale-105 transition-transform duration-300 ease-in-out">
                <span
                  className={`text-xl leading-none font-medium cursor-pointer  ${
                    item.path === '/'
                      ? pathname === '/' // Strict check for Home
                        ? 'text-[#E97F18]'
                        : 'text-white'
                      : pathname.startsWith(item.path) // Check for subpaths
                      ? 'text-[#E97F18]'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`absolute bottom-[-2px] left-0 h-[3px] transition-all duration-300 ${
                    item.path === '/'
                      ? pathname === '/' // Strict check for Home
                        ? 'w-full bg-[#E97F18]'
                        : 'w-0 bg-[#E97F18] group-hover:w-full'
                      : pathname.startsWith(item.path) // Check for subpaths
                      ? 'w-full bg-[#E97F18]'
                      : 'w-0 bg-[#E97F18] group-hover:w-full'
                  }`}
                ></span>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login">
            <button className="px-6 text-[17px] py-2.5 rounded-[10px] text-white font-semibold hover:scale-108 transition-transform duration-400 ease-in-out hover:border border-[#E97f18] hover:text-[#e97f18]">
              Log In
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-6 py-2.5 bg-[#e97f18] rounded-[10px] text-white font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden flex flex-col justify-center items-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block h-[2px] w-[25px] bg-white mb-[5px] transition-transform ${
              isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[25px] bg-white transition-opacity ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[25px] bg-white mt-[5px] transition-transform ${
              isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 text-white px-6 py-6 flex flex-col gap-4">
          {[
            { name: 'Home', path: '/' },
            { name: 'Artist Engagement', path: '/artist-engagement' },
            { name: 'Pricing', path: '/pricing' },
            { name: 'Services', path: '/services' },
            { name: 'Support', path: '/support' },
            { name: 'About Us', path: '/about-us' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              <span
                className={`text-xl font-medium cursor-pointer ${
                  item.path === '/'
                    ? pathname === '/' // Strict check for Home
                      ? 'text-[#E97F18]'
                      : 'text-white'
                    : pathname.startsWith(item.path) // Check for subpaths
                    ? 'text-[#E97F18]'
                    : 'text-white'
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-4">
            <Link href="/login">
              <button
                className="w-full px-6 py-2.5 rounded-[10px] text-white font-semibold border border-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </button>
            </Link>
            <Link href="/signup">
              <button
                className="w-full px-6 py-2.5 bg-[#e97f18] rounded-[10px] text-white font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
