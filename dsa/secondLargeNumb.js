function findSecondLargest(arr) {
  const unique = [];

  arr.forEach(item => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });

  unique.sort((a, b) => b - a);

  return unique[1];
}

console.log(findSecondLargest([1, 4, 3, 5, 34, 54]));
