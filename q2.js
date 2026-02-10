// 2. Find the largest number in an array (using a loop)
function findLargest(array) {
    largest = array[0]; // storing largest number in the array in a variable, starting at the 0 index

    for(let i = 0; i < array.length; i++){ //loop through array
        if(array[i] > largest) // if i is greater than largest, reassign largest to i
        {
            largest = array[i];
            }    

            }
    console.log(largest); // print largest to console

}

// Test for find largest
let testArray2 = [1, 4, 5, 4, 3]; // 5
findLargest(testArray2);
// TODO: display the largest number in the array in the console
