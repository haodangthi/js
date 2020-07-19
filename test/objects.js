//=----------------------------------TASK 1
const arr=[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}]
const arr3=[{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}]
const arr2=[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}]
const arr4=[{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}]
const arr5=[{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}]
const arr6=[{"single": "yes"}]
const arr7=[{"single": ""}, {"single": "double"}]
const arr8=[{"single": "double"}, {"single": undefined}]
const arr9=[{"single": "double"}, {"single": NaN}]

//=----------------------------------TASK 2

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Sasha":100,
    "Masha":200
};

const salaries2 = {
    "John": 10,
    "Pete": 200,
    "Mary": 250,
    "Sasha":100,
    "Masha":200
};
const user = {
    name: 'John',
    age: 30
  };
  const user2 = {
    name: 'John',
    age: 30,
    surname:'Doe'
  };
  //=----------------------------------TASK 3

const obj1 ={ create: 1, a: 0, nice: 1, cool: 1, juicy: 1, function: 1 }
const obj2={ hello: 1, world: 1, "let's": 0, start: 0, coding: 1, coco: 2 }
const obj3 ={
  an: 1,
  amazing: 2,
  apple: 1,
  a: 1,
  day: 1,
  keeps: 0,
  archeologist: 1,
  'away...': 2
}


module.exports={arr,arr2,arr3,arr4,arr5,arr6,arr7,arr8,salaries,salaries2,user,user2,obj1,obj2,obj3}