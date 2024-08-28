"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/loading";
const url = "http://localhost:8080/users/dataprofiledata";
const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

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
      const getuser = async () => {
        try {
          const response = await fetch(url, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          console.log(data);
          setUserData(data.data); // Assuming your API response contains a list of products
        } catch (error) {
          console.error("Failed to fetch products", error);
        } finally {
          setLoading(false);
        }
      };
      getuser();
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="text-white font-RedHat p-6 ">
      {/* Profile Header */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <Image
            src={userData.profilePicture || "/user.png"}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full text-white "
          />
        </div>
        <h1 className="text-2xl mt-4">{userData.name}</h1>
        <p className="text-sm text-gray-400">@username</p>
        <p className="mt-2 text-center">
          This is a short bio or tagline about the user.
        </p>
        {/* <div className="flex space-x-4 mt-4">
          <button onClick={followUser} className="px-4 py-2 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">
            Follow
          </button>
          <button className="px-4 py-2 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">
            Message
          </button>
        </div> */}
      </div>

      {/* Stats Section */}
      <div className="flex justify-around mt-8">
        <div className="text-center">
          <h2 className="text-xl">34</h2>
          <p className="text-sm text-gray-400">Posts</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl">{userData.followers.length}</h2>
          <p className="text-sm text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl">{userData.following.length}</h2>
          <p className="text-sm text-gray-400">Following</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center space-x-8 mt-8">
        <button className="text-white border-b-2 border-green-500 pb-2">
          Posts
        </button>
        <button className="text-gray-400 hover:text-white transition">
          Projects
        </button>
        <button className="text-gray-400 hover:text-white transition">
          Activity
        </button>
      </div>

      {/* Posts/Projects Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6">
        {userData.posts?.map((fn) => (
          <div key={fn.id} className="h-48">
            <Image
              src={fn.images[0] || "/sample.svg"}
              alt="Post Image"
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
