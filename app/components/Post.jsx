import { MoreVert, Person, ThumbUp } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
const Post = (props) => {
  console.log(props.images.length);

  return (
    <div className="w-full max-w-lg mx-auto p-2 border-[1px] border-slate-800 mt-5 rounded-xl">
      <div className="p-3 pb-1 flex items-center justify-between font-RedHat font-semibold">
        <div className="flex items-center space-x-3">
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
            <div className="text-[10px] font-Poppins opacity-65 text-green-100">
              {props.productname}
            </div>
          </div>
        </div>
        <MoreVert className="text-gray-600 cursor-pointer" />
      </div>

      <div className="p-3 text-sm sm:text-sm font-Poppins font-light">
        {props.description}
      </div>

      <div
        className={`p-3 grid gap-4 grid-cols-${props.images.length}  justify-center`}
      >
        {props.images.length > 0 ? (
          props.images.map((image, index) => (
            <div key={index} className="relative w-full h-60">
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt={`image ${index + 1}`}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="rounded-lg"
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
