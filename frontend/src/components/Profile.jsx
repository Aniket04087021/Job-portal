import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Navbar from "./shared/Navbar";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 pe-8 ">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://imgs.search.brave.com/affntHrA4MtAGpTX4AK_geALfA24tOgUMODU6_-dKok/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMDExMDQ3MzMv/NTEwMy03Njh4NTkx/LnBuZw" />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                atque!
              </p>
            </div>
          </div>

          <Button className="text-right mt-4 " variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2 ml-8"><Mail/>
          <span>gupt0408@gmail.com</span>

            </div>
            <div className="flex items-center gap-3 my-2 ml-8">
            <Contact/>
            <span>7021815645</span> 
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
