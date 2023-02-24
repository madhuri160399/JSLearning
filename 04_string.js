var greet = "Good Morning";
console.log(greet);

console.log(typeof greet);
console.log("Total number of chars available into this string - greet");
var greetLength = greet.length;
console.log(greetLength);
 var charAtIndex3 = greet.charAt(3);
console.log( "Character available at index 3: " ,charAtIndex3);
console.log("Character at last: " ,greet.charAt(greetLength - 1));
console.log("Index by character");
var charIndexM = greet.indexOf('M');

console.log("Index of M: ", charIndexM);
console.log("Find index of character which not present in string");

console.log("index of O : ", greet.indexOf('Z'));
console.log("index of O : ", greet.indexOf('o'));
console.log("index of O : ", greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning", "Evening");
console.log(replaceResult);

console.log("upper case: ", replaceResult.toUpperCase());
console.log("lower case: ", replaceResult.toLowerCase());

var myName = "    Madhuri jadhav     ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra spaces: ", myNameAfterTrim, myName.length, myNameAfterTrim.length  );

console.log("Is substring includes in greet: ", greet.includes("Mor"));
console.log("Is substring includes in greet: ", greet.includes("try"));

var sliceResult = greet.slice(5,11);
console.log(sliceResult);
console.log( greet.slice(2,12));
var splitResult = greet.split(" ");
console.log(splitResult);


console.log("Total words: ", splitResult.length);

var myFriendsList = "Madhuri, Akshaya, Vikas, Yash";
var myfriendResult= myFriendsList.split(" ");
console.log("Total friends: " , myfriendResult.length);