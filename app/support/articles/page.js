'use client';
import '@/app/style.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaUserAlt, FaCheck } from 'react-icons/fa';

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
            <FaCheck className="text-4xl mb-4 text-[#A6A6A6]" />
            <h2 className="text-4xl font-semibold font-poppins"> What is <span className='text-[#e97f18]'> Young Ceo Entertainment? </span></h2>
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
      { question: 'What is Young Ceo Entertainment', 
           url: '/support/support-query-response'
    },
  { 
    question: 'How much does music distribution cost with Young CEO Entertainment?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'Can I release music for multiple artists from one account?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'Who owns the rights to my music when I distribute with YCE?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'What does (In Review), (Scheduled) and (Sent To Stores) mean on my releases?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'Can I release music in specific countries?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'Can I view my music analytics in more detail?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'How does Pre-Release work?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'Can I edit or remove my release after it\'s been sent to stores?', 
       url: '/support/support-query-response'

},
  { 
    question: 'What is Pre-Order Instant Gratification?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'Can I set the price of my music?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'Can I release someone else\'s music from my account?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'Can I choose where my music is released?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'How many tracks are on a single, EP, and album?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'When will my YCE Merch arrive?', 
       url: '/support/support-query-response'
  },
  { 
    question: 'Does YCE Music offer a free trial?', 
       url: '/support/support-query-response'
  },




];

export default AccountSupport;
