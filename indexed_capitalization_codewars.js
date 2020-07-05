/*
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/

const capitalize = (s,arr) => {
  let dict = {};
  let string = '';
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < s.length) {
      dict[arr[i]] = true;
    }
  }
  for(let h = 0; h < s.length; h++) {
    if(dict[h] === true) {
      string += s[h].toUpperCase();
    } else {
      string += s[h];
    }
  }

  return string;
};