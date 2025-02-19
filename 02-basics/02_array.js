const hero1=['abs','shubh','ijn'];
const hero2=['jnji',32,4];
const hero3=hero1.concat(hero2);
// console.log(hero3);
// console.log(hero1);
// console.log(hero2);
// hero1[1]='sujal';
// console.log(hero1);
hero1.push('sujal');
hero1.shift() 
// console.log(hero1);

//spread operator
const new_all_hero= [...hero1,...hero2];
// console.log(new_all_hero);

// flat an array
// const anotherArray=[1,2,3,[4,5,6],7,8,[6,7,[5,6]]]
// const realArray=anotherArray.flat(Infinity);
// console.log(realArray);

let score1=1;
let score2=11;
let score3=111;
console.log(Array.of(score1,score2,score3));

