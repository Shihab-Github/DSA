var longestCommonPrefix = function (strs) {
  var result = "";
  strs.sort();
  let firstWord = strs[0];
  let lastWord = strs[strs.length - 1];

  let counter = 0;
  while (counter < firstWord.length) {
    let char1 = firstWord[counter];
    let char2 = lastWord[counter];

    if (char1 === char2) {
      result = result + char1;
    } else {
      break;
    }
    counter++
  }

  return result;
};

let arr = ["flower","flow","flight"]
longestCommonPrefix(arr)
