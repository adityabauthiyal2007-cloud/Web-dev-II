/* 
let arr = [1,2,3,4,5,-3,-4,-2,0,9,8,-10,-29]
let res = []
while (arr.length>0){
    let val = arr.shift()
    if(val>0){
        res.push(val)
    }
}
console.log(res) 
*/

// check for palindrome. 

/*

let arr = [1,2,3,4,5,6,5,4,3,2,1];
let arr1 = [...arr];
let isPalindrome = true;

while (arr1.length > 1) {
  let a = arr1.shift();
  let b = arr1.pop();

  if (a !== b) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("is a palindrome");
} else {
  console.log("not a palindrome");
} */


// let arr = [1,2,3,4,5,6,5,4,3,2,1];

// let i = 0;
// let j = arr.length - 1;
// let isPalindrome = true;

// while (i < j) {
//   if (arr[i] !== arr[j]) {
//     isPalindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }


//  Q2. remove the negative integer and print the positive integers
let arr = [5, -3, 16, -11, -7, 8]
let res = []
while (arr.length > 0) {
    let val = arr.shift();
    if (val > 0) {
        res.push(val);
    }
}
// console.log(res);

//  Q3. check if array is palindrome or not.
function palindrome() {
    let arr2 = [1, 2, 3, 2, 1]
    let original = []; //1,2,3,2,1
    let reverse = [] //1,4,3,2,1
    //copy all the elements of given array to an original array
    for (let i = 0; i < arr2.length; i++) {
        original.push(arr2[i]);
    }
    //reverse the given array
    while (arr2.length > 0) {
        reverse.push(arr2.pop())
    }
    for (i = 0; i < original.length; i++) {
        if (original[i] !== reverse[i]) {
            return "not a palindrome"
        }
    }
    return "its a palindrome";
}
console.log(palindrome());

