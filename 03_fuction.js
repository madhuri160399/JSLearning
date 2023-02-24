


var num1 = '100';
var num2 = 200;
function swapVariables(value1, value2){               // value1 = num1, value2 = num2 
console.log("Before Swap: " , value1, value2);
var temp = value1;
value1 = value2;
value2 = temp;
console.log("After Swap: " , value1, value2);
return "Swapping variables sucessfully completed";
}

var swapResult = swapVariables(num1 , num2 );// function call or function invoke
console.log(swapResult);


function display(num){  
console.log(num);
var result = typeof num;
return result;
}
var displayResult = display(100);
console.log(displayResult);










// functionas with no arguments and no return value
function showFullName(){
    console.log("My full name is : Madhuri Jadhav");
}
showFullName();  // function call 

// functionas with arguments and no return value
function showAge(age){
 console.log("My age is: ", age);
}

showAge(24);
//functionas with no arguments and return value
function fullName(){
    var name = "madhuri jadhav";
    return name;
}

var fName = fullName();
console.log(fName);

//functionas with arguments and return value
function sumOfNumber(num1, num2, num3){
var sum= num1 + num2 +num3;
return sum;

}

var sumValue = sumOfNumber(10.23, 45, 79);
console.log(sumValue);


var num1 = 100;
var num2 = 200;

var str1 = "Sweety";
var str2 = "Cutey";

var name1 = "Akshaya";
var name2 = "Vikas";

function swapVariables(value1, value2){               // value1 = num1, value2 = num2 
    console.log("Before Swap: " , value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: " , value1, value2);
    return "Swapping variables sucessfully completed";
    }
    
    var swapResult = swapVariables(num1 , num2 );// function call or function invoke
    console.log(swapResult);

    var swapResult = swapVariables(str1 , str2 );// function call or function invoke
    console.log(swapResult);

    var swapResult = swapVariables(name1 , name2 );// function call or function invoke
    console.log(swapResult);