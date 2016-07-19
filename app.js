//Declaring Variables
var number = prompt("Please supply a whole number");
var endNumber = parseInt(number);
var fbtotal = 1

//defining function
function fizzBuzz(end) {
  while (fbtotal <= end) {
      if (fbtotal%5 === 0 && fbtotal%3 === 0) {
        $("p").append(" fizzbuzz");
}
      else if (fbtotal%5 === 0) {
        $("p").append(" buzz");
}
      else if (fbtotal%3 === 0) {
        $("p").append(" fizz");
}
      else { 
        $("p").append(" " + fbtotal);
}
    fbtotal++;
}}

//Checking usability and running function
if (endNumber >= 1) {
  fizzBuzz(endNumber);
}
else {
 location.reload(true);
}