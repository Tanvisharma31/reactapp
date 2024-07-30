import React, { useState } from 'react';
import './comment.css'
const FeedPost = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMoreComments, setShowMoreComments] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showCommentSection, setShowCommentSection] = useState(false); // State for comment section
 const [isLiked, setIsLiked] = useState(false); // State for like status
  const [isBookmarked, setIsBookmarked] = useState(false); // State for bookmark status

  const handleToggleLike = () => {
    setIsLiked(!isLiked); // Toggle like status
  };

  const handleToggleBookmark = () => {
    setIsBookmarked(!isBookmarked); // Toggle bookmark status
  };

  const handleToggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const handleShowMoreComments = () => {
    setShowMoreComments(true);
  };

  const handleMoreOptionsToggle = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  const handleCloseMoreOptions = () => {
    setShowMoreOptions(false);
  };

  const handleShareOptionsToggle = () => {
    setShowShareOptions(!showShareOptions);
  };

  const handleCloseShareOptions = () => {
    setShowShareOptions(false);
  };

  const handleCommentIconClick = () => {
    setShowCommentSection(!showCommentSection);
  };

  return (
    <div className="post_box p-4 shadow-lg my-8 rounded w-[555px] min-[1400px]:w-[650px] max-[500px]:w-full mx-auto" style={{ fontFamily: 'Nunito' }}>
      <div className="avater_section flex items-center justify-between">
        <div className="profile flex items-center">
          <img className="w-12 h-12 rounded-full mr-4" src="assets/profile.png" alt="profile" />
          <div className="name">
            <p className="font-bold">Alan Biju</p>
            <span className="text-gray-600 text-xs">TechSnap DevOps</span>
          </div>
        </div>
        <div className="more cursor-pointer text-4xl" onClick={handleMoreOptionsToggle}>
          ...
        </div>
      </div>

      {showMoreOptions && (
        <div className="more_section fixed inset-0 bg-black bg-opacity-50 top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50">
          <div className="more_container bg-white rounded-lg p-4 max-[500px]:w-[300px] w-[500px]">
            <div className="more_item hover:bg-gray-100 rounded-lg p-2 cursor-pointer" onClick={() => alert('Report')}>
              <p id="red" className="text-red-500">Report</p>
            </div>
            <div className="more_item hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
              <p id="red" className="text-red-500">Unfollow</p>
            </div>
            <div className="more_item hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
              <p>Go to post</p>
            </div>
            <div className="more_item hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
              <p>Tagged account</p>
            </div>
            <div className="more_item hover:bg-gray-100 rounded-lg p-2 cursor-pointer" onClick={handleShareOptionsToggle}>
              <p>Share to..</p>
            </div>
            <div className="more_item hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
              <p>Copy to</p>
            </div>
            <div className="more_item hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
              <p>Embed</p>
            </div>
            <div className="more_item hover:bg-gray-100 rounded-lg p-2 cursor-pointer" onClick={handleCloseMoreOptions}>
              <p>Cancel</p>
            </div>
          </div>
        </div>
      )}

      {showShareOptions && (
        <div className="share_to_section fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="share_to_conatiner bg-white rounded-lg shadow-lg max-[500px]:w-[300px] w-[500px]">
            <div className="title flex justify-between items-center px-4 py-2 bg-gray-200">
              <span className="cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => setShowShareOptions(false)}>&lt;</span>
              <p className="font-semibold">Share to ..</p>
              <span className="cursor-pointer text-gray-600 hover:text-gray-800" onClick={handleCloseShareOptions}>X</span>
            </div>
            <div className="body">
              <div className="share_item px-4 py-2 cursor-pointer hover:bg-gray-100">
                <p id="red">WhatsApp</p>
              </div>
              <div className="share_item px-4 py-2 cursor-pointer hover:bg-gray-100">
                <p id="red">Facebook</p>
              </div>
              <div className="share_item px-4 py-2 cursor-pointer hover:bg-gray-100">
                <p id="red">Twitter</p>
              </div>
              <div className="share_item px-4 py-2 cursor-pointer hover:bg-gray-100">
                <p id="red">Zoom</p>
              </div>
              <div className="share_item px-4 py-2 cursor-pointer hover:bg-gray-100">
                <p id="red">Copy Link</p>
              </div>
              <div className="share_item px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => setShowShareOptions(false)}>
                <p id="red">Cancel</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="para mt-5 text-sm">
        <p className={`text-gray-700 ${isExpanded ? '' : 'truncate'}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit minima dolorem deleniti consequatur
          quas, alias quis. Quam quo harum inventore, hic rerum ab. Laudantium numquam inventore iste provident labore!
        </p>
        <button onClick={handleToggleText} className="text-blue-500 cursor-pointer">
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </div>
      <div className="relative">
        <div className="photo cursor-pointer mt-5 swiper mySwiper swiper-initialized swiper-horizontal swiper-backface-hidden" onClick={() => window.location.href = 'postDetailsPage.html'}>
          <div className="swiper-wrapper min-h-[400px]">
            <img className="w-full h-auto swiper-slide object-contain bg-[#e1e1e1]" src="assets/banner.png" alt="banner" />
          </div>
        </div>
        <div className="swiper-button-next1 swiper-button-next absolute right-[-7.5%] swiper-button-disabled swiper-button-lock" />
        <div className="swiper-button-prev1 swiper-button-prev absolute left-[-7.5%] swiper-button-disabled swiper-button-lock" />
        <div className="swiper-pagination" />
      </div>
      <div className="post_tages pl-0 flex items-center justify-between p-4">
        <div className="tags_box flex">
          <div className="tags bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">
            React Js
          </div>
          <div className="tags bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            React Js
          </div>
        </div>
        <div className="time text-sm">
          <p className="text-gray-600">posted 3 Jan</p>
        </div>
      </div>
      <div className="relative">
        {/* Comment Section */}
        {showCommentSection && (
          <div className="comment_section p-4 max-[900px]:p-0 absolute top-full left-0 right-0 z-10">
            <div className="comment_input1 flex items-center mb-4">
              <img className="w-10 h-10 rounded-full mr-4" src="assets/profile.jpg" alt="profile" />
              <input className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300" type="text" placeholder="Write a comment..." />
            </div>
            <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]">
              Submit
            </button>
            <div className="comments_box w-full max-[900px]:px-[5px] mt-4">
              {/* Map through comments here */}
              <button onClick={handleShowMoreComments} className="showmorebutton text-blue-500 w-full">
                Load More
              </button>
            </div>
          </div>
        )}
        <div className="post_icon_conatiner p-4 max-[500px]:p-0">
          <div className="post_icons justify-between flex items-center">
           <div className="icon flex items-center mr-4 cursor-pointer" onClick={handleToggleLike}>
            <span id="heart" className="mr-2">
              <i className={`fa ${isLiked ? 'fa-heart text-red-500' : 'fa-heart-o text-gray-500'} text-xl`} />
            </span>
            <span className="text-gray-600 max-[500px]:hidden">Like</span>
          </div>
            <div className="icon comment_icon flex items-center mr-4 cursor-pointer" onClick={handleCommentIconClick}>
              <img className="w-6 h-6 mr-2" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png" />
              <span className="text-gray-600 max-[500px]:hidden">Comment</span>
            </div>
            <div className="icon flex items-center mr-4 cursor-pointer" onClick={handleToggleBookmark}>
            <span id="bookmark" className="mr-2">
              <i className={`fa ${isBookmarked ? 'fa-bookmark text-black' : 'fa-bookmark-o text-gray-500'} text-xl`} />
            </span>
            <span className="text-gray-600 max-[500px]:hidden">Bookmark</span>
          </div>
            <div className="icon flex items-center cursor-pointer" onClick={handleShareOptionsToggle}>
              <img className="w-6 h-6 mr-2" src="https://cdn-icons-png.flaticon.com/512/25/25419.png" />
              <span className="text-gray-600 max-[500px]:hidden">Share</span>
            </div>
          </div>
        </div>
        {/* The "Load More" button should remain below the comment section */}
        
      </div>
      <button className="loadMorebutton bg-blue-500 text-white px-2 py-1 rounded-lg">
          Load More
        </button>
    </div>
  );
};

export default FeedPost;
