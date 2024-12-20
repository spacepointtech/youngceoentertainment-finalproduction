'use client';
import '@/app/style.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaChevronRight, FaChevronDown, FaEdit, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import Link from 'next/link';
const FaqComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  
    const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="support-page bg-black text-white font-poppins">
      <div className="hero-section relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/support-wave.png)' }}>
        <div className="container mx-auto text-left pt-24 pb-16">
          <h1 className="text-4xl font-semibold mb-9 mt-10 text-left ml-10">How Can We <span className='text-[#e97f18]'> help? </span> </h1>
 
          {/* Search Bar */}
          <div className="w-[1240px] h-[84px] relative search-container mx-10 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18]">
            <FaSearch className="absolute left-1rem top-1/2 transform -translate-y-1/2 w-5 h-5  text-white search-icon" />
            <input
              type="text"
              placeholder="Search for articles..."
              className="search-input placeholder-opacity-30 placeholder:text-white  w-[1240px] h-[84px] text-white pl-12 py-3 border border-white rounded-lg  focus:outline-none"
              onChange={handleSearch}
            />
          </div>
        </div>
        
      </div>
      <div className="container mx-auto px-6 py-4">
        <Link href="/support" className="back-link text-white text-lg opacity-50">
          &lt; Back
        </Link>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-6 pb-16">
        <div className="faq-header flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <FaEdit className="text-4xl mb-4" />
            <h2 className="text-2xl font-semibold">Frequently Asked <span className="text-[#e97f18]"> Questions </span> </h2>
            <p className="text-sm opacity-75 mb-6">Answers to questions we are asked most often.</p>

             <p className="text-sm opacity-50 mb-12">{filteredFaqItems.length} Articles</p>
          </div>
          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={100} width={150} />
          </div>
        </div>
       
        <div className="w-[1240px] h-[443px] p-[60px] bg-[#121212] rounded-[10px] shadow border border-[#e97f18] flex-col justify-start items-start inline-flex">
    <div className="text-white text-4xl font-bold ">How much does music distribution cost with Young CEO Entertainment ?</div>
    <div className="self-stretch h-5" />
    <div className="self-stretch"><span className="text-[#ebebeb] text-base font-normal leading-normal">You can release unlimited music to Spotify, Apple Music, TikTok, Amazon Music, Tidal, Deezer, Instagram, YouTube Music and every other global streaming, download and social platform for as little as $19 a year.
     You can find full details of our distribution subscription prices on our Pricing page.
       Our Starter, Pro and Label subscription plans are based on the number of artists you'd like to manage from your account.</span></div>
    <div className="self-stretch h-10" />
    <div className="self-stretch h-px bg-black/5" />
    <div className="self-stretch h-10" />
    <div className="self-stretch h-[72px] p-2 flex-col justify-start items-center gap-2 flex">
        <div className="text-[#e97f18] text-base font-medium ">Is this article helpful?</div>
        <span className='text-[#a6a6a6] inline-flex'> <FaThumbsUp className='mr-3 w-6 h-6'/> <FaThumbsDown className='w-6 h-6' />  </span>
        <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="w-6 h-6 relative" />
        </div>
    </div>
</div>


      <div className="w-[1240px] h-[0px] mt-20 border border-[#757575]"></div>
  
        <div className="text-white text-4xl font-medium mt-20 mb-7">Related Articles</div>
  

        {/* FAQ Container */}
        <div className="faq-container bg-[#484848] bg-opacity-[24%] border border-[#A6A6A6] rounded-lg p-6">
          <div className="faq-list">
            {filteredFaqItems.length > 0 ? (
              filteredFaqItems.map((item, index) => (
                <div key={index} className="faq-item flex flex-col py-4 border-b border-gray-700">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <p>{item.question}</p>
                    {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                  </div>
                  {openIndex === index && (
                    <div className="answer-box bg-[#484848] bg-opacity-[50%] border border-[#A6A6A6] rounded-lg p-4 mt-4">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No articles found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};



// FAQ Items
const faqItems = [
  { question: 'How much does music distribution cost with Young CEO Entertainment?', answer: 'Our music distribution service costs vary depending on the plan you choose. We offer both Single Track Payment and Subscription-based options.' },
  { question: 'How do I remove a release from stores?', answer: 'To remove a release, log in to your account, navigate to your recent releases, and choose the option to take down your music from all stores.' },
  { question: 'How does the affiliates program work?', answer: 'Our affiliates program allows you to earn commissions by referring new artists to our platform. Sign up through your account to get started.' },
  { question: 'How to enter the Press Your Sound competition?', answer: 'To enter, submit your best track through our competition page before the deadline. Winners will be announced on our website and social media.' },
  { question: 'How does YCE Music Mastering work?', answer: 'Our mastering service enhances your tracks with professional sound quality. Upload your tracks, and our team will handle the rest.' },
];

export default FaqComponent;
