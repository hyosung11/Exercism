//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EARTH_YEAR_SECONDS = 31557600;

const ORBITAL_PERIOD_RATES = {
    'Mercury' : 0.2408467,
    'Venus' :  0.61519726,
    'Earth' : 1.00,
    'Mars' : 1.8808158,
    'Jupiter' : 11.862615,
    'Saturn' : 29.447498,
    'Uranus' : 84.016846,
    'Neptune' : 164.79132
};

// account for the capital letter of each planet
const capitalize = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

export const age = (planet, seconds) => {
    return +(seconds / (EARTH_YEAR_SECONDS * ORBITAL_PERIOD_RATES[capitalize(planet)])).toFixed(2);
};
