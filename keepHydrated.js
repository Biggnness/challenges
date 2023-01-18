// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//My Solution

function litres(time) {
    let litres = time * 0.5 //declrare variable and mutiply by 0.5
    return Math.floor(litres); //function rounds to the smallest 
  }
  console.log(litres(3));

  //Other Solution - Single Line

 // const litres = time => Math.floor(time * 0.5);
