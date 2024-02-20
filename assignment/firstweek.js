// "my name is arshad" => ["my", "name", "is", "arshad"]
// ["my","name","is","arshad"]; => "my name is arshad"

// function arrayFromString(str) {
//   var array = str.split(" ");
//   return array;
// }

// function stringFromArray(array) {
//   var str = array.join(" ");
//   return str;
// }

// var str = "my name is arshad";
// var array = arrayFromString(str);

// console.log(array);

// var str = stringFromArray(array);

// console.log(str);


// sorting function

// sort an array functions
// -> first we have to convert it to array
//  then we will sort it

// function sort(str) {
//   var array = str.split("");
//   array = array.sort();
//   array.join("");
// }

// function isAnagram(str1, str2){
//   if (sort(str1) == sort(str2)) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// var ans = isAnagram("arshad", "darsah");
// console.log(ans);

// // str1 => bad Debit
// // str2 => Debit Card
// function sortString(str) {
//   return str.split("").sort().join("");
// }

// function isAnagram(str1, str2) {
//   var str1Lowercase =  str1.toLowerCase();
//   var str2Lowercase = str2.toLowerCase(); // Corrected variable name
//   if (sortString(str1Lowercase) === sortString(str2Lowercase)) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// var ans = isAnagram("Hello World", "Wrold Hlleo");
// console.log(ans);



// assignment 2 - > 

/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


// var transactions = [
//   {
//     itemName: "Pepsi",
//     category: "Drink",
//     price: 20,
//     timestamp: "12-june-2022"
//   },
//   {
//     itemName: "Mirinda",
//     category: "Drink",
//     price: 25,
//     timestamp: "13-june-2022",
//   },
//   {
//     itemName: "Samosa",
//     category: "Food",
//     price: 5,
//     timestamp: "13-june-2022"
//   },
//   {
//     itemName: "Laddu",
//     category: "Food",
//     price: 5,
//     timestamp: "13-june-2022"
//   }
// ]

// function solve(transactions){
//   var spendEstimates = {};
//   for (let i=0;i<transactions.length;i++){
//     var t = transactions[i];
//     if (spendEstimates[t.category] ){
//       spendEstimates[t.category] = spendEstimates[t.category] + t.price
//     } else {
//       spendEstimates[t.category] = t.price;
//     }
//   }
//   console.log(spendEstimates);
// }

// solve(transactions);


// medium level problems
// checking a string is plindrome or not

  // function reverse(str) {
  //   let answer = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     answer += str[i];
  //   }
  //   return answer;
  // }

  // function transform(str) {
  //   let answer = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === " " || str[i] === "," || str[i] === "." || str[i] === "!" || str[i] === "?") {
  //       // Do nothing for spaces and punctuation marks
  //     } else {
  //       answer += str[i];
  //     }
  //   }
  //   return answer;
  // }

  // function isPalindrome(str) {
  //   str = str.toLowerCase();
  //   str = transform(str);

  //   let reverseString = reverse(str);
  //   if (reverseString === str) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // let ans = isPalindrome("racar");
  // console.log(ans);


// function calculateTime(n) {
//   let startTime = new Date().getTime();
//   let sum = 0;
//   for (let i = 1;i<n;i++){
//     sum+=i;
//   }
//   let endTime = new Date().getTime();
//   let calTime = endTime - startTime;
//   console.log(calTime/1000);
// }

// calculateTime(10000000000);

// Hand Made Time Trivial Chords

// function printCurrentTime() {
//   let currentDate = new Date();
//   const answer = currentDate.getHours() + ":" +currentDate.getMinutes()+":"+currentDate.getSeconds();
//   console.log(answer);
// }

// function printTime() {
//   console.clear();
//   printCurrentTime();
// }

// setInterval(printTime, 1000); 