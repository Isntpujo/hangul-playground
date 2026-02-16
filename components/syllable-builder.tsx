import { useState } from "react";
import { Ban, Copy, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import syllableData from "../data/syllable-data.json";

const { initialConsonants, vowels, finalConsonants } = syllableData;

function assembleSyllable(
  initial: number,
  vowel: number,
  final: number,
): string {
  const syllableBase = 0xac00;
  const initialIndex = initial - 0x1100;
  const vowelIndex = vowel - 0x1161;
  const finalIndex = final === 0 ? 0 : final - 0x11a7;

  const syllableCode =
    syllableBase + initialIndex * 21 * 28 + vowelIndex * 28 + finalIndex;
  return String.fromCharCode(syllableCode);
}

export function SyllableBuilder() {
  const [selectedInitial, setSelectedInitial] = useState(
    initialConsonants[3].value,
  );
  const [selectedVowel, setSelectedVowel] = useState(vowels[6].value);
  const [selectedFinal, setSelectedFinal] = useState(finalConsonants[0].value);
  const [syllableHistory, setSyllableHistory] = useState<
    { syllable: string; roman: string }[]
  >([]);

  const getDisplayContent = () => {
    // If either initial or vowel is none, show individual characters
    if (selectedInitial === 0 || selectedVowel === 0) {
      let display = "";
      if (selectedInitial !== 0) {
        display += String.fromCharCode(selectedInitial);
      }
      if (selectedVowel !== 0) {
        display += String.fromCharCode(selectedVowel);
      }
      if (selectedFinal !== 0) {
        display += String.fromCharCode(selectedFinal);
      }
      return display || "—";
    }
    // Otherwise assemble the syllable
    return assembleSyllable(selectedInitial, selectedVowel, selectedFinal);
  };

  const currentSyllable = getDisplayContent();

  const getCurrentRomanization = () => {
    const initial = initialConsonants.find((c) => c.value === selectedInitial);
    const vowel = vowels.find((v) => v.value === selectedVowel);
    const final = finalConsonants.find((f) => f.value === selectedFinal);

    let roman = (initial?.roman || "") + (vowel?.roman || "");
    if (final && final.value !== 0) {
      roman += final.roman;
    }
    return roman || "—";
  };

  const addToHistory = () => {
    const entry = {
      syllable: currentSyllable,
      roman: getCurrentRomanization(),
    };
    if (syllableHistory.length >= 20) {
      setSyllableHistory([...syllableHistory.slice(1), entry]);
    } else {
      setSyllableHistory([...syllableHistory, entry]);
    }
  };

  const deleteFromHistory = (indexToDelete: number) => {
    setSyllableHistory(
      syllableHistory.filter((_, index) => index !== indexToDelete),
    );
  };

  const copyToClipboard = () => {
    const text = syllableHistory.map((entry) => entry.syllable).join("");

    // Fallback method for copying text when clipboard API is blocked
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      // alert("Copied to clipboard!");
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy to clipboard!");
    } finally {
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="relative flex flex-col gap-8 md:gap-12 w-full h-fit pt-4 pb-50 px-4 md:pt-12 md:px-12 bg-white dark:bg-neutral-800">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="grid md:grid-cols-[auto_1fr] items-center gap-4 md:gap-8">
        <div className="flex min-h-50 gap-8 items-center justify-center p-8 bg-gray-100 dark:bg-neutral-700 rounded-2xl z-10">
          <div className="inline-block text-gray-800">
            <div className="text-7xl font-bold text-center text-neutral-900 dark:text-neutral-100">
              {currentSyllable}
            </div>
            <div className="text-sm text-center mt-2 text-neutral-900 dark:text-neutral-100">
              {getCurrentRomanization()}
            </div>
          </div>
          <button
            onClick={addToHistory}
            className="px-4 py-2 bg-blue-500 text-sm text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer text-nowrap"
          >
            Add Text
          </button>
        </div>

        <div className="p-6 min-h-50 bg-gray-100 dark:bg-neutral-700 text-gray-800 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl text-neutral-900 dark:text-neutral-100">
              Hangul Text
            </h3>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm flex items-center gap-2 cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                Copy Text
              </button>
              <button
                onClick={() => setSyllableHistory([])}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm cursor-pointer"
              >
                Clear All
              </button>
            </div>
          </div>
          {syllableHistory.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {syllableHistory.map((entry, index) => (
                <div
                  key={index}
                  className="relative text-4xl text-center bg-white dark:bg-neutral-500 px-6 py-3 rounded-lg shadow-md group"
                >
                  <div className="text-neutral-900 dark:text-neutral-100">
                    {entry.syllable}
                  </div>
                  <div className="text-sm mt-1 text-neutral-900 dark:text-neutral-100">
                    {entry.roman}
                  </div>
                  <button
                    onClick={() => deleteFromHistory(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    aria-label="Delete syllable"
                  >
                    <X className="w-4 h-4 cursor-pointer" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
        <div>
          <h3 className="text-xl mb-4 text-center bg-blue-100 dark:bg-blue-300 py-2 rounded-lg">
            Initial Consonant (초성)
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {initialConsonants.map((consonant) => (
              <button
                key={consonant.value}
                onClick={() => setSelectedInitial(consonant.value)}
                className={`text-center p-4 rounded-lg transition-all cursor-pointer ${
                  selectedInitial === consonant.value
                    ? "bg-blue-600 text-white shadow-lg scale-110"
                    : "bg-gray-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                }`}
              >
                <div className="text-2xl">
                  {consonant.hangul === "(none)" ? (
                    <Ban className="w-6 h-6 mx-auto" />
                  ) : (
                    consonant.hangul
                  )}
                </div>
                <div className="text-xs mt-1">{consonant.roman}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4 text-center bg-purple-100  dark:bg-purple-300 py-2 rounded-lg">
            Vowel (중성)
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {vowels.map((vowel) => (
              <button
                key={vowel.value}
                onClick={() => setSelectedVowel(vowel.value)}
                className={`p-4 rounded-lg transition-all cursor-pointer ${
                  selectedVowel === vowel.value
                    ? "bg-purple-600 text-white shadow-lg scale-110"
                    : "bg-gray-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                }`}
              >
                <div className="text-2xl">
                  {vowel.hangul === "(none)" ? (
                    <Ban className="w-6 h-6 mx-auto" />
                  ) : (
                    vowel.hangul
                  )}
                </div>
                <div className="text-xs mt-1">{vowel.roman}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-xl mb-4 text-center bg-pink-100 dark:bg-pink-300 py-2 rounded-lg">
            Final Consonant (종성)
          </h3>

          <div className="grid grid-cols-4 gap-2">
            {finalConsonants.map((consonant) => (
              <button
                key={consonant.value}
                onClick={() => setSelectedFinal(consonant.value)}
                className={`p-4 rounded-lg transition-all cursor-pointer ${
                  selectedFinal === consonant.value
                    ? "bg-pink-600 text-white shadow-lg scale-110"
                    : "bg-gray-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                }`}
              >
                <div className="text-2xl">
                  {consonant.hangul === "(none)" ? (
                    <Ban className="w-6 h-6 mx-auto" />
                  ) : (
                    consonant.hangul
                  )}
                </div>
                <div className="text-xs mt-1">{consonant.roman}</div>
              </button>
            ))}
          </div>
        </div>  
      </div>
    </div>
  );
}
