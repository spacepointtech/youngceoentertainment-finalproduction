'use client';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faInstagram, faApple } from '@fortawesome/free-brands-svg-icons';
import { FaBars, FaTimes, FaShareAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Header from '@/app/dashboard/components/Header';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const router = useRouter();
  const [progress, setProgress] = useState(20);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const targetDate = new Date('2024-11-20T00:00:00').getTime();

  const chartData = {
    labels: ['May 7', 'May 14', 'May 21', 'May 28'],
    datasets: [
      {
        label: 'Streams',
        data: [1500, 3000, 2800, 3500],
        borderColor: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true, ticks: { color: '#FFF' } },
      x: { ticks: { color: '#FFF' } },
    },
  };

  const handleRelease = () => router.push('/dashboard/release-form');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % 1000) / 1000),
      });

      if (distance <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto bg-[#0F0F0F]">
      {/* Sidebar */}
      <button
        className="lg:hidden text-white p-4"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <Sidebar progress={progress} />
      </div>

      <main className="flex-1 p-4 sm:p-6 flex flex-col gap-6 text-white">
        {/* Header */}
        <Header />
        
        {/* Timer Section */}
        <section
          className="p-4 sm:p-6 bg-[#1F1F1F] bg-[url('/dashboard/dashboards.png')] bg-cover bg-center rounded-2xl shadow-lg shadow-[#e97f18] border border-[#EBEBEB] mx-0 sm:mx-[20px] lg:mx-[40px] mb-6 lg:mb-0"
        >
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-lg sm:text-4xl font-semibold mb-4 sm:mb-0">
                Your Song Goes Live In... Stay Tuned!
              </h2>
              <button className="border border-[#e97f18] bg-[#1F1F1F] p-2 rounded-xl shadow-lg">
                <div className="p-2 flex items-center justify-center">
                  <FaShareAlt className="text-[#e97f18]" />
                </div>
              </button>
            </div>

            {/* Horizontal Line */}
            <hr className="border-gray-600 my-4" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              {/* Song Image and Details */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/song-image.jpg"
                  alt="Song Cover"
                  className="w-[80px] h-[80px] object-cover rounded-lg"
                />
                <div>
                  <p className="text-lg font-semibold">Song Title</p>
                  <p className="text-sm text-gray-400">Artist Name</p>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="flex gap-6 text-center mt-4 sm:mt-0 sm:ml-auto">
                {Object.entries(timeLeft).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold">{value}</div>
                    <div className="text-sm sm:text-base">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="p-4 sm:p-6 bg-[#1F1F1F] rounded-2xl shadow-lg mx-0 sm:mx-[20px] lg:mx-[40px] mb-6 lg:mb-0">
          <h2 className="text-lg sm:text-xl font-bold text-[#e97f18]">Your Catalog</h2>
          <p className="mt-2 text-gray-400">No Recent Releases</p>
        </section>

        {/* Release Section */}
        <section className="p-4 sm:p-6 border border-white bg-[#0B0B0D] rounded-3xl flex flex-col sm:flex-row justify-between items-center text-black mx-0 sm:mx-[20px] lg:mx-[40px] mb-6 lg:mb-0">
          <div>
            <h2 className="text-lg sm:text-xl text-white font-semibold">Release Today!</h2>
            <p className="mt-2 text-white text-sm sm:text-[16px] font-light">
              Submit your release today and join the multitude of
              <br /> artists using Young CEO Entertainment.
            </p>
          </div>
          <button
            onClick={handleRelease}
            className="mt-4 sm:mt-0 bg-[#e97f18] text-white px-6 py-2 rounded-lg"
          >
            Create New Release
          </button>
        </section>

        {/* Analytics Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 mx-0 sm:mx-[20px] lg:mx-[40px]">
          {/* Streams Chart */}
          <div className="lg:col-span-2 bg-[#191919] rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl sm:text-2xl font-bold">Streams</h3>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
                <FontAwesomeIcon icon={faSpotify} className="text-green-500" />
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
                <FontAwesomeIcon icon={faApple} className="text-gray-500" />
              </div>
            </div>
            <Line data={chartData} options={chartOptions} />
          </div>

          {/* Placeholder for Analytics */}
          <div className="bg-[#191919] rounded-2xl p-6 shadow-lg flex items-center justify-center">
            <p className="text-gray-400">Your analytics will be displayed here.</p>
          </div>
        </section>

      </main>
    </div>
  );
}

// // Margin Space -20px Responsive Design
// 'use client';
// import { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faYoutube, faSpotify, faInstagram, faApple } from '@fortawesome/free-brands-svg-icons';
// import { FaBars, FaTimes, FaShareAlt } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Header from '@/app/dashboard/components/Header';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// export default function Dashboard() {
//   const router = useRouter();
//   const [progress, setProgress] = useState(20);
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   const targetDate = new Date('2024-11-20T00:00:00').getTime();

//   const chartData = {
//     labels: ['May 7', 'May 14', 'May 21', 'May 28'],
//     datasets: [
//       {
//         label: 'Streams',
//         data: [1500, 3000, 2800, 3500],
//         borderColor: '#ffffff',
//         backgroundColor: 'rgba(255, 255, 255, 0.2)',
//         tension: 0.4,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: true },
//     },
//     scales: {
//       y: { beginAtZero: true, ticks: { color: '#FFF' } },
//       x: { ticks: { color: '#FFF' } },
//     },
//   };

//   const handleRelease = () => router.push('/dashboard/release-form');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % 1000) / 1000),
//       });

//       if (distance <= 0) clearInterval(interval);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [targetDate]);

//   return (
//     <div className="flex flex-col lg:flex-row w-full h-auto bg-[#0F0F0F]">
//       {/* Sidebar */}
//       <button
//         className="lg:hidden text-white p-4"
//         onClick={() => setSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//       </button>
//       <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
//         <Sidebar progress={progress} />
//       </div>

//       <main className="flex-1 p-4 sm:p-6 flex flex-col gap-6 text-white">
//         {/* Header */}
//         <Header />
        
//         {/* Timer Section */}
//         <section
//           className="p-4 sm:p-6 bg-[#1F1F1F] bg-[url('/dashboard/dashboards.png')] bg-cover bg-center rounded-2xl shadow-lg shadow-[#e97f18] border border-[#EBEBEB] mx-[20px] mb-6 lg:mb-0"
//         >
//           <div className="flex flex-col">
//             <div className="flex flex-col sm:flex-row justify-between items-center">
//               <h2 className="text-lg sm:text-4xl font-semibold mb-4 sm:mb-0">
//                 Your Song Goes Live In... Stay Tuned!
//               </h2>
//               <button className="border border-[#e97f18] bg-[#1F1F1F] p-2 rounded-xl shadow-lg">
//                 <div className="p-2 flex items-center justify-center">
//                   <FaShareAlt className="text-[#e97f18]" />
//                 </div>
//               </button>
//             </div>

//             {/* Horizontal Line */}
//             <hr className="border-gray-600 my-4" />

//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//               {/* Song Image and Details */}
//               <div className="flex items-center gap-4">
//                 <img
//                   src="/images/song-image.jpg"
//                   alt="Song Cover"
//                   className="w-[80px] h-[80px] object-cover rounded-lg"
//                 />
//                 <div>
//                   <p className="text-lg font-semibold">Song Title</p>
//                   <p className="text-sm text-gray-400">Artist Name</p>
//                 </div>
//               </div>

//               {/* Countdown Timer */}
//               <div className="flex gap-6 text-center mt-4 sm:mt-0 sm:ml-auto">
//                 {Object.entries(timeLeft).map(([key, value]) => (
//                   <div key={key} className="text-center">
//                     <div className="text-2xl font-bold">{value}</div>
//                     <div className="text-sm">{key}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Catalog Section */}
//         <section className="p-4 sm:p-6 bg-[#1F1F1F] rounded-2xl shadow-lg mx-[20px] mb-6 lg:mb-0">
//           <h2 className="text-lg font-bold text-[#e97f18]">Your Catalog</h2>
//           <p className="mt-2 text-gray-400">No Recent Releases</p>
//         </section>

//         {/* Release Section */}
//         <section className="p-4 sm:p-6 border border-white bg-[#0B0B0D] rounded-3xl flex flex-col sm:flex-row justify-between items-center text-black mx-[20px] mb-6 lg:mb-0">
//           <div>
//             <h2 className="text-lg text-white font-semibold">Release Today!</h2>
//             <p className="mt-2 text-white text-[16px] font-light">Submit your release today and join the multitude of
//               <br /> artists using Young CEO Entertainment.</p>
//           </div>
//           <button
//             onClick={handleRelease}
//             className="mt-4 sm:mt-0 bg-[#e97f18] text-white px-6 py-2 rounded-lg"
//           >
//             Create New Release
//           </button>
//         </section>

//         {/* Analytics Section */}
//         <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 mx-[20px]">
//           {/* Streams Chart */}
//           <div className="lg:col-span-2 bg-[#191919] rounded-2xl p-6 shadow-lg">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold">Streams</h3>
//               <div className="flex gap-2">
//                 <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
//                 <FontAwesomeIcon icon={faSpotify} className="text-green-500" />
//                 <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
//                 <FontAwesomeIcon icon={faApple} className="text-gray-500" />
//               </div>
//             </div>
//             <Line data={chartData} options={chartOptions} />
//           </div>

//           {/* Placeholder for Analytics */}
//           <div className="bg-[#191919] rounded-2xl p-6 shadow-lg flex items-center justify-center">
//             <p className="text-gray-400">Your analytics will be displayed here.</p>
//           </div>
//         </section>

//       </main>
//     </div>
//   );
// }




// // Margin 80px

// 'use client';
// import { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faYoutube, faSpotify, faInstagram, faApple } from '@fortawesome/free-brands-svg-icons';
// import { FaBars, FaTimes, FaShareAlt } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Header from '@/app/dashboard/components/Header';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// export default function Dashboard() {
//   const router = useRouter();
//   const [progress, setProgress] = useState(20);
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   const targetDate = new Date('2024-11-20T00:00:00').getTime();

//   const chartData = {
//     labels: ['May 7', 'May 14', 'May 21', 'May 28'],
//     datasets: [
//       {
//         label: 'Streams',
//         data: [1500, 3000, 2800, 3500],
//         borderColor: '#ffffff',
//         backgroundColor: 'rgba(255, 255, 255, 0.2)',
//         tension: 0.4,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: true },
//     },
//     scales: {
//       y: { beginAtZero: true, ticks: { color: '#FFF' } },
//       x: { ticks: { color: '#FFF' } },
//     },
//   };

//   const handleRelease = () => router.push('/dashboard/release-form');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % 1000) / 1000),
//       });

//       if (distance <= 0) clearInterval(interval);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [targetDate]);

//   return (
//     <div className="flex flex-col lg:flex-row w-full h-auto bg-[#0F0F0F]">
//       {/* Sidebar */}
//       <button
//         className="lg:hidden text-white p-4"
//         onClick={() => setSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//       </button>
//       <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
//         <Sidebar progress={progress} />
//       </div>

//       <main className="flex-1 p-4 sm:p-6 flex flex-col gap-6 text-white">
//         {/* Header */}
//         <Header />
        
//         {/* Timer Section */}
//         <section
//           className="p-4 sm:p-6 bg-[#1F1F1F]  bg-cover bg-center rounded-2xl shadow-lg shadow-[#e97f18] border border-[#EBEBEB] mx-0 sm:mx-[20px] lg:mx-[80px] mb-6 lg:mb-0"
//         >
//           <div className="flex flex-col">
//             <div className="flex flex-col sm:flex-row justify-between items-center">
//               <h2 className="text-lg sm:text-4xl font-semibold mb-4 sm:mb-0">
//                 Your Song Goes Live In... Stay Tuned!
//               </h2>
//               <button className="border border-[#e97f18] bg-[#1F1F1F] p-2 rounded-xl shadow-lg">
//                 <div className="p-2 flex items-center justify-center">
//                   <FaShareAlt className="text-[#e97f18]" />
//                 </div>
//               </button>
//             </div>

//             {/* Horizontal Line */}
//             <hr className="border-gray-600 my-4" />

//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//               {/* Song Image and Details */}
//               <div className="flex items-center gap-4">
//                 <img
//                   src="/images/song-image.jpg"
//                   alt="Song Cover"
//                   className="w-[80px] h-[80px] object-cover rounded-lg"
//                 />
//                 <div>
//                   <p className="text-lg font-semibold">Song Title</p>
//                   <p className="text-sm text-gray-400">Artist Name</p>
//                 </div>
//               </div>

//               {/* Countdown Timer */}
//               <div className="flex gap-6 text-center mt-4 sm:mt-0 sm:ml-auto">
//                 {Object.entries(timeLeft).map(([key, value]) => (
//                   <div key={key} className="text-center">
//                     <div className="text-2xl font-bold">{value}</div>
//                     <div className="text-sm">{key}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Catalog Section */}
//         <section className="p-4 sm:p-6 bg-[#1F1F1F] rounded-2xl shadow-lg mx-0 sm:mx-[20px] lg:mx-[80px] mb-6 lg:mb-0">
//           <h2 className="text-lg font-bold text-[#e97f18]">Your Catalog</h2>
//           <p className="mt-2 text-gray-400">No Recent Releases</p>
//         </section>

//         {/* Release Section */}
//         <section className="p-4 sm:p-6 border border-white bg-[#0B0B0D] rounded-3xl flex flex-col sm:flex-row justify-between items-center text-black mx-0 sm:mx-[20px] lg:mx-[80px] mb-6 lg:mb-0">
//           <div>
//             <h2 className="text-lg text-white font-semibold">Release Today!</h2>
//             <p className="mt-2 text-white text-[16px] font-light">Submit your release today and join the multitude of
//               <br /> artists using Young CEO Entertainment.</p>
//           </div>
//           <button
//             onClick={handleRelease}
//             className="mt-4 sm:mt-0 bg-[#e97f18] text-white px-6 py-2 rounded-lg"
//           >
//             Create New Release
//           </button>
//         </section>

//         {/* Analytics Section */}
//         <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 mx-0 sm:mx-[20px] lg:mx-[80px]">
//           {/* Streams Chart */}
//           <div className="lg:col-span-2 bg-[#191919] rounded-2xl p-6 shadow-lg">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold">Streams</h3>
//               <div className="flex gap-2">
//                 <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
//                 <FontAwesomeIcon icon={faSpotify} className="text-green-500" />
//                 <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
//                 <FontAwesomeIcon icon={faApple} className="text-gray-500" />
//               </div>
//             </div>
//             <Line data={chartData} options={chartOptions} />
//           </div>

//           {/* Placeholder for Analytics */}
//           <div className="bg-[#191919] rounded-2xl p-6 shadow-lg flex items-center justify-center">
//             <p className="text-gray-400">Your analytics will be displayed here.</p>
//           </div>
//         </section>

//       </main>
//     </div>
//   );
// }
