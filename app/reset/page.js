
// import Link from 'next/link';
// import '@/app/globals.css';
// import Image from 'next/image';

// export default function ResetPasswordPage() {
//   return (
//     <div
//       className="flex justify-center items-center h-[100vh] font-poppins"
//       style={{
//         backgroundImage: "url('/reset.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="logo-container">
//         <Link href="/">
//           <Image src="/logo.png" alt="YCE Logo" width={100} height={100} />
//         </Link>
//       </div>
//       <div className="h-[352px] p-5 left-[493px] top-[169px] absolute bg-[#141416] rounded-2xl border border-[#9f9fa1] flex-col justify-start items-start gap-2.5 inline-flex">
//         <div className="home-form self-stretch h-[312px] flex-col justify-start items-center gap-7 flex">
//           <div className="w-[342px] h-24 relative">
//             <div className="left-[37px] top-0 absolute text-white text-[32px] font-medium font-['Poppins']">
//               Forgot Password
//             </div>
//             <div className="w-[342px] left-0 top-[48px] absolute text-center text-[#d9d9d9] text-base font-normal">
//               Input your email then we send you a link to reset your password
//             </div>
//           </div>
//           <div className="self-stretch h-[68px] flex-col mt-7 justify-start items-start gap-2 flex">
//             <div className=" ml-1 self-stretch text-[#999999] text-sm mb-1 font-normal leading-tight">
//               Email
//             </div>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter Your Email"
//               className="bg-[#0B0B0D] w-[413px] h-[40px] text-sm text-white px-3 py-2 mr-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
//               required
//             />
//           </div>
//           <button
//             className="self-stretch px-[183px] py-3 bg-[#343439] rounded-lg justify-center items-center gap-2.5 inline-flex hover:bg-[#e97f18] transition-colors"
//           >
//             <div className="text-white text-base font-medium leading-tight">
//               Send
//             </div>
//           </button>
//           <div className="self-stretch text-center">
//             <span className="text-[#9f9fa1] text-sm font-normal leading-tight">
//               Remember your password?
//             </span>
//             <span className="text-white text-sm font-normal leading-tight"> </span>
//             <Link href="/login" className="text-[#e97f18] text-sm underline">
//               Log In
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import Link from 'next/link';
import '@/app/globals.css';
import Image from 'next/image';

export default function ResetPasswordPage() {
  return (
    <div className="flex justify-center items-center min-h-screen font-poppins bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/reset.png')" }}
    >
     <div className="logo-container mb-8">
        <Link href="/">
          <Image src="/logo.png" alt="YCE Logo" width={100} height={100} />
        </Link>
      </div>
      <div className="relative w-full max-w-md bg-[#141416] rounded-2xl border border-[#9f9fa1] p-6 sm:p-8 flex flex-col justify-start items-center gap-6">
        <div className="w-full text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-medium mb-4">
            Forgot Password
          </h2>
          <p className="text-[#d9d9d9] text-sm sm:text-base">
            Input your email then we send you a link to reset your password
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <label
            htmlFor="email"
            className="text-[#999999] text-sm font-normal"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            className="bg-[#0B0B0D] w-full h-10 px-3 py-2 text-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#343439] rounded-lg hover:bg-[#e97f18] transition-colors"
        >
          <span className="text-white text-base font-medium">Send</span>
        </button>
        <div className="text-center">
          <span className="text-[#9f9fa1] text-sm">Remember your password?</span>{' '}
          <Link href="/login" className="text-[#e97f18] text-sm underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
