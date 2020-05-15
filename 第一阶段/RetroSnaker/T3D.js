is3D = true;
toward = {DOWN:{x:0, y:1, rotateY:0},LEFT:{x:-1, y:0, rotateY:45},UP:{x:0, y:-1, rotateY:90},RIGHT:{x:1, y:0, rotateY:-45}};
var T3D_X = 1;
var T3D_Y = 0.7;

function repaint3D() {
    for (var i = 0 ; i < snack.length ; i ++) {
        for (var j = 0 ; j < snack[i].snackBody.length ; j ++) {
            snack[i].snackBody[j].style.display = "block";
            snack[i].snackBody[j].style.left = snack[i].snackBody[j].lx * T3D_X - 10 + "px";
            snack[i].snackBody[j].style.top = snack[i].snackBody[j].ly * T3D_Y - 10 + "px";
            snack[i].snackBody[j].style.zIndex = snack[i].snackBody[j].ly;
        }
        snack[i].snackBody[0].getElementsByClassName("circle")[0].getElementsByTagName("span")[0].innerText = "囧";
        snack[i].snackBody[0].style.zIndex = "999";
        snack[i].snackBody[0].getElementsByClassName("circle")[0].getElementsByTagName("span")[0].style.transform = "rotateY(" + snack[i].nowToward.rotateY + "deg)";
    }
    for (var i = 0 ; i < things.length ; i ++) {
        things[i].style.display = "block";
        things[i].style.left = things[i].lx * T3D_X - 10 + "px";
        things[i].style.top = things[i].ly * T3D_Y - 10 + "px";
    }
}

function changeTo3D() {
    is3D = true;
    chessBoard.style.width = "500px"
    chessBoard.style.height = "350px"
    chessBoard.style.transition = "transform 2s";
    chessBoard.style.transform = "skew(-45deg)";
    T3D_Y = 0.7;
    T3D_X = 1;
    for (var i = 0 ; i < squareSet.length ; i ++) {
        for (var j = 0 ; j < squareSet[i].length ; j ++) {
            squareSet[i][j].style.width = "20px";
            squareSet[i][j].style.height = "14px";
            // squareSet[i][j].style.transform = "skew(-45deg)";
        }
    }
    for (var i = 0 ; i < snack.length ; i ++) {
        for (var j = 0 ; j < snack[i].snackBody.length ; j ++) {
            snack[i].snackBody[j].style.transition = "transform 2s";
            rendering3D(snack[i].snackBody[j]);
        }
        snack[i].snackBody[0].getElementsByClassName("circle")[0].getElementsByTagName("span")[0].style.transform = "rotateY(" + snack[i].nowToward.rotateY + "deg)";
    }
    for (var i = 0 ; i < things.length ; i ++) {
        things[i].style.display = "block";
        things[i].style.transform = "skew(0deg)";
        things[i].style.transition = "transform 2s";
        things[i].style.transform = "skew(45deg)";
        // things[i].getElementsByClassName("over_circle")[0].style.backgroundImage = "radial-gradient(circle at center, white, blueviolet)";
        things[i].getElementsByClassName("shadow")[0].style.display = "inline-block";
    }
    repaint();
}

function rendering3D(obj, color) {
    obj.style.transform = "skew(45deg)";
    obj.getElementsByClassName("over_circle")[0].style.backgroundImage = "radial-gradient(circle at center, white, " + color + ")";
    obj.getElementsByClassName("shadow")[0].style.display = "inline-block";
}