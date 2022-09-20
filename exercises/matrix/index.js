// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/**
 *
 * 0	1	2	3
 * 4	5	6	7
 * 8	9	10	11
 * 12	13	14	15
 *
 * 4 3 3 2 2 1 1 1
 */

/**
 *
 * 0	1	2	3	4
 * 5	6	7	8	9
 * 10	11	12	13	14
 * 15	16	17	18	19
 * 20	21	22	23	24
 *
 *
 * 5 4 4 3 3 2 2 1 1 1
 */

const insertRight = (index, value, n) => {};

const insertBottom = () => {};

const insertLeft = () => {};

const insertTop = () => {};

function matrix(n) {
	const numOfElements = n * n;

	[...Array(n)].forEach((e, i) => {});
}

module.exports = matrix;
