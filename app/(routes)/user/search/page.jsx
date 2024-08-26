import React from "react";

const page = () => {
  return (
    <div className="text-white font-RedHat p-4">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-full p-3 text-black outline-none shadow-green-500 shadow-md"
        />
      </div>
      <div>
        {/* added something that other users can see */}
      </div>
    </div>
  );
};

export default page;
