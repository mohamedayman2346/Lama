import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h1 className="my-5! text-xl">Choose a gallery</h1>
      <div className="flex flex-wrap justify-between">
        <Link className="item" href="/portfolio/illustrations">
          <span className="title">Illustrations</span>
        </Link>
        <Link className="item" href="/portfolio/websites">
          <span className="title">Websites</span>
        </Link>
        <Link className="item" href="/portfolio/applications">
          <span className="title">Applications</span>
        </Link>
      </div>
    </div>
  );
}
