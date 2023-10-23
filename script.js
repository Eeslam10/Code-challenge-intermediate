// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.
const sentence = ['sense.','make', 'all', 'will', 'This'];

const reverseArray = arr => {
    let reversed = [];
    for( i = arr.lenght - 1; i >0; i--){
        reversed.push(arr[i])
    }
    return reversed;
}


// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”
