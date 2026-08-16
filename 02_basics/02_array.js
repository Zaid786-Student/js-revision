const marvelHeros = ["Thor", "Ironman", "Spiderma"]
const dc = ["superman", "flash", "batman"]

// marvelHeros.push(dc)

// console.log(marvelHeros);
// console.log(marvelHeros[3])
// console.log(marvelHeros[3][1])

const combineHeros = marvelHeros.concat(dc)
console.log(combineHeros);
//spread operator

const allHeros = [...marvelHeros, ...dc]
console.log(allHeros);
