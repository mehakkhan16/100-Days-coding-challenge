//q3: Name Cases : Store a Person name in a variable, and then print that Person`s name 
//in lowercase, uppercase & title case.
var PersonName = "Mehak";
console.log("lowercase", PersonName.toLowerCase()); //lowercase
console.log("upppercase", PersonName.toUpperCase()); //uppercase
console.log("titlecase", PersonName.replace(/\bw/g, function (c) { return c.toUpperCase(); })); //titlecase
