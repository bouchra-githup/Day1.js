//Task 1: Variable Declaration
var age = 31;
var isStudent = true ;
var favoriteColors = [purple, black, white, brown];


//Task 2: Variable Types
var string = 'This is a string with both of single and double quotes : "double" and \'single\' quotes.';
console.log(string);

//  Task 3: Concatenation
var age = 31;
var isStudent = true ;
var name = 'bouchra';
var studentStatus = isStudent ? "I am a student." : "I am not a student.";
var sentence = 'my name is :' + bouchra + ', and I am ' + 31 + ' years old' + studentStatus ;
console.log(sentence);

//Task 5: Logical Operators
var yourFavoriteAnimal = "dog";
var yourFavoriteColor = "white";
var userFavoriteAnimal = prompt("What's your favorite animal?");
var userFavoriteColor = prompt("What's your favorite color?");

if (userFavoriteAnimal.toLowerCase() === yourFavoriteAnimal && userFavoriteColor.toLowerCase() === yourFavoriteColor) {
  console.log("we have the same favorite animal and color!");
} else {
  console.log(" we did not have the same favorite animal and color!.");
}


//Task 6: Comparison Operators
var userInput = parseFloat(prompt("Enter a number:"));

if (userInput > 0) {
    console.log("The number is positive.");
} else if (userInput < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}



// Task 8: Truthy & Falsy Values
var userInput = prompt("Enter a value:");

if (userInput) {
    console.log("The value is truthy.");
} else {
    console.log("The value is falsy.");
}





