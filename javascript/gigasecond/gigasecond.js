//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Given a moment, determine the moment that would be after a gigasecond has passed. A gigasecond is 10^9 (1,000,000,000) seconds.

export const gigasecond = (date) => {
  // getTime() returns the number of milliseconds since 1970-01-01
  // 1 second = 1000 milliseconds
  let gig =  1000000000;
  return new Date(date.getTime() + gig * 1000);
};
