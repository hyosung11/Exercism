// 1.
const EARTH_ORBITAL_PERIOD_SECONDS = 31557600;

const ORBITALS_PERIOD_RATES = {
                  'earth': 1,
                  'mercury': 0.2408467,
                  'venus': 0.61519726,
                  'mars': 1.8808158,
                  'jupiter': 11.862615,
                  'saturn': 29.447498,
                  'uranus': 84.016846,
                  'neptune': 164.79132};

export const age = (planet, seconds) => {
    const periodInSeconds = ORBITALS_PERIOD_RATES[planet] * EARTH_ORBITAL_PERIOD_SECONDS;
    return parseFloat((seconds / periodInSeconds).toFixed(2));
}


// 2.
export const MULTIPLIER = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132,
}

export const age = (planet, seconds) => {
  return Math.round(seconds / 31557600 / MULTIPLIER[planet] * 100) / 100
};


// 3.
const orbitPeriodsInEarthYears = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
}

export const age = (planet, seconds) => {
    return +(seconds / (orbitPeriodsInEarthYears[planet.toLowerCase()] * 31557600)).toFixed(2)
};


// 4.catch
const secondsInEarthYear = 31557600;

const orbitalPeriod = {
    'mercury' : 0.2408467,
    'venus' :  0.61519726,
    'earth' : 1.00,
    'mars' : 1.8808158,
    'jupiter' : 11.862615,
    'saturn' : 29.447498,
    'uranus' : 84.016846,
    'neptune' : 164.79132
};

export const age = (planet, seconds) => {
    return +(seconds / (secondsInEarthYear * orbitalPeriod[planet])).toFixed(2);
};
