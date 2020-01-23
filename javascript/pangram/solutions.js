// 1.
export const isPangram = sentence => new Set(sentence.toLowerCase().match(/[a-z]/g)).size === 26


// 2.
export const isPangram = (sentence) => {
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    let lowerCaseSentence = sentence.toLowerCase();
    return alphabet.every( character => lowerCaseSentence.includes(character));
};


// 3.
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const isPangram = (thingie) => {
  const lowerthingie = thingie.toLowerCase();
  for (const letter of letters) {
    if (!lowerthingie.includes (letter)) {
      return false;
    }
  }

  return true;
};


// 4.
const ALPHABET_LENGTH = 26

export const isPangram = str => {
  let lookup = {}
  for (let char of str.toLowerCase()) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      lookup[char] = true
    }
  }

  return Object.keys(lookup).length === ALPHABET_LENGTH
}
