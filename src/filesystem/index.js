const fs = require('fs');
const { resolve } = require("path")
const createNewFile=require("./filesystem3.js")
const fileReadCallback = (error, data) => {
    if (error) {
        return 'Gagal membaca berkas'
    }
    return data
};
createNewFile({input:"input.txt",output:"output.txt",highWaterMark:15})
// const data = fs.readFileSync(resolve(__dirname, 'notes.txt'), 'UTF-8',fileReadCallback);
// console.log(data)