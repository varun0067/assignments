/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowerStr = str.toLowerCase().replace(/[^\w]/g,'');
  let reverse = lowerStr.split("").reverse().join("");

  if(lowerStr === reverse)
    return true;
  else
    return false;
}

module.exports = isPalindrome;
