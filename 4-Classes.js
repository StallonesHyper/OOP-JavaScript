class Car {
  //NOTE:Constructor With Parameters
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  onDescription() {
    console.log(
      "This Is A " +
        this.brand +
        " Model " +
        this.model +
        " Made In The Year " +
        this.year
    );
  }
}

class ConstCar {
  //NOTE: Constructor Without Parameters
  constructor() {
    this.brand = "Volkswagen";
    this.model = "Polo";
    this.year = 2019;
  }
  onDescription() {
    console.log(
      "This Is A " +
        this.brand +
        " Model " +
        this.model +
        " Made In The Year " +
        this.year
    );
  }
}

let bmw = new Car("BMW", "X4", 2017);
bmw.onDescription();

let VW = new ConstCar();
VW.onDescription();
