'use client';
import '@/app/style.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaUserAlt, FaCheck, FaEdit, FaRegClipboard, FaDollarSign } from 'react-icons/fa';

const PaidSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqItems = faqItems.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="support-page bg-black text-white font-poppins">
      {/* Hero Section */}
      <div className="hero-section relative h-[300px] md:h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/support.png)' }}>
        <div className="container mx-auto text-left pt-16 md:pt-24 pb-8 md:pb-16">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-9 mt-8 md:mt-16 text-left px-4 md:ml-6">
            How Can We <span className='text-[#e97f18]'> help? </span>
          </h1>

          {/* Search Bar */}
         {/* Search Bar */}
                   <div className="relative px-4 md:ml-6 search-container mx-auto md:mx-10  font-poppins">
                     <FaSearch className="absolute left-1 ml-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white search-icon" />
                     <input
                       type="text"
                       placeholder="Search for articles..."
                       className="search-input placeholder-opacity-30 hover:shadow-[0_0_20px_#e97f18] placeholder:text-white w-full h-14 md:h-[96px] text-white pl-12 py-3 border border-white rounded-lg focus:outline-none"
                       onChange={handleSearch}
                     />
                   </div>
                 </div>
               </div>

      {/* Back Link */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/support" className="back-link text-white text-sm md:text-lg">
          &lt; Back
        </Link>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-4 md:px-6 pb-16">
        <div className="faq-header flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div className="flex flex-col">
            <FaDollarSign className="text-2xl md:text-4xl mb-4 text-[#A6A6A6]" />
            <h2 className="text-2xl md:text-4xl font-semibold">
             Getting  <span className='text-[#e97f18]'> Paid  </span>
            </h2>
            <p className="text-lg md:text-xl text-[#EBEBEB] mb-4 md:mb-6">Info on earning and withdrawing royalties.</p>
            <p className="text-sm md:text-base text-[#A6A6A6]">{filteredFaqItems.length} Articles</p>
          </div>

          <Link href="/">
           <div className="faq-logo">
                      <Image src="/images/logo.png" alt="Young CEO Entertainment" height={100} width={150} />
                    </div>
          </Link>
        </div>

        {/* FAQ Container */}
        <div className="faq-container bg-[#484848] bg-opacity-[24%] w-full max-w-full border border-[#A6A6A6] rounded-lg p-4 md:p-6">
          <div className="faq-list">
            {filteredFaqItems.length > 0 ? (
              filteredFaqItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="faq-item block py-2 md:py-4 border-b border-gray-700 transition-colors duration-200"
                >
                  <div className="flex justify-between text-sm md:text-xl ml-2 md:ml-5 items-center mt-2 md:mt-5">
                    <p>{item.question}</p>
                    <FaChevronRight className="mr-4 md:mr-10 w-3 md:w-4 h-3 md:h-4" />
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
           url: '/support/getting-paid/query1'
       
      },
      {
        question: 'How do I add a royalty payout method?',
           url: '/support/getting-paid/query2'
       
      },
      {
        question: 'My payments aren\'t working. Can I change my royalty payout method?',
           url: '/support/getting-paid/query3'
      
      },
      {
        question: 'How do I withdraw royalties with payoneer?',
           url: '/support/getting-paid/query4'
        
      },
      {
        question: 'What is the minimum amount I can withdraw?',
           url: '/support/getting-paid/query5'
       
      },
      {
        question: 'What does Pending License Verification mean?',
           url: '/support/getting-paid/query6'
       
      },
      {
        question: 'Can I automatically split royalties with collaborators, band members etc?',
           url: '/support/getting-paid/query7'
      
      },
      {
        question: 'How do I add split royalty payments to a release?',
           url: '/support/getting-paid/query8'
        
      },
      {
        question: 'How do I edit or remove split royalty payments from a release?',
           url: '/support/getting-paid/query9'
        
      },
      {
        question: 'What’s the difference between track splits and release Splits?',
           url: '/support/getting-paid/query10'
        
      },
      {
        question: 'Why do I need to confirm my identity to receive royalties?',
           url: '/support/getting-paid/query11'
        
      },
      {
        question: 'How do I view my sales data & earnings?',
           url: '/support/getting-paid/query12'
       
      },
      {
        question: 'What are pending royalties?',
           url: '/support/getting-paid/query13'
       
      },
      {
        question: 'Can I withdraw royalties to PayPal? ',
           url: '/support/getting-paid/query14'
      
      },
      {
        question: 'Why do I need to enter my bank details again for royalty payouts?',
           url: '/support/getting-paid/query15'
       
      },

];

export default PaidSupport;
