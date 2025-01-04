"use client";
import { useState } from "react";

export default function Home() {
  const [selectedProof, setSelectedProof] = useState(null);
  const [proofText, setProofText] = useState("");

  const proofs = [
    { id: 1, title: "Proof 1: Addition is Commutative" },
    { id: 2, title: "Proof 2: Multiplication is Associative" },
    { id: 3, title: "Proof 3: Basic Induction" },
  ];

  const handleSubmit = () => {
    console.log("Proof submitted:", proofText);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white shadow">
        <div className="text-2xl font-bold">ProofPlatform</div>
        <div className="flex space-x-6">
          <a href="/login" className="hover:underline">Log In</a>
          <a href="/signup" className="hover:underline">Sign Up</a>
          <a href="/scoreboard" className="hover:underline">Scoreboard</a>
          <a href="#" className="hover:underline">Practice</a>
        </div>
      </nav>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-[1fr_3fr] flex-grow p-8 gap-8">
        {/* Left Sidebar (Proof List) */}
        <aside className="bg-white shadow rounded-lg p-4 border">
          <h2 className="text-lg font-semibold mb-4">Proofs</h2>
          <ul className="space-y-2">
            {proofs.map((proof) => (
              <li
                key={proof.id}
                className={`p-2 rounded cursor-pointer ${
                  selectedProof?.id === proof.id ? "bg-blue-100" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedProof(proof)}
              >
                {proof.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Editor Workspace */}
        <main className="flex flex-col bg-white shadow rounded-lg p-6 border">
          {selectedProof ? (
            <>
              <h2 className="text-xl font-semibold mb-4">{selectedProof.title}</h2>
              <textarea
                className="w-full h-64 p-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
                value={proofText}
                onChange={(e) => setProofText(e.target.value)}
                placeholder="Write your proof here..."
              />
              <button
                onClick={handleSubmit}
                className="mt-4 self-end bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Submit Proof
              </button>
            </>
          ) : (
            <p className="text-gray-500">Select a proof from the list to start writing.</p>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        Built with <a href="https://nextjs.org" className="underline">Next.js</a>
      </footer>
    </div>
  );
}
