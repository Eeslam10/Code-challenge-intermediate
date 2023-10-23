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
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"]

const greetAliens = arr => {
    for(let i = 0; i < arr.length; i++){
      console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    }
  }

  greetAliens(aliens);


//   Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = arr => {
    let babyArr = [];
    for (let i = 0; i < arr.length; i++ ){
        babyArr.push('baby ' + arr[i])
    }
    return babyArr
  }
  
  console.log(convertToBaby(animals))   