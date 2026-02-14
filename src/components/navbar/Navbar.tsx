"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkNodeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

interface LinksStyle {
  id: number;
  title: string;
  href: string;
}

const Links: LinksStyle[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    href: "/blog",
  },
  {
    id: 4,
    title: "About",
    href: "/about",
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    href: "/dashboard",
  },
];

export default function Navbar() {
  const router = useRouter();
  const session = useSession();

  return (
    <div className="mb-4! py-5! gap-3 flex flex-wrap justify-between items-center ">
      <Link href="/" className="font-bold text-2xl">
        Lamamia
      </Link>
      <div className="flex flex-wrap items-center gap-5">
        <DarkModeToggle />
        {Links.map((link) => (
          <Link key={link.id} href={link.href}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" ? (
          <button className="btn p-1! " onClick={() => signOut()}>
            Logout
          </button>
        ) : (
          <button className="btn p-1! " onClick={() => router.push('/dashboard/register')}>
            Register
          </button>
        )}
      </div>
    </div>
  );
}
