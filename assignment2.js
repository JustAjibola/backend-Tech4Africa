const str = "Nigeria is awesome";
//Extract "Nigeria" Using substring ()
let country = str.substring(0, 7);

//Extract "awesome" using slice()
let awesomeWord = str.slice(11);

//Get "is" using slice()
let isWord = str.slice(8, 10);

console.log(country);
console.log(awesomeWord);
console.log(isWord);


const names = "John,Jane,Doe";
//Split into an array using comma (,)
let namesArray = names.split(",");

//Join with space instead
let joinedNames = namesArray.join(" ");

console.log(namesArray);
console.log(joinedNames);

const path = "/user/home/docs";
// Split by "/"
let pathArray = path.split("/");

//Get "home" using index
let home = pathArray[2];

console.log(pathArray);
console.log(home);


const email = "user@example.com";
//Get username using split()
let userName = email.split("@")[0];

//Check if it ends with .com
let isDotCom = email.endsWith(".com");

//Replace "@" with "AT"
let newEmail = email.replace("@", "AT");

console.log(userName);
console.log(isDotCom);
console.log(newEmail);