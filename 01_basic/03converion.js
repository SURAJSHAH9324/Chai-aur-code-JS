// conversion
let score = true
console.log(score);
console.log(typeof score);

console.log(Number(score));

console.log(typeof Number(score));
// "42" => Number mein convert hoga
// "42abc" => NAN mein convert hoga.
// true => 1; false => 0


let isLoggedIn = "0"
let loggedIn = Boolean(isLoggedIn)
console.log(loggedIn);
// 1 -> true; 0 => false 
//"anystring" => true;
//"" = > false empty string will return false.


let somenumber = 33
console.log(somenumber + "-> " + typeof somenumber);
console.log("After Converting " + somenumber + " is " + typeof String(somenumber));
//                 *********************Operation****************************** 
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 8
// console.log(2/3);  // 0
// console.log(2%3);  // 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); // hello hitesh

// console.log("1" + 2); // pehele string hain toh string considered hoga              => 12
// console.log(1 + "2"); // ismein number first bad mein string hain concat kare llo   => 12
// console.log("1" + 2 + 2);                                                           => 122
// console.log(1 + 2 + "2");             (1+2)+"2"=> 3+"2"=>32                         => 32



// console.log(+true); // 1
// console.log(+"");   // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// increment Operator
let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion