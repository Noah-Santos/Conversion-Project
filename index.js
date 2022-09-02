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

//function to run both prompts
function call(){
    let type = Number(prompt("Do you want to do 1. binary or 2. hexadecimal conversion?"));
    let number = Number(prompt("Enter the number to be converted."));
}  
// normal
while (true) {
    call()
    let returned = converter(number,type)
    // check if returned value is undefined or print the result
    if (returned == undefined || returned == NaN) {
        console.log("Please read the documentation!");
    } else {
        console.log(returned);

    }
<<<<<<< Updated upstream
}
//converts the user's number into binary with 8 digits
let numbers = Number(prompt("Enter the number"));
let result = numbers.toString(2);
result = String(result);
function convert(numb){
    let num = numb;
    while(num.length <9){
        num = "0" + num;
        if(num.length == 8){
        return num;
        }
    }
}
alert(convert(result));
=======
}
>>>>>>> Stashed changes
