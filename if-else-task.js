/***
//! Task- 1

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// const burgerPrice = 499;
// const cokePrice = 30;
// if(burgerPrice >= 500){
//     console.log("You get free coke")
// }
// else{
//     console.log(`You have to pay ${cokePrice}tk for coke`)
// }



/*** 
 //! Task- 2

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// const weight = 85; // in kg
// const height = 1.68; // in meters
// const bmi = weight / (height * height);

// if(bmi < 18.5){
//     console.log(bmi);
//     console.log("You are underweight.");
// }
// else if(bmi >= 18.5 && bmi <= 24.9){
//     console.log(bmi);
//     console.log("You are normal.");
// }
// else if(bmi >= 25 && bmi <= 29.9){
//     console.log(bmi);
//     console.log("You are overweight.");
// }
// else{
//     console.log(bmi);
//     console.log("You are obese.");
// };



/***
//! Task- 3
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const score = 39;

if(score >= 90 && score <= 100){
    console.log(score);
    console.log("Hurry! You got A+ grade.");
}
else if(score >= 80 && score <= 89){
    console.log(score);
    console.log("Very Good! You got A grade.");
}
else if(score >= 70 && score <=79){
    console.log(score);
    console.log("Good! You got A- grade.");
}
else if (score >= 60 && score <= 69){
    console.log(score);
    console.log("You got B grade.");
}
else if(score >= 50 && score <= 59){
    console.log(score);
    console.log("You got C grade.");
}
else if(score >= 40 && score <= 49){
    console.log(score);
    console.log("You got D grade.");
}
else if(score >= 33 && score <= 39){
    console.log(score);
    console.log("You got E grade.");
}
else{
    console.log(score);
    console.log("Sorry! You got F grade.");
}