
function add(a, b) {
  return a + b;
}

add(1, 2) 
Ans:3


var message = "Outer";
function getMessage() {
  return message;
}
function overrideMessage() {
  var message = "Inner";
  return message;
}

getMessage()
Ans:"outer"

overrideMessage()
Ans:"inner"
    
message
Ans:"outer "

var variable = "top-level";
function parentfunction() {
  var variable = "local";
  function childfunction() {
    return variable;
  }
  return childfunction();
}

parentfunction()
Ans:"local"


makeMysteryFunction(makerValue) {
  var newFunction = function doMysteriousThing(param) {
    return makerValue + param;
  };
  return newFunction;
};

var mysteryFunction3 = makeMysteryFunction(3);
var mysteryFunction5 = makeMysteryFunction(5);

mysteryFunction3(10) + mysteryFunction5(5)
Ans:23


function returnFirstArg(firstArg) {
  return firstArg;
}

returnFirstArg("first", "second", "third")
Ans:"first"


function returnSecondArg(firstArg, secondArg) {
  return secondArg;
}
Ans:"first""second"

returnSecondArg("only give first arg")
Ans:


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
Ans:"john rules"

praiseSinger.givePraise = appendDoubleRules;
praiseSinger.givePraise("Mary")
Ans:"Mary totally rules"