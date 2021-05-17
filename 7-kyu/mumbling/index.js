function accum(s) {
	let str = '';

	for (let i = 0; i < s.length; i++) {
		let addStr = '';
		for (let j = 0; j < i + 1; j++) {
			addStr += s[i];
		}
		addStr = addStr.toLowerCase();
		addStr = addStr.charAt(0).toUpperCase() + addStr.slice(1);
		if (i < s.length - 1) {
			addStr += '-';
		}
		str += addStr;
	}
	return str;
}

console.log(
	accum('ZpglnRxqenU'),
	'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
);
console.log(
	accum('NyffsGeyylB'),
	'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
);
console.log(
	accum('MjtkuBovqrU'),
	'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'
);
console.log(
	accum('EvidjUnokmM'),
	'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
);
console.log(
	accum('HbideVbxncC'),
	'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
);
