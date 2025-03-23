import React from "react";
import { Badge } from "./ui/badge";

const LatestjobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div>
        <Badge className={"text-[#7D1C4A] font-bold gap-2"} variant="ghost">
          12 Positions
        </Badge>
        <Badge className={"text-[#56021F] font-bold m-3"} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#D17D98] font-bold m-3"} variant="ghost">
          24LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestjobCards;
