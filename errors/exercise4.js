let numbers = { a: 13, b: 37, c: 42 };

// numbers.map(function (num) {
//     return num * 2;
// });

Object.keys(numbers).map(function(key, index) {
    numbers[key] *= 2;
  });


