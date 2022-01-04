var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,0,2,0,0,0,2,1,2],
    [2,1,1,2,1,2,1,2,1,2],
    [2,1,1,2,1,2,1,2,1,2],
    [2,1,1,2,1,2,1,2,0,2],
    [2,1,1,2,1,2,1,2,0,2],
    [2,0,0,2,1,2,1,2,0,2],
    [2,0,0,2,1,2,1,2,1,2],
    [2,0,0,2,2,2,1,2,1,2],
    [2,0,0,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];

function displayWorld(){
    var output = '';
    for (var i=0; i<world.length; i++){
        output += "<div class='row'>"
        for (var j=0; j<world[i].length; j++){
            if (world[i][j]==2){
                output += "<div class='brick'></div>"
            }
            else if (world[i][j]==1){
                output += "<div class='coin'></div>"
            }
            else if (world[i][j]==0){
                output += "<div class='empty'></div>"
            }
        }
        output += "</div>"
    }
    document.getElementById("world").innerHTML = output;
}

function updateScore(){
    scoreElement.innerHTML = score;
}

displayWorld();

pacElement = document.getElementById('pacman');
pacPosition = [1,1]
pacman = {
    top: 20,
    left: 20,
    nextTop: 20,
    nextLeft: 20,
    moving: false
}


scoreElement = document.getElementById('score');
scoreElement.style.left = 20*world[0].length+10 + "px"
score = 0;

var arrows = {
    ArrowUp :    [-1, 0, 270],
    ArrowRight : [ 0, 1,   0],
    ArrowDown :  [ 1, 0,  90],
    ArrowLeft :  [ 0,-1, 180]
}
var v;
var currentArrow;
var proposedV;
var proposedArrow;

function movePacman() {
    pacman.moving = true;
    if (world[nextPacPosition[0]][nextPacPosition[1]] == 1){
        score += 10;
        updateScore();
    }
    world[nextPacPosition[0]][nextPacPosition[1]] = 0;
    pacman.top = 20*pacPosition[0];
    pacman.left = 20*pacPosition[1];
    pacman.nextTop = 20*nextPacPosition[0];
    pacman.nextLeft = 20*nextPacPosition[1];
    pacPosition = nextPacPosition;
    pacman.nextTop = 20*pacPosition[0];
    pacman.nextLeft = 20*pacPosition[1];
    pacElement.style.transform = 'rotate('+currentArrow[2]+'deg)';
    displayWorld();
}

function pacControl(){
    if (currentArrow == undefined){
        currentArrow = proposedArrow;
    }
    v = proposedArrow;
    proposedPacPosition = [pacPosition[0]+v[0],pacPosition[1]+v[1]];
    v = currentArrow;
    nextPacPosition = [pacPosition[0]+v[0],pacPosition[1]+v[1]];
    if (world[proposedPacPosition[0]][proposedPacPosition[1]] != 2){
        currentArrow = proposedArrow;
        nextPacPosition = proposedPacPosition;
        movePacman();
    } else if (world[nextPacPosition[0]][nextPacPosition[1]] != 2){
        movePacman();
    } else {
        pacman.moving = false;
    }
}

document.onkeydown = function(e){
    proposedArrow = arrows[e.key];
}

updateInterval = 20; // time interval to update pacman animation (ms)
pacmanSpeed = 240;    // time interval for pacman to move one unit (ms)
time = 0;
setInterval( function() {
    time += updateInterval
    if (pacman.moving == true){
        dTop = Math.round((pacman.nextTop - pacman.top)*time/pacmanSpeed)
        dLeft = Math.round((pacman.nextLeft - pacman.left)*time/pacmanSpeed)
        pacElement.style.top = pacman.top + dTop + "px"
        pacElement.style.left = pacman.left + dLeft + "px"
    }
    if (time >= pacmanSpeed && proposedArrow != undefined){
        time = 0;
        pacControl();
    }
}, updateInterval);