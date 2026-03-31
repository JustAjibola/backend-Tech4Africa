//length of a string
let stringText = "This is a class on string methods"
console.log(stringText.length);

let arr = ["Ajibola", "Tolu", "Sola", "Kemi", "Bola"];
console.log(arr.length);

//uppercase and lowercase is a string method that converts all characters in a string to uppercase or lowercase respectively. For example:
let capitalLetters = stringText.toUpperCase();
let smallLetters = stringText.toLowerCase();
console.log(capitalLetters);
console.log(smallLetters);

//trim() method
let str = "   Hello, World!   ";
let trimmedStr = str.trim();
let frontTrimmedStr = str.trimStart();
let backTrimmedStr = str.trimEnd();
console.log(trimmedStr);
console.log(frontTrimmedStr);
console.log(backTrimmedStr);


let signupName = " Ajibola ";
let signinName = "Ajibola";

if (signupName.trim() === signinName. trim()){
    console.log("Welcome back, AjibolA!");
}else {
    console.log("Please check your username and try again.");
}

//naming convention for variables and functions in JavaScript  
// camelCase, where the first word is lowercase and subsequent words are capitalized. For example:
let firstName = "Ajibola";  
//snake_case, where words are separated by underscores. For example:
let first_name = "Ajibola";

//indexOf and lastIndexOf are string methods that return the index of the first and last occurrence of a specified value in a string, respectively. For example:
let user_email = "akin@sola@gmail.com";
let email_index = user_email.indexOf("@");
console.log(email_index); // Output: 4

//includes() method is a string method that checks if a specified value is present in a string and returns true or false accordingly. For example:
let email_contains_at = user_email.includes("@");
console.log(email_contains_at); // Output: true


//startsWith and endsWith
let userName = "techcrush Ajibola 6";
let starts = userName.startsWith("techcrush");
let ends = userName.endsWith("6");
console.log(starts); // Output: true
console.log(ends); // Output: true

//slice and substring is a string method that extracts a portion of a string and returns it as a new string. The main difference between the two is that slice can accept negative indices, while substring does not. For example:
let testString = "my name is Ajibola";
let slicedString = testString.slice(10);
let substringString = testString.substring(11);
console.log(slicedString); // Output: "my name is"
console.log(substringString); // Output: "my name "

//replace and replaceAll are string methods that replace specified values in a string with new values. The main difference between the two is that replace only replaces the first occurrence of the specified value, while replaceAll replaces all occurrences. For example:
const text = "Ajibola is a great developer. Ajibola loves coding. Ajibola is always learning new things.";
const replacedText = text.replace("Ajibola", "She");
const replacedAllText = text.replaceAll("Ajibola", "Olawunmi");
console.log(replacedText);
console.log(replacedAllText);

//split() method is a string method that splits a string into an array of substrings based on a specified separator. For example:
const sentence = "LANGUAGE: JavaScript, Python, Java, C++";
let splitSentence = sentence.split("");// returns an array of substrings
console.log(splitSentence); 
let example = "she is a girl , she is a teacher , she is a developer";
console.log(example.split(","));
console.log(example.split("she"));

