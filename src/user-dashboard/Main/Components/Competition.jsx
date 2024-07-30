import React, { useState } from 'react';

const cardData = [
  {
    id: 1,
    imageUrl: "https://assets-static.invideo.io/images/large/Youtube_Banner_Size_34749296f8.png",
    title: "Google AI4Code – Understand Code in Python Notebooks",
    description: "Predict the relationship between code and comments",
    tag: "Featured",
    category: "knowledge and learning",
    timeLeft: "a month to go"
  },
  // Add more card objects as needed
];

const TAB_CONTENTS = {
  active: cardData, // Use cardData for now; replace with actual data if different
  closed: cardData, // Use cardData for now; replace with actual data if different
  upcoming: cardData // Use cardData for now; replace with actual data if different
};

const Card = ({ imageUrl, title, description, tag, category, timeLeft }) => (
  <div className="card max-w-[290px] min-w-[290px] w-[290px] h-[350px] flex flex-col justify-between shadow-md rounded-3xl relative m-4">
    <div className="bookmark popup absolute top-1/2 right-5 transform -translate-y-1/2 text-xl font-bold">:</div>
    <div className="card_image h-[40%]">
      <img src={imageUrl} alt="card banner" className="w-full h-full rounded-t-lg" />
    </div>
    <div className="popupHolder hidden absolute top-full right-0 w-48 flex flex-col justify-between bg-white border border-gray-400 shadow-md rounded">
      <div className="item flex items-center justify-between px-4 py-2">
        <img src="https://cdn-icons-png.flaticon.com/512/54/54318.png" alt="delete" className="w-5 h-5" />
        <h1 className="w-20 text-sm font-medium">BookMark</h1>
      </div>
    </div>
    <div className="heading px-4 py-2.5">
      <h1 className="text-md font-semibold">{title}</h1>
    </div>
    <p className="sub_head px-4 py-1 text-sm font-medium">{description}</p>
    <p className="tag px-4 py-1 text-sm font-medium">{tag}</p>
    <div className="card_footer h-[50px] border-t border-gray-900 flex justify-between items-center px-2">
      <p className="text-xs font-semibold capitalize">{category}</p>
      <span className="text-xs cursor-pointer">{timeLeft}</span>
    </div>
  </div>
);

const CompetitionSection = () => {
  const [activeTab, setActiveTab] = useState('active');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll" style={{ fontFamily: 'Nunito' }}>
      <section className="competition_section max-w-[1400px] mx-auto h-full py-5 relative">
        <div className="competition_banner h-[300px] flex justify-between items-center">
          <div className="left w-1/2 h-[80%] mx-8 flex flex-col justify-between">
            <h1 className="text-4xl font-semibold" style={{ fontFamily: 'Nunito' }}>Competitions</h1>
            <p className="w-11/12 leading-relaxed tracking-wide" style={{ fontFamily: 'Nunito' }}>
              Grow your data science skills by competing in our exciting
              competitions. Find help in the documentation or learn about
              Community Competitions.
            </p>
            <button className="w-[200px] h-[40px] mt-4 bg-black text-sm text-white font-semibold rounded-full">
              Host a Competition
            </button>
          </div>
          <div className="right w-2/5">
            <img src="https://www.kaggle.com/static/images/competitions/landing_header.png" alt="banner" className="w-3/4 h-auto" />
          </div>
        </div>
        <div className="tab flex border-b-2 mt-1 sticky top-0 px-10 z-50 bg-white max-[900px]:px-0">
          <button
            className={`tablinks hover:bg-gray-200 w-[150px] text-xl px-6 py-2 ${activeTab === 'active' ? 'active text-[#ec1ee2] border-b-2 border-black border-solid' : ''}`}
            onClick={() => handleTabChange('active')}
          >
            Active
          </button>
          <button
            className={`tablinks hover:bg-gray-200 w-[150px] text-xl px-6 py-2 ${activeTab === 'closed' ? 'active text-[#ec1ee2] border-b-2 border-black border-solid' : ''}`}
            onClick={() => handleTabChange('closed')}
          >
            Closed
          </button>
          <button
            className={`tablinks hover:bg-gray-200 w-[150px] text-xl px-6 py-2 ${activeTab === 'upcoming' ? 'active text-[#ec1ee2] border-b-2 border-black border-solid' : ''}`}
            onClick={() => handleTabChange('upcoming')}
          >
            Upcoming
          </button>
        </div>
        <div className={`tabcontent ${activeTab === 'active' ? 'block' : 'hidden'}`} style={{ fontFamily: 'Nunito' }}>
          <div className="cards_holder flex flex-wrap justify-center">
            {TAB_CONTENTS.active.map(card => (
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
                tag={card.tag}
                category={card.category}
                timeLeft={card.timeLeft}
              />
            ))}
          </div>
        </div>
        <div className={`tabcontent ${activeTab === 'closed' ? 'block' : 'hidden'}`} style={{ fontFamily: 'Nunito' }}>
          <div className="cards_holder flex flex-wrap justify-center">
            {TAB_CONTENTS.closed.map(card => (
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
                tag={card.tag}
                category={card.category}
                timeLeft={card.timeLeft}
              />
            ))}
          </div>
        </div>
        <div className={`tabcontent ${activeTab === 'upcoming' ? 'block' : 'hidden'}`} style={{ fontFamily: 'Nunito' }}>
          <div className="cards_holder flex flex-wrap justify-center">
            {TAB_CONTENTS.upcoming.map(card => (
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
                tag={card.tag}
                category={card.category}
                timeLeft={card.timeLeft}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompetitionSection;
