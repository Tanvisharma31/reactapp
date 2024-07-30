import React, { useState } from 'react';
import TrendingCourse from './mini-components/TrendingCourse.jsx';
import MyCourse from './mini-components/MyCourse.jsx';
import Certificate from './mini-components/MyCertificate.jsx';
import TrendingProjects from './mini-components/TrendingProject.jsx';
import TrendingCareerPaths from './mini-components/TrendingCareerPath.jsx';
import YourBuddy from './mini-components/YourBuddy.jsx';
import SkillTestBanner from './mini-components/Banner.jsx';
// Assuming you have CSS for the styles

function MyProgressSection() {
  const [activeTab, setActiveTab] = useState('progress_1');

  const handleTabClick = (event, tabId) => {
    setActiveTab(tabId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'progress_1':
        return <MyCourse/>;
      case 'progress_2':
        return <MyCourse/>;
      case 'progress_3':
        return <MyCourse/>;
      case 'progress_4':
        return <MyCourse/>;
      case 'progress_5':
        return <Certificate/>;
      default:
        return <div>Progress Content</div>;
    }
  };
  return (
    <div className="w-[100%] max_width_holder mx-auto max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll overflow-x-hidden overflow-y-scroll">
      <div className="my_progress_section flex bg-white rounded-r-2xl rounded-l-2xl overflow-hidden justify-evenly w-[90%] font-bold my-5 text-center border border-black max-[900px]:flex-col mx-auto">
        <div
          className={`px-4 py-3 w-full border-x border-black transition ease delay-150 cursor-pointer slidebtnLinks ${activeTab === 'progress_1' ? 'bg-[#cd27ff] text-white' : 'hover:bg-[#cd27ff] hover:text-white'}`}
          id="defaultslidebtnOpen"
          onClick={(e) => handleTabClick(e, 'progress_1')}
        >
          Progress
        </div>
        <div
          className={`px-4 py-3 w-full border-x border-black transition ease delay-150 cursor-pointer slidebtnLinks ${activeTab === 'progress_3' ? 'bg-[#cd27ff] text-white' : 'hover:bg-[#cd27ff] hover:text-white'}`}
          onClick={(e) => handleTabClick(e, 'progress_3')}
        >
          Projects
        </div>
        <div
          className={`px-4 py-3 w-full border-x border-black transition ease delay-150 cursor-pointer slidebtnLinks ${activeTab === 'progress_2' ? 'bg-[#cd27ff] text-white' : 'hover:bg-[#cd27ff] hover:text-white'}`}
          onClick={(e) => handleTabClick(e, 'progress_2')}
        >
          Careerpath
        </div>
        <div
          className={`px-4 py-3 w-full border-x border-black transition ease delay-150 cursor-pointer slidebtnLinks ${activeTab === 'progress_4' ? 'bg-[#cd27ff] text-white' : 'hover:bg-[#cd27ff] hover:text-white'}`}
          onClick={(e) => handleTabClick(e, 'progress_4')}
        >
          Internship
        </div>
        <div
          className={`px-4 py-3 w-full border-x border-black transition ease delay-150 cursor-pointer slidebtnLinks ${activeTab === 'progress_5' ? 'bg-[#cd27ff] text-white' : 'hover:bg-[#cd27ff] hover:text-white'}`}
          onClick={(e) => handleTabClick(e, 'progress_5')}
        >
          Certification
        </div>
      </div>
      <div className="my_progress_content">
        {renderContent()}
      </div>
      <YourBuddy/>
      <SkillTestBanner/>
      <div className="course_popular_card_section relative w-[90%] mx-auto mt-5">
      <div className="title text-lg font-semibold mb-4">
        <p>Trending Courses</p>
      </div>
      <TrendingCourse/></div>
      <div className="course_popular_card_section w-[90%] mx-auto mt-5">
      <div className="title text-lg font-semibold mb-4">
        <p>Trending Projects</p>
      </div>
      <TrendingProjects/></div>
      <TrendingCareerPaths/>
    </div>
  )
}

export default MyProgressSection
