'use client';
import '@/app/style.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaChevronRight, FaChevronDown, FaEdit, FaThumbsUp, FaThumbsDown, FaUserAlt } from 'react-icons/fa';
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
      <div className="container mx-auto px-6 py-4">
        <Link href="/support/your-account" className="back-link ml-1 text-white text-lg">
          &lt; Back
        </Link>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-6 pb-16">
        <div className="faq-header flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <FaUserAlt className="text-4xl mb-4 text-[#A6A6A6]" />
            <h2 className="text-4xl font-semibold">Your <span className='text-[#e97f18]'>  Account </span></h2>
            <p className="text-xl text-[#EBEBEB ] mb-6">How to get Started releasing music</p>
        <p className="text-[16px] mb-12 text-[#A6A6A6]">{filteredFaqItems.length} Articles</p>

          </div>
          <Link href="/">
           <div className="faq-logo">
                      <Image src="/images/logo.png" alt="Young CEO Entertainment" height={100} width={150} />
                    </div>
          </Link>
        </div>
       
        <div className="w-[1240px] h-[443px] p-[60px] bg-[#121212] rounded-[10px] shadow border border-[#e97f18] flex-col justify-start items-start inline-flex">
    <div className="text-white text-4xl font-bold font-['Poppins']"> Can I Choose where my music is released? </div>
    <div className="self-stretch h-5" />
    <div className="self-stretch"><span className="text-[#ebebeb] text-base font-normal font-['Poppins'] leading-normal">  
        

    Yes! With Young CEO Entertainment, you have full control to choose where your music is released, including specific platforms and regions.
         </span>

        

</div>

    <div className="self-stretch h-10" />
    <div className="self-stretch h-px bg-black/5" />
    <div className="self-stretch h-10" />
    <div className="self-stretch h-[72px] p-2 flex-col justify-start items-center gap-2 flex">
        <div className="text-[#e97f18] text-base font-medium ">Is this article helpful?</div>
        <span className='text-[#a6a6a6] inline-flex'> <FaThumbsUp className='mr-3 w-6 h-6 hover:text-white'/> <FaThumbsDown className='w-6 h-6 hover:text-white' />  </span>
        <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="w-6 h-6 relative" />
        </div>
    </div>
</div>


      <div className="w-[1240px] h-[0px] mt-20 border border-[#757575]"></div>
  
        <div className="text-white text-4xl font-medium mt-20 mb-7">Related Articles</div>
  

        {/* FAQ Container */}
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



// FAQ Items
const faqItems = [
  
  {
    question: 'How many tracks are on Single, EP and Album?',
     url: '/support/your-account/query14'
  },
{
  question: 'When will my YCE merch arrive?',
   url: '/support/your-account/query15'
},


{
  question: 'Does YCE Music Offer a free trial?',
   url: '/support/your-account/query16'
},

];

export default FaqComponent;
