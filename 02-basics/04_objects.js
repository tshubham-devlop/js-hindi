//const tinderUser= new Object();  // singleton object works exactly as any other object
// console.log(tinderUser);

// tinderUser.id=123;
// tinderUser.email="some@gmail.com";
// tinderUser.isLoggedIn=false;

// console.log(tinderUser);


//+++++++++++++++++objects can be nested inside a objects++++++++++++++++
const tinderUser={
     id: 123, 
     email: 'some@gmail.com', 
     isLoggedIn: false,
     fullName:{
        firstName:"shubham",
        lastName:"tiwari"
     }
    }
// console.log(tinderUser.fullName.firstName);

//++++++++++ to objects can be merged to single object
const obj1={1:'a',2:'b'}
const obj2={4:'a',3:'b'}

const obj3=Object.assign(obj1,obj2); // here both objs are combined to a single object and placed in obj1

// console.log(obj3);

//++++++++megre objects using spread++++++++++

const obj4={...obj1,...obj2};
console.log(obj4);

//+++++++ some important functions

console.log(Object.keys(tinderUser));//return all keys in obj in array form
console.log(Object.values(tinderUser))//return all values in obj in array form


