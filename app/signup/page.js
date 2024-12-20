
'use client';
import '@/app/globals.css';
import React, {useState} from 'react';
import { FcGoogle } from 'react-icons/fc'; // Import Google icon
import Image from 'next/image';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons // Import Google icon

export default function SignPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPasswordTyped, setIsPasswordTyped] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

    // Handle password typing detection
    const handlePasswordChange = (e) => {
      setIsPasswordTyped(e.target.value.length > 0);
    };
  
  return (
    <div className="login-wrappers">
      <div className="background-image"></div>
      <div className="logo-container">
        <Link href="/">
          <Image src="/logo.png" alt="YCE Logo" width={100} height={100} />
        </Link>
      </div>
      <div className="login-form-container p-5 bg-[#141416] rounded-2xl border border-[#9fa9fa] justify-start items-center gap-2.5 font-poppins">
        <h2 className="text-white text-3xl font-medium">Register</h2>
        <p className="w-[299px] text-center ml-14 text-[#d9d9d9] text-base font-normal mb-[28px]">
        Easy registration to connect with Young CEO Entertainment
        </p>
        <form className="w-full">
          <div className="mb-5">
          <label
              htmlFor="Artist Name"
              className="block w-1/4 text-[#999999] text-sm font-normal mr-[400px]"
            >
             Artist Name
            </label>
            <input
              id="artistname"
              type="artistname"
              placeholder="Artist Name"
              className="bg-[#0B0B0D] mb-5  w-[393px] h-[40px] text-white px-3 py-2 text-sm rounded-md  focus:outline-none focus:ring-2 focus:ring-[#e97f18]"

              required
            />
            <label
              htmlFor="email"
              className="block text-[#999999] text-sm font-normal mr-[350px]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="bg-[#0B0B0D]  w-[393px] h-[40px] text-white text-sm px-3 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
              required
            />
            <p className="text-[#999999] w-full text-[10px] text-left ml-2 mt-1">(This email will be used as Official Company Communication channel)</p>
          </div>
          <div className="mb-5 relative">
  <label
    htmlFor="password"
    className="block mb-1 text-[#999999] text-sm font-normal text-left ml-2"
  >
    Password
  </label>
  <input
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter Your Password"
              className="bg-[#0B0B0D] w-[393px] h-[40px] text-white px-3 py-2 text-sm rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
              required
              onChange={handlePasswordChange}
            />
    <p className="text-[#999999] w-full text-[10px] text-left ml-2 mt-1">(Password must be at least 8 characters long, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.)</p>
  <div
    onClick={togglePasswordVisibility}
    className={`absolute right-3 top-11 transform -translate-y-1/2 cursor-pointer ${
      isPasswordTyped ? 'text-white' : 'text-[#2F2F33]'
    }`}// Eye icon color
  >
    {passwordVisible ? (
      <FiEye className="text-lg" />
    ) : (
      <FiEyeOff className="text-lg" />
    )}
  </div>
</div>
       
          <button
            type="submit"
            className="bg-[#343439] w-full mt-7 h-11 py-3 px-3 rounded-lg text-white mb-5 hover:bg-[#e97f18] hover:text-white transition duration-300"
          >
            Continue
          </button>
          <button
            type="button"
            className="flex items-center justify-center text-white h-11 py-3 rounded-lg border border-white w-full hover:bg-[#e97f18] hover:border-[#e97f18] hover:text-white transition duration-300"
          >
            <FcGoogle className="text-2xl mr-2" /> {/* Google Icon */}
            Continue With Google
          </button>
        </form>
        <div className="text-[#9f9fa1] mt-[28px] text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-[#e97f18] underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
