const fs = require("fs")
const { resolve } = require("path")


const createNewFile = (data) => {
    const readableStream = fs.createReadStream(resolve(__dirname, data.input), {
        highWaterMark: data.highWaterMark
    })
    const writeableStream = fs.createWriteStream(resolve(__dirname+"/resource", data.output))
    readableStream.on("readable", () => {
        try {
            writeableStream.write(`${readableStream.read()}\n`)
        } catch (error) {
            console.log(error)
        }
    })


    readableStream.on("end", () => {
        console.log("Done")
    })
}
// createNewFile({input:"input.txt",output:"output.txt",highWaterMark:15})
module.exports = createNewFile