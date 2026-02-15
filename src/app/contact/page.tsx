import Button from "@/src/components/Button/Button";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata : Metadata = {
  title: 'Content',
  description: "Content page"
}
export default function Contact() {


  return (
    <div className="">
      <h1 className="text-6xl mb-25! text-center">Let's Keep in Touch</h1>
      <div className="flex flex-col justify-around md:flex-row gap-25 items-center ">
        <Image src="/contact.png" className="animate-moveUp" width={500} height={450} alt="contact-img" />
        <form action="post" className="flex flex-col gap-5 w-full">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <textarea cols={30} rows={10} placeholder="message"></textarea>
          <div className="flex justify-center" >
            <Button url="#" title="Send" className = 'px-20!'/>
          </div>
        </form>
      </div>
    </div>
  );
}
