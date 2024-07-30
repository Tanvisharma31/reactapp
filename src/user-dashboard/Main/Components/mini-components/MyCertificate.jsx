import React from 'react'; // Assuming you have a CSS file for the styles

const Certificate = () => {
  const certificates = [
    {
      imgSrc: 'assets/banner.png',
      title: 'Introduction to Python',
      time: '16 hours',
      author: 'Alan Biju',
    },
    // Add more certificate objects here
  ];

  return (
    <div className="certificate-container w-[90%] mx-auto my-5 flex flex-wrap justify-between">
      {certificates.map((cert, index) => (
        <div key={index} className="course_card project_card bg-white min-[900px]:ml-0 min-[900px]:m-5 w-[31.2%] h-[400px] min-w-[31.2%] mb-20 shadow-lg rounded-xl flex flex-col">
          <div className="image h-[220px] max-[900px]:mb-4 rounded-xl">
            <img src={cert.imgSrc} alt="card" className="w-full h-full" />
          </div>
          <div className="course_body flex flex-col justify-between">
            <div className="title p-4 pb-2">
              <p className="font-bold text-lg">{cert.title}</p>
            </div>

            <div className="icons flex justify-between p-2 px-4">
              {/* Repeat the icon structure as needed */}
              <div className="icon_item flex items-center text-xs">
                <span>
                  <img src="/src/assets/card_time.svg" alt="time" className="w-5 h-5" />
                </span>
                <p>{cert.time}</p>
              </div>
              {/* Add more icons if needed */}
            </div>
            <div className="author_tag flex items-center px-4 pt-2 text-xs">
              <p className="text-gray-700 font-semibold">Author:</p>
              <div className="name flex items-center ml-2">
                <span>
                  <img src="/src/assets/coin.svg" alt="coin" className="w-4 h-4" />
                </span>
                <h3 className="text-gray-700 font-semibold">{cert.author}</h3>
              </div>
            </div>

            <button className="w-[90%] mx-auto bg-white text-black h-9 border border-black font-semibold rounded-md mt-4">
              View in Detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
