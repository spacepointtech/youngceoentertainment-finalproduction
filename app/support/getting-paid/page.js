'use client';
import '@/app/style.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaUserAlt, FaCheck, FaEdit, FaCloudUploadAlt, FaDollarSign } from 'react-icons/fa';

const AccountSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="support-page bg-black text-white font-poppins">
      <div className="hero-section relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/support.png)' }}>
        <div className="container mx-auto text-left pt-24 pb-16">
          <h1 className="text-4xl font-semibold mb-9 mt-10 text-left mx-4 ">How Can We <span className='text-[#e97f18]'> help? </span> </h1>
 
          {/* Search Bar */}
          <div className="relative search-container mx-5 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18]">
            <FaSearch className="absolute left-1rem top-1/2 transform -translate-y-1/2 w-5 h-5  text-white search-icon" />
            <input
              type="text"
              placeholder="Search for articles..."
               className="search-input placeholder-opacity-30 placeholder:text-white w-[1240px] h-[84px] text-white pl-12 py-3 border border-white rounded-lg  focus:outline-none"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>



      {/* Back Link */}
      <div className="container mx-16 px-6 py-4">
        <Link href="/support" className="back-link ml-1 text-white text-lg">
          &lt; Back
        </Link>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-6 pb-16">
        <div className="faq-header flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <FaDollarSign className="text-4xl mb-4 text-[#A6A6A6]" />
            <h2 className="text-4xl font-semibold font-poppins"> Getting <span className='text-[#e97f18]'> Paid </span></h2>
            <p className="text-xl text-[#EBEBEB ] mb-6">How to get Started releasing music</p>
        <p className="text-[16px] mb-12 text-[#A6A6A6]">{filteredFaqItems.length} Articles</p>

          </div>

          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
          </div>
        </div>
      
        {/* FAQ Container */}
        <div className="faq-container bg-[#484848] bg-opacity-[24%] w-[1240] border border-[#A6A6A6] rounded-lg p-6">
          <div className="faq-list">
            {filteredFaqItems.length > 0 ? (
              filteredFaqItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="faq-item block py-4 border-b border-gray-700  transition-colors duration-200"
                >
                  <div className="flex justify-between text-xl ml-5 items-center mt-5">
                    <p>{item.question}</p>
                    <FaChevronRight className='mr-10 w-4 h-4' />
                  </div>
                </Link>
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

const faqItems = [
    {
        question: 'How do I withdraw royalties?',
           url: '/support/support-query-response'
       
      },
      {
        question: 'How do I add a royalty payout method?',
           url: '/support/support-query-response'
       
      },
      {
        question: 'My payments aren\'t working. Can I change my royalty payout method?',
           url: '/support/support-query-response'
      
      },
      {
        question: 'How do I withdraw royalties with Payoneer?',
           url: '/support/support-query-response'
        
      },
      {
        question: 'How do I get more streams & sales?',
           url: '/support/support-query-response'
        
      },
      {
        question: 'What is the minimum amount I can withdraw?',
           url: '/support/support-query-response'
       
      },
      {
        question: 'What does Pending License Verification mean?',
           url: '/support/support-query-response'
       
      },
      {
        question: 'Can I automatically split royalties with collaborators, band members etc?',
           url: '/support/support-query-response'
      
      },
      {
        question: 'How do I add split royalty payments to a release?',
           url: '/support/support-query-response'
        
      },
      {
        question: 'How do I edit or remove split royalty payments from a release?',
           url: '/support/support-query-response'
        
      },
      {
        question: 'What’s the difference between Track Splits and Release Splits?',
           url: '/support/support-query-response'
        
      },
      {
        question: 'What are pending royalties?',
           url: '/support/support-query-response'
        
      },
      {
        question: 'Can I withdraw royalties to PayPal?',
           url: '/support/support-query-response'
       
      },
      {
        question: 'Why do I need to enter my bank details again for royalty payouts?',
           url: '/support/support-query-response'
       
      },
      {
        question: 'Bank transfer fees for royalty payouts',
           url: '/support/support-query-response'
      
      },
      {
        question: 'Why is my royalty payment lower than I expected?',
           url: '/support/support-query-response'
       
      },
      {
        question: 'Why don\’t my streams and views match my royalty payments?',
          url: '/support/support-query-response'
      },

];

export default AccountSupport;
