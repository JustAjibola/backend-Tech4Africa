let obj = {
    name: "Ajibola",
    age: 25,
    city: "Lagos",
    profession: "Software Developer"
};

let student = {
    name: "Ngozi",
    age: 21,
    department: "Computer Science",
    isErolled: true
};
console.log(student.name);
console.log(student["age"]);

//object destructuring
let employee = {
    name: "Tolu balogun",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
};

let newName = employee.name;
let newRole = employee.role;

const { name, role, salary, city } = employee;
console.log(name);
console.log(role);
console.log(salary);
console.log(city);

let courses = {
    CSC401 : "Data Structures",
    CSC402 : "Algorithms",
    CSC403 : "Operating Systems",
    CSC404 : "Database Systems"
};
//renaming during destructuring
let { CSC401 : CSC400 } = courses;
console.log(CSC400);  

let person = {
    name: "Ajibola",
    opay: true,
}
console.log(person);
let { opay : palmpay } = person;
console.log(palmpay);

//spread operator
let profile = { name : "Tolu", age: 22 };

//copy and add new property
let updatedProfile = { 
    ...profile,
    city: "Abuja"
};
console.log(updatedProfile);

//rest operator
const { nombre, ...rest } = {
    nombre: "Sola",
    age: 30,
    city: "Lagos",
};

const user = {
    name: "Tolu",
    password : "12345",
    isFemale: true,
    city: "Lagos",
    age: 25
};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//for in 
for (let key in user) {
    console.log("these are the keys: " + key);
    console.log("these are the values: " + user[key]);
}

