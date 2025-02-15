"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  const { data: session } = useSession();
  const handleSignout = async () => {
    try {
    } catch (error) {}
  };
  return (
    <div>
      <button onClick={handleSignout} >Signout</button>
      {session? (
        <div>Welcome</div>
      ) : (
        <div> <Link href="/login">Login </Link>
      <Link href="/register">Register </Link></div>
      )}
     

    </div>
  );
}
