"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const url = "http://localhost:8080/products/addproduct";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [productImages, setProductImages] = useState([]);
  const router = useRouter();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImages((prevImages) => [...prevImages, reader.result]);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      description,
      price,
      category,
      productImages, // Array of Base64 strings
    };

    console.log(formData);

    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.ok) {
        router.push("/user/home");
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gray-900/20 rounded-xl shadow-2xl text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-500">
        Add New Product
      </h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">
            Product Images
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-gray-700 file:text-gray-300
            hover:file:bg-gray-600 transition duration-200 ease-in-out"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="flex flex-wrap space-x-2 ">
          {productImages.length > 0 &&
            productImages.map((image, index) => (
              <img
                key={index}
                src={image} // Display the Base64 image
                alt="Preview"
                className="w-20 h-20 object-cover rounded-lg shadow-md hover:opacity-90 transition duration-200 ease-in-out"
              />
            ))}
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input
            type="text"
            className="w-full px-4 outline-none py-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            className="w-full px-4 outline-none py-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">Price</label>
          <input
            type="text"
            className="w-full px-4 py-3 outline-none bg-gray-800 rounded-md focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">Category</label>
          <input
            type="text"
            className="w-full px-4 py-3 outline-none bg-gray-800 rounded-md focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 ease-in-out"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
