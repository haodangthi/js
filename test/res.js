const users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

const res1 = [
  { name: "Ann", age: 19, surname: "Hathaway" },
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
];

const res2 = [
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
  { name: "John", age: 20, surname: "Johnson" },
];


module.exports = { users, res1, res2 };