//function to run binary conversion on button click
function binaryCall(){
    binaryConversion();
    let cont = prompt("Do you want to enter another number? Yes or No");
    if(cont.toLowerCase() == "yes"){
        binaryConversion();
    }
}  

//function to run hexadecimal conversion on button click
function hexadecimalCall(){
    hexadecimalConversion();
    let cont = prompt("Do you want to enter another number? Yes or No");
    if(cont.toLowerCase() == "yes"){
        hexadecimalConversion();
    }
}

//function that adds 0s to thebeginning of the binary number
function convert(numb, digits){
    let num = numb;
    while(num.length < (digits + 1)){
        num = "0" + num;
        if(num.length == digits){
            return num;
        }
    }
}

//converts the user's number into binary
function binaryConversion(){
    let numbers = Number(prompt("Enter the number"));
    let result = numbers.toString(2);
    result = String(result);
    //makes sure number is 8 digits long
    if(result.length <= 8){
        alert(`The binary of ${numbers} is ${convert(result, 8)}`);
    //makes sure that the number is 16 digits long if it needs more than 8 digits
    }else if(result.length <= 16){
        alert(`The binary of ${numbers} is ${convert(result, 16)}`);
    //makes sure that the number is 24 digits long if it needs more than 16 digits
    }else if(result.length <= 24){
        alert(`The binary of ${numbers} is ${convert(result, 24)}`);
    //makes sure that the number is 32 digits long if it needs more than 24 digits
    }else if(result.length <= 32){
        alert(`The binary of ${numbers} is ${convert(result, 32)}`);
    //makes sure that the number is 64 digits long if it needs more than 32 digits
    }else if(result.length <= 64){
        alert(`The binary of ${numbers} is ${convert(result, 64)}`);
    //makes sure that the number is 128 digits long if it needs more than 64 digits
    }else if(result.length <= 128){
        alert(`The binary of ${numbers} is ${convert(result, 128)}`);
    //makes sure that the number is 256 digits long if it needs more than 128 digits
    }else if(result.length <= 256){
        alert(`The binary of ${numbers} is ${convert(result, 256)}`);
    //makes sure that the number is 512 digits long if it needs more than 256 digits
    }else if(result.length <= 512){
        alert(`The binary of ${numbers} is ${convert(result, 512)}`);
    //makes sure that the number is 1024 digits long if it needs more than 512 digits
    }else if(result.length <= 1024){
        alert(`The binary of ${numbers} is ${convert(result, 1024)}`);
    //makes sure that the number is 2048 digits long if it needs more than 1024 digits
    }else if(result.length <= 2048){
        alert(`The binary of ${numbers} is ${convert(result, 2048)}`);
    //makes sure that the number is 4096 digits long if it needs more than 2048 digits
    }else if(result.length <= 4096){
        alert(`The binary of ${numbers} is ${convert(result, 4096)}`);
    //makes sure that the number is 8192 digits long if it needs more than 4096 digits
    }else if(result.length <= 8192){
        alert(`The binary of ${numbers} is ${convert(result, 8192)}`);
    //makes sure that the number is 16384 digits long if it needs more than 8192 digits
    }else if(result.length <= 16384){
        alert(`The binary of ${numbers} is ${convert(result, 16384)}`);
    //makes sure that the number is 32768 digits long if it needs more than 16384 digits
    }else if(result.length <= 32768){
        alert(`The binary of ${numbers} is ${convert(result, 32768)}`);
    }
}

//turns user's number into hexadecimal
function hexadecimalConversion(){
    let numbers = Number(prompt("Enter the number."));
    alert(`The hexadecimal of ${numbers} is ${numbers.toString(16)}`);
}
