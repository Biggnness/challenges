// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//My solution

function invert(array) {
    // return Math.abs(array));
    let place = [] // declare an array
    for(let i = 0; i < array.length; i++){ //iterate through the array with for loop
      if(array[i] > 0){ //target the elements to interate through and set conditionals
        place.push(array[i] - (array[i] * 2)); //if condiitons are met push resut to new array to be seen
      } else if(array[i] < 0){
        place.push(Math.abs(array[i]));
      }  else{
        place.push(-0);
      }
    }
    return place;
  }
  
  
  console.log(invert([-1,-2,3,4, -5]))

  //Other solutions

//   const invert = array => array.map(num => -num);
  