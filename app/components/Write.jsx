import { ArrowDropDown, AttachFile, Person } from "@mui/icons-material";
import React from "react";

const Write = () => {
  return (
    <div className="max-w-lg w-full">
      <div className="flex w-full items-center justify-center space-x-5 font-RedHat font-semibold">
        <div>
          <Person className=" border-2 p-1 text-4xl rounded-full" />
        </div>
        <textarea
          className="text-black p-2 rounded-xl outline-none border-2 cursor-text text-sm border-slate-500 w-full resize-none"
          placeholder="Write something"
          rows="2"
          style={{ maxHeight: "200px" }}
        />
      </div>
      <div className="flex items-center justify-between font-RedHat font-semibold text-sm space-y-4">
        <div>
          <AttachFile />
        </div>
        <div className="space-x-2 flex">
          <button className="py-1 px-4 rounded-full border-2 flex items-center border-slate-700">
            Projects
            <ArrowDropDown className="text-base" />
          </button>
          <button className="py-1 px-5 rounded-full bg-green-600 drop-shadow-xl shadow-green-500">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Write;
