// NOTE:
// Module Covers:
// 1.JavaScript Fundamentals
console.log("JavaScript Fundamentals");

//DataTypes:

let x = "String";
let y = 100;
let z = true;

//Variables:
let varName = "This Is A String Vraiable Using Let Keyword let";
console.log(varName);

var variableName = "This Is Also A Variable Name With The Keyword var";
console.log(variableName);

//Primitive Types
//NOTE:
//Strings
//Booleans
//Numbers
//Undefined OR NULL

//Dynamic Typing
// NOTE: In Dynamic Language The DataType Of The Variable Can Be Changed...

// Operators:
let a = 100;
let b = 200;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** 2);

// Functions:
function namePrint(name) {
  console.log("Hello " + name);
}

namePrint("Stallone"); //Function Call

//Arrow Functions:

let arrowFunction = (a, b) => a + b;

console.log(arrowFunction(100, 200));

//Multiline Arrow Functions:

let arrowFunctionsagain = (x, y) => {
  console.log("The Output Of The Function Is :" + x * y);
};

arrowFunctionsagain(100, 200);

//Control Flow:

if (100 < 200) {
  console.log("100 Is Smaller Than 200");
} else if (100 > 200) {
  console.log("100 Is Greater Than 200");
} else {
  console.log("IDK");
}

//Loops
console.log("For Loops");
for (x = 0; x < 10; x++) {
  console.log(x);
}
console.log("While Loop");
let m = 0;
while (m < 10) {
  console.log(m);
  m++;
}

//DoWhile Loops:
console.log("DoWhile Loops");
let e = 0;
do {
  console.log(e);
  e++;
} while (e < 5);

//Arrays
let w = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log("Arrays");

for (i = 0; i < w.length; i++) {
  console.log(w[i]);
}

//Objects
console.log("Objects");

let o = {
  Name: "Stallone",
  Age: 19,
  Location: "Siolim",
};

console.log(o);
console.log(o.Name);
console.log(o.Age);
console.log(o.Location);

//Objects Functions:
