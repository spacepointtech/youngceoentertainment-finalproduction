


// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Header from '@/app/dashboard/components/Header';
// // import { useSession } from 'next-auth/react';

// export default function Dashboard() {
//   // const { data: session } = useSession();
//   const [step, setStep] = useState(1); // State for managing steps
//   const [formData, setFormData] = useState({
//     fname: '',
//     lname: '',
//     email:  '',
//     mobile: '',
//     selectedArtistType: '',
//     distributedSong: '',
//     spotifyStatus: '',
//     spotifyLink: '',
//     youtubeStatus: '',
//     youtubeLink: '',
//     instagramLink: '',
//     facebookLink: '',
//     twitterLink: '',
//   });

//   const previousPhase = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const nextPhase = () => {
//     if (step < 5) setStep(step + 1);
//   };

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div className="flex w-full h-[1742px] bg-[#0F0F0F] relative">
//       <Sidebar />
//       <main className="flex-1 p-6 flex flex-col gap-6 text-white">
//         <Header />
//         <div className="bg-black bg-opacity-40 backdrop-blur-lg text-white w-[800px] p-8 rounded-lg shadow-lg z-10 relative ml-32">
//           <div className="flex justify-between items-center mb-4">
//             <button onClick={previousPhase}>
//               <FontAwesomeIcon icon={faAngleLeft} className="text-white text-2xl" />
//             </button>
//             <span>{step}/5</span>
//           </div>
//           <form>
//             {/* Step 1: Basic Information */}
//             {step === 1 && (
//               <>
//                 <h2 className="text-2xl font-semibold text-center mb-4">Complete your Account Setup!</h2>
//                 <p className="text-gray-400 text-center mb-6">
//                   Provide your basic profile information to complete your artist profile. This helps us create a more personalized experience for you.
//                 </p>
//                 <div className="grid grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     value={formData.fname}
//                     onChange={(e) => handleChange('fname', e.target.value)}
//                     className="bg-transparent border text-white p-2 rounded-lg mb-4"
//                     required
//                   />
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     value={formData.lname}
//                     onChange={(e) => handleChange('lname', e.target.value)}
//                     className="bg-transparent border text-white p-2 rounded-lg mb-4"
//                     required
//                   />
//                 </div>
//                 <input
//                   type="email"
//                   placeholder="Your Email Address"
//                   value={formData.email}
//                   className="bg-transparent border text-white w-full p-2 mt-4 rounded-lg mb-4"
//                   disabled
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Mobile No."
//                   value={formData.mobile}
//                   onChange={(e) => handleChange('mobile', e.target.value)}
//                   className="bg-transparent border text-white w-full p-2 mt-4 rounded-lg mb-4"
//                   required
//                 />
//                 {/* Other fields can follow */}
//               </>
//             )}
//             {/* Step 2, 3, 4, and 5 would go here similarly */}


//                     {/* Step 2: Distributed Song */}
//              {step === 2 && (
//               <div>
//                 <div className="flex justify-center mb-6">
//                   <Image src="/images/cuate.png" alt="Illustration" height={300} width={300} />
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-center mb-4">Have you distributed a song before?</p>
//                   <div className="flex flex-col mt-4">
//                     {['yes', 'no'].map((option) => (
//                       <div
//                         key={option}
//                         className={`flex items-center p-4 ${
//                           formData.distributedSong === option ? 'bg-white text-black' : 'bg-transparent text-white'
//                         }`}
//                         onClick={() => handleChange('distributedSong', option)}
//                       >
//                         <input
//                           type="radio"
//                           name="distributed_song"
//                           id={option}
//                           className="mr-2"
//                           checked={formData.distributedSong === option}
//                           onChange={() => handleChange('distributedSong', option)}
//                         />
//                         <label htmlFor={option}>
//                           {option === 'yes'
//                             ? 'Yes, I have distributed a song before'
//                             : 'No, I have not distributed a song before'}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

            
//            {/* Step 3 */}
//              {step === 3 && (
//         <div>
//                <div className="flex justify-center mb-6">
//             <Image src="/images/amico.svg" alt="Illustration" height={300} width={300} />
//           </div>
//           <div className="mt-4 font-bold">
//             <p className="text-center ">Do you have previous works</p>
//             <p className="text-center  mb-4">on Spotify</p>
           
