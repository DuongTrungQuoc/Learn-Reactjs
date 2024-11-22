// Spread syntax (Cú pháp trải ra) là một phép lặp lại các phần tử của mảng (array) hoặc đối tượng (object).
// Được thể hiện dưới dạng dấu ba chấm: …

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [
  {
    id: 1,
    name: "le van A"
  }, {
    id: 2,
    name: "le van B"
  }
];

const array4 = [...array1, ...array2, ...array3];

console.log(...array1);
console.log(array1);
console.log(array3);
console.log(array4);

let infoUser = {
  name: "Duong Trung Quoc",
  email: "quoc@gmail.com"

};

let infoUpdate = {
  phone: "0355925179",
  age: 22
};

let infoFinal = {
  ...infoUser,
  ...infoUpdate
};

console.log(infoUser);
console.log(infoUpdate);
console.log(infoFinal);