"use client";
import Post from "@/app/components/Post";
import Write from "@/app/components/Write";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import Loading2 from "@/app/components/loading2";
import Loading from "@/app/components/loading";

const url = "http://localhost:8080/products/products";

const Page = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
      const getProducts = async () => {
        try {
          const response = await fetch(url, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          console.log(data.data)
          setProducts(data.data); // Assuming your API response contains a list of products
        } catch (error) {
          console.error("Failed to fetch products", error);
        } finally {
          setLoading(false);
        }
      };
      getProducts();
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
    <div className="text-white p-4 flex flex-col items-center mb-14">
      <Write />
      {products?.map((product) => (
        <Post key={product.id} {...product} /> // Assuming each product has a unique id and Post component accepts product props
      ))}
    </div>
  );
};

export default Page;
