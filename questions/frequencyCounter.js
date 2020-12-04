/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {
   let a = 0, e = 0, i = 0, u = 0, o=0, consonant = 0;
   if (typeof str === 'string') {
      str.toLowerCase().split('').forEach((letter) => {
         (letter.includes('a')) ? a++ : consonant++;
         (letter.includes('e')) ? e++ : consonant++;
         (letter.includes('i')) ? i++ : consonant++;
         (letter.includes('o')) ? o++ : consonant++;
         (letter.includes('u')) ? u++ : consonant++;
      });
   } else {
      throw Error('Invalid Input');
   }
   return {
      a, e, i, o, u
   }
};

module.exports = frequencyCounter;
