console.log("Hello I am conditional tutorial")
let a = console.log("Enter the first no.");
let b = console.log("Enter the second no.");
let c = console.log("Enter the operation");

let random = Math.random();

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**" 
}


if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}