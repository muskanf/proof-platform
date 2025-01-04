"use client";

export default function Login() {
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
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" placeholder="Enter email" className="w-full p-2 border rounded"/>
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input type="password" placeholder="Enter password" className="w-full p-2 border rounded"/>
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Log In
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        Built with <a href="https://nextjs.org" className="underline">Next.js</a>
      </footer>
    </div>
  );
}
