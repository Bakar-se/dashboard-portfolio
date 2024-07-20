import React from "react";
import Useritem from "./Useritem";

import Menuitem from "./Menuitem";

const Sidebar = () => {
  return (
    <div className="hidden fixed md:flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <Useritem />
      </div>
      <div className="grow mt-4">
        <ul className="flex flex-col gap-2">
          <Menuitem />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
