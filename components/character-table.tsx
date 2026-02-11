const characters = [
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㄱ",
    roman: "g / k",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㄴ",
    roman: "n",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㄷ",
    roman: "d / t",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㄹ",
    roman: "r / l",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㅁ",
    roman: "m",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㅂ",
    roman: "b / p",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㅅ",
    roman: "s",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㅇ",
    roman: "ng / -",
    notes: "silent at start",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㅈ",
    roman: "j",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㅊ",
    roman: "ch",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㅋ",
    roman: "k",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㅌ",
    roman: "t",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㅍ",
    roman: "p",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Basic",
    hangul: "ㅎ",
    roman: "h",
    notes: "",
  },
  {
    category: "Consonant",
    subcategory: "Double",
    hangul: "ㄲ",
    roman: "kk",
    notes: "tense",
  },
  {
    category: "Consonant",
    subcategory: "Double",
    hangul: "ㄸ",
    roman: "tt",
    notes: "tense",
  },
  {
    category: "Consonant",
    subcategory: "Double",
    hangul: "ㅃ",
    roman: "pp",
    notes: "tense",
  },
  {
    category: "Consonant",
    subcategory: "Double",
    hangul: "ㅆ",
    roman: "ss",
    notes: "tense",
  },
  {
    category: "Consonant",
    subcategory: "Double",
    hangul: "ㅉ",
    roman: "jj",
    notes: "tense",
  },
  {
    category: "Vowel",
    subcategory: "Basic",
    hangul: "ㅏ",
    roman: "a",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Basic",
    hangul: "ㅑ",
    roman: "ya",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Basic",
    hangul: "ㅓ",
    roman: "eo",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Basic",
    hangul: "ㅕ",
    roman: "yeo",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Basic",
    hangul: "ㅗ",
    roman: "o",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Basic",
    hangul: "ㅛ",
    roman: "yo",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Basic",
    hangul: "ㅜ",
    roman: "u",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Basic",
    hangul: "ㅠ",
    roman: "yu",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Basic",
    hangul: "ㅡ",
    roman: "eu",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Basic",
    hangul: "ㅣ",
    roman: "i",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Compound",
    hangul: "ㅐ",
    roman: "ae",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Compound",
    hangul: "ㅒ",
    roman: "yae",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Compound",
    hangul: "ㅔ",
    roman: "e",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Compound",
    hangul: "ㅖ",
    roman: "ye",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Compound",
    hangul: "ㅘ",
    roman: "wa",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Compound",
    hangul: "ㅙ",
    roman: "wae",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Compound",
    hangul: "ㅚ",
    roman: "oe",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Compound",
    hangul: "ㅝ",
    roman: "wo",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Compound",
    hangul: "ㅞ",
    roman: "we",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Compound",
    hangul: "ㅟ",
    roman: "wi",
    notes: "",
  },
  {
    category: "Vowel",
    subcategory: "Compound",
    hangul: "ㅢ",
    roman: "ui",
    notes: "",
  },
];

export function CharacterTable() {
  const consonants = characters.filter((c) => c.category === "Consonant");
  const vowels = characters.filter((c) => c.category === "Vowel");

  return (
    <div className="flex gap-12 flex-col md:flex-row w-full h-fit pt-8 pb-50 px-8 md:pt-12 md:px-12 bg-white text-gray-800">
      <div className="w-full">
        <h2 className="text-3xl mb-6 text-center bg-blue-100 py-3 rounded-lg">
          Consonants (자음)
        </h2>

        <div className="mb-8">
          <h3 className="text-xl mb-4 bg-blue-50 py-2 px-4 rounded-lg">
            Basic Consonants
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-200">
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Hangul
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Romanization
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {consonants
                  .filter((c) => c.subcategory === "Basic")
                  .map((char, index) => (
                    <tr key={index} className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 text-3xl">
                        {char.hangul}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-lg">
                        {char.roman}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">
                        {char.notes}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4 bg-blue-50 py-2 px-4 rounded-lg">
            Double Consonants (Tense)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-200">
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Hangul
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Romanization
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {consonants
                  .filter((c) => c.subcategory === "Double")
                  .map((char, index) => (
                    <tr key={index} className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 text-3xl">
                        {char.hangul}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-lg">
                        {char.roman}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">
                        {char.notes}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-3xl mb-6 text-center bg-purple-100 py-3 rounded-lg">
          Vowels (모음)
        </h2>

        <div className="mb-8">
          <h3 className="text-xl mb-4 bg-purple-50 py-2 px-4 rounded-lg">
            Basic Vowels
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-200">
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Hangul
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Romanization
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {vowels
                  .filter((v) => v.subcategory === "Basic")
                  .map((char, index) => (
                    <tr key={index} className="hover:bg-purple-50">
                      <td className="border border-gray-300 px-4 py-3 text-3xl">
                        {char.hangul}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-lg">
                        {char.roman}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">
                        {char.notes}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4 bg-purple-50 py-2 px-4 rounded-lg">
            Compound Vowels
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-200">
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Hangul
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Romanization
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {vowels
                  .filter((v) => v.subcategory === "Compound")
                  .map((char, index) => (
                    <tr key={index} className="hover:bg-purple-50">
                      <td className="border border-gray-300 px-4 py-3 text-3xl">
                        {char.hangul}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-lg">
                        {char.roman}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">
                        {char.notes}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
