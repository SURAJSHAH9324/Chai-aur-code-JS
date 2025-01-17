/*
Prefer not to use var 
because of issues in block scopes and functional scope.

In JavaScript, if you declare a variable without initializing it, 
its value will be undefined.
*/

const accountId = 101
let accountEmail = "suraj@gmail.com"
var accountPassword = "1234"
accountCity = "Mumbai"
let accountState;
console.log(accountEmail);
console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])

// var
if (true) {
    var x = 10; // Accessible outside the block
  }
  console.log("The value of var " + x); // 10
  
  // let
  if (true) {
    let y = 20; // Block-scoped
  }
  //console.log(y); // Error: y is not defined
  