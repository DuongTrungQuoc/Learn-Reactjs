// Default parameters (Tham số mặc định)
//Tham số mặc định cho phép các tham số mang giá trị mặc định nếu tham số không có giá trị hoặc giá trị không xác định (undefined).

const sum = (a, b) => {
  return a + b;
}

console.log(sum(10, 20));

// cách 1: gán tại vị trí khai báo

const sum1 = (a = 0, b = 0) => {
  return a + b;
}

console.log(sum1(10));

// cách 2: gán bên trong function

const sum2 = (a, b) => {
  a = a || 0;
  b = b || 0;
  return a + b;
}

console.log(sum2(9));