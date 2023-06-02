// alert("Can you wirght a comment");
// var comment = prompt("Wright your comment");
// alert("You have wright " + comment.length + " charrector. You can wright " + (450 - prompt.length) + " also.");

// var call = "Hello"
// var name = "Tamim"
// alert (call + " there!" + " I am " + name);

// alert("Wright your code in here");
// var mytweet = prompt("Wright your tweet");
// var mytweet140 = mytweet.slice(0,140);
// alert(mytweet140);
// to uppercacse 
// var name = ("Tamim");
// name = name.toUpperCase();
// name = name.toLocaleLowerCase();

var myName = prompt("What is your Name");
var firstPartName = myName.slice(0,1);
var capitalName = firstPartName.toUpperCase();
var lastPartName = myName.slice(1,myName.length);
var smallLastPart = lastPartName.toLocaleLowerCase();
var finalName = (capitalName + smallLastPart);
alert("Your Name is " + finalName);