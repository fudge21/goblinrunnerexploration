var character = document.getElementById("character")
var block = document.getElementById("block")
var tree = document.getElementById("tree")
var info = document.getElementById("info")
var scoretext = document.getElementById("score")
var highscoretext = document.getElementById("highscore")
var running = false
var highscore = 0
var score = 0

if (localStorage.getItem('HighScore') == null) {

} else {
    if (localStorage.getItem('HighScore') >= 100000) {
        localStorage.setItem('HighScore', 0);
    }
    var HighScore = Number(localStorage.getItem('HighScore'));
}

/* Storing user's device details in a variable*/
       let details = navigator.userAgent;
  
        /* Creating a regular expression 
        containing some mobile devices keywords 
        to search it in details string*/
        let regexp = /android|iphone|kindle|ipad/i;
  
        /* Using test() method to search regexp in details
        it returns boolean value*/
        let isMobileDevice = regexp.test(details);
  
        if (isMobileDevice) {
            var device = "Mobile";
        } else {
            var device = "Computer";
        }

function jump() {
    if (character.classList !="animate") {
        character.classList.add("animate")
    }
    
    setTimeout(function(){
        character.classList.remove("animate")
    },500)
    
}
window.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        if (block.classList !="move") {
            Running = true
            info.innerHTML = `Press space, Up Arrow, or click to jump`;
            block.classList.add("move")
            block.classList.add("tree")
        }
    }
  }, false);

window.addEventListener('keydown', function (e) {
    if (e.key == " ") {
        jump()
    }
    if (e.key == "ArrowUp") {
        jump()
    }
  }, false);

//var iskeyPressed = setInterval(function() {
  //  if (ScriptUI.environment.keyboardState.spaceKey = true) {
    //    jump()
    //}
//},10)

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    if (blockLeft < 20 &&  blockLeft > 0 && characterTop >= 130){
        //block.style.animation = "none"
        info.innerHTML = `Click ok or press Enter to continue `;
        block.classList.remove("move")
        tree.classList.remove("move")
        Running = false
        score = 0
        alert("Bro U so lame. why u so bad man.. ur ugly t00. ")
        info.innerHTML = `Press Enter to start`;
    }
},10)

var ScoreFunction = setInterval(function(){
    if (Running == true) {
        score += 1
        scoretext.textContent = "Score: " + score
        if (score >= highscore) {
            highscore = score
        }
        highscoretext.textContent = "HighScore: " + highscore
        localStorage.setItem('HighScore', highscore);
    }
},1000)

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
  }
  
window.onresize = reportWindowSize;
