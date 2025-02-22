function myFunc(...args) {
  // Modify args directly
  args[0] = 10; // Changes reflected correctly
  console.log(args); // Output: [10, 2, 3]
  console.log(arguments); //This will output same as args
}

myFunc(1, 2, 3); 