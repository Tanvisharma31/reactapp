import React from 'react';

const CommentSection = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="comment_section absolute ">
      <div className="comment_input1 flex items-center mb-4">
        <img className="w-10 h-10 rounded-full mr-4" src="/src/assets/profile.jpg" alt="profile" />
        <input className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300" type="text" name="comment" id="comment" placeholder="Write a comment..." />
      </div>
      <button id="submit_comment" className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]">
        Submit
      </button>
      <div className="comments_box w-full mt-4">
        {/* Example Comment */}
        <div className="comment mb-4">
          <div className="main_comment flex flex-col overflow-hidden">
            <div className="main_info flex-1 flex">
              <img className="w-10 h-10 rounded-full mr-4" src="/src/assets/profile.jpg" alt="profile" />
              <div className="flex flex-col">
                <div className="comment_info bg-gray-200 p-2 rounded-lg">
                  <div className="comment_name flex items-center mb-2">
                    <p className="font-bold mr-2">Alan Biju</p>
                    <span className="text-gray-600 text-xs">Developer</span>
                  </div>
                  <div className="para mb-2 text-sm">
                    <p className="text-gray-700">Thank you Nuseir Yassin for taking us through this amazing Odyssey...</p>
                  </div>
                </div>
                <div className="likes flex items-center mb-4 text-xs">
                  <span className="mr-2">Like . 51 ||</span>
                  <span className="comment_reply_btn text-blue-500 cursor-pointer">Reply</span>
                </div>
                <div className="comment_input hidden reply flex items-center mb-4">
                  <img className="w-8 h-8 rounded-full mr-4" src="/src/assets/profile.jpg" alt="profile" />
                  <input className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300 w-[50%]" type="text" name="comment" id="comment" placeholder="Write a reply..." />
                  <button id="submit_comment" className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            {/* Add more nested comments similarly */}
            <button className="showmorebutton text-blue-500 w-full">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;


