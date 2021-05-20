function findOdd(A) {
	const map = new Map();

	for (let i = 0; i < A.length; i++) {
		if (!map.has(A[i])) map.set(A[i], 1);
		else {
			map.set(A[i], map.get(A[i]) + 1);
		}
	}

	for (let [key, value] of map) {
		if (value % 2 !== 0) return key;
	}

	return 0;
}

console.log(
	findOdd([
		20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5
	]),
	5
);
console.log(
	findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]),
	-1
);
console.log(
	findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]),
	5
);
console.log(
	findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]),
	10
);
console.log(
	findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]),
	1
);
