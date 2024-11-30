function findMaxNum(arr) {
  let max = -Infinity;
  arr.forEach(num => {
    if (num > max) max = num;
  });

  return max;
}

console.log(findMaxNum([1, 2, 3, 4]));
function findMinNum(arr) {
  let min = Infinity;
  arr.forEach(num => {
    if (num < min) min = num;
  });

  return min;
}

console.log(findMinNum([1, 2, 3, 4]));
