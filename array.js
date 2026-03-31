let item1 = "milk";
let item2 = "milo";
let item3 = "bread";

let items = ["milk", "milo", "bread"];

console.log(items[0]);
console.log(items.length);

//forEach
let fruits = ["apple", "banana", "orange", "grape"];
let names = ["Ajibola", "Tolu", "Sola", "Kemi", "Bola"];

names.forEach(function(name) {
    console.log("TECH_CRUSH_2026_COHORT_6 " + name + "!"); //named function is used to greet each name in the names array with a welcome message.
});
fruits.forEach(function(fruit) {
    console.log("I love " + fruit);
});
fruits.forEach((fruit) => {
    console.log(fruit + " is a delicious fruit!");
});

//map method is used to create a new array by applying a function to each element of an existing array. For example:
let scores = [90, 80, 70, 60, 50];
let newScores = scores.map( score => {
    console.log("as a good teacher, I decided to add 5 marks to each score");
    return score + 5;
});//arrow function is used to add 5 to each score in the scores array and create a new array called newScores.
console.log(newScores); // Output: [95, 85, 75, 65, 55]

let students = ["Ajibola", "Tolu", "Sola", "Kemi", "Bola"];

let nameTag = students.map(function(tag) {
    return "TECH_CRUSH_2026_COHORT_6 " + tag;
});
console.log(nameTag); // Output: ["TECH_CRUSH_2026_COHORT_6 Ajibola", "TECH_CRUSH_2026_COHORT_6 Tolu", "TECH_CRUSH_2026_COHORT_6 Sola", "TECH_CRUSH_2026_COHORT_6 Kemi", "TECH_CRUSH_2026_COHORT_6 Bola"] 

//filter method
let jambScores = [200, 250, 300, 150, 180, 280, 290, 100];
let passed = jambScores.filter((score) => {
    return score >= 200;
});
console.log(passed); // Output: [200, 250, 300, 280, 290]

let ages = [15, 20, 25, 30, 35, 40, 18];

let adults = ages.filter(function(age) {
    return age >= 18;
});
console.log(adults); // Output: [20, 25, 30, 35, 40, 18]