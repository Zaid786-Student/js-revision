// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null == 0);
// console.log(null >= 0);
// console.log(null > 0);

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined > 0);

// console.log("0" === 0);
// console.log("0" == 0);

//**********************************DATATYPE SUMMARY*****************************************/
//PREMITIVE DATA TYPES
// 7 CATEGORIES
/* String, Number, Boolean, null, undefined, Symbol, BigInt 

REFERENCE TYPE/ NON PRIMITIVE

Array, Objects, Functions
*/

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(typeof (id) === typeof (anotherId));
console.log(id === anotherId);