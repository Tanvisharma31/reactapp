import React from 'react';
import './Header.css'; // Assuming you have a CSS file for additional styles
import { Link } from 'react-router-dom';
import MyProgressSection from './Components/MyProgress.jsx';
import MyFeed from './Components/MyFeed.jsx';
import Courses from './Components/Courses.jsx';
import MyProfile from './Components/MyProfile.jsx';
import LiveEvents from './Components/LiveEvents.jsx';

function BottomBar ({setCurrentSection}) {
  return (
    <div className="bottombar fixed bottom-0 left-0 z-20 w-full h-16 bg-[#0a182e] min-[900px]:hidden border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <Link onClick={()=>setCurrentSection(<MyProgressSection/>)} className="inline-flex flex-col items-center justify-center px-5 hover:bg-blue-950 group">
          <img src="assets/self-growth3.png" alt="progress" className="w-6 h-6" />
          <span className="text-sm text-white group-hover:text-pink-600">Home</span>
        </Link>
        <Link onClick={()=>setCurrentSection(<MyFeed/>)} className="inline-flex flex-col items-center justify-center px-5 hover:bg-blue-950 group">
          <img src="assets/self-growth3.png" alt="progress" className="w-6 h-6" />
          <span className="text-sm text-white group-hover:text-pink-600">Post</span>
        </Link>
        <Link onClick={()=>setCurrentSection(<Courses/>)} className="inline-flex flex-col items-center justify-center px-5 hover:bg-blue-950 group">
          <img src="assets/online-course2.png" alt="leader" className="w-6 h-6" />
          <span className="text-sm text-white group-hover:text-pink-600">Courses</span>
        </Link>
        <Link onClick={()=>setCurrentSection(<MyProfile/>)} className="inline-flex flex-col items-center justify-center px-5 hover:bg-blue-950 group">
          <img src="assets/account (1).png" alt="progress" className="w-6 h-6" />
          <span className="text-sm text-white group-hover:text-pink-600">Profile</span>
        </Link>
        <Link onClick={()=>setCurrentSection(<LiveEvents/>)} className="inline-flex flex-col items-center justify-center px-5 hover:bg-blue-950 group">
          <img src="assets/deadline.png" alt="leader" className="w-6 h-6" />
          <span className="text-sm text-white group-hover:text-pink-600">Events</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
