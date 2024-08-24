// Layout.js
import Sidebar from "@/app/components/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" bg-black">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
