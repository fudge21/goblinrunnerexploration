var character = document.getElementById("character")
var block = document.getElementById("block")
var tree = document.getElementById("tree")
var info = document.getElementById("info")
var gameBox = document.getElementById("game")
var scoretext = document.getElementById("score")
var highscoretext = document.getElementById("highscore")
var running = false
var highscore = localStorage.getItem('HighScore')
var score = 0
var speed = 2000



function start() {
    if (block.classList !="move") {
        running = true
        speed = 2000
        info.innerHTML = `Press space, Up Arrow, or click to jump`;
        block.classList.add("move")
        block.style.animationDuration = speed+"ms";
        tree.classList.add("tree")
    }
}

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

if (isMobileDevice) {
    document.getElementById("start").style.display = "block";
}



function jump() {
    console.log("jump!")
    if (character.classList !="animate") {
        character.classList.add("animate")
    }
    
    setTimeout(function(){
        character.classList.remove("animate")
    },500)
    
}

block.addEventListener("animationend", function () {
    speed-=15
    block.style.animationDuration = speed+"ms";
    console.log("New Speed: "+speed+"ms")
});

gameBox.addEventListener("mousedown", jump)

window.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        if (block.classList !="move") {
            running = true
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
        running = false
        score = 0
        //alert("Bro U so lame. why u so bad man.. ur ugly t00. ")
        info.innerHTML = `Press Enter to start`;
    }
},10)

var ScoreFunction = setInterval(function(){
    if (running == true) {
        score += 1
        scoretext.textContent = "Score: " + score
        if (score >= highscore) {
            highscore = score
        }
        highscoretext.textContent = "HighScore: " + highscore
        localStorage.setItem('HighScore', highscore);
    }
    //speed-=15
    //block.style.animationDuration = speed+"ms";
    // info.innerHTML = speed;
},1000)

// var speedchange = setInterval(function(){
//     if (running == true) {
        
//         info.innerHTML = speed;
//     }
    
// },speed)

