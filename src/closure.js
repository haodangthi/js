//-----------------------CLOSURE-------------------------------------------------------
let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) =>(x) => x >= a && x <= b;

const inArray = (arr) =>(x) => arr.indexOf(x) != -1;

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
//-----------------------CLOSURE--2-----------------------------------------------------
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
// по имени (Ann, John, Pete)
//users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
//users.sort((a, b) => a.age > b.age ? 1 : -1);


const byField=(field)=>(a,b)=>a[field] > b[field] ?1:-1
console.log(users)
users.sort(byField('name'));
console.log(users)
users.sort(byField('age'));
console.log(users)

//================================


module.exports = { inArray, inBetween, byField };