//               </div>
              
//               <select
//               className="bg-transparent border border-white text-white w-full p-2 rounded-lg"
//               value={spotifyStatus}
//               onChange={(e) => setSpotifyStatus(e.target.value)}
//             >
//               <option value="" disabled>Select an option</option>
//               <option value="yes">Yes, I am already on Spotify</option>
//               <option value="no">No, I don&apos;t have a Spotify account</option>
//             </select>

//             {spotifyStatus === 'yes' && (
//               <div className="mt-4">
//                 <input
//                   type="text"
//                   placeholder="Provide link to your Spotify handle"
//                   className="bg-transparent border border-white text-white w-full p-2 rounded-lg"
//                   value={spotifyLink}
//                   onChange={(e) => setSpotifyLink(e.target.value)}
//                 />
//               </div>
//             )}
//               </div>
        
        
       
//       )}
//           {/* Phase 4 Placeholder */}
//       {step === 4 && (
//         <div>
       
//        <div className="flex justify-center mb-6">
//             <Image src="/images/amico.svg" alt="Illustration" height={300} width={300} />
//           </div>
//           <div className="mt-4">
//             <p className="text-center">Do you have previous works</p>
//               <p className="text-center mb-4"> on Youtube?</p>
//               </div>
              
//               <select
//               className="bg-transparent border border-white text-white w-full p-2 rounded-lg"
//               value={YoutubeStatus}
//               onChange={(e) => setYoutubeStatus(e.target.value)}
//             >
//               <option value="" disabled>Select an option</option>
//               <option value="yes">Yes, I am already on Youtube</option>
//               <option value="no">No, I don&apos;t have a Youtube Channel</option>
//             </select>

//             {YoutubeStatus === 'yes' && (
//               <div className="mt-4">
//                 <input
//                   type="text"
//                   placeholder="Provide link to your Youtube Channel"
//                   className="bg-transparent border border-white text-white w-full p-2 rounded-lg"
//                   value={YoutubeLink}
//                   onChange={(e) => setYoutubeLink(e.target.value)}
//                 />
//               </div>
//             )}
//         </div>
//       )}
//               {/* Phase 5 Placeholder */}
//       {step === 5 && (
//         <div>
//            {/* Illustration */}
//            <div className="flex justify-center mb-6">
//             <Image src="/images/social.svg" alt="Illustration" height={300} width={300} />
//           </div>

//           {/* Social Media Handles */}
//           <div className="mt-4">
//             <p className="text-center mb-2 font-bold text-xl">Social Media Presence</p>
           

//             <div className="mt-4">
//               <div className="relative mb-4 flex items-center">
//                 <FaInstagram className="absolute left-3 text-white" />
//                 <input
//                   type="text"
//                   placeholder="Instagram Handle"
//                   className="bg-transparent border border-white text-white w-full pl-10 p-2 rounded-lg"
//                   value={instagramLink}
//                   onChange={(e) => setInstagramLink(e.target.value)}
//                 />
//               </div>

//               <div className="relative mb-4 flex items-center">
//                 <FaFacebook className="absolute left-3 text-white" />
//                 <input
//                   type="text"
//                   placeholder="Facebook Link"
//                   className="bg-transparent border border-white text-white w-full pl-10 p-2 rounded-lg"
//                   value={facebookLink}
//                   onChange={(e) => setFacebookLink(e.target.value)}
//                 />
//               </div>

//               <div className="relative mb-4 flex items-center">
//                 <FaTwitter className="absolute left-3 text-white" />
//                 <input
//                   type="text"
//                   placeholder="Twitter Handle"
//                   className="bg-transparent border border-white text-white w-full pl-10 p-2 rounded-lg"
//                   value={twitterLink}
//                   onChange={(e) => setTwitterLink(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
   
//       )}

