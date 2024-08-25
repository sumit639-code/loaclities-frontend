"use client";
import Post from "@/app/components/Post";
import Write from "@/app/components/Write";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import Loading2 from "@/app/components/loading2";
import Loading from "../../loading/page";

const Page = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("refreshToken");
    console.log(token);

    if (!token || token === "") {
      console.log("User is not logged in");
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    // Optionally, return a loading spinner or indicator while waiting for authentication
    return (
      <div className="h-full flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="text-white p-4 flex flex-col items-center mb-14">
      <Write />
      <Post />
    </div>
  );
};

export default Page;
