//Business Logic for Orderform --------
function Orderform() {
    this.pizzas = {};
    this.currentId = 0;
}

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
    this.price = calculatePrice(size)
}
// combines details of pizza into one string
Pizza.prototype.detailsPizza = function () {
    return this.toppings + ", " + this.size;
};

function calculatePrice(size) {
    switch(size) {
        case ("small"):
            return 12;
    
        case ("medium"):
            return 15;
    }
}

let test1Pizza = new Pizza("sausage", "small");
console.log(test1Pizza.detailsPizza());

// UI Logic -----------
let PizzaForm = new Orderform();

function handleFormSubmission(event) {
    event.preventDefault();
    const inputtedSize = document.querySelector("input#new-size").value;
    const inputtedToppings = document.querySelector("input#new-toppings").value;
    let newPizza = new Pizza(inputtedSize, inputtedToppings);
    PizzaForm.addPizza(newPizza);
    console.log(PizzaForm.detailsPizza);


}

window.addEventListener("load", function () {
    this.document.querySelector("form#size-select").addEventListener("submit", handleFormSubmission);
    this.document.querySelector("form#toppings-select").addEventListener("submit", handleFormSubmission);
});

// SAMPLE TEST CODE FOR CONSOLE
// let newOrderForm = new Orderform();
// let pizza1 = new Pizza ("ham", "small")
// let pizza2 = new Pizza ("mushroom", "medium")
// newOrderForm.addPizza(pizza1);
// newOrderForm.addPizza(pizza2);