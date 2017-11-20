const firstString = 'qwertyuiop[]';
const secondString = 'asdfghjkl';
const thirdString = 'zxcvbnm';

const firstLength = firstString.length;
const secondLength = secondString.length;
const thirdLength = thirdString.length;
console.log(firstLength, secondLength, thirdLength);
console.log(firstString.indexOf('['));
console.log(firstString.indexOf(']'));
console.log(firstString.charAt(0));
console.log(firstString.charAt(11));
console.log(secondString.charAt(0));
console.log(secondString.charAt(8));
console.log(thirdString.charAt(0));
console.log(thirdString.charAt(6));
document.write(`firstString: ${firstString} <br> secondString: ${secondString} <br> thirdString: ${thirdString} <br>
  firstLength: ${firstLength} <br> secondLength: ${thirdLength} <br> thirdLength: ${thirdLength}`)