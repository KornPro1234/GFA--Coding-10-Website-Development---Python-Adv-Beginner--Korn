let myNumber = 0;
console.log(myNumber);
function helloName(name){
    let result = "Hello, nice to meet you, "+name;
    return result;
}
let myString = helloName("Korn");
alert(myString);

function max(a,b){
    if (a<b) return b;
    else return a;
}

let bigNumber = max(6,10)

function fizzbuzz(num){
if ((num % 3 === 0) &&  (num % 7 === 0)) 
    return "fizzbuzz";
        if (num % 3 === 0)
    return "fizz";
        if (num % 7 === 0) 
    return "buzz";

}



























console.log(bigNumber);

// should return the bigger number