import Image from "next/image";
import Hero from "../../public/hero.png";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div className="flex items-center gap-25 flex-wrap ">
      <div className="flex-1 flex flex-col gap-12.5 ">
        <h1 className="text-7xl bg-linear-to-b from-green to-[#ddd] bg-clip-text text-transparent " >Better design for your digital products.</h1>
        <p className="text-2xl font-light">
          Turning your Idea into Reality, we bring together the teams from the
          global tech industry
        </p>
        <Button url = '/portfolio' title = 'See Our Works' />
      </div>
      <div className="">
        <Image src={Hero} className="animate-moveUp w-fit object-cover" alt="Hero image" />
      </div>
    </div>
  );
}
