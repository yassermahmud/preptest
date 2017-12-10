
var emptyArray = [];
emptyArray.length
???

multiTypeArray = [0, 1, "two", 
                function () { return 3; }, 
                {value1: 4, value2: 5}, [6, 7]];

multiTypeArray[0]
???

multiTypeArray[2]
???

multiTypeArray[3]()
???

multiTypeArray[4].value1
???
    
multiTypeArray[4]["value2"]
???

multiTypeArray[5][0]
???

var array = [];
array[0] = 1;
array
???

array[1] = 2;
array
???

array.push(3);
array
???

var fourNumberArray = [1, 2, 3, 4];
fourNumberArray.length
???

fourNumberArray.push(5, 6);
fourNumberArray.length
???

tenEmptyElementArray = new Array(10);
tenEmptyElementArray.length
???

tenEmptyElementArray.length = 5;
tenEmptyElementArray.length
???

var array = ["peanut", "butter", "and", "jelly"];
array.slice(0, 1)
???

array.slice(0, 2)
???

array.slice(2, 2)
??? 

array.slice(2, 20)
???

array.slice(3, 0)
???

array.slice(3, 100)
???

array.slice(5, 1)
???

var array = [ "zero", "one", "two", "three", "four", "five" ];
function passedByReference(refArray) {
  refArray[1] = "changed in function";
}
???

passedByReference(array);
array[1]
???

var assignedArray = array;
assignedArray[5] = "changed in assignedArray";
array[5]
???

var copyOfArray = array.slice()
copyOfArray[3] = "changed in copyOfArray";
array[3]
???
  
var array = [1, 2];
array.push(3);
array
???

var poppedValue = array.pop();
poppedValue
???

array
???

var array = [1, 2];
array.unshift(3);
array
???

shiftedValue = array.shift();
shiftedValue
???

array
???
