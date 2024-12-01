function findDuplicate(arr) {
  let frequency = {};
  arr.forEach(item => {
    frequency[item] = (frequency[item] || 0) + 1;
  });

  return frequency;
}

console.log(findDuplicate([2, 2, 2, 4, 4, 1, 6, 4]));
