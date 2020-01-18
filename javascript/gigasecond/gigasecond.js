//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Given a moment, determine the moment that would be after a gigasecond has passed. A gigasecond is 10^9 (1,000,000,000) seconds.

// export const gigasecond = (date) => {
//   // getTime() returns the number of milliseconds since 1970-01-01
//   // 1 second = 1000 milliseconds
//   const gig =  1000000000;
//   return new Date(date.getTime() + gig * 1000);
// };


export const gigasecond = (date) => {
  const GIG = 1e12;
  return new Date(date.getTime() + GIG)
}

/*
It depends on the approach. But TDD is a very common approach in enterprises. This stands for Test driven development and it looks as what you do on this site:

we prepare empty functions that corresponds to our functional needs
then write tests for those functions
launch our test runner in watch mode (so that every time we save our code, the results are updated)
write the code of our functions
when it is all green, we try to clean a bit our code and then test in our real app if this looks correct (integration tests are important too!!!)
And here, this is a great code!

Just think about using const to declare your constant (and by the way, in JS, we tend to SNAKE_UPPERCASE our constants), where you can even integrate the factor 1000.

After that, you can also use the scientific notation, for example there 1e9 (or 1e12 with the factor integrated).

And then, if you want to inline your function, you can also put the constant out your function.

All that are minor points, so if you want to try, you can, but I approve your code!
*/
