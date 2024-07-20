"use client";
import { navlinks } from "@/constants/navlink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Menuitem = () => {
  const pathname = usePathname();
  return (
    <>
      {navlinks.map((item) => (
        <Link
          className={`${
            pathname === item.url ? "bg-primary text-white" : ""
          } hover:bg-primary hover:text-white   px-2 py-1 rounded transition-all`}
          key={item.url}
          href={item.url}
        >
          <li className="">{item.name}</li>
        </Link>
      ))}
    </>
  );
};

export default Menuitem;
