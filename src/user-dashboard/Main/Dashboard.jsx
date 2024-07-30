import React, { useState } from "react";
import "./Header.css";
import Notification from "./Components/Notification";
import ProfileIcon from "./Components/Profile_icon";
import Points from "./Components/Points";
import BottomBar from "./BottomNav";
import { Link } from "react-router-dom";
import MyProgressSection from "./Components/MyProgress";
import MyFeed from "./Components/MyFeed";
import TrendingTags from "./Components/Topics";
import CompetitionSection from "./Components/Competition";
import Leaderboard from "./Components/LeaderBoard";
import CareerPath from "./Components/CareerPath";
import Courses from "./Components/Courses";
import Projects from "./Components/Projects";
import Assessment from "./Components/Assessment";
import LiveEvents from "./Components/LiveEvents";
import MyProfile from "./Components/MyProfile";
import EditProfile from "./Components/EditProfile";
import AccountSetting from "./Components/AccountSetting";

function Dashboard() {
  const [currentSection, setCurrentSection] = useState(<MyProgressSection />);

  return (
    <div className="flex flex-col">
      <header
        className="bg-white fixed py-2 text-lg w-full z-50"
        style={{ boxShadow: "0 6px 16px -1px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="sub_header relative mx-auto flex justify-between items-center max-[900px]:min-h-[45px]">
          <div className="Header_icon flex items-center">
            <img
              src="/src/assets/icon.svg"
              alt="Logo"
              className="w-32 h-12 object-contain"
            />
          </div>
          <div className="Header_Profile flex items-center mr-4">
            <div className="Icons flex items-center min-[900px]:mr-4 justify-end">
              <Points />
              <Notification setCurrentSection={setCurrentSection} />
              <ProfileIcon />
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-row pt-[65px]">
        <aside className="sideMenu bg-[#0a182e] min-w-[220px] flex flex-col max-[900px]:hidden lg:flex transition-all duration-300 z-40 max-w-[220px] w-[250px] overflow-x-hidden overflow-y-scroll">
          <div className="myMenu flex flex-col justify-center mb-4 mt-2">
            <Link
              to="#"
              onClick={() => setCurrentSection(<MyProgressSection />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/self-growth3.png"
                alt="progress"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                My Progress
              </p>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentSection(<MyFeed />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/self-growth3.png"
                alt="feed"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                My Feed
              </p>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentSection(<TrendingTags />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/self-growth3.png"
                alt="topics"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Topics
              </p>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentSection(<CompetitionSection />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/stage.png"
                alt="competitions"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Competitions
              </p>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentSection(<Leaderboard />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/leaderboard.png"
                alt="leaderboard"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Leaderboard
              </p>
            </Link>
            <hr className="border-gray-500 w-[80%] mx-auto" />
          </div>
          <div className="myMenu flex flex-col justify-center mb-4 mt-2">
            <div className="title w-full pl-8 mb-2">
              <h4
                className="text-white uppercase my-1 text-lg font-bold"
                style={{ fontFamily: "Nunito" }}
              >
                Catalog
              </h4>
            </div>
            <Link
              to="#"
              onClick={() => setCurrentSection(<CareerPath setCurrentSection={setCurrentSection} />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/career-choice.png"
                alt="career"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Career Paths
              </p>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentSection(<Courses />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/online-course2.png"
                alt="courses"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Courses
              </p>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentSection(<Projects />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/project-management (2).png"
                alt="projects"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Projects
              </p>
            </Link>
            <Link
              to="/learnmodules"
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/learnmodules.png"
                alt="learnmodules"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Learn Modules
              </p>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentSection(<Assessment />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/clipboard.png"
                alt="assessment"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Assessments
              </p>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentSection(<LiveEvents />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/deadline.png"
                alt="live events"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Live Events
              </p>
            </Link>
            <hr className="border-gray-500 w-[80%] mx-auto" />
          </div>
          <div className="myMenu flex flex-col justify-center mb-4 mt-2">
            <div className="title w-full pl-8 mb-2">
              <h4
                className="text-white uppercase my-1 text-lg font-bold"
                style={{ fontFamily: "Nunito" }}
              >
                Profile
              </h4>
            </div>
            <Link
              to="#"
              onClick={() => setCurrentSection(<MyProfile />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/account (1).png"
                alt="my profile"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                My Profile
              </p>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentSection(<EditProfile />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/edit (1).png"
                alt="edit profile"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Edit Profile
              </p>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentSection(<AccountSetting />)}
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/user (1).png"
                alt="account settings"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Account Settings
              </p>
            </Link>
            <Link
              to="#"
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/logout (1).png"
                alt="logout"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Logout
              </p>
            </Link>
          </div>
          <button className="bg-[#7933ff] text-white rounded-lg py-2 px-4 mb-4 w-4/5 mx-auto">
            Contact Us
          </button>
        </aside>
        {currentSection}
      </div>
      <BottomBar setCurrentSection={setCurrentSection} />

    </div>
  );
}

export default Dashboard;