import React, { useState } from 'react';
import './CareerPath.css';
import Path from './Careerpath/Path';


const TeachItem = ({ imgSrc, imgAlt, imgTitle, title, description }) => (
  <div className="w-full md:w-1/2 p-2">
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mr-4">
          <img src={imgSrc} alt={imgAlt} title={imgTitle} width="45" height="42" />
        </div>
        <div>
          <h3 className="text-gray-800 text-lg font-semibold">{title}</h3>
        </div>
      </div>
      <div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  </div>
);

const ListContainer = () => (
  <div className="flex flex-wrap -m-2">
    <TeachItem
      imgSrc="https://www.dataquest.io/wp-content/uploads/2023/02/Go-from-zero-to-job-ready-1.svg"
      imgAlt="Go from zero to job-ready"
      imgTitle="Go from zero to job-ready"
      title="Go from zero to job-ready"
      description="Learn exactly what you need to achieve your goal. Don’t waste time on unrelated lessons."
    />
    <TeachItem
      imgSrc="https://www.dataquest.io/wp-content/uploads/2023/02/dataquest-skill-icon2-1.svg"
      imgAlt="Build your project portfolio"
      imgTitle="Build your project portfolio"
      title="Build your project portfolio"
      description="Build confidence with our in-depth projects, and show off your data skills."
    />
    <TeachItem
      imgSrc="https://www.dataquest.io/wp-content/uploads/2023/02/Challenge-yourself-with-exercises-1.svg"
      imgAlt="Challenge yourself with exercises"
      imgTitle="Challenge yourself with exercises"
      title="Challenge yourself with exercises"
      description="Work with real data from day one with interactive lessons and hands-on exercises."
    />
    <TeachItem
      imgSrc="https://www.dataquest.io/wp-content/uploads/2023/02/dataquest-skill-icon4-1.svg"
      imgAlt="Showcase your path certification"
      imgTitle="Showcase your path certification"
      title="Showcase your path certification"
      description="Share the evidence of your hard work with your network and potential employers."
    />
  </div>
);


const CareerPath = ({ setCurrentSection }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
      <section className="assesment_section max-w-[1400px]">
        <div className="banner">
          <div className="flex items-center max-[900px]:flex-col-reverse justify-between min-[900px]:h-[400px]">
            <div className="w-full lg:w-1/2">
              <div className="px-6 py-2">
                <div className=" text-white text-3xl font-bold mb-4">
                  Grow Your Skills and Elevate your Career to next Level with Our Courses
                </div>
                <div className="mb-4">
                  <p className="text-sm text-white">
                    Learn the basics, or refine your skills with tutorials designed to inspire from top mentors and specialist organisations. Get Career Guidance and Boost Your Resume and also Learn faster with real hands-on projects and quizzes and assessments
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-base ">
                    Create Possibilities For Your Future.
                  </p>
                </div>
              </div>
            </div>
            <div className="teaching-list list-container teach-item teach-item-container">
              <ListContainer />
            </div>
          </div>
        </div>
        <div className="title relative text-2xl mt-12 p-4 mb-4 font-bold">
          <h2 className='featured' >Featured Careerpaths</h2></div>
        <div className="career_section flex flex-wrap justify-start items-center max-[900px]:justify-center px-30 max-w-[1400px] max-[1500px]:max-w-[1100px]">
          
          <div className="w-[429px] h-[510px] relative">
            <p className="w-[429px] h-[510px] left-0 top-0 absolute bg-white rounded-[10px] shadow border border-black" />
            <p className="left-[36px] top-[55px] absolute text-black text-[35px] font-bold font-['Inter']">Full-Stack Engineer<br /></p>
            <p className="left-[102px] top-[222px] absolute text-black text-xl font-semibold font-['Inter']">Techsnap</p>
            <p className="left-[77px] top-[303px] absolute text-[#cf48ff] text-lg font-bold font-['Inter']">12 Courses</p>
            <p className="left-[77px] top-[352px] absolute text-[#cf48ff] text-lg font-bold font-['Inter']">3 Skill Assesments</p>
            <p className="left-[235px] top-[303px] absolute text-[#cf48ff] text-lg font-bold font-['Inter']">3 Projects</p>
            <p className="left-[105px] top-[246px] absolute text-black text-[15px] font-normal font-['Inter']">company</p>
            <p className="w-[371px] left-[36px] top-[120px] absolute text-black text-xl font-normal font-['Inter']">A full-stack engineer can get a project done from start to finish, back-end to front-end.</p>
            <div className="w-[357px] h-12 left-[36px] top-[431px] absolute">
              <div className="w-[357px] h-12 left-0 top-0 absolute bg-[#0000fc] rounded-[15px]" />
              <button className="left-[79px] top-[5px] absolute text-white text-[25px] font-bold font-['Montserrat']" onClick={() => setCurrentSection(<Path />)}>view careerpath</button>
            </div>
            <img className="w-[50px] h-[50px] left-[36px] top-[218px] absolute rounded-[500px]" src="https://via.placeholder.com/50x50" />
            <img className="w-[30px] h-[30px] left-[36px] top-[299px] absolute" src="https://via.placeholder.com/30x30" />
            <img className="w-[25px] h-[25px] left-[195px] top-[303px] absolute" src="https://via.placeholder.com/25x25" />
            <img className="w-[30px] h-[30px] left-[36px] top-[348px] absolute" src="https://via.placeholder.com/30x30" />
          </div>
        </div>

      </section>
      
    </div>
  );
};

export default CareerPath;
