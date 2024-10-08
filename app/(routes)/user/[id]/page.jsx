"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/loading";
const url = "http://localhost:8080/users/userprofile";
const url2 = "http://localhost:8080/users/follow";

const ProfilePage = ({ params }) => {
  console.log(params);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
    console.log(user);
    
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
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
          });
          const data = await response.json();
          console.log(data.data);
          setUser(data.data); // Assuming your API response contains a list of products
        } catch (error) {
          console.error("Failed to fetch products", error);
        } finally {
          setLoading(false);
        }
      };
      getuser();
    }
  }, [isAuthenticated]);

  const followUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url2, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      console.log(data.data);
       // Assuming your API response contains a list of products
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      
    }
  };

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
        <div className="relative w-32 h-32">
          <Image
            src={user.profilePicture}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className="text-2xl mt-4">{user.name}</h1>
        <p className="text-sm text-gray-400">@username</p>
        <p className="mt-2 text-center">
          This is a short bio or tagline about the user.
        </p>
        <div className="flex space-x-4 mt-4">
          <button onClick={followUser} className="px-4 py-2 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">
            Follow
          </button>
          <button className="px-4 py-2 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">
            Message
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-around mt-8">
        <div className="text-center">
          <h2 className="text-xl">34</h2>
          <p className="text-sm text-gray-400">Posts</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl">{user.followers.length}</h2>
          <p className="text-sm text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl">{user.following.length}</h2>
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
        {user.posts?.map((fn) => (
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
