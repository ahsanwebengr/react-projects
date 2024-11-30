function capitalizeEachWord(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(capitalizeEachWord('hello world'));
console.log(capitalizeEachWord('make this string capitalized'));
