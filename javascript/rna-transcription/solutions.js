// 1.
export const toRna = (DNA) => {
  const TRANSCRIPTION = { C: 'G', G: 'C', T: 'A', A: 'U'};
  let RNA = '';
  if(TRANSCRIPTION[DNA]){
    RNA = TRANSCRIPTION[DNA];
  }
  else {
    RNA = DNA
             .split('')
             .map((singleDNA)=> toRna(singleDNA))
             .join('')
  }
  return RNA;
};


// 2.
const DNA_RNA_LOOKUP = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

export const toRna = dna => (
  dna.split('').reduce((rna, strand) => rna += DNA_RNA_LOOKUP[strand], '')
)


// 3.
export const toRna = (rna, replacer = {G: 'C', C: "G", T: "A", A:"U"}) => {
  return rna.replace(/./gi, elem => replacer[elem]);
};


// 4.
const TRANSCRIPTION = { G: 'C', C: 'G', T: 'A', A: 'U' }

export const toRna = dna => {
    return [...dna].map(v => TRANSCRIPTION[v]).join('')
}


// 5.

const ENCODING = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
};

export const toRna = (dna) => {
    return dna.split('').reduce((accumulator, currentValue) => {
        return accumulator + ENCODING[currentValue]
    }, '');
};


// 6.

const RNA_COMPLEMENTS = {
  'C': 'G',
  'G': 'C',
  'T': 'A',
  'A': 'U'
}

export const toRna = ([...dnaStrand]) => {
  return dnaStrand.map((dnaNucleotide) => RNA_COMPLEMENTS[dnaNucleotide]).join('')
}
