function openNav() {
    document.getElementById("set").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("set").style.height = "0%";
}

function fontchange(n){
    var paragraph = document.getElementById('wrapper1');
    paragraph.style.fontSize = n + "px";
}

var buttons = document.querySelector(".buttons");
var button1 = buttons.querySelectorAll(".button");

for(var i = 0; i < button1.length; i++){
    button1[i].addEventListener('click', function(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active", "");
        this.className += " active"
    })
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
        if (seconds < 10) {
            display.style.color = "red";
        }
        if (seconds == 0) {
            document.getElementById("gameover-screen").style.display = "block";
            score.innerHTML = output.innerHTML;
        }
    }, 1000);

    var disabled = document.getElementById("word").disabled;
    
    if (disabled) {
        document.getElementById("word").disabled = false;
    }
    else {
        document.getElementById("word").disabled = true;
    }
}

function buttonStart() {
    var time = 45 , 
        display = document.querySelector("#start");
    startTimer(time, display);
}

var letter8 = document.getElementById("letter8").value;
if (letter8 == "") {
    document.getElementById("word").disabled = true;
} else {
    document.getElementById("word").disabled = false;
}


var letteridx = 1;

let vowel = document.getElementById('vowel-button');
let consonant = document.getElementById('consonant-button');

vowel.addEventListener("click", function() {
    addletter("vowel-button");
});

consonant.addEventListener("click", function() {
    addletter("consonant-button");
});


function addletter(id) {

    switch(id) {

      case 'vowel-button': document.querySelector('#letter' + letteridx).innerHTML = RandomVowel(); 
      break;  

      case 'consonant-button':  document.querySelector('#letter' + letteridx).innerHTML = RandomCons(); 
      break;  
    } 
    letteridx ++;  
} 

function RandomVowel() {
    const vowels = ["A", "I", "E", "O", "U"];
    const randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
    
    return randomVowel;
}

function RandomCons() {
    const cons = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "T", "Z"];
    const randomCons = cons[Math.floor(Math.random() * cons.length)];

    return randomCons;
}

function printRand() {
    let ul = document.getElementById("box1");
    let items = ul.getElementsByTagName("li"); 
    for (var i = 0; i <= items.length; i++)  {
       items[i].textContent = Random();            
    }
    return false;
}

function Random() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "U", "Q", "R", "S",
     "T", "V", "W", "X", "T", "Z"];
    const random = letters[Math.floor(Math.random() * letters.length)];

    return random;
}

var output = document.getElementById("output");
var input = document.getElementById("word");
var score = document.getElementById("score");

function checkword() {
    let x = document.getElementById('word').value;
    let err = document.getElementById('err');
    regex=/^[a-zA-Z]+$/;
    if (x=="") {
        err.innerHTML = "*empty field";
        word.className = 'error';
        err.className = 'error';
        return false;
    } else if(!x.match(regex)) {
        err.innerHTML = "*invalid input";
        word.className = 'error';
        err.className = 'error';
        return false;     
    } else {
        output.innerHTML += "<br>" + input.value + " (" + input.value.length + " points)";
        input.value = "";
    }
}    

