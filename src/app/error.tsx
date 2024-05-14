'use client'

import Link from "next/link";

export default function Error({error}:{error: Error}) {


  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-7xl uppercase font-bold">Error 404</h1>
      <span>{error.message}</span>
      <span className="pt-2">
      Go back to the
        <Link href='/' className="p-2 m-2 bg-yellow-300 text-black rounded-md">Home page
        </Link>
      </span> 
    </div>
  );
}