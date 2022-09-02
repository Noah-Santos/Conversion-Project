// converter function
function converter(method) {
    if (method === 1) {
        //calls binary conversion function
        binaryConversion();
    }else if (method === 2) {
        //calls hexadecimal conversion function
        hexadecimalConversion();
    }
}

//function to run both prompts
function call(){
    while (true) {
        let type = Number(prompt("Do you want to do 1. binary or 2. hexadecimal conversion?"));
        let returned = converter(type)
        // check if returned value is undefined or print the result
        if (returned == undefined || returned == NaN) {
            console.log("Please read the documentation!");
        } else {
            console.log(returned);
    
        }
    }
    
}  


//converts the user's number into binary
function binaryConversion(){
    let numbers = Number(prompt("Enter the number"));
    let result = numbers.toString(2);
    result = String(result);
    //makes sure number is 8 digits long
    if(numbers <=8){
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
    }else if(numbers <= 16){
        function convert(numb){
            let num = numb;
            while(num.length <17){
                num = "0" + num;
                if(num.length == 16){
                return num;
                }
            }
        }
        alert(convert(result));
    }else if(numbers <= 24){
        function convert(numb){
            let num = numb;
            while(num.length <25){
                num = "0" + num;
                if(num.length == 24){
                return num;
                }
            }
        }
        alert(convert(result));
    }else if(numbers <= 32){
        function convert(numb){
            let num = numb;
            while(num.length <33){
                num = "0" + num;
                if(num.length == 32){
                return num;
                }
            }
        }
        alert(convert(result));
    }else if(numbers <= 64){
        function convert(numb){
            let num = numb;
            while(num.length <65){
                num = "0" + num;
                if(num.length == 64){
                return num;
                }
            }
        }
        alert(convert(result));
    }else if(numbers <= 128){
        function convert(numb){
            let num = numb;
            while(num.length <129){
                num = "0" + num;
                if(num.length == 128){
                return num;
                }
            }
        }
        alert(convert(result));
    }else if(numbers <= 256){
        function convert(numb){
            let num = numb;
            while(num.length <257){
                num = "0" + num;
                if(num.length == 256){
                return num;
                }
            }
        }
        alert(convert(result));
    }
}

//turns user's number into hexadecimal
function hexadecimalConversion(){
    let numbers = Number(prompt("Enter the number."));
    alert(numbers.toString(16));
}
