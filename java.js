// constructor

function Bike(name, year, model) {
  this.bikename = name;
  this.bikeyear = year;
  this.bikemodel = model;
  this.bikedetails = function () {
    console.log(
      `the bike name is ${name} and the year is ${year} and the model ${model}`
    );
  };
}

//object

var details = new Bike("Duke", 2020, "390");
console.log(details);

var details2 = new Bike("Duke", 2021, "520");
console.log(details2);
details.bikedetails();

//template literals or string literals :

var a = "sakthi";
var b = "hi";
console.log(b + a + "how are you"); //old code
console.log(`${b}${a} how are you!!`); //new code - if we break it will not show error

//class

class ofc {
  constructor(name, dep, id) {
    this.name = name;
    this.dep = dep;
    this.id = id;
  }

  fulldetails() {
    //method
    console.log(
      `the name is ${this.name}dep is ${this.dep} and the id number ${this.id}`
    );
  }
}
// functions are created outside , since it is created outside this keyword is used

var details = new ofc("logan", "it", 123);
console.log(details);
details.fulldetails();

//callback : to put one function into another function and execute it
// if we put one function into other and call one the both the function will be executed
//passing the function into the another function arguments

function name(x) {
  console.log("jai");
  x();
}

function greets() {
  console.log("hello welcome");
}

name(greets);

// interconnecting multiple function
function task1(x) {
  console.log("Task1");
  x();
}

function task2(y) {
  console.log("Task2");
  y();
}

function task3(z) {
  console.log("Task3");
  z();
}

function task4() {
  console.log("Task4");
}

task1(() => {
  task2(() => {
    task3(task4);
  });
});

//callback hell - traditional concept to handle the asynchronus operation

function task1(x) {
  setTimeout(() => {
    console.log("Task1");
    x();
  }, 3000);
}

function task2(y) {
  setTimeout(() => {
    console.log("Task2");
    y();
  }, 2000);
}

function task3(z) {
  setTimeout(() => {
    console.log("Task3");
    z();
  }, 1000);
}

function task4() {
  setTimeout(() => {
    console.log("Task4");
  }, 500);
}

task1(() => {
  task2(() => {
    task3(task4);
  });
});


//prettier - shift+alt+false
//blackbox - - will show suggestions