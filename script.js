function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
  //your code here
	let res="";
	  while (num > 0) {
    if (num >= 1000) {
      res += obj[0][0];
      num -= 1000;
    }
    else if (num >= 900) {
      res += "CM";
      num -= 900;
    }
    else if (num >= 500) {
      res += obj[1][0];
      num -= 500;
    }
    else if (num >= 400) {
      res += "CD";
      num -= 400;
    }
    else if (num >= 100) {
      res += obj[2][0];
      num -= 100;
    }
    else if (num >= 90) {
      res += "XC";
      num -= 90;
    }
    else if (num >= 50) {
      res += obj[3][0];
      num -= 50;
    }
    else if (num >= 40) {
      res += "XL";
      num -= 40;
    }
    else if (num >= 10) {
      res += obj[4][0];
      num -= 10;
    }
    else if (num >= 9) {
      res += "IX";
      num -= 9;
    }
    else if (num >= 5) {
      res += obj[5][0];
      num -= 5;
    }
    else if (num >= 4) {
      res += "IV";
      num -= 4;
    }
    else {
      res += obj[6][0];
      num -= 1;
    }
  }
	return res;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
