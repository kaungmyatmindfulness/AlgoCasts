// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 1) {
	if (row > n) return;
	const totalChars = 2 * n - 1;
	const numOfSlashes = 2 * row - 1;
	const numOfSpaces = totalChars - numOfSlashes;
	const sideSpaces = numOfSpaces / 2;
	let toPrint = "";
	[...Array(totalChars)].forEach((e, i) => {
		if (i < sideSpaces) toPrint += " ";
		else if (i < sideSpaces + numOfSlashes) toPrint += "#";
		else toPrint += " ";
	});
	console.log(toPrint);
	pyramid(n, row + 1);
}

pyramid(4);

module.exports = pyramid;
