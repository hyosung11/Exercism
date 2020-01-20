# RNA Transcription

Given a DNA strand, return its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (**A**), cytosine (**C**),
guanine (**G**) and thymine (**T**).

The four nucleotides found in RNA are adenine (**A**), cytosine (**C**),
guanine (**G**) and uracil (**U**).

Given a DNA strand, its transcribed RNA strand is formed by replacing
each nucleotide with its complement:

* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U`

## Setup

Go through the setup instructions for Javascript to install the necessary
dependencies:

[https://exercism.io/tracks/javascript/installation](https://exercism.io/tracks/javascript/installation)

## Requirements

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ npm test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xtest` to
`test`.

## Source

Hyperphysics [http://hyperphysics.phy-astr.gsu.edu/hbase/Organic/transcription.html](http://hyperphysics.phy-astr.gsu.edu/hbase/Organic/transcription.html)

## Submitting Incomplete Solutions

It's possible to submit an incomplete solution so you can see how others have
completed the exercise.

## Mentor Notes
OK... I generally prefer `map` since it is more readable for this reason! Here, you can use `map` but to get a string back at the end, you have just to add a `.join('')`!

But if you want to go with `reduce`, it takes 2 parameters:
- a callback function that iterates on all elements of the input and that have (at most) 4 arguments:
    - the accumulator, which contains the current object aggregated from the previous iterations
    - the current element
    - the index of the current element
    - the full input array
- a default value which is the `accumulator` at step 0 and if there is none, the first value of `accumulator` is the first element of the input.
Let's go with some code to clarify a bit this...

For example, if we want to perform a sum, we can do this:
```
const input = [1, 2, 3];

input.reduce((acc, value) => acc + value); // gives 6
// steps ->
//   0: acc === input[0] === 1
//   1: acc === acc + input[1] === 1 + 2 === 3
//   2: acc === acc + input[2] === 3 + 3 === 6
```
Now if you put a default value, for example, 10 with the same example, the result will be 10 as the 0th step will gives acc === 10 and then, the other steps will add the 3 values...

If we go with your code, perhaps have you know understand why the initial value is important? If we don't put it, the accumulator will have as a 1st value the 1st letter of your input but not transcribed!

Here again an example:
```
// Go without an initial value
input.reduce((acc, value) => acc + TRANSCRIBED_RNA[value]); // gives 'AGU'
// Steps ->
//   0: acc === input[0] === 'A'
//   1: acc === acc + TRANSCRIBED_RNA[input[1]] === 'AG'
//   2: acc === acc + TRANSCRIBED_RNA[input[2]] === 'AGU'

// Now with an initial value
input.reduce((acc, value) => acc + TRANSCRIBED_RNA[value], ''); // gives 'UGU'
// Steps ->
//   0: acc === ''
//   1: acc === acc + TRANSCRIBED_RNA[input[0]] === 'U'
//   2: acc === acc + TRANSCRIBED_RNA[input[1]] === 'UG'
//   3: acc === acc + TRANSCRIBED_RNA[input[2]] === 'UGU'
```
