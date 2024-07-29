import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function header() {
  return (
    <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <h1 className="font-bold">NextJS APP</h1>
      <div className="grow ">
        <div
          className="flex items-center justify-end gap-2
        md:gap-8"
        >
          <Link href="home">Home</Link>
          <Link href="projects">Projects</Link>
          <Link href="contact">Contact</Link>
          <Link href="about">About</Link>
        </div>
      </div>
    </div>
  );
}
