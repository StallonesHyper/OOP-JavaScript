//Objects

let x = {
  Radius: 20,
  Location: {
    x: 10,
    y: 20,
  }, //Object Properties
  Draw: function () {
    console.log("Object Method");
  }, //Object Methods
};

//Object Literals

console.log(x.Radius);
console.log(x.Location);
console.log(x.Location.x);
console.log(x.Location.y);

//Object Function/Method Calls
x.Draw();

let idkName = new String("Stallone"); //NOTE: This Is An Object...
console.log(typeof idkName);

let Person = {
  Name: "Stallone",
  Age: 19,
};

console.log(Person.Name);

Person.Name = "Stephen";
console.log(Person.Name);

//CONCEPT: Introduction To This Keyword:

let addition = {
  x: 10,
  y: 20,

  add: function () {
    console.log(this.x + this.y);
  },
};

addition.add(); //Object Method Call

console.log(typeof []);
