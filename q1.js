// 1. Calculate the sum of all numbers in an array (using a loop)

function sumArray(array) {
    let sum = 0; //variavble to store sum
    for (let i = 0; i < array.length; i++){
        sum += array[i]; // increment sum by each element in the array

    }

    console.log(sum); // print sum to console

}

// Test for sum array
let testArray = [1, 2, 3, 4, 5]; // 15
sumArray(testArray);

// TODO: display the sum of the array in the console
