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

// var myName = prompt("What is your Name");
// var firstPartName = myName.slice(0,1);
// var capitalName = firstPartName.toUpperCase();
// var lastPartName = myName.slice(1,myName.length);
// var smallLastPart = lastPartName.toLocaleLowerCase();
// var finalName = (capitalName + smallLastPart);
// alert("Your Name is " + finalName);

// Dog age to Human age formula
// human age = (dogAge -2) *4 +21
// var dogAge = prompt("How old is your Dog?");
// var humanAge = ((dogAge -2) *4) +21;
// var outPut = alert("Your dog is " + humanAge + " years old in human years.");
// function getMilk(bottle) {
//     console.log("Go to Fridge");
//     console.log("Take " + bottle + " bottles of milk");    
//     console.log("and give it to me");}
// getMilk(2);

// function getMilk(bottle) {
//     console.log("Go to Shop and");
//     console.log("give " + (bottle * 1.5) + " USD for all bottles of milk");    console.log("and give it to me");}
// getMilk(2);

function calculateLovePercentage() {
    var person1 = document.getElementById("person1").value;
    var person2 = document.getElementById("person2").value;
    var min = 74;
    var max = 96;
    var lovePercentage = Math.floor(Math.random() * (max - min + 1)) + min;
    //   var lovePercentage = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100

    var resultElement = document.getElementById("result");
    resultElement.textContent = person1 + " and " + person2 + " love percentage is " + lovePercentage + "%";
}

// // <!-- // Generate a random number between 74 and 96
// var min = 74;
// var max = 96;
// var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

// // Output the random number
// console.log(randomNumber); -->


// love score by if else
// prompt("Type your name");
// prompt("Type your movers name");

// var calLove = Math.random() *100;
// calLove = Math.floor(calLove) +1;

// if (calLove > 74){
//     alert("Your love score " + calLove + " % is so good.");
// }
// else{
//     alert("Your love score " + calLove + " %");
// }
