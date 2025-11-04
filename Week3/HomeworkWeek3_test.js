



// 1. Create an array of pizzaToppings with at least four different toppings add "and" before the
//  last topping in a list of toppings.  I wonder if I was suppose to use typeof


const PizzaToppings = {
  Topping1: "Vegie",
  Topping2: "Chicken",
  Topping3: "Sausage",
  Topping4: "Pineapple",
  Topping5: "Cheese",

}

console.log(PizzaToppings.Topping1);
console.log(PizzaToppings.Topping2);
console.log(PizzaToppings.Topping3);
console.log(PizzaToppings.Topping4);
console.log("and");
console.log(PizzaToppings.Topping5);

// or
// //example:  create a listToppings function that stores the functionality,
// and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"

function PToppings["vegi", "Chicken", "Sausage", "Pineapple", "Cheese"] {

  console.log(`We have several toppings ${vegi, chck, saug, pinep, chz}`);
}

// 2. Create a greetCustomer function that prints a message that welcomes a guest, then informs
// them of the available toppings by looping over pizzaToppings
// (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."



function greetCustomer() {
  console.log("Welcome to the Pizza House! We specialize in mulitple Pizza Toppings");
}






// 3. Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
//  check the toppings the customer ordered against your list of available toppings.
// If they order a topping you don't offer,
// print a message that informs them you don't offer that topping and to order again.

function getPizzaOrder(size = Medium, crust = thin, toppings1 = vegi, toppings2 = chkn) {
  console.log(size, crust, topping1, topping2);
}
getPizzaOrder(size, crust, toppings1, toppings2);


//  let Order = (`${pizza size_small
// } ${crust type_thin } ${topping quantities_2 } `)
// console.log(Order);
// }
// let PizzaOrder =  ("Order");
// console.log




// 4. Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings- temprate literal


const preparePizza = Order({

  size: "Medium",
  Crust: "Thin",
  Toppings: "2 Topping",
});

console.log(Order)
console.log("Pizza will be ready in 30mins")





// 5. Create a servePizza function that has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up!
// Here's your large thick crust pizza with x, y, z, ... Enjoy!"



console.log("Enjoy and Thank you!");
var servePizza = {
  Toppings1: "Chicken",
  Toppings2: "Pineapple",
  Size: "Medium",
  Crust: "Thin",
}
servePizza.Order = function () {



  // 6. outputs the same pizza Object that was passed in


  return "Enjoy the Pizza"


  // 7. Call each function and (starting with preparePizza)
  // use the returned value from the previous function as its input.  Is this the addEventListener function or just Call back?

  function InformationOnFunctions(Show) {
    return ('${Show.preparePizza}'${ Show.servePizza });
  }




// 8. Add, commit, and push your JS file to your GitHub repo.
// 9. end your TA a link to your GitHub Homework repo when finished.
