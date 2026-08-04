/***
//! Task- 1

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burgerPrice = 499;
const cokePrice = 30;
if(burgerPrice >= 500){
    console.log("You get free coke")
}
else{
    console.log(`You have to pay ${cokePrice}tk for coke`)
}