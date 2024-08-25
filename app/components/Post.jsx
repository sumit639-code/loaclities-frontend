import { MoreVert, Person, ThumbUp } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
const Post = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-2 border-[1px] border-slate-800 mt-5 rounded-xl">
      <div className="p-3 pb-1 flex items-center justify-between font-RedHat font-semibold">
        <div className="flex items-center space-x-3">
          <button className="border-2 p-1 rounded-full  flex items-center">
            <Person />
          </button>
          <div className="text-[15px] sm:text-[16px]">
            <div>User_name_011</div>
            <div className="text-[10px] font-Poppins opacity-65 text-green-100">
              Project
            </div>
          </div>
        </div>
        <MoreVert className="text-gray-600 cursor-pointer" />
      </div>

      <div className="p-3 text-sm sm:text-sm font-Poppins font-light">
        Textname
      </div>

      <div className="p-3 flex justify-center">
        <Image
          src="/Sample.svg"
          width={400}
          height={300}
          alt="sample image"
          className="w-full max-w-xs sm:max-w-md rounded-lg "
        />
      </div>
      <div className="w-full p-2 flex justify-between items-center">
        <div className="flex items-center text-sm">
          <BiCommentDetail className="text-lg mr-2" />
          0.3k
        </div>
        <div className="flex items-center text-sm">
          <AiOutlineLike className="text-lg mr-2" />
          2.0k
        </div>
      </div>
    </div>
  );
};

export default Post;
