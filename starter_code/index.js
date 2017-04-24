const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator();
elevator.start();


const person1 = new Person("Pepe", 3, 4);
const person2 = new Person("Margarita", 10, 2);
const person3 = new Person("Maria", 0, 10);
const person4 = new Person("Manolo", 5, 8);
const person5 = new Person("Dory", 9, 1);

elevator.call(person1);
elevator.call(person2);
elevator.call(person3);
elevator.call(person4);
elevator.call(person5);
