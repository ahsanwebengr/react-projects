function findVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const result = [];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      result.push(char);
    }
  }

  return result;
}

console.log(findVowels('hello world'));
console.log(findVowels('JavaScript'));
