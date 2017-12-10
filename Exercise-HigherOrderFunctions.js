var numbers = [1,2,3];
var res = numbers.filter(function (x) { return x % 2 !== 0 });
res
[1, 3]

res.length
2

numbers.length
3

var numbers = [1, 2, 3];
var numbersPlus = numbers.map(function(x) { return x + 1 });
numbersPlus
[2, 3, 4]

numbers
[1, 2, 3]