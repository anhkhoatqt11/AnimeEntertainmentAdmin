import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link className="mr-2" href={"/"}>
      <div className="items-center w-full flex flex-row gap-2 overflow-hidden rounded-md">
        <Image alt="Skylark Logo" src="/logo.png" width={40} height={40} />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skylark</h1>
      </div>
    </Link>
  );
}

export default Logo;