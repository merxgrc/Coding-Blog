"use client"; // This is a client component

import { useEffect } from "react";

export default function OnekoScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/oneko.js"; // Load from public folder
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything
}