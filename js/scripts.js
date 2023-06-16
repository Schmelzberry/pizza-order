//Business Logic for Orderform
function Orderform() {
    this.pizzas = {};
    this.currentId = 0;
}
let newPizzaForm = new Orderform();
let test2Pizza = new Pizza("mushroom", "medium")

// add pizza object to Orderform
Orderform.prototype.addPizza = function(pizza) {
    pizza.id = this.assignId();
    this.pizzas[pizza.id] = pizza;
};
// assign an id to each pizza
Orderform.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
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



