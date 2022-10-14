const fs = require("fs")
const {resolve}=require("path")

const writeableStream = fs.createWriteStream(resolve(__dirname,'output.txt'))
writeableStream.write("Ini merupakan sebuah text data baris pertama \n");
writeableStream.write("Ini merupakan sebuah text data baris kedua\n");
writeableStream.end("Ini merupakan sebuah text data baris terakhir")