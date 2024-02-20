function print() {
  console.log(arguments);
}

let a = function () {
  print(arguments);
};

let b = () => {
  print(arguments);
};

// print(1, 2, 3);
// console.log("===========");
// a(1, 2, 3);
// console.log("===========");
// b(1, 2, 3);

// anom function can`t be a constructor
// class Animal {
//   constructor = function (name, numOfLegs) {
//     this.name = name;
//     this.numOfLegs = numOfLegs;
//   };

//   sayName() {
//     console.log(`My name is ${this.name}`);
//   }
// }

let anom = (function () {
  return "aaaaaaaaaaaa";
})();

console.log("23232", anom);
