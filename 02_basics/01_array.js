const myarr = [0,1,2,3,4]
// console.log(myarr);
// console.log(myarr[0]);

const myarr2 = new Array(1, 2, 3 ,4 ,5)
// console.log(myarr2);

// myarr2.push(6)
// myarr2.pop() //remove last value

// myarr2.unshift(9)
// myarr2.shift()
// console.log(myarr2.indexOf(4));

const newArr = myarr2.join()
// console.log(typeof newArr);
// console.log(myarr2);

//slice , splice

console.log("A", myarr2);

const myn1 = myarr2.slice(1,3)

console.log(myn1);
console.log("B", myarr2);

const myn2 = myarr2.splice(1,3)
console.log(myn2);
console.log("C", myarr2);