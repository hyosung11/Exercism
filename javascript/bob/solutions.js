// 1.

const RESPONSES = {
  WHATEVER: 'Whatever.',
  WHOA: 'Whoa, chill out!',
  CALM_DOWN: 'Calm down, I know what I\'m doing!',
  SURE: 'Sure.',
  FINE: 'Fine. Be that way!',
}

const isAllCaps = str => str.split('').every(char => char === char.toUpperCase());

const hasAlpha = str => !!str.trim().match(/[a-zA-Z]+/);

const isEmpty = str => str.trim().length === 0;

const isAQuestion = str => str.trim().charAt(str.trim().length - 1) === '?';

export const hey = (str = '') => {
  if (isAllCaps(str)  && hasAlpha(str) && isAQuestion(str)) {
    return RESPONSES.CALM_DOWN;
  } else if (hasAlpha(str) && isAllCaps(str)) {
    return RESPONSES.WHOA;
  } else if (isAQuestion(str)) {
    return RESPONSES.SURE;
  } else if (isEmpty(str)) {
    return RESPONSES.FINE;
  }
  return RESPONSES.WHATEVER;
};


// 2.

export const hey = (message) => {
    const isYelling = (message) => message === message.toUpperCase() && /[a-z]/gi.test(message);
    const isQuestion = (message) => message.trim()[message.trim().length - 1] === '?';
    const isSilent = (message) => !/[^\s]/g.test(message);

    if (isQuestion(message) && isYelling(message)) {
        return 'Calm down, I know what I\'m doing!';
    }

    if (isQuestion(message)) {
        return 'Sure.';
    }

    if (isYelling(message)) {
        return 'Whoa, chill out!';
    }

    if (isSilent(message)) {
        return 'Fine. Be that way!';
    }

    return 'Whatever.';
};

// 3.

export const hey = (message) => {
  // check empty
  message = message.trim()
  if (!message.length) return 'Fine. Be that way!';

  // check numbers, special chars
  message = message.match(/[a-z?]/gi)
  let response = "Whatever.";
  if (!message) return response

  const lastChar = message[message.length-1]

  // check shout
  if (message.length > 1 && message.every(checkUpper)) {
    response = (lastChar === '?') ? 'Calm down, I know what I\'m doing!' : "Whoa, chill out!";
  }
  // check question
  else if (lastChar === '?') {
    response = 'Sure.'
  }

  return response
};

// helper methods
function checkUpper(str) {
  return str === str.toUpperCase()
}


// 4.

export const hey = message => {
  if (
    message.match(/[?]$/g) &&
    message.match(/[A-Z]/g) &&
    message.toUpperCase() === message
  ) {
    return "Calm down, I know what I'm doing!";
  } else if (message.replace(/\s/g, "") === "") {
    return "Fine. Be that way!";
  } else if (message.replace(/\s/g, "").match(/[?]$/g)) {
    return "Sure.";
  } else if (message.toUpperCase() === message && message.match(/[A-Z]/g)) {
    return "Whoa, chill out!";
  }
  return "Whatever.";
};


// 5.

export const hey = (message) => {
  if (isAskedSomething(message) && isYelledAt (message)) {
    return 'Calm down, I know what I\'m doing!'
  }
  if (isYelledAt (message)) {
    return 'Whoa, chill out!'
  }
  if (isAskedSomething(message)) {
    return 'Sure.'
  }
  if (hitWithSilence(message)) {
    return 'Fine. Be that way!'
  }
  return 'Whatever.'
};

const isAskedSomething = (message) => {
  return message.match(/\?[\s]*$/g)
}

const isYelledAt = (message) => {
  return message.match(/^(?=.*[A-Z])[^a-z]*$/gu)
}

const hitWithSilence = (message) => {
  return message.match(/^[\s]*$/g)
}

// 6.

export const hey = (message) => {
  message = message.trim()

  const forcefullQuestion = /[A-Z]+\?$/
  const question = /\?$/
  const yell = /[A-Z]!?/
  const isUpperCase = message === message.toUpperCase()

  switch (true) {
    case (message === ''):
      return 'Fine. Be that way!'
    case (forcefullQuestion.test(message) && isUpperCase):
      return 'Calm down, I know what I\'m doing!'
    case (yell.test(message) && isUpperCase):
      return 'Whoa, chill out!'
    case (question.test(message)):
      return 'Sure.'
    default:
      return 'Whatever.'
  }
};
