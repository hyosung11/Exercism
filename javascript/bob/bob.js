/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Bob is a lackadaisical teenager. In conversation, his responses are very limited.

// 1. Bob answers 'Sure.' if you ask him a question.
//
// 2. He answers 'Whoa, chill out!' if you yell at him.
//
// 3. He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
//
// 4. He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// 5. He answers 'Whatever.' to anything else.

export const hey = (message) => {
  message = message.trim();

  const question = /\?$/;
  const yell = /[A-Z]!?/;
  const yellQuestion = /[A-Z]+\?$/;
  const isUpperCase = message === message.toUpperCase();

  switch (true) {
    case (message === ''):
      return 'Fine. Be that way!';
    case (yellQuestion.test(message) && isUpperCase):
      return 'Calm down, I know what I\'m doing!';
    case (yell.test(message) && isUpperCase):
      return 'Whoa, chill out!';
    case (question.test(message)):
      return 'Sure.';
    default:
      return 'Whatever.';
  }
};
