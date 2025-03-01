export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-20">
      <h1 className="text-4xl font-bold">Welcome to Journal of a Computer Scientist</h1>
      <p className="mt-4 text-lg">Explore coding projects, tutorials, and journal entries.</p>
      <div className="mt-6 space-x-4">
        <a href="/journal" className="px-4 py-2 bg-blue-500 rounded">Journal</a>
        <a href="/projects" className="px-4 py-2 bg-yellow-500 rounded">Projects</a>
        <a href="/tutorials" className="px-4 py-2 bg-red-500 rounded">Tutorials</a>
      </div>
    </main>
  );
}