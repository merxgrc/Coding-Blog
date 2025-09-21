import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-10">
      {/* Top navigation */}
      <div className="fixed top-6 left-10">
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          Marcos Garcia
        </Link>
      </div>

      <div className="fixed top-6 right-10 flex space-x-4"> 
        <Link href="/tutorials" className="px-4 py-2 bg-blue-500 rounded hover:bg-red-600">
          resume
        </Link>
        <Link href="/projects" className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600">
          projects
        </Link> 
        <Link href="/tutorials" className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">
          contact
        </Link>
       
      </div>

      {/* Intro section */}
      <div className="flex flex-row items-start justify-center mt-32 space-x-16">
        {/* Text block */}
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold">Hi, I'm Marcos!</h2>
          <p className="mt-4 text-lg leading-relaxed">
            I’m a full-stack developer and AI engineer who turns complex ideas into fast, usable products. 
            I specialize in building applications that don’t just work — they scale, adapt, and accelerate productivity with AI. 
            Every line of code I ship balances speed with craftsmanship, because I believe innovation should be both responsible and impactful.
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
    </main>
  );
}
