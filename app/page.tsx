"use client";
import { CharacterTable } from "@/components/character-table";
import { SyllableBuilder } from "@/components/syllable-builder";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"builder" | "reference">(
    "builder",
  );

  return (
    <div className="relative flex h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <div className="fixed bottom-0 flex w-full justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("builder")}
          className={`px-8 py-3 rounded-lg transition-all cursor-pointer ${
            activeTab === "builder"
              ? "bg-blue-600 text-white shadow-lg scale-105"
              : "bg-white text-gray-700 shadow-lg hover:bg-gray-50"
          }`}
        >
          Syllable Builder
        </button>
        <button
          onClick={() => setActiveTab("reference")}
          className={`px-8 py-3 rounded-lg transition-all cursor-pointer ${
            activeTab === "reference"
              ? "bg-blue-600 text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-700 shadow-lg hover:bg-gray-50"
          }`}
        >
          Character Reference
        </button>
      </div>
      {activeTab === "builder" ? <SyllableBuilder /> : <CharacterTable />}
    </div>
  );
}
