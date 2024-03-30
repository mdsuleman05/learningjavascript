function sayMyname(){
    console.log("S")
    console.log("U")
    console.log("L")
    console.log("E")
    console.log("M")
    console.log("A")
    console.log("N")
}
//sayMyname()
function addTwoNumbers(num1,num2){
  let num=num1+num2;

   return num;
}
let result=addTwoNumbers(3,5)
// console.log(result)
 
function loginUserMessage(userName){
    if(userName===undefined){
        console.log("pleaser enter a name")
        
    }
    return `${userName} is logged in`
}
const message=loginUserMessage()
console.log(message)