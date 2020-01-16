//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

// take color names from colorsArray as input
export const decodedValue = (colorsArray) => {
  // output a two digit number even if input is more than two colors
  const resistor1 = COLORS.indexOf(colorsArray[0]) * 10;
  const resistor2 = COLORS.indexOf(colorsArray[1]);

  return resistor1 + resistor2
};
