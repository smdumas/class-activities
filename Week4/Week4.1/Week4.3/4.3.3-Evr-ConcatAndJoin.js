const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
const newArr = arrOne.concate(arrTwo, 4, "e");
// print the new, merged array
console.log(newArr)
// join the merged array and print the result
const newStr = newArr.join();
console.log(newStr);
//
// I can use Includes the same way
//
//
// reverse can be used as well
let str = "1,2,3,4,5";
let arr = str.split(",");
console.log(arr);

arr.reverse().join();
console.log(reverseStr);

