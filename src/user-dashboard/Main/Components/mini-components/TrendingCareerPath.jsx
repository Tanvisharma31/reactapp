import React from 'react';

const TrendingCareerPaths = () => {
  const careerData = [
    {
      title: 'Data Scientist',
      duration: '15 hours',
      lessons: '9 lessons',
      coins: '779 coins',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia maxime esse blanditiis vitae animi eaque adipisci, beatae laboriosam vel hic illum eum omnis consequuntur quas.',
      handbook: '✔ Free Career HandBook',
    },
    {
      title: 'Data Scientist',
      duration: '15 hours',
      lessons: '9 lessons',
      coins: '779 coins',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia maxime esse blanditiis vitae animi eaque adipisci, beatae laboriosam vel hic illum eum omnis consequuntur quas.',
      handbook: '✔ Free Career HandBook',
    },
    {
      title: 'Data Scientist',
      duration: '15 hours',
      lessons: '9 lessons',
      coins: '779 coins',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia maxime esse blanditiis vitae animi eaque adipisci, beatae laboriosam vel hic illum eum omnis consequuntur quas.',
      handbook: '✔ Free Career HandBook',
    },
    // Add more career path objects as needed
  ];

  return (
    <div>
      <div className="title text-lg font-semibold mb-4 w-[90%] mx-auto mt-5">
        <p>Trending Career Paths</p>
      </div>
      <div className="career_section w-[90%] mx-auto flex flex-wrap justify-between items-center max-[900px]:justify-center">
        {careerData.map((career, index) => (
          <div
            key={index}
            className="career_path_card max-[900px]:min-w-[90%] w-[31%] m-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-lg m-25 flex flex-col"
          >
            <div className="trending_third_card_header bg-red-500 flex flex-col justify-between p-3 rounded-t-lg">
              <div className="flex justify-between mb-4">
                <h1 className="text-lg">{career.title}</h1>
                <p className="bg-white text-red-400 px-2 text-sm">Free</p>
              </div>
              <div className="my_progess_trending_card_options_holder flex justify-between items-end">
                <div className="my_progess_trending_card_option flex items-center">
                  <img src="assets/time.svg" alt="time" className="w-5 h-5" />
                  <p className="white text-sm ml-2">{career.duration}</p>
                </div>
                <div className="my_progess_trending_card_option flex items-center">
                  <img src="assets/lessons.svg" alt="lessons" className="w-5 h-5" />
                  <p className="white text-sm ml-2">{career.lessons}</p>
                </div>
                <div className="my_progess_trending_card_option flex items-center">
                  <img src="assets/coin.svg" alt="coin" className="w-5 h-5" />
                  <p className="white text-sm ml-2">{career.coins}</p>
                </div>
              </div>
            </div>
            <div className="career_path_cards_body p-2">
              <p className="text-gray-700 text-[0.8rem] m-2">{career.description}</p>
              <div className="mt-2">{career.handbook}</div>
              <div className="mt-2">{career.handbook}</div>
              <div className="mt-2">{career.handbook}</div>
            </div>
            <div className="my_progress_trending_card_footer flex items-center justify-center h-16">
              <button className="w-5/6 h-10 border border-black rounded-md text-black font-semibold hover:bg-gray-200">
                Start Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCareerPaths;
