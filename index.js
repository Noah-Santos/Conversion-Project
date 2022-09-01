function converter(value, method) {
    if (method === 1) {
        return value.toString(2);
    }else if (method === 2) {
        return value.toString(16);
    }
}
let type = Number(prompt("Do you want to do 1 (binary) or 2 (hexadecimal) conversion?"));
let number = Number(prompt("Enter the number to be converted."))
console.log(converter(number,type))

//converts the user's entered number into binary with 8 digits
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