import React from 'react';

const YourBuddy = () => {
  const topStudents = [
    { rank: 1, name: 'Akhil', score: '1200', avatar: 'assets/profile.jpg' },
    { rank: 2, name: 'Akhil', score: '1200', avatar: 'assets/profile.jpg' },
    { rank: 3, name: 'Akhil', score: '1200', avatar: 'assets/profile.jpg' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 w-[90%] mx-auto my-5">
      <div className="rounded-lg my-5 md:w-2/3">
        <div className="mb-4 flex justify-between">
          <h1 className="text-base font-bold">Your buddy</h1>
          <p className="text-gray-600">Need help?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col justify-between h-[170px] border-2 shadow-xl border-black rounded-lg p-4">
            <h2 className="flex items-center mb-2 text-[#7933ff] text-lg">
              <span>
                <img src="/src/assets/enrolled.svg" alt="enroll" className="h-4 w-4 mr-2" />
              </span>
              Enrolled
            </h2>
            <h1 className="text-md">Courses : 4</h1>
            <h1 className="text-md">CareerPaths : 2</h1>
            <h1 className="text-md">Projects : 5</h1>
          </div>
        </div>
      </div>
      <div className="rounded-lg p-4 md:w-1/3">
        <div className="mb-4">
          <h1 className="text-base font-bold">Top 3 of your campus</h1>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between mb-2">
            <h6 className="w-1/4 font-bold">Rank</h6>
            <h6 className="w-1/2 font-bold">Name</h6>
            <h6 className="w-1/4 font-bold">Score</h6>
          </div>
          {topStudents.map((student, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <h5 className="w-1/4">{student.rank}</h5>
              <div className="w-1/2 flex items-center">
                <img src={student.avatar} alt="avatar" className="h-8 w-8 rounded-full mr-2" />
                <h5>{student.name}</h5>
              </div>
              <h5 className="w-1/4">{student.score}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourBuddy;
