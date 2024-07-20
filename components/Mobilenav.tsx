import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import Useritem from "./Useritem";
import { navlinks } from "@/constants/navlink";
import Link from "next/link";
import { Menu } from "lucide-react";

const Mobilenav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Useritem />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {navlinks.map((item: NavlinksTypes, index: number) => (
          <Link key={index} href={item.url}>
            <DropdownMenuItem>{item.name}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Mobilenav;
