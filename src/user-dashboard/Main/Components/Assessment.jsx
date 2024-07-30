import React from 'react';

const Assessment = () => {
  // Example data for the card (this can be fetched from backend)
  const cardData = {
    id: 1,
    title: 'Introduction to SQL',
    tags: ['Free', 'Popular'],
    duration: '15 hours',
    lessons: '9 lessons',
    coins: '779 coins',
  };

  // Handle the yellow tag click event
  const handleYellowTagClick = () => {
    console.log('Yellow tag clicked');
    // Implement the logic to close the yellow tag or redirect
  };

  return (
    <div className="w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
      <section className="assessment_section">
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
                    Get <span className="text-purple-500">Skilled.</span> Get <span className="text-purple-500">Certified.</span> Get <span className="text-purple-500">Hired.</span>
                  </p>
                </div>
                <div className="yellow_tag cursor-pointer" onClick={handleYellowTagClick}>
                  <p>Get Personalized Recommendations by taking this test</p>
                  <div className="hide"></div>
                </div>
              </div>
            </div>
            <div className="py-8 w-[40%] max-[900px]:w-[70%]">
              <img src="assets/banner_img.svg" alt="banner_pic" className="h-auto p-6" />
            </div>
          </div>
        </div>
        <div className="assessment_card_section grid place-items-center gap-6 mt-12">
          <div className="my_progress_trending_card max-[900px]:w-[90%] shadow-xl rounded-md w-[300px]">
            <div className="p-4 text-sm">
              <div className="flex items-center mb-4">
                {cardData.tags.map((tag, index) => (
                  <div key={index} className="tags bg-gray-300 px-4 mr-4 py-1 rounded">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <h1 className="text-xl font-semibold">{cardData.title}</h1>
              </div>
              <div className="flex items-center mb-4 space-x-3">
                <div className="flex items-center">
                  <img src="assets/time.svg" alt="time" className="w-4 h-4 m-1" />
                  <p>{cardData.duration}</p>
                </div>
                <div className="flex items-center">
                  <img src="assets/lessons.svg" alt="lessons" className="w-4 h-4 m-1" />
                  <p>{cardData.lessons}</p>
                </div>
                <div className="flex items-center">
                  <img src="assets/coin.svg" alt="coins" className="w-4 h-4 m-1" />
                  <p>{cardData.coins}</p>
                </div>
              </div>
              <div className="flex justify-around">
                <button className="border border-black px-4 py-2 rounded font-semibold">
                  Syllabus
                </button>
                <button id="blue" className="bg-blue-800 text-white px-4 py-2 rounded font-semibold">
                  Start Assessments
                </button>
              </div>
            </div>
          </div>
          {/* Repeat card block for additional cards */}
        </div>
      </section>
    </div>
  );
};

export default Assessment;
