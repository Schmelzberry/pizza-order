# Pizza Order

#### By Jake Elsberry

#### A webpage to order pizzas based on the preferred size and toppings.

## Technologies Used
HTML,
CSS,
Javascript

## Description

This simple webpage is designed to order a pizza after the user enters their preferred toppings and size of pizza. 

## Setup/Installation Requirements
Open https://github.com/Schmelzberry/pizza-order.git in your browser.

## Known Bugs
No known issues

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 5/26/2023 Jake Elsberry - all rights reserved




Tests

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

Describe: assignId() 

Test: It will assign a unique ID number to each pizza.

code:  newPizzaForm.assignId(test2Pizza);

Expected Result: Pizza {toppings: 'mushroom', size: 'medium', id: 1}


