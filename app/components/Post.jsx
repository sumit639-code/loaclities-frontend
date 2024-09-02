"use client";
import { MoreVert, Person, ThumbUp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
const url = "http://localhost:8080/products/deleteproduct";
const Post = (props) => {
  const router = useRouter();
  const [id, setId] = useState({ id: props.id });
  console.log(props);
  const deleteProduct = async () => {
    console.log(id);
    try {
      const response = await fetch(url, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      });
      if (response.ok) {
        router.refresh();
      }
      // const data = await response.json();
      // console.log(data.data)
      // setProducts(data.data); // Assuming your API response contains a list of products
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };
  return (
    <div className=" w-full max-w-lg mx-auto p-2 border-[1px] border-slate-800 mt-5 rounded-xl ">
      
      <Link href={`/post/${props.id}`} className="p-3 pb-1 flex items-center justify-between font-RedHat font-semibold">
        <Link
          href={`/user/${props.userId}`}
          className="flex items-center space-x-3"
        >
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
      </Link>

      <div className="p-3 text-sm sm:text-sm font-Poppins font-light">
        {props.description}
      </div>

      <div
        className={`p-3 grid gap-4 grid-rows-${Math.floor(
          props.images.length / 2
        )} grid-flow-col  justify-center`}
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
