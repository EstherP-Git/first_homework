
function fahrenToCelcius(fahrenheitValue){
    let celsius = (fahrenheitValue - 32) * 5/9; 
    console. log(`The fahrenheit temperature:${fahrenheitValue} in celcius = ${celsius. toFixed(1)}`);
    return celsius.toFixed(1);
}


function celciusToFahrenheit(celciusValue){
    let fahrenheit = (celciusValue * 9 / 5) + 32; 
    console. log(`The celcius temperature:${celciusValue} in fahrenheit = ${fahrenheit. toFixed(1)}`);
    return fahrenheit.toFixed(1);
}


let temperature;
let answer = '';

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 
rl.question("To convert a fahrenheit value to celcius enter (f) for a celcius value to fahrenheit enter (c) ? ", function(answer) {
    rl.question("What temperature do you want to convert ? ", function(temperature) {
       
        if (`${Number(temperature).toFixed(1)}` == 'NaN') {
            console.log('Run the program again and please enter a numeric value');
        } else {
            if (answer =='f'){
               
                fahrenToCelcius(temperature);
    
            }else if (answer == 'c'){
                
                celciusToFahrenheit(temperature);
            }else{  
                console.log('Run the program again and please enter a f for fahrenheit or a c for celcius');
             }
            
        }
        rl.close();
        });
            
});

rl.on("close", function() {
    console.log("Thanks! Come again soon!");
    process.exit(0);
});

console.log("practice log");