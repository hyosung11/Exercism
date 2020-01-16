// Other Examples

// 1.
const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const decodedValue = (arr) => {

    const resistorOne = COLORS.indexOf(arr[0])*10;
    const resistorTwo =  COLORS.indexOf(arr[1]);

    return resistorOne + resistorTwo
}

// 2.
export const decodedValue = (colorsArray) => {

    var colorMap = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

    var firstVal = colorsArray[0];
    var secondVal = colorsArray[1];

    var firstColor = colorMap.indexOf(firstVal).toString();
    var secondColor = colorMap.indexOf(secondVal).toString();

    var result = parseInt(firstColor + secondColor);
    return result;

};

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

export const COLORS = Object.freeze([
	'black',
	'brown',
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'violet',
	'grey',
	'white'
])

// 4.
const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const decodedValue = colors => parseInt(colors
  .slice(0, 2)
  .map(x => COLORS.indexOf(x).toString())
  .join(""));


// 5.
const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const decodedValue = (values) => {
  // why you shouldn't use map
  // because it'll iterate over all the array even if you return index > 1
  let total = "";
  for (let i = 0; i <= 1; i++) {
    const index = COLORS.findIndex(col => col === values[i]);
    total += String(index);
  }
  return Number(total);
};
