// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newCats = [...cats, name];
  return newCats;
}

function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats;
}

function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}

// Test cases
console.log(cats); // Initial value of cats: ["Milo", "Otis", "Garfield"]

destructivelyAppendCat("Ralph");
console.log(cats); // Appended "Billy" to cats: ["Milo", "Otis", "Garfield", "Billy"]

destructivelyPrependCat("Bob");
console.log(cats); // Prepended "Tom" to cats: ["Tom", "Milo", "Otis", "Garfield", "Billy"]

destructivelyRemoveLastCat();
console.log(cats); // Removed last cat: ["Tom", "Milo", "Otis", "Garfield"]

destructivelyRemoveFirstCat();
console.log(cats); // Removed first cat: ["Milo", "Otis", "Garfield"]

const newCats1 = appendCat("Broom");
console.log(cats); // Original cats array remains unchanged
console.log(newCats1); // Appended "Whiskers" to a new array: ["Milo", "Otis", "Garfield", "Whiskers"]

const newCats2 = prependCat("Arnold");
console.log(cats); // Original cats array remains unchanged
console.log(newCats2); // Prepended "Fluffy" to a new array: ["Fluffy", "Milo", "Otis", "Garfield"]

const newCats3 = removeLastCat();
console.log(cats); // Original cats array remains unchanged
console.log(newCats3); // Removed last cat from a new array: ["Milo", "Otis"]

const newCats4 = removeFirstCat();
console.log(cats); // Original cats array remains unchanged
console.log(newCats4); // Removed first cat from a new array: ["Otis", "Garfield"]
