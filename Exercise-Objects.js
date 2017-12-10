
var megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };

megalomaniac.mastermind
Ans:"joker"

megalomaniac.henchwoman
Ans:"Harley"

megalomaniac.henchWoman
undefined


var megalomaniac = {
  mastermind : "Brain",
  henchman: "Pinky",
  battleCry: function (noOfBrains) {
    return "They are " + this.henchman + " and the" + Array(noOfBrains + 1).join(" " + this.mastermind);
  }
};

var battleCry = megalomaniac.battleCry(4);
battleCry
Ans:"they are pinky and the brain =5"

var currentDate = new Date();
var currentYear = (currentDate.getFullYear());
var megalomaniac = {
  mastermind: "James Wood",
  henchman: "Adam West",
  birthYear: 1970,
  calculateAge: function () {
    return currentYear - this.birthYear;
  }
};

currentYear
Ans:2017

megalomaniac.calculateAge()
Ans:47