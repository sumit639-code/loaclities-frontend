"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "../../loading/page";
import Link from "next/link";
const url = "http://localhost:8080/users/getuser";

const page = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  useEffect(() => {
    const token = localStorage.getItem("refreshToken");
    if (!token || token === "") {
      console.log("User is not logged in");
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  useEffect(() => {
    if (isAuthenticated) {
      const getUsers = async () => {
        try {
          const response = await fetch(url, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setUser(data.data); // Assuming your API response contains a list of products
          console.log(data.data);
        } catch (error) {
          console.error("Failed to fetch products", error);
        } finally {
          setLoading(false);
        }
      };
      getUsers();
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  const users = [
    "user_wefwefwef1",
    "user_2",
    "user_1gerg",
    "user_1fwef",
    "user_1",
    "user_2few",
    "user_fweewefwef1",
    "user_1",
    "user_1wef",
    "user_wefwefwef1",
    "user_2",
    "user_1gerg",
    "user_1fwef",
    "user_1",
    "user_2few",
    "user_fweewefwef1",
    "user_1",
    "user_1wef",
  ];
  // console.log({user})
  return (
    <div className="text-white font-RedHat p-4">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-full p-3 text-black outline-none shadow-green-500 shadow-md"
        />
      </div>
      <div className="mt-2 flex flex-wrap gap-2 p-3">
        {user.map((fn, i) => (
          <Link
            href={`/user/${fn._id}`}
            key={fn._id}
            className=" flex cursor-pointer transition-all shadow-sm shadow-white hover:shadow-md hover:shadow-green-500  hover:scale-[1.2] space-x-2 border-2 px-3 py-1 w-max rounded-full items-center justify-center"
          >
            <Image
              src={fn.profilePicture || "/sample.svg"}
              width={150}
              height={150}
              alt="user profile"
              className="w-5 h-5 object-cover rounded-full"
            />
            <div>{fn.name}</div>
          </Link>
        ))}
        {/* added something that other users can see */}
      </div>
    </div>
  );
};

export default page;
