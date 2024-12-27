// ------------------ BASICS ------------------
// Variable Declaration: var, let, const
// Better Comments: * var is function-scoped, let and const are block-scoped.

// Demo with var
var globalVariable = "I am a global variable"; // * Có thể gán lại và khai báo lại.
// * Đây là cách khai báo biến kiểu toàn cục, không an toàn khi dùng trong block scope.

// Demo with let
let blockVariable = "I am block-scoped"; // * Có thể gán lại, không thể khai báo lại.
// * An toàn hơn var vì chỉ tồn tại trong block scope.

// Demo with const
const constantVariable = "I cannot be reassigned"; // * Không thể gán lại, phải được khởi tạo giá trị ngay khi khai báo.
// * Dùng cho các giá trị không thay đổi, giúp tăng tính rõ ràng trong code.

// ------------------ TYPES ------------------
// JavaScript có dynamic typing (kiểu động).
// Primitive types (kiểu nguyên thủy): String, Number, Boolean, Null, Undefined, Symbol, BigInt

// String Example
let myString = "Hello World!"; // * Dữ liệu dạng văn bản.

// Number Example
let myNumber = 42; // * Sử dụng cho cả số nguyên và số thập phân.

// Boolean Example
let isJSFun = true; // * Giá trị true hoặc false.

// Null Example
let myNullValue = null; // * Giá trị không có (Intentional absence of value).

// Undefined Example
let myUndefined; // * Biến được khai báo nhưng chưa được gán giá trị.

// Symbol Example
let uniqueID = Symbol("id"); // * Giá trị duy nhất và không thể thay đổi.

// BigInt Example
let bigNumber = 1234567890123456789012345678901234567890n; // * Số lớn hơn giới hạn của Number.

// ------------------ TYPE CONVERSIONS ------------------
// Implicit Conversion (Chuyển đổi ngầm định)
let result1 = "5" + 5; // * '55' (Nối chuỗi do chuỗi có ưu tiên).
let result2 = "5" - 1; // * 4 (Chuỗi "5" được chuyển thành số).

// Explicit Conversion (Chuyển đổi tường minh)
let strToNum = Number("123"); // * Chuyển từ chuỗi thành số.
let numToStr = String(123); // * Chuyển từ số thành chuỗi.

// ------------------ VARIABLE HOISTING ------------------
// var được hoisted (nâng lên đầu) với giá trị undefined.
console.log(hoistedVar); // * undefined
var hoistedVar = "I am hoisted";

// let và const được hoisted nhưng không khởi tạo.
// * Không thể truy cập trước khi được khai báo.
// Uncommenting below line sẽ gây ReferenceError
// console.log(hoistedLet);
// let hoistedLet = "Error";

// ------------------ SCOPES ------------------
// Global Scope (Phạm vi toàn cục)
var globalVar = "I am global"; // * Có thể truy cập từ bất kỳ đâu.

// Function Scope (Phạm vi hàm)
function demoFunctionScope() {
  var functionVar = "I am function-scoped"; // * Chỉ truy cập được trong hàm này.
}

// Block Scope (Phạm vi khối)
if (true) {
  let blockVar = "I am block-scoped"; // * Chỉ tồn tại trong khối này.
}

// ------------------ ADVANCED ------------------
// Template Literals (Chuỗi mẫu)
let greeting = `Hello, ${myString}`; // * Dùng dấu backticks và nội suy biến.

// Destructuring Assignment (Gán phân rã)
let [a, b] = [1, 2]; // * Gán nhiều biến cùng lúc từ mảng.
let { name, age } = { name: "John", age: 30 }; // * Gán từ đối tượng.

// Spread and Rest Operators (...)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // * Sao chép và thêm phần tử vào mảng mới.
function sum(...numbers) {
  // * Gộp nhiều tham số thành mảng.
  return numbers.reduce((acc, curr) => acc + curr); // * Tính tổng các số.
}

// Closures (Đóng gói)
function outer() {
  let count = 0; // * Biến này được lưu trong bộ nhớ ngay cả khi hàm outer kết thúc.
  return function inner() {
    count++; // * Tăng giá trị biến count.
    return count;
  };
}
const increment = outer(); // * Mỗi lần gọi increment, giá trị count sẽ tăng.

// ------------------ INTERVIEW QUESTIONS ------------------
// Basic:
// Q: Sự khác biệt giữa var, let, và const là gì?
// A: var là function-scoped và hoisted; let và const là block-scoped. const không thể gán lại giá trị.

// Intermediate:
// Q: Sự khác biệt giữa undefined và null là gì?
// A: Undefined là biến được khai báo nhưng chưa gán giá trị. Null là giá trị không có, được gán một cách cố ý.

// Advanced:
// Q: JavaScript xử lý type coercion (ép kiểu) như thế nào?
// A: JavaScript hỗ trợ ép kiểu ngầm định và tường minh. Ngầm định tự động (VD: "5" + 5 -> "55"). Tường minh cần các hàm như Number(), String().

// Expert:
// Q: Giải thích về closures và ứng dụng của chúng?
// A: Closures là khả năng của hàm truy cập các biến trong scope cha ngay cả khi scope cha đã kết thúc. Ứng dụng trong việc tạo private variables hoặc giữ trạng thái của hàm.
