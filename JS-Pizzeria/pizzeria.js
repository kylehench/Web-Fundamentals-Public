function selectRandom(array) {
    // randomly returns one element of an array
    var length = array.length;
    selection = Math.round((length-1)*Math.random());
    return array[selection];
}

selectRandom([0, "hi", 0])

function pizzaFactory(style, sauce, cheese, toppings) {
    // returns a pizza object with given properties
    var pizza = {};
    pizza.style = style;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizzaOptions = pizzaFactory(["deep dish", "hand tossed"], ["traditional", "marinara", "tomato"], ["mozzarella", "provolone"], ["pepperoni", "sausage", "mushrooms", "olives", "onions", "chicken","garlic", "ham", "pineapple"])

function createRandomPizza() {
    // creates a random pizza
    var randomPizza = pizzaFactory(["deep dish", "hand tossed"], ["traditional", "marinara", "tomato"], ["mozzarella", "provolone"], ["pepperoni", "sausage", "mushrooms", "olives", "onions", "chicken","garlic", "ham", "pineapple"]);
    randomPizza.style = selectRandom(randomPizza.style);
    randomPizza.sauce = selectRandom(randomPizza.sauce);
    randomPizza.cheese = selectRandom(randomPizza.cheese);
    randomPizza.toppings = selectRandom(randomPizza.toppings);
    return randomPizza;
}


var p1 = pizzaFactory("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
var p2 = pizzaFactory("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var p3 = pizzaFactory("hand tossed", "tomato", ["provolone"], ["chicken", "garlic", "onions"])
var p4 = pizzaFactory("hand tossed", "tomato", ["mozzarella"], ["ham", "pineapple"])

var randomPizza = createRandomPizza();
console.log(randomPizza);