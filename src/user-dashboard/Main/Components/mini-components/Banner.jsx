import React, { useState } from 'react';

const SkillTestBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="my_progress_third_card my-8 bg-[#7933ff] text-white w-[90%] mx-auto p-5 flex flex-col relative">
      <h1 className="text-lg w-9/12 font-medium">
        Please take your skill test so that we can improve your recommendations and can suggest you better content or projects
      </h1>

      <button className="w-36 h-10 bg-white text-black font-semibold rounded-lg mt-5">
        Take Test
      </button>
      <p className="close_banner absolute top-6 right-6 font-semibold cursor-pointer" onClick={handleClose}>
        X
      </p>
    </div>
  );
};

export default SkillTestBanner;
