import React from 'react';
import profile from '../../../../assets/profile.png';
import { Link } from 'react-router-dom';

const FeedHeader = () => {
  return (
    <div className="bg-white p-4 w-[555px] min-[1400px]:w-[650px] max-[500px]:w-full max-[500px]:mx-0 mx-auto rounded-lg shadow-md">
      <div className="flex items-center mb-10">
        <img src={profile} alt="profile" className="w-12 h-12 rounded-full mr-2" />

        <Link className="post_bar cursor-pointer border-gray-200 border-2 solid w-full rounded-full p-2" href="/post.html">
          <h1 className="text-lg font-semibold text-gray-400">
            Start A Post
          </h1>
        </Link>
      </div>
      <div className="options_holder flex justify-between w-[90%] mx-auto">
        <div className="icon flex items-center cursor-pointer flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match w-6 h-6 mr-2">
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
          </svg>
          <span className="text-sm">Photo</span>
        </div>
        <div className="icon flex items-center cursor-pointer flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match w-6 h-6 mr-2">
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
          </svg>
          <span className="text-sm">Video</span>
        </div>
        <div className="icon flex items-center cursor-pointer flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match w-6 h-6 mr-2">
            <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
          </svg>
          <span className="text-sm">Event</span>
        </div>
        <div className="icon flex items-center cursor-pointer flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match w-6 h-6 mr-2">
            <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
          </svg>
          <span className="text-sm">Article</span>
        </div>
      </div>
    </div>
  );
};

export default FeedHeader;
