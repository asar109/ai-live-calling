import Sidebar from "@/components/Dashboard/sidebar";
import React from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-6">
      <div className="h-screen bg-gray-200 grid-cols-2 ">
        <Sidebar />
      </div>
      <div className="col-span-5 bg-gray-50 h-screen flex flex-col">
        <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shadow-sm">
          Topbar
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
