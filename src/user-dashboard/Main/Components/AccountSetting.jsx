import React, { useState } from 'react';
//import './AccountSetting.css';  Make sure to add your styles in this file

const AccountSetting = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [historyTab, setHistoryTab] = useState('transaction');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleHistoryTabChange = (tab) => {
    setHistoryTab(tab);
  };

  return (
    <div className="w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
      <div className="accountContainer">
        <div className="bg-transparent rounded-lg flex flex-col sm:flex-row">
          <div className="profile-tab-nav p-[1rem] min-[900px]:w-[250px] border border-black min-w-[250px]">
            <div className="p-4">
              <div className="img-circle hidden text-center mb-3">
                <img src="assets/profile.png" alt="Profile" className="pic rounded-full h-24 w-24 border-4 border-white" />
              </div>
              <h4 className="text-center account_setting_heading pb-0 text-xl">Account Settings</h4>
            </div>
            <div className="nav flex-col nav-pills" role="tablist" aria-orientation="vertical">
              <a
                className={`nav-link ${activeTab === 'account' ? 'active border-b border-gray-300 text-gray-800' : 'text-gray-800'} flex items-center px-2 py-3`}
                onClick={() => handleTabChange('account')}
              >
                <i className="fa fa-cart-plus text-center mr-3"></i>
                Subscription
              </a>
              <a
                className={`nav-link ${activeTab === 'notification' ? 'active border-b border-gray-300 text-gray-800' : 'text-gray-800'} flex items-center px-2 py-3`}
                onClick={() => handleTabChange('notification')}
              >
                <i className="fa fa-bell text-center mr-3"></i>
                Notification
              </a>
              <a
                className={`nav-link ${activeTab === 'password' ? 'active border-b border-gray-300 text-gray-800' : 'text-gray-800'} flex items-center px-2 py-3`}
                onClick={() => handleTabChange('password')}
              >
                <i className="fa fa-key text-center mr-3"></i>
                Password
              </a>
              <a
                className={`nav-link ${activeTab === 'security' ? 'active border-b border-gray-300 text-gray-800' : 'text-gray-800'} flex items-center px-2 py-3`}
                onClick={() => handleTabChange('security')}
              >
                <i className="fa fa-history text-center mr-3"></i>
                History
              </a>
              <a
                className={`nav-link ${activeTab === 'application' ? 'active border-b border-gray-300 text-gray-800' : 'text-gray-800'} flex items-center px-2 py-3`}
                onClick={() => handleTabChange('application')}
              >
                <i className="fa fa-trash text-center mr-3"></i>
                Delete My Account
              </a>
            </div>
          </div>
          <div className="tab-content p-4 p-md-5 min-[900px]:w-[70%]">
            {activeTab === 'account' && (
              <div id="account">
                <h1 className="text-xl border-b border-black pb-4 font-semibold">Subscription</h1>
                <div className="my_progress_third_card bg-pink-500 text-white p-4 mb-4 flex flex-col relative text-left">
                  <h1 className="text-sm w-9/12 font-medium">
                    Please take your skill test so that we can improve your recommendations and can suggest you better content or projects
                  </h1>
                  <button className="w-36 hidden h-10 bg-white font-semibold rounded-lg mt-5">Button Text</button>
                  <p className="close_banner hidden absolute top-6 right-6 font-semibold cursor-pointer">X</p>
                </div>
                <h3 className="text-xl account_setting_heading font-semibold pb-4">Current Plan</h3>
                <div className="current_plan border-2 border-black rounded-2xl pb-10 items-center px-3 flex flex-col sm:flex-row">
                  <div className="free_trail_holder w-full sm:w-7/12 flex flex-col items-start justify-start">
                    <h1 className="text-lg font-semibold text-pink-600 border-b border-black pb-2.5">Free Trail</h1>
                    <p className="font-medium">Lorem ipsum, dolor sit amet consectetur</p>
                    <p className="font-medium">Lorem ipsum, dolor sit amet consectetur</p>
                    <p className="font-medium">Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                  <div className="doller_holder w-full sm:w-5/12 flex flex-col items-center max-[900px]:mt-6">
                    <h1 className="text-sm font-semibold tracking-wide">
                      <span className="text-xl">$1000</span>/year
                    </h1>
                    <button className="btn btn-primary text-white font-semibold bg-pink-500 hover:bg-pink-600 transition-colors duration-500 mt-4">
                      Upgrade to Pro
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'password' && (
              <div id="password">
                <h3 className="mb-4 account_setting_heading font-semibold text-lg border-b border-black pb-4">Password Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="form-group mb-4">
                      <label className="block font-medium mb-2">Old password</label>
                      <input type="password" className="form-control w-full px-3 py-2 border border-gray-400 rounded-md" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="form-group mb-4">
                      <label className="block font-medium mb-2">New password</label>
                      <input type="password" className="form-control w-full px-3 py-2 border border-gray-400 rounded-md" />
                    </div>
                  </div>
                  <div>
                    <div className="form-group mb-4">
                      <label className="block font-medium mb-2">Confirm new password</label>
                      <input type="password" className="form-control w-full px-3 py-2 border border-gray-400 rounded-md" />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary text-white font-semibold bg-pink-500 hover:bg-pink-600 transition-colors duration-500">
                    Change Password
                  </button>
                </div>
                <h3 className="my-4 account_setting_heading font-semibold text-lg border-b border-black pb-4">Email</h3>
                <p className="mb-4">
                  All emails addresses that are associated with your account are listed below. Verified emails have a checkmark next to them and are used to grant access to Groups. You can learn more about Groups here.
                </p>
                <div className="primary_email_holder mb-4">
                  <h5 className="font-semibold text-base mb-2">Primary Email</h5>
                  <div className="email_holder flex items-center justify-between">
                    <p className="font-medium">akhilsv@gmail.com</p>
                    <span className="font-extrabold text-blue-600">Verified</span>
                  </div>
                </div>
                <div className="primary_email_holder mb-4">
                  <h5 className="font-semibold text-base mb-2">Additional Email</h5>
                  <p className="font-medium mb-2">You don't have any additional email.</p>
                  <input type="text" className="form-control w-full px-3 py-2 border border-gray-400 rounded-md" />
                </div>
                <button className="btn btn-primary text-white font-semibold bg-pink-500 hover:bg-pink-600 transition-colors duration-500">
                  Add Email
                </button>
              </div>
            )}
            {activeTab === 'security' && (
              <div id="security">
                <div className="history_header flex items-end justify-start border-b border-gray-400 pb-1.5">
                  <h1
                    className={`slideHistoryTabLinks text-sm font-semibold cursor-pointer relative mr-5 pb-0.5 ${historyTab === 'transaction' ? 'activeSlide text-[#ec1ee2] border-b-2 border-black border-solid' : ''}`}
                    onClick={() => handleHistoryTabChange('transaction')}
                  >
                    Transactions
                  </h1>
                  <h1
                    className={`slideHistoryTabLinks text-sm font-semibold cursor-pointer ${historyTab === 'login' ? 'activeSlide text-[#ec1ee2] border-b-2 border-black border-solid' : ''}`}
                    onClick={() => handleHistoryTabChange('login')}
                  >
                    Login History
                  </h1>
                </div>
                {historyTab === 'transaction' && (
                  <div className="transaction_history mt-4">
                    <p className="font-medium">Showing transaction history here...</p>
                  </div>
                )}
                {historyTab === 'login' && (
                  <div className="login_history mt-4">
                    <p className="font-medium">Showing login history here...</p>
                  </div>
                )}
              </div>
            )}
            {activeTab === 'notification' && (
              <div id="notification">
                <h3 className="text-xl border-b border-black pb-4 font-semibold">Notification Settings</h3>
                <div className="notification-section flex items-center mb-4">
                  <input type="checkbox" className="form-checkbox mr-3" />
                  <label className="font-medium">Enable email notifications</label>
                </div>
                <div className="notification-section flex items-center mb-4">
                  <input type="checkbox" className="form-checkbox mr-3" />
                  <label className="font-medium">Enable SMS notifications</label>
                </div>
                <button className="btn btn-primary text-white font-semibold bg-pink-500 hover:bg-pink-600 transition-colors duration-500">
                  Save Changes
                </button>
              </div>
            )}
            {activeTab === 'application' && (
              <div id="application">
                <h3 className="text-xl border-b border-black pb-4 font-semibold">Delete My Account</h3>
                <p className="mb-4">
                  Are you sure you want to delete your account? This action is irreversible and will remove all your data.
                </p>
                <button className="btn btn-primary text-white font-semibold bg-red-500 hover:bg-red-600 transition-colors duration-500">
                  Delete My Account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
