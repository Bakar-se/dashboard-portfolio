import React from "react";
import CommandDemo from "./ui/CommandDemo";
import { ModeToggle } from "./theme-button";
import Mobilenav from "./Mobilenav";

const Header = () => {
  return (
    <div className="grid grid-cols-2 gap-4 border-r p-4 border-b items-center">
      <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">
        Portfolio
      </h3>
      <div className="flex items-center justify-end gap-2">
        <div className="block md:hidden">
          <Mobilenav />
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
