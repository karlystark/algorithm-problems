/** Tests if a word can be built with the given letters
 * Accepts two strings
 * Returns boolean
 * Constraints: Time complexity - O(w+k) */

function frequencyCounter(word) {
  let freqCounter = {};

  for (let char of word) {
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }
  return freqCounter;
}

function canConstructWord(word, letters) {

  if (word.length > letters.length) {
    return false;
  }

  let wordCounter = frequencyCounter(word);
  let lettersCounter = frequencyCounter(letters);

  for (let key in wordCounter) {
    if (!(key in lettersCounter)) {
      return false;
    }
    if (wordCounter[key] > lettersCounter[key]) {
      return false;
    }
  }
  return true;
}



