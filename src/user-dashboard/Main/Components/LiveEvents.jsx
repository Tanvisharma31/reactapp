import React, { useState } from 'react';

const LiveEvents = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('Active');

  // Example event data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Lorem, ipsum dolor sit ame dolor sit ame',
      organizer: 'Bluelearn',
      date: 'Jul 5, 2022 8.00pm',
      imageUrl: 'https://www.bluelearn.in/_next/image?url=https%3A%2F%2Ffiles.bluelearn.in%2FEVENT_IMAGE%2F303%2F2022-07-08T16%253A27%253A53%252B00%253A00-blob&w=1920&q=60'
    },
    // Add more events here
  ];

  // Example past event data
  const pastEvents = [
    {
      id: 2,
      title: 'Lorem, ipsum dolor sit ame dolor sit ame',
      imageUrl: 'https://www.bluelearn.in/_next/image?url=https%3A%2F%2Ffiles.bluelearn.in%2FEVENT_IMAGE%2F303%2F2022-07-08T16%253A27%253A53%252B00%253A00-blob&w=1920&q=60'
    },
    // Add more events here
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
      <section className="live_event_section text-center">
        <div className="heading_holder px-10">
          <h1 className="text-3xl font-semibold my-5">Upcoming Events For You</h1>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt?{' '}
            <span className="text-yellow-500">join now</span>
          </p>
        </div>
        <div className="upcoming_cards_holder justify-center flex flex-wrap justify-between max-[900px]:justify-center flex-wrap px-20 mt-5 md:px-0">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="upcoming_cards max-w-[30%] min-w-[300px] max-[900px]:max-w-[100%] h-[390px] bg-pink my-4 md:mx-3 rounded-2xl"
            >
              <div className="card_poster_holder h-[55%]">
                <img src={event.imageUrl} alt="" className="w-full h-full rounded-t-lg" />
              </div>
              <div className="card_body h-[45%] flex flex-col justify-evenly items-center px-10 bg-gray-900 rounded-b-lg">
                <h1 className="text-xl text-white">{event.title}</h1>
                <p className="text-gray-500">{event.organizer}</p>
                <p className="text-gray-500">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="heading_holder sticky top-0 px-10 md:px-0">
          <h1 className="text-3xl font-semibold my-8">If you missed something, access it right here</h1>
          <div className="tab flex justify-between min-[900px]:w-[50%] mx-auto text-xl">
            <button
              className={`tablinks bg-transparent hover:text-pink-500 border-b-2 border-transparent focus:outline-none ${
                activeTab === 'Active' ? 'text-[#ec1ee2] border-black' : ''
              }`}
              onClick={() => handleTabClick('Active')}
              id="defaultOpen"
            >
              Active
            </button>
            <button
              className="tablinks bg-transparent hover:text-pink-500 border-b-2 border-transparent focus:outline-none"
              onClick={() => handleTabClick('Closed')}
            >
              Closed
            </button>
            <button
              className="tablinks bg-transparent hover:text-pink-500 border-b-2 border-transparent focus:outline-none"
              onClick={() => handleTabClick('Upcoming')}
            >
              Upcoming
            </button>
          </div>
        </div>
        <div id="Active" className="tabcontent" style={{ display: activeTab === 'Active' ? 'block' : 'none' }}>
          <div className="upcoming_cards_holder justify-center flex flex-wrap px-20 md:px-0">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="missing_card max-w-[30%] min-w-[300px] max-[900px]:max-w-[100%] h-[340px] bg-pink my-4 md:mx-3 rounded-2xl"
              >
                <div className="card_poster_holder h-[60%]">
                  <img src={event.imageUrl} alt="" className="w-full h-full rounded-t-lg" />
                </div>
                <div className="card_body h-[40%] flex flex-col justify-center items-center px-10 bg-gray-900 rounded-b-lg">
                  <h1 className="text-xl text-white mb-2">{event.title}</h1>
                  <button className="bg-transparent w-full border border-white text-white px-4 py-2 rounded-2xl hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="Closed" className="tabcontent" style={{ display: activeTab === 'Closed' ? 'block' : 'none' }}>
          <div className="upcoming_cards_holder justify-center flex flex-wrap px-20 md:px-0">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="missing_card max-w-[30%] min-w-[300px] max-[900px]:max-w-[100%] h-[340px] bg-pink my-4 md:mx-3 rounded-2xl"
              >
                <div className="card_poster_holder h-[60%]">
                  <img src={event.imageUrl} alt="" className="w-full h-full rounded-t-lg" />
                </div>
                <div className="card_body h-[40%] flex flex-col justify-center items-center px-10 bg-gray-900 rounded-b-lg">
                  <h1 className="text-xl text-white mb-2">{event.title}</h1>
                  <button className="bg-transparent w-full border border-white text-white px-4 py-2 rounded-2xl hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="Upcoming" className="tabcontent" style={{ display: activeTab === 'Upcoming' ? 'block' : 'none' }}>
          <div className="upcoming_cards_holder justify-center flex flex-wrap px-20 md:px-0">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="missing_card max-w-[30%] min-w-[300px] max-[900px]:max-w-[100%] h-[340px] bg-pink my-4 md:mx-3 rounded-2xl"
              >
                <div className="card_poster_holder h-[60%]">
                  <img src={event.imageUrl} alt="" className="w-full h-full rounded-t-lg" />
                </div>
                <div className="card_body h-[40%] flex flex-col justify-center items-center px-10 bg-gray-900 rounded-b-lg">
                  <h1 className="text-xl text-white mb-2">{event.title}</h1>
                  <button className="bg-transparent w-full border border-white text-white px-4 py-2 rounded-2xl hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveEvents;
