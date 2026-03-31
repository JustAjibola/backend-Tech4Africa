let msg = "    Hello, WORLD!  ";
let trimmedMsg = msg.trim();
console.log(trimmedMsg); // Output: "Hello, World!"
let start = msg.startsWith("Hello");
let end = msg.endsWith("WORLD");
console.log(start); // Output: false
console.log(end); // Output: false
let lowerCase = msg.toLowerCase();
let position = msg.indexOf("WORLD");
console.log(lowerCase);
console.log(position); // Output: 10
let replaceAll = msg.replaceAll("L", "1");
console.log(replaceAll); // Output: "    He11o, WOR1D!  "
let sliceString = msg.slice(3, 8);
console.log(sliceString); // Output: "llo, "
