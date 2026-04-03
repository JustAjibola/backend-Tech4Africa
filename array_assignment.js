//Section A
//Question 1 forEach()
const numbers = [2, 4, 6, 8, 10];
//named function
numbers.forEach(function(number) {
    console.log(number * 2);
});

//arrow function
numbers.forEach(number => {
    console.log(number * 2);
});

//Question 2 forEach()
const names = ["Esther","John", "Ada", "Mike"];
//named function
names.forEach(function(name) {
    console.log("Hello " + name + "!");
});

//arrow function
names.forEach(name => {
    console.log("Hello " + name + "!");
}); 

//section B
//Question 3 map()
const numberS = [1, 2, 3, 4, 5];
//named function
let squaredNumbers = numberS.map(function(number) {
    return number * number;
});
console.log(squaredNumbers);

//arrow function
squaredNumbers = numberS.map(number => number ** 2);
console.log(squaredNumbers);

//Question 4 map()
const prices = [100, 200, 300];
//named function
let discountedPrices = prices.map(function(price) {
    return price * 10 / 100; // Apply a 10% discount
});
console.log(discountedPrices);

//arrow function
discountedPrices = prices.map(price => price * 10 / 100);
console.log(discountedPrices);

//Question 5 filter()
const Numbers = [5, 12, 8, 20, 3];
//named function
let greaterNumbers = Numbers.filter(function(number) {
    return number > 10;
});
console.log(greaterNumbers);
//arrow function
greaterNumbers = Numbers.filter(number => number > 10);
console.log(greaterNumbers);

//Question 6 filter()
const ages = [15, 22, 17, 30, 18];
//named function
let adults = ages.filter(function(age) {
    return age >=18;
});
console.log(adults);

//arrow function
let oldAdults = ages.filter(age => age >= 18);
console.log(oldAdults);

//Bonus Question
//Question 7 filter() and map()
//filter() 
const numbersArray = [10, 15, 20, 25, 30];
//named function filter ()
let greaterArray = numbersArray.filter(function(number) {
    return number > 20;
});
//arrow function filter()
greaterArray = numbersArray.filter(number => number > 20);
console.log(greaterArray);

//map()
let remainingArray = greaterArray.map(function(number) {
    return number * 2;
});
console.log(remainingArray); //the filtetered array 

let doubledArray = numbersArray.filter(number => number <= 20)
.map(number => number * 2);
console.log(doubledArray); //the remainning array 


