import React from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const {user} = useSelector(store=>store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            ANII <span className="text-[#D17D98]">NAUKRI</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/jobs'>Jobs</Link></li>
            <li><Link to='/browse'>Browse</Link></li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to='/login'><Button variant='outline'>Login</Button></Link>
              <Link to='/signup'><Button>Signup</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    className="w-10 h-10 rounded-full" // Add size control here
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      className="w-10 h-10 rounded-full" // Add size control here
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Aniket </h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet .
                    </p>
                  </div>
                </div>

                <div className="flex felx-col my-2   text-gray-600">
                  <User2 />
                  <Button variant="link"><Link to='/profile'>View Profile</Link></Button>
                </div>
                <div className="flex felx-col  text-gray-600">
                  <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
