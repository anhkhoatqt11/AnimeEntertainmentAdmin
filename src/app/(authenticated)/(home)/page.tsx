import { Button } from "@nextui-org/react";
import React from "react";
import { Dashboard } from "./(components)/Dashboard";
import { getSession } from "@/lib/auth";

const page = async () => {
  return (
    <div className="w-full h-full bg-[#F6F6F6] p-12">
      <Dashboard />
    </div>
  );
};

export default page;
