// Problem 2
// Q: Create a Map to store contact info and get details by name.

let contacts = new Map();
contacts.set("Farhad", { age: 36, email: "farhad@gmail.com", location: "Vadodara" });
contacts.set("Angel", { age: 30, email: "angel@gmail.com", location: "Saudi Arabia" });
function getContact(name) {
  return contacts.get(name);
}

console.log(getContact("Farhad"));
console.log(getContact("Angel"));