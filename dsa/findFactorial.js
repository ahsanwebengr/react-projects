function findFactorial(num) {
  if (typeof num !== 'number' || num < 0) {
    return 'Please enter a valid non-negative number';
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(findFactorial(5));
console.log(findFactorial(-1));
console.log(findFactorial('5'));
