# JavaScript `arguments` Object Unexpected Behavior

This repository demonstrates an uncommon JavaScript bug related to the `arguments` object's behavior within strict mode.  In non-strict mode, `arguments` acts like a live array reflecting changes to function parameters. However, in strict mode, it behaves differently.  This can lead to confusion and unexpected behavior when not properly understood.

## Bug Description
The bug showcases how modifying the `arguments` object in strict mode does not modify the function's parameters directly. This often leads to unexpected results, especially when interacting with array-like objects.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js`. You'll observe the behavior where modifications to the `arguments` object don't change the function parameters as expected in strict mode.
3. Run `bugSolution.js` to see how to achieve the desired result using a more robust approach.

## Solution
Instead of directly modifying the `arguments` object, it's recommended to use the rest parameter syntax (`...args`) for improved clarity, maintainability, and predictable behavior. This approach ensures consistency across different JavaScript environments and avoids the potential pitfalls associated with the `arguments` object in strict mode. 