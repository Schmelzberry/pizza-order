//Business Logic for Orderform
function Orderform() {
    this.pizzas = {};
}
let newPizzaForm = new Orderform();
let test2Pizza = new Pizza("mushroom", "medium")

// add pizza object to Orderform
Orderform.prototype.addPizza = function(pizza) {
    this.pizzas[pizza.size] = pizza;
};




// Business Logic for Pizza Object ----------

function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}
// combines details of pizza into one string
Pizza.prototype.detailsPizza = function () {
    return this.toppings + ", " + this.size;
};

let test1Pizza = new Pizza("sausage", "small");
console.log(test1Pizza.detailsPizza());