//             <button
//               type={step === 5 ? 'submit' : 'button'}
//               onClick={step < 5 ? nextPhase : undefined}
//               className="bg-[#e97f18] text-white w-full py-2 mt-6 rounded-lg font-semibold"
//             >
//               {step === 5 ? 'Submit' : 'Next'}
//             </button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '@/app/dashboard/components/Sidebar';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Dashboard() {
  const [step, setStep] = useState(1); // State for managing steps
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    selectedArtistType: '',
    distributedSong: '',
    spotifyStatus: '',
    jiosavanStatus:'',
    jiosavanLink:'',
    spotifyLink: '',
    spotifyArtistName: '',
    jioSavanArtistName:'',
    youtubeStatus: '',
    youtubeLink: '',
    youtubeArtistName: '',
    instagramLink: '',
    facebookLink: '',
    twitterLink: '',
  });

  const previousPhase = () => {
    if (step > 1) setStep(step - 1);
  };

  const nextPhase = () => {
    if (step < 6) setStep(step + 1);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex w-full h-[1742px] bg-[#0F0F0F] relative font-poppins">
      <Sidebar />
      <main className="flex-1 p-6 items-center flex flex-col gap-6 text-white font-poppins">
        <div className=" bg-opacity-40  top-12 backdrop-blur-lg text-white w-[925px] p-8 rounded-xl z-10 relative"
        style={{ backgroundImage: "url('/dashboard/profile.svg')" }}
        >
          <div className="flex justify-between items-center mb-4">
            <button onClick={previousPhase}>
              <FontAwesomeIcon icon={faAngleLeft} className="text-white text-2xl" />
            </button>
            <span>{step}/6</span>
          </div>
          <form>
            {/* Step 1: Basic Information */}
            {step === 1 && (
  <>
    <h2 className="text-3xl font-semibold text-center mb-4 font-poppins">Complete your Profile!</h2>
    <p className="text-[#DBDBDB] text-center mb-8 text-[16px] font-light">
      Provide your basic profile information to complete your artist profile. This <br /> helps us create a more personalized experience for you.
    </p>
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="First Name"
        value={formData.fname}
        onChange={(e) => handleChange('fname', e.target.value)}
        className="w-[304px] placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold ml-24 bg-transparent border text-white p-4 rounded-lg mb-4"
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lname}
        onChange={(e) => handleChange('lname', e.target.value)}
        className="w-[304px] placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold bg-transparent border text-white p-4 rounded-lg mb-4"
        required
      />
    </div>
    <input
      type="email"
      placeholder="Your Email Address"
      value={formData.email}
      onChange={(e) => handleChange('email', e.target.value)}
      className="bg-transparent placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold ml-24 border text-white w-[638px] p-4 mt-4 rounded-lg mb-4"
      disabled
    />
    <input
      type="text"
      placeholder="Your Mobile No."
      value={formData.mobile}
      onChange={(e) => handleChange('mobile', e.target.value)}
      className="bg-transparent placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold ml-24 border w-[638px] text-white p-4 mt-4 rounded-lg mb-4"
      required
    />
    <div className="mt-4">
      <p className="mb-4 text-center font-bold">I am a:</p>
      <div className="border w-[638px] ml-24 border-[#e97f18] rounded-2xl flex items-center justify-center">
        {['independent', 'label'].map((type) => (
          <div
            key={type}
            className={`flex-1 flex items-center justify-center cursor-pointer p-4 rounded-2xl transition-all ${
              formData.selectedArtistType === type ? 'bg-[#e97f18] text-white' : 'bg-transparent text-[#e97f18]'
            }`}
            onClick={() => handleChange('selectedArtistType', type)}
          >
            <input
              type="radio"
              name="artist_type"
              id={type}
              className="hidden"
              checked={formData.selectedArtistType === type}
              onChange={() => handleChange('selectedArtistType', type)}
            />
            <div className="relative flex items-center">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  formData.selectedArtistType === type ? 'border-white' : 'border-[#e97f18]'
                }`}
              >
                {formData.selectedArtistType === type && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>
              <label htmlFor={type} className="ml-2 cursor-pointer">
                {type === 'independent' ? 'Independent Artist' : 'Signed to a Label'}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
)}



{/* Step 2: Distributed Song */}
{step === 2 && (
  <div className="flex flex-col items-center">
    <div className="flex justify-center mb-6">
      <Image src="/images/cuate.png" alt="Illustration" height={200} width={200} />
    </div>
    <div className="mt-4 text-center">
      <p className="text-center font-bold text-4xl mb-4">Hey Amaan, Have you <br/> distributed a song before?</p>
      <div className="flex flex-col items-center gap-4 mt-4">
        {['yes', 'no'].map((option) => (
          <div
            key={option}
            className={`flex flex-col items-center w-full max-w-md cursor-pointer p-4 rounded-md transition-all ${
              formData.distributedSong === option ? 'bg-[#e97f18] text-white' : 'bg-transparent text-white'
            }`}
            onClick={() => handleChange('distributedSong', option)}
          >
            <input
              type="radio"
              name="distributed_song"
              id={option}
              className="hidden" // Hidden to remove the default radio button appearance
              checked={formData.distributedSong === option}
              onChange={() => handleChange('distributedSong', option)}
            />
            <label htmlFor={option} className="text-center font-normal text-lg">
              {option === 'yes'
                ? 'Yes, I have distributed a song before'
                : 'No, I have not distributed a song before'}
            </label>
            
          </div>
        ))}
      </div>
    </div>
  </div>
)}


           {/* Step 3: Spotify */}
           {step === 3 && (
              <div>
                <div className="flex justify-center mb-6">
                  <Image src="/images/amico.svg" alt="Illustration" height={200} width={200} />
                </div>
                <div className="mt-4 font-bold text-4xl">
                  <p className="text-center">Do you have previous works <br /> on Spotify?</p>
                </div>
                <select
                  className="w-[638px] ml-32 bg-transparent border border-white mt-10 text-white p-4 rounded-lg"
                  value={formData.spotifyStatus}
                  onChange={(e) => handleChange('spotifyStatus', e.target.value)}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="yes">Yes, I am already on Spotify</option>
                  <option value="no">No, I don&apos;t have a Spotify account</option>
                </select>
                {formData.spotifyStatus === 'yes' && (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Provide link to your Spotify handle"
                      className="w-[638px] ml-32 bg-transparent placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold border border-white text-white  p-4 rounded-lg"
                      value={formData.spotifyLink}
                      onChange={(e) => handleChange('spotifyLink', e.target.value)}
                    />
                  </div>
                )}
                {formData.spotifyStatus === 'no' && (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="What artist name do you want to be displayed on your Spotify Profile?"
                      className="w-[638px] ml-32 bg-transparent placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold border border-white text-white p-4 rounded-lg"
                      value={formData.spotifyArtistName}
                      onChange={(e) => handleChange('spotifyArtistName', e.target.value)}
                    />
                     <p className="font-bold text-[10px] ml-32 mt-1"> We will generate a new Spotify Id for you based on the Artist Name that we collected at the Registration Page.</p>
                  </div>
                )}
              </div>
            )}

     {/* Step 4: JioSavan */}
     {step === 4 && (
              <div>
                <div className="flex justify-center mb-6">
                  <Image src="/images/amico.svg" alt="Illustration" height={200} width={200} />
                </div>
                <div className="mt-4 font-bold text-4xl">
                  <p className="text-center">Do you have previous works <br /> on JioSavan?</p>
                </div>
                <select
                  className="w-[638px] ml-32 bg-transparent border border-white mt-10 text-white p-4 rounded-lg"
                  value={formData.jiosavanStatus}
                  onChange={(e) => handleChange('jiosavanStatus', e.target.value)}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="yes">Yes, I am already on JioSavan</option>
                  <option value="no">No, I don&apos;t have a JioSavan account</option>
                </select>
                {formData.jiosavanStatus === 'yes' && (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Provide link to your JioSavan handle"
                      className="w-[638px] ml-32 bg-transparent placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold border border-white text-white  p-4 rounded-lg"
                      value={formData.jiosavanLink}
                      onChange={(e) => handleChange('jiosavanLink', e.target.value)}
                    />
                  </div>
                )}
                {formData.jiosavanStatus === 'no' && (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="What artist name do you want to be displayed on your JioSavan Profile?"
                      className="w-[638px] ml-32 bg-transparent placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold border border-white text-white p-4 rounded-lg"
                      value={formData.jioSavanArtistName}
                      onChange={(e) => handleChange('jioSavanArtistName', e.target.value)}
                    />
                     <p className="font-bold text-[10px] ml-32 mt-1"> We will generate a new JioSavan Id for you based on the Artist Name that we collected at the Registration Page.</p>
                  </div>
                )}
              </div>
            )}

            
            {/* Step 4: YouTube */}
            {step === 5 && (
              <div>
                <div className="flex justify-center mb-6">
                  <Image src="/images/amico.svg" alt="Illustration" height={200} width={200} />
                </div>
                <div className="mt-4 font-bold text-4xl">
                  <p className="text-center">Do you have previous works <br /> on YouTube?</p>
                </div>
                <select
                  className="w-[638px] ml-32 bg-transparent border border-white mt-10 text-white  p-4 rounded-lg"
                  value={formData.youtubeStatus}
                  onChange={(e) => handleChange('youtubeStatus', e.target.value)}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="yes">Yes, I am already on YouTube</option>
                  <option value="no">No, I don&apos;t have a YouTube Channel</option>
                </select>
                {formData.youtubeStatus === 'yes' && (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Provide link to your YouTube Channel"
                      className="w-[638px] ml-32 placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold bg-transparent border border-white text-white p-4 rounded-lg"
                      value={formData.youtubeLink}
                      onChange={(e) => handleChange('youtubeLink', e.target.value)}
                    />
                  </div>
                )}
                {formData.youtubeStatus === 'no' && (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="What artist name do you want to be displayed on your YouTube Profile?"
                      className="w-[638px] placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold bg-transparent border border-white text-white ml-32 p-4 rounded-lg"
                      value={formData.youtubeArtistName}
                      onChange={(e) => handleChange('youtubeArtistName', e.target.value)}
                    />
                    <p className="font-bold text-[10px] ml-32 mt-1"> We will generate a new Youtube Channel for you based on the Artist Name that we collected at the Registration Page.</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Step 6: Social Media */}
           {/* Step 6: Social Media */}
{step === 6 && (
  <div>
    <div className="flex justify-center mb-6">
      <Image src="/images/social.svg" alt="Illustration" height={200} width={200} />
    </div>
    <div className="mt-4">
      <p className="text-center mb-2 font-bold text-4xl">Social Media Presence</p>
      <div className="mt-10 space-y-4">
        <div className="relative w-[638px] left-32">
          <FaInstagram className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-80" />
          <input
            type="text"
            placeholder="Drop your Instagram link here!"
            className="w-full pl-12 placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold bg-transparent border border-white text-white p-4 rounded-lg"
            value={formData.instagramLink}
            onChange={(e) => handleChange('instagramLink', e.target.value)}
          />
        </div>
        <div className="relative w-[638px] left-32">
          <FaFacebook className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-80" />
          <input
            type="text"
            placeholder="Drop your Facebook link here!"
            className="w-full pl-12 placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold bg-transparent border border-white text-white p-4 rounded-lg"
            value={formData.facebookLink}
            onChange={(e) => handleChange('facebookLink', e.target.value)}
          />
        </div>
        <div className="relative w-[638px] left-32">
          <FaTwitter className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-80" />
          <input
            type="text"
            placeholder="Drop your Twitter link here!"
            className="w-full pl-12 placeholder:text-[#ffffff] placeholder:opacity-20 placeholder:font-semibold bg-transparent border border-white text-white p-4 rounded-lg"
            value={formData.twitterLink}
            onChange={(e) => handleChange('twitterLink', e.target.value)}
          />
        </div>
      </div>
    </div>
  </div>
)}

<button
  type="button"
  onClick={nextPhase}
  className="w-[418px] mx-auto font-semibold bg-[#e97f18] text-white p-2 py-4 mt-10 rounded-2xl flex justify-center"
>
  {step === 6 ? 'Submit' : 'Next'}
</button>
         </form>
       </div>
     </main>
   </div>
 );
}
