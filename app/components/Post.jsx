import { MoreVert, Person, ThumbUp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
const Post = (props) => {
  console.log(props);

  return (
    <div className="w-full max-w-lg mx-auto p-2 border-[1px] border-slate-800 mt-5 rounded-xl ">
      <div className="p-3 pb-1 flex items-center justify-between font-RedHat font-semibold">
        <Link href={`/user/${props.userId}`} className="flex items-center space-x-3">
          <div className="border-2 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer overflow-hidden">
            <Image
              src={props.userprofile || "/Sample.svg"}
              width={270}
              height={250}
              alt="user profile image"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="text-[15px] sm:text-[16px]">
            <div>{props.username}</div>
            <div className="text-[10px] font-Poppins  text-green-100/70">
              {props.productname}
            </div>
          </div>
        </Link>
        <MoreVert className="text-gray-600 cursor-pointer" />
      </div>

      <div className="p-3 text-sm sm:text-sm font-Poppins font-light">
        {props.description}
      </div>

      <div
        className={`p-3 grid gap-4 grid-rows-${Math.floor(props.images.length/2)} grid-flow-col  justify-center`}
      >
        {props.images.length > 0 ? (
          props.images.map((image, index) => (
            <div key={index} className=" w-full h-60 ">
              <Image
                src={image}
                width={500}
                height={500}
                
                alt={`image ${index + 1}`}
                
                className="rounded-lg w-full h-full object-cover -z-0"
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <div>No images available</div>
        )}
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
