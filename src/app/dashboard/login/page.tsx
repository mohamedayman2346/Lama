"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();
  const session = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    try{
      signIn("credentials", { email, password })
    } catch (error : any){
      setError(error)
    }
  };

   if (session.status === 'loading')
    return <p className='text-4xl text-center'>Loading...</p>;
  if (session.status === 'authenticated')
    router?.push("/dashboard");

  return (
    <div className="flex items-center justify-center flex-col gap-5" >
      <h1 className="title">LogIn</h1>
      <form
        action="post"
        className="form w-75 flex flex-col gap-5 "
        onSubmit={handleSubmit}
      >
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className="btn">LogIn</button>
      </form>
      <h1 className="text-4xl text-red-500">{error}</h1>
      <button className="cursor-pointer" onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
}
