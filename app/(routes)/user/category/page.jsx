import Link from "next/link";
import React from "react";

const page = () => {
  const categories = [
    "Agriculture & Farming",
    "Apparel & Accessories",
    "Architecture & Design",
    "Arts & Crafts",
    "Automotive",
    "Aviation & Aerospace",
    "Beauty & Personal Care",
    "Business & Professional Services",
    "Cannabis",
    "Cleaning & Janitorial Services",
    "Construction & Contractors",
    "Consulting",
    "Consumer Electronics",
    "Consumer Goods & Retail",
    "Coworking Spaces",
    "Creative & Digital Services",
    "Education & Training",
    "Electronics & Electrical",
    "Energy & Natural Resources",
    "Engineering",
    "Entertainment & Media",
    "Event Planning & Services",
    "Fashion & Apparel",
    "Finance & Insurance",
    "Food & Beverage",
    "Gaming",
    "Green & Eco-Friendly",
    "Handmade & Artisanal",
    "Healthcare & Medical",
    "Home & Garden",
    "Hospitality & Travel",
    "Human Resources & Recruitment",
    "Industrial Equipment & Supplies",
    "Information Technology",
    "Jewelry & Watches",
    "Legal Services",
    "Logistics & Transportation",
    "Manufacturing & Industrial",
    "Marketing & Advertising",
    "Media & Broadcasting",
    "Mining & Metals",
    "Non-Profit & Social Services",
    "Pets & Animals",
    "Pharmaceuticals & Biotechnology",
    "Photography & Videography",
    "Printing & Publishing",
    "Property Management",
    "Real Estate",
    "Recreation & Leisure",
    "Recruitment & Staffing",
    "Renewable Energy",
    "Restaurants & Food Services",
    "Retail",
    "Science & Technology",
    "Security & Investigation",
    "Sports & Fitness",
    "Telecommunications",
    "Textiles",
    "Transportation & Logistics",
    "Utilities & Energy",
    "Video Production",
    "Waste Management",
    "Wholesale & Distribution",
    "Wine & Spirits",
  ];

  return (
    <div className="mt-2 ">
      <div className="text-white flex flex-wrap gap-2 p-3 font-RedHat">
        {categories.map((fn, i) => (
          <Link
            href={`/${fn}`}
            key={i}
            className=" flex cursor-pointer transition-all shadow-sm shadow-white hover:shadow-md hover:shadow-green-500  hover:scale-[1.2] space-x-2 border-2 px-3 py-1 w-max rounded-full items-center justify-center"
          >
            {/* <Image
            src={fn.profilePicture || "/sample.svg"}
            width={150}
            height={150}
            alt="user profile"
            className="w-5 h-5 object-cover rounded-full"
          /> */}
            <div>{fn}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
