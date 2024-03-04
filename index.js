const getPixels = require("get-pixels");

const pixelArray = [];
getPixels("img2.jpg", (error, pixels) => {
    if (error) {
        console.log("Image not found");
        return
    }
    //pixels.shape = [width, height, channels]
    for (let i = 0; i < pixels.data.length; i+=pixels.shape[2]) {
        let aux = [];
        for (let t = 0; t < pixels.shape[2]; t++) {
            aux.push(pixels.data[i+t]);
        }
        pixelArray.push(aux);
    }
    console.log(pixelArray)
})