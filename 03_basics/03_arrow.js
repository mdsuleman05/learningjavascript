const user={
    userName:"suleman",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName},welcome`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.userName=`shamoon`;
// user.welcomeMessage()

// function chai(){
//     let user="suleman"
//     console.log(this.user);
// }
// chai()



// const chai= function(){
//     let user="suleman"
//        console.log(this.user);
// }
// chai()

// const chai =()=>{
//     let user="suleman"
//    console.log(this.user);
// }
// chai()

//arrow function
//explicit return
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))



//const addTwo=(num1,num2)=> num1+num2 //implicit return same as above
//console.log(addTwo(3,4))

