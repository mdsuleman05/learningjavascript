const jsUser={
    name:"shamoon",
    age:18,
    location:"hyderabad",
    email:"mdshamoonsuleman@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:['monday','saturday']
}
console.log(jsUser.name)
console.log(jsUser['email'])
const object1={
    1:"a",
    2:"b",}
    const obj2={
    3:"4",
    4:"b"
}
// const obj3={object1,obj2}
// const obj3=Object.assign({},object1,obj2)
const obj3={...object1,...obj2}
console.log(obj3);
console.log(jsUser)
console.log(Object.keys(jsUser))
console.log(Object.values(jsUser))
const users=[
    {

    }
]