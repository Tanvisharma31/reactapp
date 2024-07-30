import React, { useState } from 'react';
import './Notification.css';
const NotificationCenter = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
      <div className="page_notification_conatiner">
        <div className="title flex items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/107/107822.png"
            alt="notification"
            className="w-6 h-6 mr-2"
          />
          <h2 className="font-bold text-4xl my-4">Notification Center</h2>
        </div>
        <div className="page_notifiction_switch flex justify-around items-center mt-4 text-xl">
          <div
            className={`switch notificationTablinks ${activeTab === 'recent' ? 'active' : ''}`}
            onClick={() => handleTabClick('recent')}
          >
            <h1 className="font-semibold">Recent</h1>
          </div>
          <div
            className={`switch notificationTablinks ${activeTab === 'opened' ? 'active' : ''}`}
            onClick={() => handleTabClick('opened')}
          >
            <h1 className="font-semibold">Opened</h1>
          </div>
          <div
            className={`switch notificationTablinks ${activeTab === 'seen' ? 'active' : ''}`}
            onClick={() => handleTabClick('seen')}
          >
            <h1 className="font-semibold">Seen</h1>
          </div>
        </div>
        <div className={`page_notifications_section notificationTabcontent w-[80%] mx-auto ${activeTab === 'recent' ? 'block' : 'hidden'}`}>
          {/* Recent notifications content */}
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </div>
        <div className={`page_notifications_section notificationTabcontent w-[80%] mx-auto ${activeTab === 'opened' ? 'block' : 'hidden'}`}>
          {/* Opened notifications content */}
          <NotificationItem />
        </div>
        <div className={`page_notifications_section notificationTabcontent w-[80%] mx-auto ${activeTab === 'seen' ? 'block' : 'hidden'}`}>
          {/* Seen notifications content */}
          <NotificationItem />
          <NotificationItem />
        </div>
      </div>
    </div>
  );
};

const NotificationItem = () => (
  <div className="page_notification_item bg-blue-200 relative shadow-md rounded-lg my-4">
    <div className="top_holder flex items-center justify-between min-[900px]:px-4 py-2">
      <div className="image min-[900px]:w-[150px] mx-auto grid place-items-center">
        <img
          src="assets/profile.png"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="notify_text flex-1 mr-4">
        <p className="text-sm">
          Lorem ipsum, Lorem ipsum, dolor sit amet consecLorem ipsum, dolor sit amet consecLorem ipsum, dol
        </p>
      </div>
      <div className="time flex flex-col items-center justify-center">
        <p className="text-gray-600">2h</p>
        <span className="popup">...</span>
      </div>
    </div>
    <div className="popupHolder hidden z-50 absolute top-16 right-0 w-48 flex flex-col bg-white border border-gray-400 rounded shadow">
      <div className="item flex items-center justify-between px-4 py-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/786/786286.png"
          alt="turn off"
          className="w-6 h-6"
        />
        <h1 className="text-sm font-medium">Turn Off</h1>
      </div>
    </div>
    <div className="button_zone px-4 py-2 ml-[150px]">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded-lg">
        View
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded-lg">
        Delete
      </button>
    </div>
  </div>
);

export default NotificationCenter;
