import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import required modules

const trendingProjects = [
  {
    imgSrc: 'assets/banner.png',
    title: 'Introduction to Python',
    time: '16 hours',
    author: 'Alan Biju',
    tags: ['React', 'Kodo'],
  },
  {
    imgSrc: 'assets/banner.png',
    title: 'Introduction to Python',
    time: '16 hours',
    author: 'Alan Biju',
    tags: ['React', 'Kodo'],
  },
  {
    imgSrc: 'assets/banner.png',
    title: 'Introduction to Python',
    time: '16 hours',
    author: 'Alan Biju',
    tags: ['React', 'Kodo'],
  },
  {
    imgSrc: 'assets/banner.png',
    title: 'Introduction to Python',
    time: '16 hours',
    author: 'Alan Biju',
    tags: ['React', 'Kodo'],
  },
  // Add more projects here
];

const TrendingProjects = () => {
  return (

    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        className="mySwiper max-w-[1150px] w-full mx-auto"
      >
        {trendingProjects.map((project, index) => (
          <SwiperSlide key={index} className="course_card project_card bg-white min-[900px]:ml-0 min-[900px]:m-5 w-[426px] h-[350px] min-w-[320px] mb-20 shadow-md flex flex-col">
            <div className="image h-[150px] max-[900px]:mb-4">
              <img src={project.imgSrc} alt="card" className="w-full object-cover" />
            </div>
            <div className="course_body flex flex-col justify-between">
              <div className="title p-4 pb-2">
                <p className="font-bold text-lg">{project.title}</p>
              </div>
              <div className="icons flex justify-between p-2 px-4">
                <div className="icon_item flex items-center text-xs">
                  <span>
                    <img src="/src/assets/card_time.svg" alt="time" className="w-5 h-5" />
                  </span>
                  <p>{project.time}</p>
                </div>
                {/* Repeat for other icons if needed */}
              </div>
              <div className="author_tag flex items-center px-4 pt-2 text-xs">
                <p className="text-gray-700 font-semibold">Author:</p>
                <div className="name flex items-center ml-2">
                  <span>
                    <img src="/src/assets/coin.svg" alt="coin" className="w-4 h-4" />
                  </span>
                  <h3 className="text-gray-700 font-semibold">{project.author}</h3>
                </div>
              </div>
              <div className="card_tags px-4 text-sm pt-1">
                <div className="tags_box flex items-center">
                  {project.tags.map((tag, index) => (
                    <div key={index} className="tags text-purple-600 text-xs rounded-lg mr-2">
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-[90%] mx-auto bg-white text-black h-9 border border-black font-semibold rounded-md mt-4">
                View in Detail
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default TrendingProjects;
