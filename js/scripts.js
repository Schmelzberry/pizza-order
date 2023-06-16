//Business Logic for Orderform --------
function Orderform() {
    this.pizzas = {};
    this.currentId = 0;
}

// let test2Pizza = new Pizza("mushroom", "medium")

// add pizza object to Orderform call w/ : newPizzaForm.addPizza(test2Pizza);
Orderform.prototype.addPizza = function(pizza) {
    pizza.id = this.assignId();
    this.pizzas[pizza.size] = pizza;
};
// assign an id to each pizza as it's added to Orderform
Orderform.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

//confirm the id number of a pizza
Orderform.prototype.checkId = function(id) {
    if (this.pizzas[id] !== undefined) {
        return this.pizzas[id];
    }
    return false;
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




// SAMPLE TEST CODE FOR CONSOLE
// let newOrderForm = new Orderform();
// let pizza1 = new Pizza ("ham", "small")
// let pizza2 = new Pizza ("mushroom", "medium")
// newOrderForm.addPizza(pizza1);
// newOrderForm.addPizza(pizza2);

// UI Logic --------
let newPizzaForm = new Orderform();

function handleFormSubmission(event) {
    event.preventDefault();

}

window.addEventListener("load", function () {
    this.document.querySelector("form#new-pizza").addEventListener("submit", handleFormSubmission);
    this.document.querySelector("form#new-toppings").addEventListener("submit", handleFormSubmission);
});