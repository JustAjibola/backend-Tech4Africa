//if-else statement
let userAge = 16;
if (userAge >= 18) {
    console.log("Welcome to club 9ja.");
} else {
    console.log("sorry, you are not eligible.");
}

let gender = "non-binary";
if (gender === "female") {
    console.log("Welcome to the ladies' section.");
} else if (gender === "male") {
    console.log("Welcome to the men's section.");
} else if (gender === "others") {
    console.log("Welcome to the others' section.");
} else {
    console.log("we don't know where you belong.");
};

let feeding = "rice";
if (feeding === "eba") {
    console.log("Eat your food");
} else if (feeding === "rice") {
    console.log("Enjoy your Meal");
} else {
    console.log("You can Starve");
}


let username = "Ajibola";
let password = "password123";
if (username === "Ajibola" && password === "password123") {
    console.log("Login successful!");
}else if (username === "Ajibola" || password === "password123"){
    console.log("Incorrect username or password.");
} else {
    console.log("Login failed");
}

//let voteAge = 18; 
//if (voteAge >= 18) {
   // console.log("You are eligible to vote.");
//} else{
    //console.log("You are not eligible to vote.");
//}


