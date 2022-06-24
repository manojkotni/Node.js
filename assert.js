console.clear()
const assert = require('assert');

let x = 4;
let y = 5;

try {

	// Checking condition
	assert(x == y);
}
catch {

	// Error output
	console.log(
		`${x} is not equal to ${y}`);
}
