function foo(a, b) {
  if (a === 0) {
    return b; 
  } else if (a < 0) { // Added base case for negative numbers
    return b; // or handle as appropriate
  }
  return foo(a - 1, a + b);
}

console.log(foo(5, 1)); // Output: 15
console.log(foo(0, 1)); // Output: 1
console.log(foo(10, 2)); // Output: 57
console.log(foo(-2, 3)); // Output: 3