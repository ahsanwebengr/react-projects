function removeDuplicates(arr) {
  const unique = [];

  arr.forEach(item => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });

  return unique;
}

console.log(removeDuplicates([2, 24, 2, 4, 1, 1]));
