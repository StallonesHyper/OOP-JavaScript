// class House {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getResidents = () => {
//     console.log(this.name);
//     console.log(this.age);
//   };
// }

// const father = new House("Titus", 54);
// const mother = new House("Maria", 45);
// const elderSon = new House("Stephen", 22);
// const smallerSon = new House("Stallone", 19);

// father.getResidents();
// mother.getResidents();
// elderSon.getResidents();
// smallerSon.getResidents();

//CONCEPT: Inheritance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName = () => {
    console.log(this.name);
  };
}

class Programmer extends Person {
  constructor(name, age, language, company) {
    super(name, age);
    this.language = language;
    this.company = company;
  }

  sayHi = () => {
    console.log(
      "Hello I Am ",
      this.name +
        " I Am " +
        this.age +
        " Years Old " +
        " And I Worked For " +
        this.company +
        " And Used The Programming Language :" +
        this.language
    );
  };
}

const someone = new Programmer("Stallone", 19, "Python", "Amazon");
someone.getName();
someone.sayHi();
