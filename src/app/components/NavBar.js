"use client";
import { useEffect } from "react";
import Link from "next/link"

export default function NavBar() {
    return (

        <div className="fixed top-6 right-10 flex space-x-4"> 
            <Link href="/resume" className="px-4 py-2 bg-green-500 rounded hover:bg-green-600">
                resume
            </Link>
            <Link href="/projects" className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600">
                projects
            </Link> 
            <Link href="/tutorials" className="px-4 py-2 bg-blue-500 rounded hover:bg-red-600">
                tutorials
            </Link>
            <Link href="/tutorials" className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">
                contact
            </Link>
        </div>
    ) 
}

