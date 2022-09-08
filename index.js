//function to run binary conversion on button click
function binaryCall(){
    binaryConversion();
    let cont = prompt("Do you want to enter another number? Yes or No");
    if(cont.toLowerCase() == "yes"){
        binaryCall();
    }
}  

//function to run hexadecimal conversion on button click
function hexadecimalCall(){
    hexadecimalConversion();
    let cont = prompt("Do you want to enter another number? Yes or No");
    if(cont.toLowerCase() == "yes"){
        hexadecimalCall();
    }
}

//function that adds 0s to the beginning of the binary number until it is in an interval of 8
function convert(numb){
    let num = numb;
    while(num.length%8 != 0){
        num = "0" + num;
    }
    return num;
}

//converts the user's number into binary
function binaryConversion(){
    let numbers = Number(prompt("Enter the number"));
    let result = numbers.toString(2);
    result = String(result);
    //if number length isn't in intervals of 8, it will call function to add 0s
    if(result.length%8 != 0){
        result = convert(result);
    }
    //tells user the answer and prints it into the console
    alert(`The binary of ${numbers} is ${result}`);
    console.log(`The binary of ${numbers} is ${result}`);
}

//turns user's number into hexadecimal
function hexadecimalConversion(){
    let numbers = Number(prompt("Enter the number."));
    alert(`The hexadecimal of ${numbers} is ${numbers.toString(16)}`);
    console.log(`The hexadecimal of ${numbers} is ${numbers.toString(16)}`);
}
