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

acceptEverything(veggies);


// Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

// You can test your function when you’re ready by passing in the numbers array or by making your own array!

// Write your code here:
const squareNums = arr => arr.map(toSquare);

// Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

// You can use any technique you want to accomplish this task.

// You can test your function when you’re ready by passing in the greetings array or by making your own array!

// Write your code here:
const shoutGreetings = arr => arr.map(greetings => greetings.toUpperCase() + '!')

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]


// Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

// You can test your function when you’re ready by passing in the years array or by making your own array of years!

// Write your code here:
const sortYears = arr => arr.sort((a, b) => b - a)

// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
//Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ];

// Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

// Write your code here:
const justCoolStuff = (one, two) => {
    let commonItems = one.filter(item => two.includes(item));
    return commonItems
  }
  
  // Feel free to uncomment the code below to test your function
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ];


// Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

// {name: 'cabbage', source: 'plant' }

// and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

// const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

// isTheDinnerVegan(meal); // Should return true

// Write your code here:
const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant')

// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false



// Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

// {speciesName: 'shark', numTeeth: 50 }

// and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

// You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().

// You can test your function when you’re ready by passing in the speciesArray array or by making your own!

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

/*
// As a function declaration AND using a named function:
function sortSpeciesByTeeth(arr) {
      const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
      return arr.sort(compareTeeth)
}
*/
console.log(sortSpeciesByTeeth(speciesArray));


// Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

/*
// Alternate solution:
// As a function declaration using a loop:
function findMyKeys(arr) {
      let index = -1;
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'keys') {
                  index = i
                  break
            }
      }
      return index
}
*/
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
console.log(findMyKeys(randomStuff));


// 1.
// Write a function, dogFactory(). It should:
// have 3 parameters: name, breed, and weight (in that order)
// expect name and breed to be strings
// expect weight to be a number
// return an object
// have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
// dogFactory('Joe', 'Pug', 27)
// // Should return { name: 'Joe', breed: 'Pug', weight: 27 }


// 2.
// Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

// 3.
// Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

// Final solution:
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    }
}

/*
// Solution to checkpoint 1:
const dogFactory = (name, breed, weight) => {
      return {
            name: name,
            breed: breed,
            weight: weight
      }
}

// Solution to checkpoint 2:
const dogFactory = (name, breed, weight) => {
      return {
            _name: name,
            _breed: breed,
            _weight: weight,
            get name() {
                  return this._name;
            },
            set name(newName) {
                  this._name = newName;
            },
            get breed() {
                  return this._breed;
            },
            set breed(newBreed) {
                  this._breed = newBreed;
            },
            get weight() {
                  return this._weight;
            },
            set weight(newWeight) {
                  this._weight = newWeight;
            }
      }
}

*/

  