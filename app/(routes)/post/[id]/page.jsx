"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loading from "@/app/components/loading";

const url = "http://localhost:8080/products/getproduct";

const Page = ({ params }) => {
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [post, setPost] = useState({});
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
      const getUser = async () => {
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
          setPost(data.data); // Assuming your API response contains product data
        } catch (error) {
          console.error("Failed to fetch products", error);
        } finally {
          setLoading(false);
        }
      };
      getUser();
    }
  }, [isAuthenticated, params]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.name}</h1>
        {post.productImages && post.productImages.length > 0 && (
          <div className="mb-4">
            {post.productImages.map((image, index) => (
              <div key={index} className="mb-4">
                <Image
                  src={image}
                  alt={`Image ${index}`}
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
        <div className="text-lg">{post.description}</div>
      </div>
    </div>
  );
};

export default Page;
