//Task 1: Create Variables
let customerName = "Ajibola";
let customerAge = 26;
let bookTitle = "Beauty and the Beast";
let bookPrice = 10000;
let quantity = 4;
let isStudent = false;

//Task 2: Use Arithmetic Operators
let totalPrice = bookPrice * quantity; // Total cost of books

//Task 3: Use Comparison Operators
let isAdult = customerAge >= 18; // Check if the customer is an adult
let buyingManyBooks = quantity > 3; // Check if the customer is buying more than 3 books
let isBookFiveThousand = bookPrice === 5000; // Check if the book price is exactly 5000

//Task 4: Use a Non-Primitive Data Type
const customerOrder = {
    customerName: "Ajibola",
    customerAge: 26,
    bookTitle: "Beauty and the Beast",
    quantity: 4,
    totalPrice: totalPrice,
    isStudent: false
};

//Task 5: Print the Results
console.log("Customer Name:", customerName);
console.log("Customer Age:", customerAge);
console.log("Book Title:", bookTitle);
console.log("Total Price:", totalPrice);
console.log("Is the customer an adult?", isAdult);
console.log("Is the customer buying more than 3 books?", buyingManyBooks);
console.log("Is the book price exactly 5000?", isBookFiveThousand);
console.log(customerOrder);

