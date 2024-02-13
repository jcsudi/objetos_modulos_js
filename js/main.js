import * as orderService from "./services/order-service.js";

import Order from "./models/order.js";

const data = document.getElementById("entrada1").innerHTML.split("\n");

const data1 = document.getElementById("entrada2").innerHTML.split("\n");

const data2 = document.getElementById("entrada3").innerHTML.split("\n");

const order = new Order(Number(data[0]), Number(data[1]), Number(data[2]));
const order1 = new Order(Number(data1[0]), Number(data1[1]), Number(data1[2]));
const order2 = new Order(Number(data2[0]), Number(data2[1]), Number(data2[2]));

const service = orderService.total(order);
const service1 = orderService.total(order1);
const service2 = orderService.total(order2);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: R$ ${service.toFixed(2)}`);

console.log("-------------------------------------");

console.log(`Pedido código ${order1.code}`);
console.log(`Valor total: R$ ${service1.toFixed(2)}`);

console.log("-------------------------------------")

console.log(`Pedido código ${order2.code}`);
console.log(`Valor total: R$ ${service2.toFixed(2)}`);

