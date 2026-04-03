//question 1
const Numbers = [1, 2, 3, 4, 5];

let newNumbers = Numbers.map((number) => {
    return number * 2;
});
console.log(newNumbers); 

const scores = [250, 300, 350, 200, 400, 180, 160];
let newScores = scores.filter((score) => {
    return score >= 300;
});
console.log(newScores); 

//question 3
const sum = [2000, 3000, 400, 100, 600]
let totalSum = sum.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); 
console.log(totalSum);

//question 4
const colors = ["blue", "yellow", "red"];

let newColor = colors.push("green");
console.log(colors);

console.log(newColor);

let removedColor = colors.pop();
console.log(colors);
console.log(removedColor);
