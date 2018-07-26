//Loop that draws Triangle
var triangle = ''; //Defines String
for (var i = 0; i <= 6; i++) { //Shows parameters of base line, going up to 6
  triangle += '#'; //adds a # per 'i'
  console.log(triangle); //draws triangle
}

//Function that defines number as Even or Odd
function isEven(number) { 
    if (number % 2 === 0) { // Can number'  be divided by 2 and equal 0 exactly?
   return "it is even."; //If so return even
}
   else{ 
       return "It is odd."; //If not return odd
   } } //Now function 'isEven' can be used to determine whether a number is even

 isEven(555); //Test that succesfully returns "It is odd."