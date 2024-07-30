import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample data
const leaderboardData = [
  { name: 'Alan Biju', rank: 1, course: 'wipro', level: 80, score: 985, university: 'VTU', profilePic: 'assets/profile.jpg' },
  { name: 'Akhil Biju', rank: 1, course: 'tcs', level: 80, score: 985, university: 'VTU', profilePic: 'assets/profile.jpg' },
];

const tabs = [
  { id: 'global', label: 'Global' },
  { id: 'college', label: 'College' },
  { id: 'group', label: 'Group' }
];

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('global');
  const [entries, setEntries] = useState(5); // Example state for entries per page
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter and paginate data (simple example, consider using libraries for complex cases)
  const filteredData = leaderboardData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="leader_board_section w-full h-full box-border relative">
      <h1 className="text-2xl m-2 font-semibold min-w-full whitespace-nowrap">
        Groups and Leaderboard
      </h1>
      <div className="leader_title w-full flex items-center justify-center flex-col sticky top-[-2rem] left-0 z-10">
        <div className="leader_board_switch w-full h-12 mb-5 bg-[#f6f6f6] flex items-end justify-center border-b-2 border-gray-400">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`leaderBoard_tablinks font-semibold text-base mr-7 cursor-pointer ${activeTab === tab.id ? 'active text-[#ec1ee2]' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              <h1 className={`text-xl border-b-2 ${activeTab === tab.id ? 'border-black' : 'border-transparent'} hover:border-gray-800`}>
                {tab.label}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="table_section text-center max-w-[100vw]">
        <div className="dataTables_wrapper no-footer">
          <div className="pull-left">
            <div className="dataTables_length">
              <label>
                Show
                <select
                  name="example_length"
                  value={entries}
                  onChange={(e) => setEntries(Number(e.target.value))}
                  aria-controls="example"
                >
                  <option value="5">5</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="-1">All</option>
                </select> entries
              </label>
            </div>
          </div>
          <div className="pull-right">
            <div id="example_filter" className="dataTables_filter">
              <label>
                <img id="search" src="" alt="Search icon" />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={handleSearch}
                  className=""
                  placeholder="Search"
                  aria-controls="example"
                />
              </label>
            </div>
          </div>
          <table
            id="example"
            className="display compact w-full shadow-[0_15px_30px_-15px_rgba(0,0,0,0.5)] no-footer dataTable"
            style={{ width: '100%' }}
            role="grid"
            aria-describedby="example_info"
          >
            <thead>
              <tr id="header" className="h-15 text-center" role="row">
                <th style={{ width: '243px' }}>Candidate Name</th>
                <th style={{ width: '76px' }}>Rank</th>
                <th style={{ width: '113px' }}>Course</th>
                <th style={{ width: '77px' }}>Level</th>
                <th style={{ width: '82px' }}>Score</th>
                <th style={{ width: '139px' }}>University</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} role="row" className={index % 2 === 0 ? 'even' : 'odd'}>
                  <td>
                    <div className="row_class flex items-center">
                      <img className="profile_pic mx-6 avatar max-w-[40px] rounded-full" src={item.profilePic} alt="avatar" />
                      <div>{item.name}</div>
                    </div>
                  </td>
                  <td>{item.rank}</td>
                  <td>{item.course}</td>
                  <td>{item.level}</td>
                  <td>{item.score}</td>
                  <td>{item.university}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="dataTables_info" id="example_info" role="status" aria-live="polite">
            Showing 1 to {Math.min(entries, filteredData.length)} of {filteredData.length} entries
          </div>
          <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
            <Link className="paginate_button previous disabled" aria-controls="example" data-dt-idx="0" tabIndex="0" id="example_previous">Previous</Link>
            <span>
              <Link className="paginate_button current" aria-controls="example" data-dt-idx="1" tabIndex="0">1</Link>
              <Link className="paginate_button" aria-controls="example" data-dt-idx="2" tabIndex="0">2</Link>
              <Link className="paginate_button" aria-controls="example" data-dt-idx="3" tabIndex="0">3</Link>
            </span>
            <Link className="paginate_button next" aria-controls="example" data-dt-idx="4" tabIndex="0" id="example_next">Next</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
