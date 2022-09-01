// converter function
function converter(value, method) {
    if (method === 1) {
        // number to binary string
        return value.toString(2);
    }else if (method === 2) {
        // number to hex string
        return value.toString(16);
    }
}

// normal
while (true) {
    let type = Number(prompt("Do you want to do 1. binary or 2. hexadecimal conversion?"));
    let number = Number(prompt("Enter the number to be converted."))
    let returned = converter(number,type)
    // check if returned value is undefined or print the result
    if (returned == undefined || returned == NaN) {
        console.log("Please read the documentation!");
    } else {
        console.log(returned);

    }
}
