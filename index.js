const getPixels = require("get-pixels");


getPixels("img.jpg", (error, pixels) => {
    if (error) {
        console.log("Image not found");
        return
    }
    const pixelArray = new Uint8Array(pixels.data.length/pixels.shape[2]);
    //pixels.shape = [width, height, channels]
    for (let i = 0; i < pixels.data.length; i+=pixels.shape[2]) {
        let sum = 0;
        for (let t = 0; t < 3; t++) {
            sum+=pixels.data[i+t];
        }
        pixelArray[i/4] = sum/3;
    }

    let sum = "";
    for (let i = 0; i < pixelArray.length; i++) {
        if (pixelArray[i]<85) {
            sum+="░";
        } else if (pixelArray[i]<170) {
            sum+="▒";
        } else sum+="▓";
        
        if ((i+1)%pixels.shape[0]===0) {
            console.log(sum);
            sum = "";
        }
    }
})