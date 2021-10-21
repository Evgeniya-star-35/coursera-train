// const first = [1, 3, 3, 4, 6, 5, 4];
// const second = [6, 3, 5, 2, 2];

// const findElements = first
//   .filter((el) => !second.includes(el))
//   .concat(second.filter((el) => !first.includes(el)))
//   .filter((el, ind, arr) => arr.indexOf(el) === ind)
//   .sort();

// console.log(findElements);
// Implement a logic that finds difference between "first" and "secord" lists
// and prints the result to the console:
// [1, 2, 4]
// function Person(name) {
//   this.name = name;
//   this.greeting = function () {
//     alert("Hi! I'm " + this.name + ".");
//   };
// }
// let person1 = new Person("Bob");
// let person2 = new Person("Sarah");

// function Person(first, last, age, gender, interests, profession) {
//   this.name = {
//     first: first,
//     last: last,
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.profession = profession;
//   this.bio = function () {
//     alert(
//       this.name.first +
//         " " +
//         this.name.last +
//         " is " +
//         this.age +
//         " years old. He likes " +
//         this.interests[0] +
//         " and " +
//         this.interests[1] +
//         "." +
//         this.profession
//     );
//   };
//   this.greeting = function () {
//     alert("Hi! I'm " + this.name.first + "." + this.profession);
//   };
// }
// let person1 = new Person(
//   "Bob",
//   "Smith",
//   32,
//   "male",
//   ["music", "skiing"],
//   "teacher"
// );

// // factory
// class Employee {
//   create(type) {
//     let employee;
//     if (type === "fulltime") {
//       employee = new FullTime();
//     } else if (type === "parttime") {
//       employee = new PartTime();
//     } else if (type === "temporary") {
//       employee = new Temporary();
//     } else if (type === "contractor") {
//       employee = new Contractor();
//     }
//     employee.type = type;
//     employee.say = function () {
//       console.log(`${this.type}: rate ${this.rate}/hour`);
//     };
//   }
// }

// const factory = new Employee();
// fulltime = factory.create("fulltime");
// parttime = factory.create("parttime");
// temporary = factory.create("temporary");
// contractor = factory.create("contractor");

// fulltime.say();
// parttime.say();
// temporary.say();
// contractor.say();

// Пример реализации Abstract Factory на Javascript:

// Abstract
class AbstractCarFactory {
  createPremiumCar(product) {
    return new AbstractPremiumCar(product);
  }

  createSportCar(product) {
    return new AbstractSportCar(product);
  }
}
class AbstractPremiumCar {
  constructor(model) {
    this.type = "Premium car";
    this.model = model;
  }
}
class AbstractSportCar {
  constructor(model) {
    this.type = "Sport car";
    this.model = model;
  }
}

// Concrete #1
class ToyotaFactory extends AbstractCarFactory {
  createPremiumCar(model) {
    return new ToyotaPremiumCar(model);
  }

  createSportCar(model) {
    return new ToyotaSportCar(model);
  }
}
class ToyotaPremiumCar extends AbstractPremiumCar {
  constructor(model) {
    super(model);
  }
}
class ToyotaSportCar extends AbstractSportCar {
  constructor(model) {
    super(model);
  }
}

// Concrete #2
class LexusFactory extends AbstractCarFactory {
  createPremiumCar(model) {
    return new LexusPremiumCar(model);
  }

  createSportCar(model) {
    return new LexusSportCar(model);
  }
}
class LexusPremiumCar extends AbstractPremiumCar {
  constructor(model) {
    super(model);
  }
}
class LexusSportCar extends AbstractSportCar {
  constructor(model) {
    super(model);
  }
}

// Code for the testing
const testing = (Factory, premiumCarName, sportCarName) => {
  const concreteFactory = new Factory();
  const concretePremiumCar = concreteFactory.createPremiumCar(premiumCarName);
  const concreteSportCar = concreteFactory.createSportCar(sportCarName);

  console.log(concreteFactory, concretePremiumCar, concreteSportCar);
};
testing(ToyotaFactory, "Camry", "Supra");
testing(LexusFactory, "IS", "LFA");
