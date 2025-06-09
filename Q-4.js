// Problem 4
// Q: Create car object with brand, model, and display method using this.

let car = {
  brand: "Hyundai",
  model: "i10",
  displayDetails() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
};

car.displayDetails();