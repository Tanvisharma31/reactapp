import React, { useState } from 'react';
import TrendingProjects from './mini-components/TrendingProject.jsx';

const projectCards = [
  {
    id: 1,
    title: 'Introduction to Python',
    provider: 'Tutorial',
    description: 'Master the basics of data analysis in Python. Expand your skillset by learning scientific computing with numpy.',
    imageUrl: 'assets/card_banner.svg',
    duration: '16 hours',
    author: 'Alan Biju',
    tags: ['React', 'Kodo'],
  },
  // Add more project objects here
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projectCards.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
      <section className="assesment_section">
        <div className="banner bg-color relative bg-[#26cd7f]">
          <div className="flex items-center max-[900px]:flex-col-reverse justify-between min-[900px]:h-[400px]">
            <div className="w-full lg:w-1/2">
              <div className="px-6 py-2">
                <div className="text-3xl font-bold mb-4">
                  Grow Your Skills and Elevate your Career to next Level with Our Courses
                </div>
                <div className="mb-4">
                  <p className="text-sm">
                    Learn the basics, or refine your skills with tutorials designed to inspire from top mentors and specialist organisations. Get Career Guidance and Boost Your Resume and also Learn faster with real hands-on projects and quizzes and assessments.
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-base">
                    Get <span className="text-purple-500">Skilled.</span> Get
                    <span className="text-purple-500">Certified.</span> Get
                    <span className="text-purple-500">Hired.</span>
                  </p>
                </div>
                <div className="yellow_tag cursor-pointer" onClick={() => { /* handle close logic */ }}>
                  <p>
                    Get Personalized Recommendations by taking this test
                  </p>
                  <div className="hide"></div>
                </div>
              </div>
            </div>
            <div className="py-8 w-[40%] max-[900px]:w-[70%]">
              <img src="assets/banner_img.svg" alt="banner_pic" className="h-auto p-6" />
            </div>
          </div>
        </div>
        <div className="course_popular_card_section p-4">
          <div className="title relative text-2xl mt-12 mb-4 font-bold">
            <h1>Popular Projects</h1>
          </div>
          <TrendingProjects/>
        </div>
        <div className="courses_section px-4">
          <div className="title flex justify-between items-center text-xl">
            <div>
              <p className="font-bold">All courses</p>
              <span className="text-xs">86 results on techsnap</span>
            </div>
            <div className="search">
              <form className="search-container flex">
                <input
                  type="text"
                  id="search-bar"
                  placeholder="search courses"
                  className="border border-gray-400 rounded px-2 py-1"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <a href="#">
                  <img src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" className="search-icon w-10 h-10" alt="search icon" />
                </a>
              </form>
            </div>
          </div>
          <div className="coures_card_section flex flex-wrap justify-between">
           <TrendingProjects/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
