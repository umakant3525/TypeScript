var ranks;
(function (ranks) {
    ranks["first"] = "first";
    ranks[ranks["second"] = 222] = "second";
    ranks[ranks["third"] = 223] = "third";
    ranks[ranks["fourth"] = 224] = "fourth";
})(ranks || (ranks = {}));
console.log(ranks.first);
console.log(ranks.second);
console.log(ranks.third);
console.log(ranks.fourth);


var mynum = 3 /* tranks.tfourth */;
console.log(mynum);
