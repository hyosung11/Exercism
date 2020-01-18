//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const TRANSCRIBED_RNA  = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export const toRna = (dna) => {
  return dna.split('').reduce((accumulator, currentValue) => {
    return accumulator + TRANSCRIBED_RNA[currentValue]
  }, '')
};
