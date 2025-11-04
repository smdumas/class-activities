const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");

// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexOf("c");

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a".  The if splice will verify if the 1st and last are the same
// which it will not be;  we want this to loop instead of the if move to while
let firstIndex = firstA;
let lastIndex = lasttA;
if (firstIndex != lastIndex) {
  arr.splice(lastIndex, 1);
  lastIndex = arr.lastIndexOf("a");
}

console.log(arr);

function removeDuplicates(array, duplicateValue) {
  let firstIndex = array.idexof(duplicatedValue);
  let lastIndex = array.idexof(duplicatedValue);
}

removeDuplicates(arr, "a");
// create a function to remove duplicates and accept 2 paramenters
// above


// .splice(start, # to remove, item to add, ...) directly mutates/alters the array by removing or replacing items in place.

// Passing one argument into splice functions similar to slice,
// returning an array from the specified starting index to the last item
// in the array - remember, unlike slice, splice mutates
// the existing array. So splice(-2) removes and returns the last two items in the array.
// Passing just two arguments into splice will remove
// items only. Beginning at the starting index specified in the first argument, splice will
// remove the number of items specified by the second argument - splice(2, 2) starts at the third item (index 2) and removes and returns the items from index 2 and 3.
// Any arguments passed into splice after the first
// two are added to the array at the specified
// starting index, replacing any removed items.
// For example, splice(2, 1, "x", "y") starts at the third item, removes it, adds "x" at index 2, then adds "y" at index 3.

// let arr = [1, 2, 3, 4, 5];
// let splicedarr = arr.splice(3);
// console.log("arr", arr);

// //

