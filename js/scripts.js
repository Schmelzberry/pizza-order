// Business Logic for Pizza Object ----------

function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}


let test1Pizza = new Pizza("sausage", "small");


//Business Logic for Orderform
function Orderform() {
    this.pizza = {};
}
let newPizzaForm = new Orderform();

Pizza.prototype.pricePizza = function () {
    const toppingsCost = (this.toppings)
    const sizePrice = (this.sizePrice)
    return this.toppings + this.size;
};

function calculateToppingsCost(toppings) {
    let 
}