function converter(value, method) {
    if (method === 1) {
        // value to binary
        return value.toString(2);
    }else if (method === 2) {
        // value to hex
        return null
    }

}

console.log(converter(10,1))
