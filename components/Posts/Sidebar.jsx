import React from "react";
import { SiFirebase } from "react-icons/si";
import { IoMdHome, IoMdBookmark } from "react-icons/io";
import { AiFillBell } from "react-icons/ai";
import { HiDeviceMobile } from "react-icons/hi";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <Link href={"/"}>
          <SiFirebase className="firebase_icon" />
        </Link>
        <ul className="sidebarLinks">
          <li>
            <IoMdHome />
          </li>
          <li>
            <AiFillBell />
          </li>
          <li>
            <IoMdBookmark />
          </li>
          <li>
            <HiDeviceMobile />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
