console.log("************************************* Example 1 **********************************");
function myFavPlayer(){
    console.log("My favourite Cricketer is Virat Kohli");

}

myFavPlayer();
function myHobbies(){
    console.log("My hobby is learning different computer languages");
}
myHobbies();

console.log("************************************* Example 2 **********************************");

function personalDetails(firstName, lastname, CollegeName){
console.log("My First Name: Madhuri" );
console.log("My last Name is Jadhav");
console.log("My college name is DBATU");

}
personalDetails();

console.log("************************************* Example 3 **********************************");

function swapValueDude(value1, value2){
    console.log("Before Swapping: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swapping: ", value1, value2);
}
swapValueDude("Virat", "Anushka");
swapValueDude(1000,2000);

console.log("************************************* Example 4 **********************************");
function addThreeValues(num1, num2, num3){
    var addition = num1 + num2 + num3;
    return addition;

}

var additionResult = addThreeValues(10.23, 600, 40) ;
console.log("Addition: ", additionResult);
var additionResult = addThreeValues("Hello", " Good"," Morning") ;
console.log("Addition: ", additionResult);