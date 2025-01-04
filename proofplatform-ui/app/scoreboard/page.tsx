"use client";

const sampleScores = [
  { username: "Alice", score: 92 },
  { username: "Bob", score: 88 },
  { username: "Charlie", score: 79 },
];

export default function Scoreboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white shadow">
        <div className="text-2xl font-bold">ProofPlatform</div>
        <div className="flex space-x-6">
          <a href="/login" className="hover:underline">Log In</a>
          <a href="/signup" className="hover:underline">Sign Up</a>
          <a href="/scoreboard" className="hover:underline">Scoreboard</a>
          <a href="/" className="hover:underline">Home</a>
        </div>
      </nav>

      {/* Content */}
      <main className="flex flex-grow items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Scoreboard</h2>
          <ul className="divide-y divide-gray-200">
            {sampleScores.map((entry, index) => (
              <li key={index} className="py-2 flex justify-between">
                <span>{entry.username}</span>
                <span className="font-bold">{entry.score}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        Built with <a href="https://nextjs.org" className="underline">Next.js</a>
      </footer>
    </div>
  );
}
