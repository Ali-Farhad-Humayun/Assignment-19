// Problem 5
// Q: Use call method to make person2 introduce using person1 function.

let person1 = {
  name: "Farhad",
  age: 36
};

let person2 = {
  name: "Angel",
  age: 30
};

function introduce() {
  console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

introduce.call(person2);