

'use client';
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import '@/app/style.css'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleSubscribe = () => {

    window.location.href =
      "mailto:connectwithus@youngceoentertainment.com?subject=Get%20Details%20about%20distributing%20my%20track&body=Hello!%20I%20hope%20this%20email%20finds%20you%20well.%20I%20want%20to%20connect%20with%20the%20team%20to%20discuss%20about%20distributing%20my%20music.";
  };
  return (
    <div className="h-[805px] relative bg-gradient-to-b from-[#0e0e10] to-[#2f1700] font-poppins">
      <div className="w-[417px] h-[472px] px-6 py-8 left-[108px] top-[74px] absolute bg-[#0b0b0d] rounded-2xl border border-[#9f9fa1] flex-col justify-between items-start inline-flex">
        <div className="self-stretch h-[358px] flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch h-[142px] flex-col justify-start items-start gap-5 flex">
            <div className="w-60 text-[#e97f18] text-[10px] font-medium uppercase leading-[14px] tracking-tight">
              Feedback
            </div>
            <div className="self-stretch">
              <span className="text-white text-[28px] font-extralightß leading-9">
                Have Any Questions?
              </span>
              <span className="text-white text-[28px] font-medium leading-9">
                Request a Call from the YCE Team
              </span>
            </div>
          </div>
          <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-14 px-3 py-[9px] rounded-xl hover:border hover:border-white/60 border border-white/25 flex-col justify-start items-start gap-1 flex">
              <label
                htmlFor="name"
                className="absolute opacity-40 text-white text-[12px] font-medium uppercase leading-[14px] tracking-tight"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent text-white text-sm font-normal focus:outline-none w-full mt-4"
              />
            </div>
            <div className="self-stretch h-14 px-3 py-2 rounded-xl hover:border hover:border-white/60  border border-white/25 flex-col justify-start items-start gap-2 flex">
              <label
                htmlFor="phone"
                className="absolute opacity-40 text-white text-[12px] font-medium uppercase leading-[14px] tracking-tight"
              >
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent text-white text-[16px] font-normal focus:outline-none w-full mt-4"
              />
            </div>
          </div>
          <Link href="#"> 
          <div className="px-8 py-2.5  border border-white rounded-[50px] justify-center items-center gap-2.5 inline-flex hover:bg-[#e97f18] hover:border-[#e97f18]">
            <div className="text-white text-sm font-medium leading-tight ">
              Send a request
            </div>
          </div>
          </Link>
        </div>
        
        <div className="self-stretch opacity-40   text-white text-xs font-normal leading-none">
          <Link href="/privacy-policy" className="hover:text-[#e97f18]"> Privacy </Link> | <Link href="/terms" className="hover:text-[#e97f18]"> Terms & Conditions </Link>
        </div>
      </div>
      <div className="w-[601px] pt-2.5 left-[733px] top-[64px] absolute justify-center items-center inline-flex">
        <div className="w-[601px] h-[605.66px] relative flex-col justify-start items-start flex">
          <div className="w-[340px] justify-start items-start gap-[31px] inline-flex ">
            <div className="w-44 flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch text-[#e97f18] text-base font-medium uppercase leading-snug tracking-wide">
                Company
              </div>
              <div className="self-stretch h-[120px] flex-col justify-start items-start gap-[5px] flex">
                <div className="self-stretch hover:text-[#e97f18] text-white text-sm font-normal leading-tight">
                  <Link href="/login">Login</Link>
                </div>
                <div className="self-stretch hover:text-[#e97f18] text-white text-sm font-normal leading-tight">
                  <Link href="/signup">Signup</Link>
                </div>
                <div className="self-stretch hover:text-[#e97f18] text-white text-sm font-normal leading-tight">
                  <Link href="/pricing">Pricing</Link>
                </div>
                <div className="self-stretch hover:text-[#e97f18] text-white text-sm font-normal leading-tight">
                  <Link href="/services">Services</Link>
                </div>
                <div className="self-stretch hover:text-[#e97f18] text-white text-sm font-normal leading-tight">
                  <Link href="/support">Support</Link>
                </div>
                <div className="self-stretch hover:text-[#e97f18] text-white text-sm font-normal leading-tight">
                  <Link href="/about-us">About Us</Link>
                </div>
              </div>
            </div>
            <div className="w-32 flex-col  justify-start items-start gap-6 inline-flex relative">
              <div className="self-stretch text-[#e97f18] text-base font-medium uppercase leading-snug tracking-wide">
                Extras
              </div>
              <div className="self-stretch  h-[95px] flex-col justify-start items-start gap-[5px] flex">
                <div className="self-stretch  text-white text-sm font-normal leading-tight">
                  <Link href="/publishing" className="hover:text-[#e97f18]">Music Publishing</Link>
                </div>
                <div className="self-stretch hover:text-[#e97f18] text-white text-sm font-normal leading-tight">
                  <Link href="/promotion">Music Promotion</Link>
                </div>
                <div className="self-stretch hover:text-[#e97f18] text-white text-sm font-normal leading-tight">
                  <Link href="/news">News room</Link>
                </div>
              </div>
              <Link href={"/"}>
              <div className="absolute top-[-15px] right-[-130px]">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={117}
                  height={96}
                  className="ml-60 w-[117px] h-[96px]"
                />
              </div>
              </Link>
            </div>
          </div>
          <div className="h-[116px] flex-col justify-start mt-12 items-start gap-6 inline-flex">
            <div className="self-stretch text-[#e97f18] text-base font-medium font-['Poppins'] uppercase leading-snug tracking-wide">
              Contact us
            </div>
            <div className="self-stretch flex justify-between items-center gap-4">
              <div className="flex-col">
                <div className="self-stretch text-white text-sm font-normal leading-tight">
                <Link href="tel:+918788969278">  +91 8788969278 </Link>
                </div>
               
                <div className="flex items-center gap-4">
                  
                  <div className="text-white text-sm font-normal leading-tight">
                  <button 
                   onClick={handleSubscribe}>   connectwithus@youngceoentertainment.com </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] rounded-[50px] hover:border hover:border-white border border-white/10 justify-center items-center flex">
                      <FaFacebookF className="text-white text-xl" />
                    </div>
                    <div className="w-[50px] h-[50px] rounded-[50px] hover:border hover:border-white  border border-white/10 justify-center items-center flex">
                      <Link href="https://www.instagram.com/youngceoentertainment_" target="_blank">
                        <FaInstagram className="text-white text-xl" />
                      </Link>
                    </div>
                    <div className="w-[50px] h-[50px] rounded-[50px] hover:border hover:border-white border border-white/10 justify-center items-center flex">
                      <Link href="https://www.linkedin.com" target="_blank">
                        <FaLinkedin className="text-white text-xl" />
                      </Link>
                    </div>
                    <div className="w-[50px] h-[50px] rounded-[50px] hover:border hover:border-white border border-white/10 justify-center items-center flex">
                      <Link href="https://wa.me/8788969278" target="_blank">
                        <FaWhatsapp className="text-white text-xl" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-white text-sm font-normal leading-tight">
                <Link href="https://g.co/kgs/TV1BF5E" target="_blank">      Pune </Link>
                </div>
                <div className="text-[#e97f18] mt-10 text-base font-medium uppercase leading-snug tracking-wide">
                  Subscription
                </div>
              </div>
            </div>
            <div className="h-12 w-[555px] hover:border hover:border-white/60 pl-5 pr-6 py-3.5 rounded-xl border border-white/10 justify-between items-center flex">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="bg-transparent text-white text-sm font-normal focus:outline-none w-full"
              />
              <Link href={"#"}>
              <span className="text-[#e97f18] text-lg font-medium">{">"}</span></Link>
            </div>
          </div>
        </div>
      </div>
      <div 
        onClick={scrollToTop} 
        className="w-[50px] h-[50px] left-[696px]  top-[706px] absolute origin-top-left -rotate-90 cursor-pointer"
      >
        <div className="w-[50px] h-[50px] left-0 top-0 hover:bg-opacity-40 absolute bg-white rounded-[50px] flex justify-center items-center">
          <FaArrowRight className="text-black text-xl" />
        </div>
      </div>
    <div className="w-[404px] ml-[520px] top-[726px] absolute opacity-40 text-center text-[#eeeff0] text-xs font-medium ">Young Ceo Entertainment © 2024 | All Rights Reserved</div>
    </div>
  );
}
