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

const weight = 85; // in kg
const height = 1.68; // in meters
const bmi = weight / (height * height);

if(bmi < 18.5){
    console.log(bmi);
    console.log("You are underweight.");
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log(bmi);
    console.log("You are normal.");
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log(bmi);
    console.log("You are overweight.");
}
else{
    console.log(bmi);
    console.log("You are obese.");
};
