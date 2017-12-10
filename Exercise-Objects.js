
var megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };

megalomaniac.mastermind
???

megalomaniac.henchwoman
???

megalomaniac.henchWoman
???


var megalomaniac = {
  mastermind : "Brain",
  henchman: "Pinky",
  battleCry: function (noOfBrains) {
    return "They are " + this.henchman + " and the" + Array(noOfBrains + 1).join(" " + this.mastermind);
  }
};

var battleCry = megalomaniac.battleCry(4);
battleCry
???

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
???

megalomaniac.calculateAge()
???