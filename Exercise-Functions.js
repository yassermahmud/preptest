
function add(a, b) {
  return a + b;
}

add(1, 2) 
3


var message = "Outer";
function getMessage() {
  return message;
}
function overrideMessage() {
  var message = "Inner";
  return message;
}

getMessage()
undefined

overrideMessage()
"Inner"
    
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
undefined


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
"first",


function returnSecondArg(firstArg, secondArg) {
  return secondArg;
}

returnSecondArg("only give first arg")
undefined


function returnAllArgs() {
  var argsArray = [];
  for (var i = 0; i < arguments.length; i += 1) {
    argsArray.push(arguments[i]);
  }
  return argsArray.join(",");
}

returnAllArgs("first", "second", "third")
"first,second,third"


var appendRules = function(name) {
  return name + " rules!";
};

var appendDoubleRules = function(name) {
      return name + " totally rules!";
};

var praiseSinger = { givePraise: appendRules };
praiseSinger.givePraise("John")
"Johan rules"

praiseSinger.givePraise = appendDoubleRules;
praiseSinger.givePraise("Mary")
"Marry totally"