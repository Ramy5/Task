import React from "react";
import SidebarList from "./SidebarList";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="bg-white flex flex-col justify-between shadow-2xl base-height base-shadow rounded-4xl pl-[18px] py-12">
      <SidebarList />

      {/* LOGOUT */}
      <div className="flex items-center gap-4 p-4 cursor-pointer ">
        <Image src="/logout.svg" alt="logout" width={20} height={20} />
        <p className="font-semibold text-accent">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
