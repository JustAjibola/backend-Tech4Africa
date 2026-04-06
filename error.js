//syntax error
//let add = (5 + 3 
    //console.log (add)


    //reference error
    let myame = "Tolu";
    console.log(myName);

//type error
let num = 5;
console.log(num.toUpperCase());

try {

} catch (error) {
    console.log("An error occurred: " + error.message);
}

try {
    //code that might fail goes here
    let result = 10 / 0; 
    console.log(result);
    undefinedFunction(); // This will throw a ReferenceError
    console.log("This will not be executed due to the error above.");
} catch (error) {
    console.log("An error occurred: " + undefinedFunction is not defined);
}

console.log("This will still be executed even if there was an error in the try block.");    


try{
let age = 25;
console.log(age.lenth());
}catch(error)
   console.log("An error occurred: " + error.message);


function loadUserData(usderId) {
    console.log("Starting to load user data...");
    try {
        if (!userId.startsWith("BAD")) {
            throw new Error("Invalid user ID format");
        }
        console.log("Data loaded for user: " + userId);
    } catch (error) {
        console.log("Failed: " + error.message);
    } finally {
        console.log("loading complete. Closing connection.");
    }");