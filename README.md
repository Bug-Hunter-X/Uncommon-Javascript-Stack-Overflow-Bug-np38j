# Uncommon Javascript Stack Overflow Bug
This repository demonstrates a common yet subtle stack overflow error in JavaScript that arises from improper handling of recursion.  The `foo` function, while seemingly simple, lacks a robust base case, leading to infinite recursion when certain inputs are provided.

## Bug Description
The `bug.js` file contains a recursive function (`foo`) that calculates a sum. However, the function's recursive calls don't have a proper base case to handle a particular input. When that input is used, the recursion continues without end until a stack overflow occurs. 

## Solution
The `bugSolution.js` file provides a corrected version of the function with a complete base case to prevent stack overflow.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run the file using Node.js (or your preferred JavaScript runtime): `node bug.js`.
4. Observe the stack overflow error message when invoking `foo` with specific inputs. Repeat the process using `bugSolution.js` to see the issue resolved. 

## Learning Points
- This example highlights the importance of considering edge cases and ensuring proper termination conditions in recursive functions.
- Stack overflows can occur with various inputs, and these edge cases might not always be immediately apparent.
- It is crucial to design recursive functions meticulously to prevent stack overflow errors, particularly in scenarios with unbounded recursion depth.