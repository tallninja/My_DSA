

function anagrams (str1, str2) {
  charMap1 = buildCharMap(str1);
  charMap2 = buildCharMap(str2);

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false;
  } else {
    for (let char in charMap1) {
      if (charMap1[char] !== charMap2[char]) return false;
    }
    return true;
  }
}


function buildCharMap (str) {
  let charMap = {}
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}


console.log(`Hello and Olleh ----> ${anagrams("Hello", "Olleh")}`);
console.log(`Hello and Ollehs ----> ${anagrams("Hello", "Ollehs")}`);
