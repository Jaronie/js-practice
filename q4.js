/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) {
    let x = "";
    for(let i = textInput.length - 1; i >= 0; i--){ // loop through text input backwards
        x += textInput[i]; // add each character to x
    }
    if(x === textInput){
        console.log(textInput + " is a palindrone: " + true); // if x is the same as text input, it's a palindrome
    } else {
        console.log(textInput + " is a palindrone: " + false);
    }
}

// Test for palindrome

let testString = "racecar"; // true
let testString2 = "hello"; // false
checkPalindrome(testString);
checkPalindrome(testString2);


// TODO: display the result of the test strings in the console
