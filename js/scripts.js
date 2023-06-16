// Business Logic for Pizza Object ----------

function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.pricePizza = function () {
    this.toppings = toppings;
    this.size = size;
    return toppings + " " + size;
};

let test1Pizza = new Pizza("sausage", "small");
console.log(test1Pizza.pricePizza);

//Business Logic for Orderform
function Orderform() {
    this.pizza = {};
}
let newPizzaForm = new Orderform();

Orderform.prototype.addPizza = function(pizza) {
    this.pizza[pizza.size] = pizza;
};

