function opposite(number) {
	if (number < 0) return number + Math.abs(number * 2);
	return number - (number * 2);
}

console.log(opposite(1), -1);
console.log(opposite(14), -14);
console.log(opposite(-34), 34);
