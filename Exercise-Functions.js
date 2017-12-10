
function add(a, b) {
  return a + b;
}
(1,2)
add(1, 2) 
3


var message = "Outer";
function getMessage() {
  return message;
}
"Outer"
function overrideMessage() {
  var message = "Inner";
  return message;
}

getMessage()
"inner"
overrideMessage()
"Outer"
    
message
"Outer"

var variable = "top-level";
function parentfunction() {
  var variable = "local";
  function childfunction() {
    return variable;
  }
  return childfunction();
}

parentfunction()
"local"

makeMysteryFunction(makerValue) {
  var newFunction = function doMysteriousThing(param) {
    return makerValue + param;
  };
  return newFunction;
};

var mysteryFunction3 = makeMysteryFunction(3);
var mysteryFunction5 = makeMysteryFunction(5);

mysteryFunction3(10) + mysteryFunction5(5)
???


function returnFirstArg(firstArg) {
  return firstArg;
}

returnFirstArg("first", "second", "third")
???


function returnSecondArg(firstArg, secondArg) {
  return secondArg;
}

returnSecondArg("only give first arg")



function returnAllArgs() {
  var argsArray = [];
  for (var i = 0; i < arguments.length; i += 1) {
    argsArray.push(arguments[i]);
  }
  return argsArray.join(",");
}

returnAllArgs("first", "second", "third")
???


var appendRules = function(name) {
  return name + " rules!";
};

var appendDoubleRules = function(name) {
      return name + " totally rules!";
};

var praiseSinger = { givePraise: appendRules };
praiseSinger.givePraise("John")
???

praiseSinger.givePraise = appendDoubleRules;
praiseSinger.givePraise("Mary")
???