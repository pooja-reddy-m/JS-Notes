// Define a prototype object
const personPrototype = {
    greet: function () {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  // Create a new object and set its prototype
  const person1 = Object.create(personPrototype);
  person1.name = "Alice";
  person1.greet();  // Output: Hello, my name is Alice
  