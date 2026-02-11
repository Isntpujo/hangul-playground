import { useState } from "react";
import { Ban, Copy, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const initialConsonants = [
  { hangul: "(none)", roman: "", value: 0 },
  { hangul: "ㄱ", roman: "g/k", value: 0x1100 },
  { hangul: "ㄲ", roman: "kk", value: 0x1101 },
  { hangul: "ㄴ", roman: "n", value: 0x1102 },
  { hangul: "ㄷ", roman: "d/t", value: 0x1103 },
  { hangul: "ㄸ", roman: "tt", value: 0x1104 },
  { hangul: "ㄹ", roman: "r/l", value: 0x1105 },
  { hangul: "ㅁ", roman: "m", value: 0x1106 },
  { hangul: "ㅂ", roman: "b/p", value: 0x1107 },
  { hangul: "ㅃ", roman: "pp", value: 0x1108 },
  { hangul: "ㅅ", roman: "s", value: 0x1109 },
  { hangul: "ㅆ", roman: "ss", value: 0x110a },
  { hangul: "ㅇ", roman: "-", value: 0x110b },
  { hangul: "ㅈ", roman: "j", value: 0x110c },
  { hangul: "ㅉ", roman: "jj", value: 0x110d },
  { hangul: "ㅊ", roman: "ch", value: 0x110e },
  { hangul: "ㅋ", roman: "k", value: 0x110f },
  { hangul: "ㅌ", roman: "t", value: 0x1110 },
  { hangul: "ㅍ", roman: "p", value: 0x1111 },
  { hangul: "ㅎ", roman: "h", value: 0x1112 },
];

const vowels = [
  { hangul: "(none)", roman: "", value: 0 },
  { hangul: "ㅏ", roman: "a", value: 0x1161 },
  { hangul: "ㅐ", roman: "ae", value: 0x1162 },
  { hangul: "ㅑ", roman: "ya", value: 0x1163 },
  { hangul: "ㅒ", roman: "yae", value: 0x1164 },
  { hangul: "ㅓ", roman: "eo", value: 0x1165 },
  { hangul: "ㅔ", roman: "e", value: 0x1166 },
  { hangul: "ㅕ", roman: "yeo", value: 0x1167 },
  { hangul: "ㅖ", roman: "ye", value: 0x1168 },
  { hangul: "ㅗ", roman: "o", value: 0x1169 },
  { hangul: "ㅘ", roman: "wa", value: 0x116a },
  { hangul: "ㅙ", roman: "wae", value: 0x116b },
  { hangul: "ㅚ", roman: "oe", value: 0x116c },
  { hangul: "ㅛ", roman: "yo", value: 0x116d },
  { hangul: "ㅜ", roman: "u", value: 0x116e },
  { hangul: "ㅝ", roman: "wo", value: 0x116f },
  { hangul: "ㅞ", roman: "we", value: 0x1170 },
  { hangul: "ㅟ", roman: "wi", value: 0x1171 },
  { hangul: "ㅠ", roman: "yu", value: 0x1172 },
  { hangul: "ㅡ", roman: "eu", value: 0x1173 },
  { hangul: "ㅢ", roman: "ui", value: 0x1174 },
  { hangul: "ㅣ", roman: "i", value: 0x1175 },
];

const finalConsonants = [
  { hangul: "(none)", roman: "", value: 0 },
  { hangul: "ㄱ", roman: "k", value: 0x11a8 },
  { hangul: "ㄲ", roman: "kk", value: 0x11a9 },
  { hangul: "ㄳ", roman: "ks", value: 0x11aa },
  { hangul: "ㄴ", roman: "n", value: 0x11ab },
  { hangul: "ㄵ", roman: "nj", value: 0x11ac },
  { hangul: "ㄶ", roman: "nh", value: 0x11ad },
  { hangul: "ㄷ", roman: "t", value: 0x11ae },
  { hangul: "ㄹ", roman: "l", value: 0x11af },
  { hangul: "ㄺ", roman: "lg", value: 0x11b0 },
  { hangul: "ㄻ", roman: "lm", value: 0x11b1 },
  { hangul: "ㄼ", roman: "lb", value: 0x11b2 },
  { hangul: "ㄽ", roman: "ls", value: 0x11b3 },
  { hangul: "ㄾ", roman: "lt", value: 0x11b4 },
  { hangul: "ㄿ", roman: "lp", value: 0x11b5 },
  { hangul: "ㅀ", roman: "lh", value: 0x11b6 },
  { hangul: "ㅁ", roman: "m", value: 0x11b7 },
  { hangul: "ㅂ", roman: "p", value: 0x11b8 },
  { hangul: "ㅄ", roman: "ps", value: 0x11b9 },
  { hangul: "ㅅ", roman: "s", value: 0x11ba },
  { hangul: "ㅆ", roman: "ss", value: 0x11bb },
  { hangul: "ㅇ", roman: "ng", value: 0x11bc },
  { hangul: "ㅈ", roman: "j", value: 0x11bd },
  { hangul: "ㅊ", roman: "ch", value: 0x11be },
  { hangul: "ㅋ", roman: "k", value: 0x11bf },
  { hangul: "ㅌ", roman: "t", value: 0x11c0 },
  { hangul: "ㅍ", roman: "p", value: 0x11c1 },
  { hangul: "ㅎ", roman: "h", value: 0x11c2 },
];

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
    <div className="flex flex-col gap-8 md:gap-12 w-full h-fit pt-4 pb-50 px-4 md:pt-12 md:px-12 bg-white">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="grid md:grid-cols-[auto_1fr] items-center gap-4 md:gap-8">
        <div className="flex min-h-50 gap-8 items-center justify-center p-8 bg-gray-100 rounded-2xl">
          <div className="inline-block text-gray-800">
            <div className="text-7xl font-bold text-center">
              {currentSyllable}
            </div>
            <div className="text-sm text-gray-600 text-center mt-2">
              {getCurrentRomanization()}
            </div>
          </div>
          <button
            onClick={addToHistory}
            className="px-4 py-2 bg-blue-600 text-sm text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-nowrap"
          >
            Add Text
          </button>
        </div>

        <div className="p-6 min-h-50 bg-gray-100 text-gray-800 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl">Hangul Text</h3>
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
                  className="relative text-4xl text-center bg-white px-6 py-3 rounded-lg shadow-md group"
                >
                  <div>{entry.syllable}</div>
                  <div className="text-sm text-gray-600 mt-1">
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
          <h3 className="text-xl mb-4 text-center bg-blue-100 py-2 rounded-lg">
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
                    : "bg-gray-100 hover:bg-gray-200"
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
          <h3 className="text-xl mb-4 text-center bg-purple-100 py-2 rounded-lg">
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
                    : "bg-gray-100 hover:bg-gray-200"
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
          <h3 className="text-xl mb-4 text-center bg-pink-100 py-2 rounded-lg">
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
                    : "bg-gray-100 hover:bg-gray-200"
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
