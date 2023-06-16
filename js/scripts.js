// Business Logic

function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.pricePizza = function () {
    return this.toppings + this.size;
    console.log("success!")
};