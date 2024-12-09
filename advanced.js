const wordList = require("./word_list.js");

// DO NOT CHANGE ANY CODE ABOVE THIS LINE
const firstThreeWords = wordList.slice(0,3);
console.log(firstThreeWords);

const lastThreeWords = wordList.slice(-3);
console.log(lastThreeWords);

const wordCount = wordList.length;
console.log(wordCount);

const twoLetterWords = wordList.filter((word) => word.length < 2);
console.log(twoLetterWords);

let longestWord = ""
for (let i = 0; i < wordList.length; i++){
    if (wordList[i].length > longestWord.length){
        longestWord = wordList[i];
    }
}
console.log(longestWord)

const containsC = wordList.filter((word) => word.includes('c'));
console.log(containsC);

const reversedWords = wordList.reverse();
console.log(reversedWords);

const regex = /[aeiou]/i
const noVowels = wordList.filter((word) => !regex.test(word));
console.log(noVowels);

const regexRepeatLetters = /(\w)\1/;
const repeatedLetters = wordList.filter((word) => regexRepeatLetters.test(word));
console.log(repeatedLetters);

// Run this file by typing 'node advanced.js' in your terminal.
