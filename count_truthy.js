const array = [0,"   ",null]

function count_truthy(array){
    let numTrue = 0; 

    for (let c of array){
        if (c) 
            numTrue++;


}
return numTrue;
}
console.log(count_truthy(array))