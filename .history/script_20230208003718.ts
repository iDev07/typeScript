const firstName: string = "Samar";

const isMarried: boolean = false;

var colors: string[] = ["red", "black", "white"];
let anyThing = 4;
// console.log(anyThing);

let smth: string = "Hello World";
// console.log(smth);

function learnSmth(a: number): number {
  return a ** 3;
}
// console.log(learnSmth(3));
type carType = {
  name: string;
  year?: number;
};

const carLog = (car: carType): string => {
  return `Car name is ${car.name} produced in ${car.year}`;
};
console.log(carLog({ name: "BMW" }));
