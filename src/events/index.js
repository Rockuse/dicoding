const { EventEmitter } = require("events")
const myEmitter = require("./event1.js")
const myEventEmitter = new EventEmitter()

const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat`);
}

const makeBill = (price = 0) => {
    console.log(`Biaya yang perlu dibayar yaitu sebesar Rp ${price}`);
}
const onOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}


myEventEmitter.on("coffee-maker", onOrderedListener);
myEventEmitter.emit("coffee-maker", { name: "Luwak", price: 100000 })

myEmitter.emit("birthday",{name:"Fahmi Muzakki"})
