import React, { useState } from 'react';
 // Assuming you have CSS for the styles

function MyCourse() {
  const [activeTab, setActiveTab] = useState('in_progress');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id="my_course_btn" className="my_progress_button_detail_section w-[90%] mx-auto flex-col slidebtnContent">
      <div className="my_progess_header flex mt-8 h-[40px]">
        <h1
          className={`slideTabLinks progress_1 font-semibold py-0 cursor-pointer mr-5 rounded-tl-lg text-xl ${activeTab === 'in_progress' ? 'activeSlide text-[#ec1ee2] border-b-2 border-black border-solid' : ''}`}
          onClick={() => handleTabClick('in_progress')}
        >
          In Progress
        </h1>
        <h1
          className={`slideTabLinks completed_1 font-semibold py-0 cursor-pointer text-xl ${activeTab === 'completed' ? 'activeSlide text-[#ec1ee2] border-b-2 border-black border-solid' : ''}`}
          onClick={() => handleTabClick('completed')}
        >
          Completed
        </h1>
      </div>
      <hr className="border-gray-500 w-full mx-auto pt-2" />
      <div className={`my_progess_first_cards_holder slideTabContent flex justify-center my-5 items-center h-64 bg-[rgba(4, 4, 255, 0.048)] border border-dotted border-black ${activeTab === 'completed' ? '' : 'hidden'}`} id="completed">
        <h6>No Completed Projects</h6>
      </div>
      <div className={`my_progess_first_cards_holder slideTabContent flex flex-wrap justify-between ${activeTab === 'in_progress' ? '' : 'hidden'}`} id="in_progress">
        <div className="my_progess_first_card bg-white flex flex-col justify-around rounded-lg shadow-xl my-5 mr-2.5 h-[220px] w-[32%] max-[900px]:w-full">
          <div className="my_progess_first_card_header flex items-center p-4">
            <img src="assets/python_logo.png" alt="course-logo" className="w-7 h-7 mr-4 rounded-2xl" />
            <h1 className="text-base font-bold">Introduction to Python</h1>
          </div>
          <div className="my_progess_first_card_body p-4">
            <p className="text-gray-700 text-[0.8rem]">
              Master the basics of data analysis in Python. Expand your skillset by learning scientific computing with numpy.
            </p>
          </div>
          <div className="my_progess_first_card_footer p-4 text-center">
            <button className="bg-[#cd27ff] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
              Go to Course
            </button>
          </div>
        </div>
        {/* Repeat the above card structure for additional cards */}
      </div>
    </div>
  );
}

export default MyCourse;
