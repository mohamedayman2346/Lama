import { Metadata } from "next";
import Image from "next/image";

interface dataStyle  {
  userId: number,
  _id: number,
  title: string,
  desc: string,
  image: string,
  username: string,
  content: string,
}

export async function generateMetadata({params} : {params: Promise<{id: string}>}) : Promise<Metadata> {
  const {id} = await params;
  const post : dataStyle = await getData(id);
  return {
    title: post.title,
    description: post.desc,
  }
}
async function getData(id : string) : Promise<dataStyle> {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok){
    throw new Error("Failed to fetch data");
  }

  return res.json()
}

export default async function BlogPost({params} : {params: Promise<{id : string}>}) {
  
  const { id } = await params;
  const data : dataStyle = await getData(id);

  return (
    <div className="">
      <div className="flex items-center flex-col gap-10 text-justify mt-12.5 text-xl font-light text-[#999] md:justify-between md:flex-row ">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl my-5!">
            {data.title}
          </h1>
          <p className="text-lg font-light">
            {data.desc} 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            omnis voluptas earum quis consectetur quisquam obcaecati, mollitia
            ea quod, provident optio quia velit. Adipisci, at? Praesentium
            doloribus quasi facere inventore.
          </p>
          <div className="flex items-center gap-2.5">
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <span className="">{data.username}</span>
          </div>
        </div>

        <Image
          src={data.image}
          alt=""
          width={500}
          height={400}
          className="object-cover rounded w-1/2"
        />
      </div>
      <div className="text-justify mt-12.5! text-xl font-light text-[#999] flex flex-col gap-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          corporis alias aliquam id nobis, exercitationem fuga nemo suscipit
          cupiditate nulla ipsa eos veniam officiis? Exercitationem dolorem
          ipsam delectus sit vitae!
        </p>
        <p>
         {data.content}
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quis
          optio! Nam aspernatur, illo soluta, cumque laboriosam excepturi optio
          sapiente vitae natus ex quisquam. Rem nulla molestiae ducimus soluta
          natus Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          aspernatur ducimus dolore, similique, tempora nostrum praesentium,
          veritatis laudantium adipisci facere ratione explicabo incidunt
          pariatur velit vel labore. Aut, vero quisquam.
        </p>
      </div>
    </div>
  );
}
