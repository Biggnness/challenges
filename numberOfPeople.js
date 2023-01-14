// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

//My solution

let number = function(busStops){
    // Good Luck!
    //Use reduce to get the sum
    //We need to take in an array the adds to the bus and removes from the bus
    return busStops.reduce((rem,[onBus, offBus]) => rem + onBus - offBus, 0)
  }