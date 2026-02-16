"use client";
import { CharacterTable } from "@/components/character-table";
import { ModeToggle } from "@/components/mode-toggle";
import { SyllableBuilder } from "@/components/syllable-builder";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"builder" | "reference">(
    "builder",
  );

  return (
    <div className="relative flex h-screen w-full font-sans">
      <div className="fixed bottom-0 flex flex-col md:flex-row w-full justify-center gap-2 md:gap-4 p-4 md:p-6 z-10">
        <ModeToggle />
        <button
          onClick={() => setActiveTab("builder")}
          className={`w-full flex items-center justify-center gap-2 md:w-fit px-8 py-3 rounded-full transition-all cursor-pointer ${
            activeTab === "builder"
              ? "bg-blue-600 border border-blue-800/50 text-white shadow-lg hover:bg-blue-700 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white"
              : "bg-white border border-gray-200 text-gray-700 shadow-lg hover:bg-gray-200"
          }`}
        >
          Syllable Builder
        </button>
        <button
          onClick={() => setActiveTab("reference")}
          className={`w-full flex items-center justify-center gap-2 md:w-fit px-8 py-3 rounded-full transition-all cursor-pointer ${
            activeTab === "reference"
              ? "bg-blue-600 border border-blue-800/50 text-white shadow-lg hover:bg-blue-700 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white"
              : "bg-white border border-gray-200 text-gray-700 shadow-lg hover:bg-gray-200"
          }`}
        >
          Character Reference
        </button>
      </div>
      {activeTab === "builder" ? <SyllableBuilder /> : <CharacterTable />}
    </div>
  );
}
