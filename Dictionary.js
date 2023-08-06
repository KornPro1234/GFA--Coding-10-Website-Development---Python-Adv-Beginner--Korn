var dict = {
    firstName: "Korn",  
    day: "16/7/2023",
    rating: 5,
    movie: "good"
};
console.log(dict["firstName"]);
nameOrSmthIdk(dict);
function nameOrSmthIdk(object){
    for (let key in object) {
        if (typeof object[key]==="string")
            console.log(key, object[key]);
    }
}