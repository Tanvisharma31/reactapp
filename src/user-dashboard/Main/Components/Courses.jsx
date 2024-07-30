import React, { useState } from "react";
import TrendingCourse from "./mini-components/TrendingCourse.jsx";

const courseCards = [
  {
    id: 1,
    title: "Unit testing Java Application",
    provider: "Educative",
    level: "Intermediate",
    imageUrl: "/src/assets/card_banner.svg",
    tab: "Browse",
  },
  {
    id: 1,
    title: "Unit testing Java Application",
    provider: "Educative",
    level: "Intermediate",
    imageUrl: "/src/assets/card_banner.svg",
    tab: "Browse",
  },
  {
    id: 1,
    title: "Unit testing Java Application",
    provider: "Educative",
    level: "Intermediate",
    imageUrl: "/src/assets/card_banner.svg",
    tab: "Browse",
  },
  {
    id: 1,
    title: "Unit testing Java Application",
    provider: "Educative",
    level: "Intermediate",
    imageUrl: "/src/assets/card_banner.svg",
    tab: "Free",
  },
  {
    id: 2,
    title: "Advanced React Hooks",
    provider: "Udemy",
    level: "Advanced",
    imageUrl: "/src/assets/advanced_react.svg",
    tab: "Picks",
  },
  {
    id: 2,
    title: "Advanced React Hooks",
    provider: "Udemy",
    level: "Advanced",
    imageUrl: "/src/assets/advanced_react.svg",
    tab: "Access",
  },
  {
    id: 2,
    title: "Advanced React Hooks",
    provider: "Udemy",
    level: "Advanced",
    imageUrl: "/src/assets/advanced_react.svg",
    tab: "Picks",
  },
  {
    id: 2,
    title: "Advanced React Hooks",
    provider: "Udemy",
    level: "Advanced",
    imageUrl: "/src/assets/advanced_react.svg",
    tab: "Free",
  },
  {
    id: 3,
    title: "Introduction to Machine Learning",
    provider: "Coursera",
    level: "Beginner",
    imageUrl: "/src/assets/ml_intro.svg",
    tab: "News",
  },
  {
    id: 3,
    title: "Introduction to Machine Learning",
    provider: "Coursera",
    level: "Beginner",
    imageUrl: "/src/assets/ml_intro.svg",
    tab: "Free",
  },
  // Add more course objects here with appropriate tab values
];

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Browse");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
      <section className="assesment_section">
        <div className="banner bg-color relative bg-[#26cd7f]">
          <div className="flex items-center max-[900px]:flex-col-reverse justify-between min-[900px]:h-[400px]">
            <div className="w-full lg:w-1/2">
              <div className="px-6 py-2">
                <div className="text-3xl font-bold mb-4">
                  Grow Your Skills and Elevate your Career to next Level with
                  Our Courses
                </div>
                <div className="mb-4">
                  <p className="text-sm">
                    Learn the basics, or refine your skills with tutorials
                    designed to inspire from top mentors and specialist
                    organisations. Get Career Guidance and Boost Your Resume and
                    also Learn faster with real hands-on projects and quizes and
                    assesments
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-base">
                    Get <span className="text-purple-500">Skilled.</span> Get
                    <span className="text-purple-500">Certified.</span> Get
                    <span className="text-purple-500">Hired.</span>
                  </p>
                </div>
                <div className="yellow_tag cursor-pointer">
                  <p>Get Personalized Recommendations by taking this test</p>
                  <div className="hide"></div>
                </div>
              </div>
            </div>
            <div className="py-8 w-[40%] max-[900px]:w-[70%]">
              <img
                src="/src/assets/banner_img.svg"
                alt="banner_pic"
                className="h-auto p-6"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="course_popular_card_section py-8 px-4">
        <div className="title text-xl font-semibold mb-4">
          <p>Popular Courses</p>
        </div>
        <TrendingCourse />
      </div>

      <div className="white_ban sticky top-0 z-10 bg-gray-100 rounded-md grid mt-8">
        <div className="tabs_wrap bg-gray-100 px-2.5">
          <ul className="flex justify-between items-center w-full border-b border-gray-400">
            {["Browse", "Picks", "News", "Access", "Free"].map((tab) => (
              <li
                key={tab}
                className={`slideProfileLinks h-12 flex items-center px-2.5 text-base font-bold cursor-pointer ${activeTab === tab
                    ? "activeSlide text-[#ec1ee2] border-b-2 border-black border-solid"
                    : ""
                  }`}
                onClick={() => handleTabClick(tab)}
              >
                <span className="grid place-items-center mr-2.5">
                  <img
                    src="/src/assets/bell.svg"
                    alt="icon"
                    className="w-4 h-4 object-contain"
                  />
                </span>
                {tab}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="slideProfileContent"
        style={{ display: activeTab === "Browse" ? "flex" : "none" }}
      >
        <div className="cards_section flex flex-wrap items-center justify-center mx-auto my-5 p-5 h-full">
          {courseCards
            .filter((course) => course.tab === "Browse")
            .map((course) => (
              <div
                key={course.id}
                className="course_card w-full max-w-xs min-h-[300px] bg-white shadow-lg flex flex-col justify-between items-start transition-all duration-500 ease-in-out rounded-md p-5 mb-5 mr-2 box-border hover:scale-[1.01] hover:shadow-2xl"
              >
                <div className="image w-full h-[150px]">
                  <img
                    src={course.imageUrl}
                    alt="card"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="course_body w-full p-5">
                  <div className="title flex flex-col items-start h-12">
                    <span className="text-sm font-semibold text-pink-500">
                      {course.provider}
                    </span>
                    <p className="text-base font-bold">{course.title}</p>
                  </div>
                </div>
                <div className="course_footer w-[90%] mx-auto flex justify-between items-center">
                  <p className="text-base">{course.level}</p>
                  <button className="w-[40%] h-11 bg-white text-black font-bold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
                    Preview
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className="slideProfileContent"
        style={{ display: activeTab === "Picks" ? "flex" : "none" }}
      >
        <div className="cards_section flex flex-wrap items-center justify-center mx-auto my-5 p-5 h-full">
          {courseCards
            .filter((course) => course.tab === "Picks")
            .map((course) => (
              <div
                key={course.id}
                className="course_card w-full max-w-xs min-h-[300px] bg-white shadow-lg flex flex-col justify-between items-start transition-all duration-500 ease-in-out rounded-md p-5 mb-5 mr-2 box-border hover:scale-[1.01] hover:shadow-2xl"
              >
                <div className="image w-full h-[150px]">
                  <img
                    src={course.imageUrl}
                    alt="card"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="course_body w-full p-5">
                  <div className="title flex flex-col items-start h-12">
                    <span className="text-sm font-semibold text-pink-500">
                      {course.provider}
                    </span>
                    <p className="text-base font-bold">{course.title}</p>
                  </div>
                </div>
                <div className="course_footer w-[90%] mx-auto flex justify-between items-center">
                  <p className="text-base">{course.level}</p>
                  <button className="w-[40%] h-11 bg-white text-black font-bold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
                    Preview
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className="slideProfileContent"
        style={{ display: activeTab === "News" ? "flex" : "none" }}
      >
        <div className="cards_section flex flex-wrap items-center justify-center mx-auto my-5 p-5 h-full">
          {courseCards
            .filter((course) => course.tab === "News")
            .map((course) => (
              <div
                key={course.id}
                className="course_card w-full max-w-xs min-h-[300px] bg-white shadow-lg flex flex-col justify-between items-start transition-all duration-500 ease-in-out rounded-md p-5 mb-5 mr-2 box-border hover:scale-[1.01] hover:shadow-2xl"
              >
                <div className="image w-full h-[150px]">
                  <img
                    src={course.imageUrl}
                    alt="card"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="course_body w-full p-5">
                  <div className="title flex flex-col items-start h-12">
                    <span className="text-sm font-semibold text-pink-500">
                      {course.provider}
                    </span>
                    <p className="text-base font-bold">{course.title}</p>
                  </div>
                </div>
                <div className="course_footer w-[90%] mx-auto flex justify-between items-center">
                  <p className="text-base">{course.level}</p>
                  <button className="w-[40%] h-11 bg-white text-black font-bold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
                    Preview
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className="slideProfileContent"
        style={{ display: activeTab === "Access" ? "flex" : "none" }}
      >
        {courseCards
          .filter((course) => course.tab === "Access")
          .map((course) => (
            <div
              key={course.id}
              className="course_card w-full max-w-xs min-h-[300px] bg-white shadow-lg flex flex-col justify-between items-start transition-all duration-500 ease-in-out rounded-md p-5 mb-5 mr-2 box-border hover:scale-[1.01] hover:shadow-2xl"
            >
              <div className="image w-full h-[150px]">
                <img
                  src={course.imageUrl}
                  alt="card"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="course_body w-full p-5">
                <div className="title flex flex-col items-start h-12">
                  <span className="text-sm font-semibold text-pink-500">
                    {course.provider}
                  </span>
                  <p className="text-base font-bold">{course.title}</p>
                </div>
              </div>
              <div className="course_footer w-[90%] mx-auto flex justify-between items-center">
                <p className="text-base">{course.level}</p>
                <button className="w-[40%] h-11 bg-white text-black font-bold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
                  Preview
                </button>
              </div>
            </div>
          ))}
      </div>
      <div
        className="slideProfileContent"
        style={{ display: activeTab === "Free" ? "flex" : "none" }}
      >
        {courseCards
          .filter((course) => course.tab === "Free")
          .map((course) => (
            <div
              key={course.id}
              className="course_card w-full max-w-xs min-h-[300px] bg-white shadow-lg flex flex-col justify-between items-start transition-all duration-500 ease-in-out rounded-md p-5 mb-5 mr-2 box-border hover:scale-[1.01] hover:shadow-2xl"
            >
              <div className="image w-full h-[150px]">
                <img
                  src={course.imageUrl}
                  alt="card"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="course_body w-full p-5">
                <div className="title flex flex-col items-start h-12">
                  <span className="text-sm font-semibold text-pink-500">
                    {course.provider}
                  </span>
                  <p className="text-base font-bold">{course.title}</p>
                </div>
              </div>
              <div className="course_footer w-[90%] mx-auto flex justify-between items-center">
                <p className="text-base">{course.level}</p>
                <button className="w-[40%] h-11 bg-white text-black font-bold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
                  Preview
                </button>
              </div>
            </div>
          ))}
      </div>

    </div>
  );
};

export default Courses;
