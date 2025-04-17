// alert("samuel The Good");
// alert(3+3+2);
// console.log("A Boy and a someting");

// let name = "Samuel", age = 20,;
// alert(a)

// const a = 2;
// alert(a)

// let message;
// message = "Hello, World!";

// let age;
// age = 50;
// age = "samuel";

// let username1;

// let a = "5";
// let b = "5";
// alert(a+b)


// const myBirthday = '18.5.7.9';
// myBirthday = '0.9.9.9';

// alert(myBirthday);
// console.log(myBirthday);


// let admin;
// let name;

// name = "John";
// admin = name;
// alert(admin);

// let a = BigInt(123456789099847834783783893849839489348934894803480849849894);
// alert(a)

// let b = 66;
// alert(b);

// let c = 3.3;
// alert(c);

// let d = "2";
// let e = "3";
// alert(d+e)

// let isGreater = 4 >= 7;
// alert(isGreater);  

// let isGreaterOrEqual = Boolean(4 == 4);
// alert(isGreaterOrEqual)

// let age = null;
// alert(age)

// let ages = "null"
// alert(ages)

// let Samuel;
// Samuel = 6  
// alert(Samuel);

// let sys1 = Symbol("test");
// let sys2 = Symbol("test");

// alert(sys1 == sys2);

// let person = {
//     name: "John",
//     age: 30,
//     isStudent: true,

//     username: {
//         user: "doe",
//         phoneNo: BigInt(9088567886678898),

//         address: {
//             street: "123 Main St",
//             city: "New York",
//             state: "NY",
//         },
//     },

//     www: {
//         "https://www.google.com": "google",
//         "https://www.facebook.com": "facebook",
//     }
// };

// alert(person.username.address.city);
// console.log(person);


// alert("sam")
// let age = 16;
// let age = prompt("how old are you")
// alert(`you are ${age} year old`)

// let name = prompt("what is your name")
// alert(`your name is ${name}`)


// typeCasting or type conversion

// let isStudent = confirm("Are you a student?");
// alert(isStudent);

// let value = true;
// alert(typeof value);

// value = String(value);
// alert(typeof value);

// let num = 12345;
// alert(typeof num)

// num = String(num);
// alert(typeof num)   

// let arr = [1,2,3,4,5];
// alert(typeof arr); 

// let strArr = arr.toString();
// alert(typeof strArr);

// let obj = {
//     name: "John",
//     age: 30,
//     isStudent: true,
// };

// let strObj = JSON.stringify(obj);
// alert(typeof strObj);

// basic oprators

// 5 * 2

// let x = 1
// x = -x
// alert(x)

// let s = 1, y = 4
// alert(y - s)

// let a = 5, b = 2
// alert(a ** b)

// let r = "Iron" + "man"
// alert(r)

// alert(1 + 2 + "3" + 4)

// let x = -2;
// alert(+x)

// alert(+"2");

// let apple = true;
// let orange = true;
// alert(apple + orange);

// alert(+apple + +orange);

// let x = 1;

// let counter = 0;

// counter += 2;
// alert(counter);



// AND = &&
// OR = ||
// NOT = !
// LEFT SHIFT = <<
// RIGHT SHIFT = >>
// ZERO-FILL RIGHT SHIFT = >>>
// XOR = ^
// BITWISE AND = & 

// let a = 5; // 0101
// let b = 3; // 0011

// let result = a & b; // 0001
// alert(result); // 1



// let a = 5; 0101
// let b = 3; 0011

// let result = a & b; 
// alert(result) // 0111

// 0101
// 0011
// 0111

// XOR
// let = 5; // 0101
// let b = 3; // 0011

// let result = a ^ b; // 0110

// 0101
// 0011
// 0110

// NOT
// let a = 5; // 0101
// let b = 3; // 0011   
// let result = ~a; // 1010
// alert(result); // -6
// 0101
// 1010

// let a = 5; // 0101
// let result = ~a; // 1010
// alert(result); // -6


// let a = 5; // 0101
// let b = 3; // 0011
// let c = a | b; // 0111
// let result = ~c; // 1000
// alert(result);

// let a = 3; // 0011
// let result = a << 3
// alert(result);

// let a = 5;
// let result = a >>> 2;
// alert(result);

// let a = -5; // 0101
// let result = a >>> 2; // 1111
// alert(result); // -2

// let b = 5; // 0101
// let results = b >>> 2; // 0001
// alert(results); // 1

// let c = -5; // 0101
// let res = c >> 2; // 1111
// alert(res); // -2


// let age = prompt("how old are you");
// if (age >= 18){
//     alert("you can vote");
// } else {
//     alert("you can not vote");
// }


// let food = prompt("what do you want to buy");

// if (food == "beans") {
//     alert("buy beans for me");
// }else if (food == "rice") {
//     alert("buy rice for me");
// }else if (food == "yam") {
//     alert("buy yam for me");   
// }else {
//     alert("just come back");
// };


// let country = prompt("what is your country");
// if (country == "Nigeria") {
//     alert("you are from Nigeria");
// }else if (country == "Ghana") {
//     alert("you are from Ghana");
// }else if (country == "Togo") {
//     alert("you are from togo")
// }else {
//     alert("you are from other country");
//     alert("Country not recognized");
// }


// let day = prompt("what day is it today");

// switch (day) {
//     case "1":
//         alert("monday");
//         break;
//     case "2":
//         alert("tuesday");
//         break;
//     case "3":
//         alert("wednesday");
//         break;
//     case "4":
//         alert("thursday");
//         break;
//     case "5":
//         alert("friday");
//         break;
//     case "6":
//         alert("saturday");
//         break;
//     case "7":
//         alert("sunday");
//         break;
//     default:
//         alert("Invalid day number");
//         break;
// }


// while(condition){
//     // code to be executed
// }


// let i = 0;
// while (i < 5) {
//     alert(i);
//     i--;
// }

// do{
// //     // code to be executed
// }while (condition);


// let i = 0;
// do {
//     alert(i);
//     i++;
// }
// while (i < 5);

// for (begin; condition; increment/decrement){
//     // code to be executed
// }

// for (let i = 0; i < 5; i++){
//     alert(i);
// }


// change the background color of the page to blue

// document.body.style.backgroundColor = "red";


