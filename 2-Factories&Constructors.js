//Factory Function

function doSomething(name, age) {
  return {
    name: name,
    age: age,

    output: function () {
      console.log("Hello " + this.name + " Age :" + this.age);
    },
  };
}

const someone = doSomething("Stallone", 19);
someone.output();

//Constructor Function
