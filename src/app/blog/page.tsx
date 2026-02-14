import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface itemStyle {
  userId: number,
  _id: number,
  title: string,
  desc: string,
  image: string,
}

async function getData() {
  const res = await fetch("https://lama-six-ochre.vercel.app/api/posts",{
    // next: { revalidate: 10 }, to get data every 10 second
    cache: 'no-store',
  });
  if (!res.ok) {
    notFound();
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Blog() {

  const data : itemStyle[] = await getData();

  return (
    <div>
      {data.map((item :itemStyle ) => (
        <Link
          key = {item._id}
          href={`/blog/${item._id}`}
          className="flex flex-col md:flex-row items-center gap-12.5 mb-12.5!"
        >
          <Image
            src = {item.image}
            alt={item.title}
            width={300}
            height={250}
            className="object-cover rounded"
          />
          <div className="content">
            <h1 className="text-4xl mb-2.5!">{item.title}</h1>
            <p className="text-xl text-[#999]">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
