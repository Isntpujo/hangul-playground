"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors border-2 border-amber-400/50 dark:border-neutral-800/50 bg-amber-300 hover:bg-amber-200 shadow-sm dark:bg-neutral-700 dark:hover:bg-neutral-600 h-12 w-12 cursor-pointer"
    >
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-gray-800" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </button>
  );
}
