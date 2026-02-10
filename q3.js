// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
    let new_array = []; // initialize empty array
    for(let i = 0; i < array.length; i++){ // loop through array
        if(!new_array.includes(array[i])){ // if new array doesn't include current i, add it
            // avoids adding duplicates
            new_array.push(array[i]);
        }}

    console.log(new_array); // print new array to console

}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

// TODO: display the array with duplicates removed in the console
