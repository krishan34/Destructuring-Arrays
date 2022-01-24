"use strict";

// create object.

const restuarent = {
  name: "Italian Classico",
  location: "Via Angelo Tavani 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 10,
      close: 22,
    },
    fri: {
      open: 6,
      close: 16,
    },
    sat: {
      open: 0,
      close: 18,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
    console.log(
      `Order Recived ${time} for ${address} ordered in starter ${this.starterMenu[starterIndex]} and main course ${this.mainMenu[mainIndex]}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is the order for pasta with ingredients ${ing1}, ${ing2}, ${ing3}`
    );
  },

  orderPizza: function (mainIng, ...optionIng) {
    console.log(mainIng);
    console.log(optionIng);
  },
};
/*
// Calling object funtion.

restuarent.orderDelivery({
  time: "22:00",
  address: "23 vous lime que",
  starterIndex: 2,
  mainIndex: 2,
});

restuarent.orderPizza("mushroom", "onion", "olive", "spinach", "tomato");

const ingredient = [
  prompt("what is ingredient1 you want for pasta"),
  prompt("what is ingredient2"),
  prompt("what is ingredient3"),
];

restuarent.orderPasta(...ingredient);

// Array Destructuring

const arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a, b, c);


const [first, second] = restuarent.categories;
console.log(first, second);

// want to skip an element in between

let [main, secondary] = restuarent.categories;
console.log(main, secondary);

// Switch Element in array.

[main, secondary] = [secondary, main];
console.log(main, secondary);

// using Function to destructuring

const [starter, main] = restuarent.order(1, 2);
console.log(starter, main);

// Nested Arrays Destructuring.

const nested = [1, 2, [5, 6]];
const [i, j, [u, v]] = nested;
console.log(i, j, u, v);


// Default values

const arr = [1, 2, 3];
const [a = 1, b = 1, c = 1, d = 1] = arr;
console.log(a, b, c, d);


// Destructuring Objects

const { name, categories, openingHours } = restuarent;
console.log(name, categories, openingHours);

// Assign New variable name in objects

const { name: restuarentName, starterMenu: starter } = restuarent;
console.log(restuarentName, starter);

// Assign default value in objects.

const { menu = "", name: restuarentName = "" } = restuarent;
console.log(menu, restuarentName);


// Mutating objects

let a = 11;
let b = 22;
const obj = { a: 3, b: 4, c: 5 };

// Need to proved paraenthesis to work this out becouse curley braces are like block code they need return.

({ a, b } = obj);
console.log(a, b);

// Nested objects

const { sat } = restuarent.openingHours;
console.log(sat);

// destruction of nested objects.

const {
  thu: { open },
} = restuarent.openingHours;
console.log(open);


// rest operators

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(4, 5, 7);
add(3, 4, 5, 6, 1, 2, 7);

// using spread operator

const x = [23, 6, 9];
add(...x);

// spread opreator used for unpacking values.

const arr = [1, 2, 3, 4, 5];
const newArr = [...arr, 6, 7];
console.log(newArr);

// Rest operator used for unpakcing variables

const [a, b, ...others] = newArr;
console.log(a, b, others);

// How to add same variable in all the objects.
// short ciructing

const rest1 = {
  name: "sam",
  numguest: 20,
};

const rest2 = {
  name: "ten",
};

const rest3 = {
  name: "ram",
};

const rest4 = {
  name: "jam",
  numguest: 5,
};

const rest =
  rest1.numguest || rest2.numguest || rest3.numguest || rest4.numguest || 10;

console.log(rest);



// Desturction array with for of loop

const arr = [1, 2, 3, 4];
for (const value of arr) console.log(value);

// get index ofcurrent element.

for (const value1 of arr.entries()) console.log(value1);

// Optional chaining

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // Way to use variable in an object and set default value using or object
  const open = restuarent.openingHours[day]?.open ?? "Closed Today";
  console.log(`On ${day} opned at this hours ${open}`);
}

// Optional chaining with methods

console.log(restuarent.order?.(0, 1) ?? "Method doesn't exist");

console.log(restuarent.or?.(0, 1) ?? "Method doesn't exist");

// optional chaining with arrays

console.log(restuarent?.starterMenu[2] ?? "Element doesnt exist");
*/
// Looping over objects with property Names.

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const properties = Object.keys(restuarent.openingHours);
let opeStr = `we are open on ${properties.length} day: `;
for (const day of properties) {
  console.log(day);
  opeStr += `${day}, `;
}

console.log(opeStr);

// Looping over objects with property Values.

const values = Object.values(restuarent.openingHours);

console.log(values);
