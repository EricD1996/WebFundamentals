function pizzaOven(cooked, sauce, cheese, toppings){
    var pizza = {};
    pizza.cooked = cooked;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("pizza1 ", pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("pizza2 ", pizza2);

var pizza3 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["chicken", "olives", "spinach"]);
console.log("pizza3 ", pizza3);

var pizza4 = pizzaOven("deep dish", "barbeque", ["mozzarella", "feta"], ["chicken", "spinach", "tomato"]);
console.log("pizza4 ", pizza4);