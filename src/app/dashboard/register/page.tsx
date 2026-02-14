"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Register() {

  const [error, setError] = useState('');
  const router = useRouter()

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get("email");
    const password =formData.get("password")
    try {
      const res = await fetch('/api/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if(res.status === 201)  router.push('/dashboard/login?sucess=Account has been created')

    } catch(error: any) {
      setError(error)
    }

  }

  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className="title">Register</h1>
      <form action="post" className="form w-75 flex flex-col gap-5 " onSubmit={handleSubmit}>
        <input type="text" name = 'name' placeholder="User Name"  required />
        <input type="email" name = 'email' placeholder="Email"  required />
        <input type="password" name = 'password' placeholder="Password"  required />
        <button className="btn">Register</button>
      </form>
      {error && <h1 className="text-2xl text-red-500">{error}</h1>}
      <Link href = '/dashboard/login'>Login with </Link>
    </div>
  );
}
