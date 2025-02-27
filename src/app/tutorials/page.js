import Link from "next/link"

export default function Tutorials(){
    return (
        <main className="min-h-screen flex flex-col items-center p-10 bg-gray-900">
            <h1 className="text-3xl">Tutorials and Tips</h1>
            <div className="flex flex-row gap-6 space-x-4 items-center p-6">
                <Link href="/tutorials/c++" className="bg-red-500 rounded">C++</Link>
                <Link href="/tutorials/java" className="bg-red-500 rounded">Java</Link>
                <Link href="/tutorials/vs_code" className="bg-red-500 rounded">Visual Studio Code</Link>
                <Link href="/tutorials/students" className="bg-red-500 rounded">For Students</Link>
            </div>
        </main>
    )
}