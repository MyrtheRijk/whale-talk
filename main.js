let input = 'turpentine and turtles';
const vowels = ['a', 'o', 'e', 'i', 'u'];
let resultArray = []

for (let i = 0; i < input.length; i++) {
  // Each letter will be checked against all the vowels elements during each iteration.
  for (let j = 0; j < vowels.length; j++) {
    // Compares the input letter to every letter in the vowels array.
    if (input[i] === vowels[j]) {
      // Whales double their e and u sounds. 
      if (input.length === 'e') {
        resultArray.push('ee');
      }
      else {
        resultArray.push(input[i])
      }
       if (input.length === 'u') {
        resultArray.push('uu');
      }
      else {
        resultArray.push(input[i])
      }
    }
  }
}

const resultString = resultArray.join('').toUpperCase()
console.log(resultString);
