"use client";
import { CharacterTable } from "@/components/character-table";
import { SyllableBuilder } from "@/components/syllable-builder";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"builder" | "reference">(
    "builder",
  );

  return (
    <div className="relative flex h-screen w-full bg-white font-sans dark:bg-black">
      <div className="fixed bottom-0 flex flex-col md:flex-row w-full justify-center gap-2 md:gap-4 p-4 md:p-6 z-10 bg-white shadow-2xl">
        <button
          onClick={() => setActiveTab("builder")}
          className={`w-full md:max-w-56 px-8 py-3 rounded-lg transition-all cursor-pointer ${
            activeTab === "builder"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white text-gray-700 shadow-lg hover:bg-gray-50"
          }`}
        >
          Syllable Builder
        </button>
        <button
          onClick={() => setActiveTab("reference")}
          className={`w-full md:max-w-56 px-8 py-3 rounded-lg transition-all cursor-pointer ${
            activeTab === "reference"
              ? "bg-blue-600 text-white shadow-lg"
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
