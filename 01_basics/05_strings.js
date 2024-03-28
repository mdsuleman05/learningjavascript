const name="suleman";
const repoCount=50;
console.log(name+ repoCount+"value");
console.log(`hello my name is ${name} and my repocount is ${repoCount}`)

const gameName = new String(`suleman`)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));
let newString=gameName.substring(0,4);//last number is not included
console.log(newString);
const anotherString=gameName.slice(-6,4);
console.log(anotherString)
const url="shamoon_suleman"
console.log(url.replace(`_`,`&`));
console.log(gameName.split(`l`))