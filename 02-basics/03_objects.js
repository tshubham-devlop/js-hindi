//singleton
// created using cconstructor like Object.create

//object literals

const mySym=Symbol("key1");
const JsUser={
    name: "Shubham",
    "full name":"shubham tiwari",
    age:22,
    location:"mumbai",
    email:"shubham@gmail.com",
    isLoggedIn : false,
    [mySym] :"mykey1"

}

// console.log(JsUser.email);
// console.log(JsUser['email']);// if key is written in string 
// console.log(JsUser[mySym]);
// console.log( typeof JsUser[mySym])


//object 
console.log(JsUser);
// we can user Object.freeze('objectname') to stop changing the values inside the object after freezing is don


// we can also use function as member of object
//ex
JsUser.greeting=function(){
    console.log('good morning');
}

console.log(JsUser.greeting());


