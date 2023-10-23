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
  
  console.log(convertToBaby(animals));


// 1.
// Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

// The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

// You can test your function when you’re ready by passing in the veggies array or by making your own array!


// 2.
// Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

// You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array!

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = arr => {
  arr.forEach(politelyDecline)
};

const acceptEverything = arr => {
  arr.forEach(veggies =>{
    console.log(`Ok, I guess I will eat some ${veggies}.`)
  })
}

acceptEverything(veggies)