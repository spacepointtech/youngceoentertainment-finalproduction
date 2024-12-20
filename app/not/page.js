// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { FaBackward, FaStepBackward } from 'react-icons/fa';
// import { FiSkipBack } from 'react-icons/fi';
// import "@/app/style.css"
// export default function ErrorPage() {
//   return (
//     <div className="bg-black w-[1440px] h-auto text-white font-poppins">
          
//           <div className='font-bold text-2xl items-center ml-20 p-20'> 

//             <h1 className='font-poppins text-6xl text-center'> Oops! </h1>
//              <p className='text-center mt-2 text-2xl text-[#A6A6A6]'> We&apos;re working on it! </p>
//               <Image
//       src="/images/error.svg"
//       width={900}
//       height={900}
//       className='mt-16 ml-28'
//       alt="Picture of the author"
//     />
//        <Link href="/">
//      <div className='text-[#e97f18] text-2xl font-normal mt-10 capitalize inline-flex underline ml-[480px]'> <FaStepBackward className='h-7 w-7 mr-2 underline'/> Go to Home  </div> 
//      </Link> 
            
//           </div>
    
//         </div>
//   );
// }


'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaChevronCircleLeft, FaChevronLeft, FaStepBackward } from 'react-icons/fa';
import { Icon } from "@iconify/react";

export default function ErrorPage() {
  return (
    <div className="bg-black w-full min-h-screen text-white font-poppins flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">Oops!</h1>
      <p className="mt-2 text-lg sm:text-xl lg:text-2xl text-center text-[#A6A6A6]">
        We&apos;re working on it!
      </p>

      {/* Image Section */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/images/error.svg"
          width={600}
          height={600}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          alt="Error Illustration"
        />
      </div>

      {/* Back to Home Link */}
      <Link href="/" className="mt-10 flex items-center text-[#e97f18] text-lg sm:text-xl capitalize underline hover:text-[#A35911]">
        
        <Icon icon="ri:arrow-go-back-line" className='w-6 h-6 mr-2'/>
        Go to Home
      </Link>
    </div>
  );
}
