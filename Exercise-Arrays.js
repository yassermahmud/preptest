
var emptyArray = [];
emptyArray.length
0

multiTypeArray = [0, 1, "two", 
                function () { return 3; }, 
                {value1: 4, value2: 5}, [6, 7]];

multiTypeArray[0]
0

multiTypeArray[2]
'two'

multiTypeArray[3]()
3

multiTypeArray[4].value1
4
    
multiTypeArray[4]["value2"]
5

multiTypeArray[5][0]
6

var array = [];
array[0] = 1;
array
[1]

array[1] = 2;
array
[1,2]

array.push(3);
array
[1,2,3]

var fourNumberArray = [1, 2, 3, 4];
fourNumberArray.length
4

fourNumberArray.push(5, 6);
fourNumberArray.length
6

tenEmptyElementArray = new Array(10);
tenEmptyElementArray.length
10

tenEmptyElementArray.length = 5;
tenEmptyElementArray.length
5

var array = ["peanut", "butter", "and", "jelly"];
array.slice(0, 1)
['peanut']

array.slice(0, 2)
['peanut', 'butter']

array.slice(2, 2)
[]

array.slice(2, 20)
['and', 'jelly']

array.slice(3, 0)
[]

array.slice(3, 100)
['jelly']

array.slice(5, 1)
[]

var array = [ "zero", "one", "two", "three", "four", "five" ];
function passedByReference(refArray) {
  refArray[1] = "changed in function";
}

passedByReference(array);
array[1]
'changed in function'

var assignedArray = array;
assignedArray[5] = "changed in assignedArray";
array[5]
'changed in assignedArray'

var copyOfArray = array.slice()
copyOfArray[3] = "changed in copyOfArray";
array[3]
'three'
  
var array = [1, 2];
array.push(3);
array
[1, 2, 3]

var poppedValue = array.pop();
poppedValue
[1, 2]

array
[1, 2, 3]

var array = [1, 2];
array.unshift(3);
array
[3, 1, 2]

shiftedValue = array.shift();
shiftedValue
3

array
[3, 1, 2]
