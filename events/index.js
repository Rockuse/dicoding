const { EventEmitter } = require("events")
const myEventEmitter = new EventEmitter()

const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat`);
}

myEventEmitter.on("coffee-maker", makeCoffee);
myEventEmitter.emit("coffee-maker", { name: "Luwak" })
