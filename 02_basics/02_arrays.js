const marvelHeros=["suleman","ironMan","spiderman"];
const dcHeros=["superman","flash","batman"];

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// to access the elements of dcheros we need to give syntax as marvelHeros[3][1];

//another method is concat
let allHeros= marvelHeros.concat(dcHeros);
console.log(allHeros);

//another method is spread
const allNewHeros=[...marvelHeros,...dcHeros]
console.log(allNewHeros)
//arrays in array all in single array
const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_arrray=anotherArray.flat(Infinity)
console.log(real_another_arrray);

//from method converts string into array if he can converts and for object return empty