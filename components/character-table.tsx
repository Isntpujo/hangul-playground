import characterData from "../data/character-data.json";

const { characters } = characterData;

export function CharacterTable() {
  const consonants = characters.filter((c) => c.category === "Consonant");
  const vowels = characters.filter((c) => c.category === "Vowel");

  return (
    <div className="flex gap-12 flex-col md:flex-row w-full h-fit pt-4 pb-50 px-4 md:pt-12 md:px-12 bg-white text-gray-800">
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
