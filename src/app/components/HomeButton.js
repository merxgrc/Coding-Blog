"use client";
import Link from "next/link";

export default function HomeButton() {
    return (
        
      <div className="fixed top-6 left-10">
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          Marcos Garcia
        </Link>
      </div>
    )
}