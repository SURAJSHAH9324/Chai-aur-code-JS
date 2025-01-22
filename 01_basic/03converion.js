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