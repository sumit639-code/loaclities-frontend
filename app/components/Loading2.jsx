import React from "react";
import Write from "./Write.jsx";

import Post from "./Post.jsx";

const Loading2 = () => {
  return (
    <div className="text-white p-4 flex flex-col items-center mb-14">
      <Write />
      <Post className="animate-ping"/>
    </div>
  );
};

export default Loading2;
