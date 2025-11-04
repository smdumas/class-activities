// create an Array using an Array literal
const names = ["stl", "atl", "Cali"];


// access the 1st item in the Array
names[0];

// access the last item in the Array
names[2];

// print the length of the Array
names = ["stl", "atl", "Cali"];
console.log(names.length)

// use the length property to access the last item in the Array
names[names.length - 1];


// with for...of, loop over the Array, modify the value and add to a different Array
// I will use bracket notation with the number inside the bracket that will have a value and key

let newArray = [];
letcurrentIndex = 0;
for (let names of names) {
  letnewValue = names + 10;

  newArray[currentIndex] = newValue;
  currentIndex++;

}

console.log(newArray);
