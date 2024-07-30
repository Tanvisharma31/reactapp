import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TrendingCourse = () => {
  const courses = [
    {
      imgSrc: 'assets/python_logo.png',
      title: 'Introduction to SQL',
      xp: '1250xp',
      time: '15 hours',
      lessons: '9 lessons',
      coins: '779 coins'
    },
    {
      imgSrc: 'assets/python_logo.png',
      title: 'Introduction to SQL',
      xp: '1250xp',
      time: '15 hours',
      lessons: '9 lessons',
      coins: '779 coins'
    },
    {
      imgSrc: 'assets/python_logo.png',
      title: 'Introduction to SQL',
      xp: '1250xp',
      time: '15 hours',
      lessons: '9 lessons',
      coins: '779 coins'
    },
    {
      imgSrc: 'assets/python_logo.png',
      title: 'Introduction to SQL',
      xp: '1250xp',
      time: '15 hours',
      lessons: '9 lessons',
      coins: '779 coins'
    },
    {
      imgSrc: 'assets/python_logo.png',
      title: 'Introduction to SQL',
      xp: '1250xp',
      time: '15 hours',
      lessons: '9 lessons',
      coins: '779 coins'
    },
    // Add more courses here
  ];

  return (
    
      <div className="relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          className="mySwiper2  m-0 mx-auto py-5"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="my_progess_trending_card bg-white rounded-lg shadow-lg flex flex-col justify-between p-4">
                <div className="my_progess_trending_card_header flex items-center justify-between">
                  <img src={course.imgSrc} alt="course-logo" className="w-10 h-10 rounded-full" />
                  <div className="resolution bg-yellow-300 px-2 py-1 rounded-sm">
                    <p className="text-xs font-semibold">{course.xp}</p>
                  </div>
                </div>
                <div className="my_progess_trending_card_body mt-4">
                  <h1 className="text-lg font-semibold">{course.title}</h1>
                  <div className="my_progess_trending_card_options_holder flex items-center mt-2">
                    <div className="my_progess_trending_card_option flex items-center mr-4">
                      <img src="assets/time.svg" alt="time" className="w-4 h-4 mr-2" />
                      <p className="text-sm font-semibold text-gray-600">{course.time}</p>
                    </div>
                    <div className="my_progess_trending_card_option flex items-center mr-4">
                      <img src="assets/lessons.svg" alt="lessons" className="w-4 h-4 mr-2" />
                      <p className="text-sm font-semibold text-gray-600">{course.lessons}</p>
                    </div>
                    <div className="my_progess_trending_card_option flex items-center">
                      <img src="assets/coin.svg" alt="coins" className="w-4 h-4 mr-2" />
                      <p className="text-sm font-semibold text-gray-600">{course.coins}</p>
                    </div>
                  </div>
                </div>
                <div className="my_progress_trending_card_footer mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full bg-white text-black font-semibold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
                    Start Course
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default TrendingCourse;
