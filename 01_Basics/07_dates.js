let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());


// console.log(myDate.getTimezoneOffset());
// let createdDate=new Date(2003,1,23);
// console.log(createdDate.toString());

let myTimeStamp=Date.now();
console.log(myTimeStamp); //in mili sec

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

//+++++imp

newDate.toLocaleString('default',{
    weekday : 'long',

})







 