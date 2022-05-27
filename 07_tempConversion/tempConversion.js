const ftoc = function(ftemp) {
	ctemp = (ftemp - 32) * (5/9);
	return Math.round(ctemp * 10) / 10
};

const ctof = function(ctemp) {
	ftemp = (ctemp * 9/5) + 32;
	return Math.round(ftemp * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
