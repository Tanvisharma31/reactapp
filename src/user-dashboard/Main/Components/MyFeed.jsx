import React from "react";
import FeedHeader from "./mini-components/FeedHeader.jsx";
import FeedPost from "./mini-components/FeedPost.jsx";

function MyFeed() {
  return (
    <div className="w-full mx-auto max_width_holder flex flex-row max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
      <div className="min-[900px]:w-[70%] w-full mx-auto">
        <FeedHeader />
        <FeedPost />
      </div>
    </div>
  );
}

export default MyFeed;
