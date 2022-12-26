console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
  return function (plusNumber) {
    return plusNumber + number;
  };
}

let plus15 = plus(15);

//Using a function within a function. Allows you to see a variable with a parameter
//already inserted.

console.log(plus15(10));




// Exercise 2 Section

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];



console.log("EXERCISE 2:\n==========\n");

users.forEach(function (param) {
  console.log(param.name);
});

//Loops through the array and logs each name.


// Exercise 3 Section


console.log("EXERCISE 3:\n==========\n");

let userScore = users.map(function (user) {
  return { name: user.name, score: user.score };
});

console.log(userScore)

//Places this new object initialization onto every object in the array
//in order to create new objects with the desired info.



// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");


let active = users.filter(active => active.isActive !== false)
//Goes through and checks which values meet the condition.

console.log(active)




// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let sorted = users.sort((a,b) => b.score - a.score);
//Passes through and subtracts the scores from each other. + or - determines
//order.

console.log(sorted)




// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

let avgScore = users.reduce((sum, user) => sum + user.score, 0) / users.length;
//Passes through array, adding, starting from 0.
//Devide by length because that's the # of users.

console.log(avgScore)