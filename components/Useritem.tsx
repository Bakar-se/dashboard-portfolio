import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Useritem = () => {
  return (
    <div className="flex items-center justify-start gap-2 border rounded-2xl p-2 shadow">
      <Avatar className="h-12 w-12">
        <AvatarImage src="/profilepic.jpg" alt="Abubakar" />
        <AvatarFallback>MA</AvatarFallback>
      </Avatar>
      <div>
        <p className=" font-semibold">Muhammad Abu Bakar</p>
        <p className="text-xs text-primary font-semibold ">Software Engineer</p>
      </div>
    </div>
  );
};

export default Useritem;
