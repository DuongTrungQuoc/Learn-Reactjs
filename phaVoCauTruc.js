let user = {
  name: "Quoc",
  age: 22,
  sdt: "1234444"
};

console.log(user.name);
// Destructuring (phá vỡ cấu trúc) cho phép chúng ta dễ dàng 
//sử dụng các giá trị phần tử của Array hoặc Object (Mỗi lần lấy giá trị sẽ ngắn hơn).
const { name, age, sdt } = user;

console.log(name);
console.log(age);
console.log(sdt);