const fs = require("node:fs");
const { Buffer } = require("node:buffer");


function main() {
    const data = fs.readFileSync("img.jpg")
    //buffer = Buffer.alloc(Buffer.byteLength(data));
    //data.copy(buffer);
    console.log(data.toString("hex"))
}

main();
