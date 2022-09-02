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
