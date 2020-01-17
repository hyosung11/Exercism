//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

// // take color names from colorsArray as input
// export const decodedValue = (colorsArray) => {
//   // output a two digit number even if input is more than two colors
//   const resistor1 = COLORS.indexOf(colorsArray[0]) * 10;
//   const resistor2 = COLORS.indexOf(colorsArray[1]);
//
//   return resistor1 + resistor2
// };


// 3.
export const decodedValue = ([ color1, color2 ] = [ '', '' ]) => {
	// convert string colors to resistor values
	const [ resistorValue1, resistorValue2 ] = [
		COLORS.indexOf(color1.toLowerCase()),
		COLORS.indexOf(color2.toLowerCase())
	]

	// if either used value is invalid throw an error.
	// This will also catch undefined and null values if they happen to get through
	if (resistorValue1 === -1 || resistorValue2 === -1)
		throw new Error(`Invalid color. Valid options are ${COLORS.join(', ')}`)

	// first color represents the tens place, so multiply accordingly
	return resistorValue1 * 10 + resistorValue2
}
