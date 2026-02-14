"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";

interface itemStyle {
  userId: number;
  _id: string;
  title: string;
  body: string;
  image: string;
}

export default function Dashboard() {
  // fetch data from client server
  // const [data, setData] = useState<itemStyle[]>([])
  // const [error, setError] = useState(false)
  // const [loadding, setLoadding] = useState(false)

  // useEffect(() => {
  //   const getData : () => void = async () : Promise<void> =>  {
  //     setLoadding(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //       cache: 'no-store',
  //     });

  //     if(!res.ok){
  //       setError(true);
  //       throw new Error("Failed to fetch data")
  //     }

  //     setData(await res.json());
  //     setLoadding(false);
  //   };
  //   getData()
  // }, [])
  const session = useSession();
  const router = useRouter();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR<itemStyle[]>(
    session.status === "authenticated"
      ? `/api/posts?username=${session?.data?.user?.name}`
      : null,
    fetcher,
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = data.get("title");
    const content = data.get("content");
    const image = data.get("img");
    const desc = data.get("desc");

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session?.data?.user?.name,
        }),
      });
      mutate();
      e.currentTarget.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id : string) => {
    try{
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === "loading")
    return <p className="text-4xl text-center">Loading...</p>;
  if (session.status === 'unauthenticated')
    router?.push("/dashboard/login");

  if (session.status === "authenticated") {
    return (
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="posts ">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.map((post, i) => (
              <div key={i} className="border pe-5! rounded flex items-center w-90 justify-between my-12.5!" >
                
                <Image
                  className="object-cover rounded"
                  src={post.image}
                  alt={post.title}
                  width={200}
                  height={150}
                  loading="eager"
                />
                <div className="flex w-1/3 justify-between items-center">
                <h2 className="text-2xl">{post.title}</h2>
                <span className="cursor-pointer text-red-500 border border-red-500 text-center pb-6! rounded-full w-5 h-5" onClick = {() => handleDelete(post._id)}>X</span>
                </div>
              </div>
            ))
          )}
        </div>
        <form className="new flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input name="title" type="text" placeholder="Title" />
          <input name="desc" type="text" placeholder="Description" />
          <input name="img" type="text" placeholder="Image URL" />
          <textarea
            name="content"
            placeholder="Content"
            cols={30}
            rows={10}
          ></textarea>
          <button className="btn">Send</button>
        </form>
      </div>
    );
  }
}
