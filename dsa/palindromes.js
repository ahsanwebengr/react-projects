function checkPalindromes(str) {
  const normalizedStr = str.replace(/\s+/g, '').toLowerCase();
  const reversedStr = normalizedStr.split('').reverse().join('');

  if (normalizedStr === reversedStr) {
    console.log(`${str} is a palindrome`);
    return true;
  } else {
    console.log(`${str} is not a palindrome`);
    return false;
  }
}

const result1 = checkPalindromes('baba');
const result2 = checkPalindromes('DAD');

console.log(result1, result2);
