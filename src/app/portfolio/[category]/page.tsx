import Button from "@/src/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from './page.module.css';
import { items } from "./data";
import { notFound } from "next/navigation";

export default async function Category({
  params
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = items[category as keyof typeof items];
  return (
    <div>
      <h2 className="text-3xl capitalize text-green my-2!">{category}</h2>
      {data ? data.map((item)=> (
        <div key = {item.id} className={`${styles.box} flex flex-col justify-center lg:flex-row lg:justify-between gap-12.5 my-12.5! mb-25`}>
        <div className="content flex flex-col gap-5 justify-center">
          <h1 className="text-5xl" >{item.title}</h1>
          <p className="text-xl">{item.desc}</p>
          <Button url="" title="See more" />
        </div>
          <Image
            className="object-cover rounded"
            width={550}
            height={500}
            src={item.image}
            alt="image"
          />
        </div>
      )): notFound()}
     
    </div>
  );
}
