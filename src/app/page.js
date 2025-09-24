// page.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-10">

      

      

      {/* Intro section */}
      <div className="flex flex-row items-start justify-center mt-32 space-x-16">
        {/* Text block */}
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold">Hi, I'm Marcos!</h2>
          <p className="mt-4 text-lg leading-relaxed">
            I’m a full-stack developer and AI engineer who turns complex ideas into fast, usable products. 
            I'm based out of the San Francisco Bay Area and I have been programming for 5 years. 
            I have been working as a Software engineer for 1 year now and I'm looking for a new role in 
            either full stack or backend engineering.
          </p>
        </div>

        {/* Image block */}
        <div className="flex-shrink-0">
          <Image
            src="/IMG_6839.png"   // file must be in /public
            alt="mrx"
            width={256}
            height={256}
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

      </div> 
      
      <section className="mt-32">
          <h2 className="text-3xl font-bold text-center">My Projects</h2>
          
        </section>
    </main>
  );
}
