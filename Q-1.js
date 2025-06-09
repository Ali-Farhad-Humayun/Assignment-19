// Problem 1
// Q: Create a Map and perform operations: add, check key, get value, iterate.

let myMap = new Map();
myMap.set("name", "Farhad");
myMap.set("age", 36);

console.log(myMap.has("name"));         // true
console.log(myMap.get("age"));          // 36

for (let [key, value] of myMap) {
  console.log(key, value);  //name Farhad
                            //age 36
}