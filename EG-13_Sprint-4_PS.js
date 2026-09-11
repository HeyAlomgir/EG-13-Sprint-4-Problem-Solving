
// 01. Isomorphic Strings


const isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (mapST.has(charS) && mapST.get(charS) !== charT) ||
      (mapTS.has(charT) && mapTS.get(charT) !== charS)
    ) {
      return false;
    }

    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }

  return true;
};



// console.log("01. Isomorphic Strings:", isIsomorphic("egg", "add"));







// 02. Word Pattern


const wordPattern = function (pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const patternToWord = new Map();
  const wordToPattern = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (
      (patternToWord.has(char) && patternToWord.get(char) !== word) ||
      (wordToPattern.has(word) && wordToPattern.get(word) !== char)
    ) {
      return false;
    }

    patternToWord.set(char, word);
    wordToPattern.set(word, char);
  }

  return true;
};


// console.log(
//   "02. Word Pattern:",
//   wordPattern("abba", "dog cat cat dog")
// );




// 03. Find the Difference


const findTheDifference = function (s, t) {
  let result = 0;

  for (const char of s) {
    result ^= char.charCodeAt(0);
  }

  for (const char of t) {
    result ^= char.charCodeAt(0);
  }

  return String.fromCharCode(result);
};



// console.log(
//   "03. Find the Difference:",
//   findTheDifference("abcd", "abcde")
// );

