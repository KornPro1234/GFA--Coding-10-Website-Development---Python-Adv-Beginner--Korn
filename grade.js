const array = [80, 80, 50]; 

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A


//english, math, geography,social_studies, chemistry, 9mm



console.log(calculateGrade(array));
function calculateGrade(marks) {

}
function calculateAverage(array) {
    let sum = 0;
    for (value of array) {
        sum = sum + value;
    }       
    average = sum/array.length;

    return average
}

