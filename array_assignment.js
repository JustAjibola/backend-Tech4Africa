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