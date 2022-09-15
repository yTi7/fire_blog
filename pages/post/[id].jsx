import React from "react";
import Sidebar from "../../components/Posts/Sidebar";
import PostDetails from "../../components/Posts/PostDetails";
import PostContent from "../../components/Posts/Post";

const Post = () => {
  return (
    <>
      <div className="postPageWrapper">
        <Sidebar />
        <div className="postWrapper">
          <PostDetails />
          <PostContent />
        </div>
      </div>
    </>
  );
};

export default Post;
