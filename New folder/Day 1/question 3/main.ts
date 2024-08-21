//q3: Name Cases : Store a Person name in a variable, and then print that Person`s name 
//in lowercase, uppercase & title case.

let PersonName: string="Mehak"
console.log("lowercase",PersonName.toLowerCase())  //lowercase
console.log("upppercase",PersonName.toUpperCase()) //uppercase
console.log("titlecase",PersonName.replace(/\bw/g,c=> c.toUpperCase())) //titlecase

