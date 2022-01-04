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
scoreElement = document.getElementById('score');
scoreElement.style.left = 20*world[0].length+10 + "px"
pacPosition = [1,1]
score = 0;

var arrows = {
    ArrowUp :    [-1, 0, 270],
    ArrowRight : [ 0, 1,   0],
    ArrowDown :  [ 1, 0,  90],
    ArrowLeft :  [ 0,-1, 180]
}

document.onkeydown = function(e){
    v = arrows[e.key]
    nextPacPosition = [pacPosition[0]+v[0],pacPosition[1]+v[1]];
    if (world[nextPacPosition[0]][nextPacPosition[1]] != 2){
        if (world[nextPacPosition[0]][nextPacPosition[1]] == 1){
            score += 10;
            updateScore();
        }
        world[nextPacPosition[0]][nextPacPosition[1]] = 0;
        pacPosition = nextPacPosition;
        pacElement.style.top = 20*pacPosition[0] + "px";
        pacElement.style.left = 20*pacPosition[1] + "px";
        pacElement.style.transform = 'rotate('+v[2]+'deg)';
        displayWorld();
    }
}