function findTheFrequency(str) {
  const frequency = {};
  str.split('').forEach(char => {
    if (char !== ' ') {
      char = char.toLowerCase();
      frequency[char] = (frequency[char] || 0) + 1;
    }
  });
  return frequency;
}

console.log(findTheFrequency('Muhammad Ahsan'));
