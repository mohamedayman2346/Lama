import Image from "next/image";
import React from "react";

export default function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <div className="h-12.5 my-5!  text-sm flex items-center justify-between">
      <div>&copy;{year} Lamamia, All rights reserved.</div>
      <div className="social flex items-cetnter gap-2.5">
          <Image className="icon" src="/1.png" width={15} height={15} alt="Lama Dev facebook" />
          <Image className="icon" src="/2.png" width={15} height={15} alt="Lama Dev instagram" />
          <Image className="icon" src="/3.png" width={15} height={15} alt="Lama Dev twitter" />
          <Image className="icon" src="/4.png" width={15} height={15} alt="Lama Dev youtube" />
      </div>
    </div>
  );
}
