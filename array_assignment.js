//Question 1 forEach
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
    console.log("Hello" + name + "!");
});

//arrow function
names.forEach(name => {
    console.log("Hello " + name + "!");
}); 