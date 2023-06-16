Describe: function Pizza (toppings, size)

Test: It will create a pizza object with two keys, price and toppings.

code: let testPizza1 = new Pizza("sausage", "small");

Expected Output: testPizza1 = { toppings: "sausage", size: "small" }

Describe: detailsPizza()

Test: It will concatenate details of pizza into one string

code: let test1Pizza = new Pizza("sausage", "small");
console.log(test1Pizza.detailsPizza());

Expected Result: sausage small

Describe: Orderform()

Test: It will create an empty object for future pizzas to go into.

code: let newPizzaForm = new Orderform();

Expected Output: Orderform {pizza: {...} }

Describe: detailsPizza

