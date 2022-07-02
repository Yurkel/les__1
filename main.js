const count = 7;
let countSquare = count ** 2;
let countCube = count ** 3;

console.log("Значение: " + count);
console.log("Квадрат этого значения: " + countSquare);
console.log("Куб этого значения: " + countCube);

const tempCel = 20;
let tempFar = ((tempCel * 9) / 5) + 32;
console.log(tempCel + "\u00B0" + "C", "равно", tempFar + "\u00B0" + "C");

let valueFar = tempFar;
let valueCel = ((valueFar - 32) * 5) / 9;
console.log(valueFar + "\u00B0" + "C", "равно", valueCel + "\u00B0" + "C");


