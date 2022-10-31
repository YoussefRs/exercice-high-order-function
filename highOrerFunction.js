//=======================================================================
/*                            UTIL FUNCTIONS                           */
//=======================================================================

function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  
  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=======================================================================
  /*                               EXERCISES                              */
  //=======================================================================
  
  // Solve the following functions using High Order Functions:
  
  /*****************************  1  ***********************/
  // write a function called addOne that takes an array of numbers as an input,
  // and returns a new array with all array elements incremented by one as an output
  // addOne( [1,2,3,4] ) ==> [2,3,4,5]
  // addOne( [3,6,9] ) ==> [4,7,10]
  
  // Note: using MAP
  var map = array => {
    return array.map(el => el+el)
}
  
  /*****************************  2  ***********************/
  // Take an array and remove every second element out of that array.
  // Always keep the first element and start removing with the next element.
  // Example:
  // myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
  // Sample output: removeEveryOther([1, 12, 3, 44, 10, 6, 17]) => [1, 3, 10, 17]
  // None of the arrays will be empty, so you don't have to worry about that!
  
  // Note: using FILTER
  var removeEVeryOther = array => {
    return array.filter((el,i) => i%2 === 0? true : false)
}
  
  
  /*****************************  3  ***********************/
  // use map to write the following functions
  
  var double = nums =>{
    return nums.map((el) => el *2)
  }
  var squarAll = array => {
    return array.map(el => el*el)
}
var stringLengths = array => {
  return array.map(el => el.length)

    // example: ["hello", "how", "are", "you", "doing?"] => [5, 3, 3, 3, 6]
  }
  
  /*****************************  4  ***********************/
  // use filter to write the following functions
  
  var odds = array => {
    return array.filter(el => el%2 != 0 ? true : false)
}
var positive = array => {
  return array.filter(el => el > 0 ? true : false)
}
var postive = array => {
  return array.filter(el => el < 0 ? true : false)
}
  var evenLength = array => {
    return array.filter((el,i) => i%2 === 0 ? true : false)
}
var largerThanSix = array => {
  return array.filter(el => el > 6 ? true : false)
}
  
  /*****************************  5  ***********************/
  // use reduce to write the following functions
  
  var sum = array => {
    return array.reduce((acc,next) => acc + next)
}
  
var product = array => {
  return array.reduce((acc,next) => acc * next)
}
  
var allOdds = array => {
  return array.reduce((acc,next) => (acc+next)%2===0 ? true : false)
}
  
var sqr = array => {
  return array.map(el => el**=2).reduce((acc,nx)=> acc+nx)
}
  // NOTE: the square sum function so that it squares each number passed into it and then sums the results together.
  // For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
  
  /*****************************  6  ***********************/
  // Write a function called map2 that accepts two arrays and a function as arguments, and constructs
  // a new array by invoking its function argument on the elements of both arrays, e.g.:
  
  //  map2([1, 2, 3], [4, 5, 6], function(a, b) {
  //        return a * b;
  //  });
  //  => [4, 10, 18]
  
  function map2(arr1, arr2, callback) {
    // TODO: your work goes here
  }

  var v = (arr1,arr2) => {
    return arr1.flatMap((el,i)=>[el*arr2[i]]);
}