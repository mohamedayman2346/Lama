import Button from "@/src/components/Button/Button";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="">
      <div className="w-full h-75 relative">
        <Image
          fill={true}
          className="object-cover grayscale-100 "
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="absolute left-5 bottom-5 bg-green p-1! rounded">
          <h1 className="">Digital storytellers</h1>
          <h2 className="">Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex gap-12.5 flex-col md:flex-row">
        {/* left section */}
        <section>
          <h1>Who Are We?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            deserunt suscipit neque dolores id illum. Nulla, eaque reprehenderit
            eum debitis porro laboriosam quos! Dolor veniam, voluptatem
            excepturi corrupti nesciunt aut.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            deserunt suscipit neque dolores id illum. Nulla, eaque reprehenderit
            eum debitis porro laboriosam quos! Dolor veniam, voluptatem
            excepturi corrupti nesciunt aut.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            deserunt suscipit neque dolores id illum. Nulla, eaque reprehenderit
            eum debitis porro laboriosam quos! Dolor veniam, voluptatem
            excepturi corrupti nesciunt aut.
          </p>
        </section>
        {/* right section */}
        <section>
          <h1>What We Do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            quidem, quibusdam fuga amet dicta laudantium itaque veniam eaque
            quas maiores sapiente in, possimus voluptatem odit totam explicabo
            dolorum et aperiam?
          </p>
          <ul className="flex flex-col gap-5">
            <li>- Creative IIustrations</li>
            <li>- Dynamic Website</li>
            <li>- Fast adn Handy Mobile Apps</li>
          </ul>
          <Button url = '/contact' title = 'Contact' />
        </section>
      </div>
    </div>
  );
}
