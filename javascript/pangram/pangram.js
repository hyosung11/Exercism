//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET_LENGTH = 26;

export const isPangram = (sentence) => {
  let result = {}
  for (let char of sentence.toLowerCase()) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      result[char] = true;
    }
  }

  return Object.keys(result).length === ALPHABET_LENGTH;
}
