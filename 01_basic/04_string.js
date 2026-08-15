const name = "Zaid"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('ZaidZK')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('5'));
// console.log(gameName.indexOf('K'));
// console.log(gameName.charAt('Z'));
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-2, 4)
console.log(anotherString);

const url = "https://zaid.com/zaid%20khan"
console.log(url.replace("%20", "-"));
