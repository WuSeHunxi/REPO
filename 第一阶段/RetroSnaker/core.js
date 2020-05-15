var chessBoard;
var squareSet;

var toward = {DOWN:{x:0, y:1},LEFT:{x:-1, y:0},UP:{x:0, y:-1},RIGHT:{x:1, y:0}};

var mainSnack;
var mainSnackColor = "#6495ED";
var snack = [];

var maxThingSize = 20;
var things = [];

var frame = 40;

var is3D = false;
var hasAI = false;
var isStart = false;
var timer;

var allowCrashSelf = true;

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function Snack(headX, headY, nowToward, length, bgColor) {
    this.snackBody = [];
    this.nowToward = nowToward;
    this.headMoveX = nowToward.x;
    this.headMoveY = nowToward.y;
    this.bgColor = bgColor;
    this.changeToward = null;
    this.changeNextStation = 0;
    this.init = function (headX, headY, length, bgColor) {
        for (var i = 0 ; i < length ; i ++) {
            this.grow(headX, headY, bgColor);
        }
    }
    this.grow = function (headX, headY, bgColor) {
        var ball;
        if (this.snackBody.length == 0) {
            ball = createBall(headX, headY, "&nbsp;", bgColor);
        } else if (this.snackBody[this.snackBody.length - 1].point.length == 0) {//没有拐点，遵从蛇头方向
            var lastBody = this.snackBody[this.snackBody.length - 1];
            ball = createBall(lastBody.lx + -1 * this.nowToward.x * 20, lastBody.ly + -1 * this.nowToward.y * 20, "&nbsp;", bgColor);
        } else {//有拐点，遵循拐点方向
            var lastBody = this.snackBody[this.snackBody.length - 1];
            var point = lastBody.point[0];
            ball = createBall(lastBody.lx + -1 * point.speedX * 20, lastBody.ly + -1 * point.speedY * 20, "&nbsp;", bgColor);
            ball.point = clone(lastBody.point);
        }
        this.snackBody.push(ball);
    }
    this.turnUp = function () {
        this.nowToward = toward.UP;
        change(this, 0,-1);
    }
    this.turnDown = function () {
        this.nowToward = toward.DOWN;
        change(this, 0,1);
    }
    this.turnLeft = function () {
        this.nowToward = toward.LEFT;
        change(this, -1,0);
    }
    this.turnRight = function () {
        this.nowToward = toward.RIGHT;
        change(this, 1,0);
    }
    this.over = function () {
        if (mainSnack == this) {
            clearInterval(timer);
            alert("游戏结束");
        } else {
            for (var i = 0 ; i < this.snackBody.length ; i ++) {
                // console.log(this.snackBody[i]);
                chessBoard.removeChild(this.snackBody[i]);
                this.snackBody[i].display = "none";
                thingFactory.createThing(this.snackBody[i].lx, this.snackBody[i].ly, thingFactory.typeEnums.food, )
            }
        }
    }
    this.init(headX, headY, length, bgColor);
}

var thingFactory = {
    autoGenerateTimer: null,
    typeEnums: {
        food: {
            name: "food", value:2, text: "+", bgColor: "#228B22", fgColor: "black",
            act:function (origin) {
                origin.grow(null, null, origin.bgColor);
            }
        }
    },
    createThing : function (x, y, type) {
        var temp = createBall(x, y, type.text, type.bgColor, type.fgColor);
        temp.value = type.value;
        temp.act = this.typeEnums.food.act;
        things.push(temp);
        return temp;
    },
    randomGenerate: function () {
        var x = parseInt(Math.random() * 480);
        var y = parseInt(Math.random() * 480);
        var temp = createBall(x, y, this.typeEnums.food.text, this.typeEnums.food.bgColor, this.typeEnums.food.fgColor);
        temp.act = this.typeEnums.food.act;
        things.push(temp);
    },
    autoGenerate: function () {
        this.autoGenerateTimer = setInterval(function () {
            if (things.length < maxThingSize) {
                thingFactory.randomGenerate();
            }
        }, 1000);
    }
}

function createBall(x, y, text, bgColor, fgColor) {
    var ball = document.createElement("div");
    var shadow = document.createElement("div");
    var circle = document.createElement("div");
    var over = document.createElement("div");
    var textDiv = document.createElement("span");
    textDiv.innerHTML = text;
    circle.appendChild(over);
    circle.appendChild(textDiv);
    ball.appendChild(shadow);
    ball.appendChild(circle);
    over.classList.add("over_circle");
    circle.classList.add("circle");
    shadow.classList.add("shadow");
    ball.classList.add("ball");

    if (bgColor) {
        ball.bgColor = bgColor;
    } else {
        ball.bgColor = mainSnackColor;
    }

    if (is3D) {
        rendering3D(ball, ball.bgColor);
    } else {
        over.style.background = ball.bgColor;
    }

    if (fgColor) {
        textDiv.style.color = fgColor;
    }
    ball.lx = x;
    ball.ly = y;
    ball.point = [];
    chessBoard.appendChild(ball);
    return ball;
}

function repaint() {
    if (is3D) {
        repaint3D();
    } else {
        for (var i = 0 ; i < snack.length ; i ++) {
            for (var j = 0 ; j < snack[i].snackBody.length ; j ++) {
                snack[i].snackBody[j].style.left = snack[i].snackBody[j].lx + "px";
                snack[i].snackBody[j].style.top = snack[i].snackBody[j].ly + "px";
                snack[i].snackBody[j].style.display = "block";
            }
            snack[i].snackBody[0].getElementsByClassName("circle")[0].getElementsByTagName("span")[0].innerText = "囧";
            snack[i].snackBody[0].style.zIndex = "1";
        }
        for (var i = 0 ; i < things.length ; i ++) {
            things[i].style.left = things[i].lx + "px";
            things[i].style.top = things[i].ly + "px";
            things[i].style.display = "block";
        }
    }
}

function initSnack() {
    var main = new Snack(80, 0, toward.RIGHT, 5, mainSnackColor);
    snack.push(main);
    mainSnack = main;
}

function initSquareSet () {
    squareSet = new Array(25);
    for (var i = 0 ; i < squareSet.length ; i ++) {
        squareSet[i] = new Array(25);
        for (var j = 0 ; j < squareSet[i].length ; j ++) {
            squareSet[i][j] = document.createElement("div");
            squareSet[i][j].classList.add("square");
            chessBoard.appendChild(squareSet[i][j]);
        }
    }
    return squareSet;
}

function getDistance(a, b) {
    var snackCenterX = a.lx + 10;
    var snackCenterY = a.ly + 10;
    var thingsCenterX = b.lx + 10;
    var thingsCenterY = b.ly + 10;
    var absX = Math.abs(snackCenterX - thingsCenterX);
    var absY = Math.abs(snackCenterY - thingsCenterY);
    var distance = Math.sqrt(Math.pow(absX, 2) + Math.pow(absY, 2), 2);
    return distance;
}

function checkCrash() {
    for (var i = 0 ; i < snack.length ; ) {
        var x = snack[i].snackBody[0].lx;
        var y = snack[i].snackBody[0].ly;
        if (x < 0 || x > 480 || y < 0 || y > 480 ) {
            snack[i].over();
            snack.splice(i, 1);
            continue;
        }
        for (var j = 0 ; j < things.length ; j ++) {//检查蛇与食物的碰撞
            var distance = getDistance(snack[i].snackBody[0], things[j]);
            if (distance < 20) {
                things[j].act(snack[i]);
                chessBoard.removeChild(things[j]);
                things.splice(j, 1);
            }
        }
        var isCrashed = false;
        for (var j = 0 ; j < snack.length ; j ++) {//检查蛇与蛇碰撞
            if (snack[i] == snack[j]) {
                continue;
            }
            for (var k = 0 ; k < snack[j].snackBody.length ; k ++) {
                var distance = getDistance(snack[i].snackBody[0], snack[j].snackBody[k]);
                if (distance < 20) {
                    snack[i].over();
                    snack.splice(i, 1);
                    isCrashed = true;
                    break;
                }
            }
            if (isCrashed) {
                break;
            }
        }
        if (isCrashed) {
            continue;
        }
        i ++;
    }
}

function checkFinish() {
    if (snack.length == 1 && snack[0] == mainSnack) {
        alert("获胜~！");
        clearInterval(timer);
    }
}

function move() {
    for (var i = 0 ; i < snack.length ; i ++) {
        for (var j = 1 ; j < snack[i].snackBody.length ; j ++) {
            if (snack[i].snackBody[j].point.length > 0) {
                snack[i].snackBody[j].lx += snack[i].snackBody[j].point[0].speedX;
                snack[i].snackBody[j].ly += snack[i].snackBody[j].point[0].speedY;
                if (snack[i].snackBody[j].lx == snack[i].snackBody[j].point[0].x && snack[i].snackBody[j].ly == snack[i].snackBody[j].point[0].y) {
                    snack[i].snackBody[j].point.shift();
                }
            } else {
                snack[i].snackBody[j].lx += snack[i].headMoveX;
                snack[i].snackBody[j].ly += snack[i].headMoveY;
            }
        }
        snack[i].snackBody[0].lx += snack[i].headMoveX;
        snack[i].snackBody[0].ly += snack[i].headMoveY;
        snack[i].snackBody[0].getElementsByClassName("circle")[0].getElementsByTagName("span")[0].innerText = "囧";
    }
    repaint();
}

function change(snack, x, y) {
    var lastX = snack.snackBody[0].lx;
    var lastY = snack.snackBody[0].ly;
    var speedX = snack.headMoveX;
    var speedY = snack.headMoveY;
    for (var i = 1 ; i < snack.snackBody.length ; i ++) {
        snack.snackBody[i].point.push({x: lastX, y: lastY, speedX: speedX, speedY: speedY})
    }
    snack.headMoveX = x;
    snack.headMoveY = y;
}

function tryChangeToward() {
    for (var i = 0 ; i < snack.length ; i ++) {
        if (snack[i].changeNextStation > 0) {
            snack[i].changeNextStation -= 1;
            continue;
        }
        if (snack[i].changeToward && snack[i].changeToward.change != snack[i].nowToward) {//不能是相同方向
            if (snack[i].changeToward.change.x + snack[i].nowToward.x != 0 || snack[i].changeToward.change.y + snack[i].nowToward.y || 0) {
                snack[i].changeNextStation = 20;
                snack[i].nowToward = snack[i].changeToward.change;
                snack[i].changeToward.act.call(snack[i]);
            }
        }
    }
}

function start() {
    if (isStart) {
        return;
    }
    isStart = true;

    timer = setInterval(function () {
        tryChangeToward();
        move();
        checkCrash();
        checkFinish();
    }, 1000 / frame);

    if (hasAI) {
        startAI();
    }

    thingFactory.autoGenerate();

    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e.keyCode == 38) {
            mainSnack.changeToward = {change:toward.UP, act:mainSnack.turnUp};
        } else if (e.keyCode == 40) {
            mainSnack.changeToward = {change:toward.DOWN, act:mainSnack.turnDown};
        } else if (e.keyCode == 37) {
            mainSnack.changeToward = {change:toward.LEFT, act:mainSnack.turnLeft};
        } else if (e.keyCode == 39) {
            mainSnack.changeToward = {change:toward.RIGHT, act:mainSnack.turnRight};
        }
    };
}

window.onload = function () {
    chessBoard = document.getElementById("chess_board");
    initSquareSet();
    initSnack();
    if (is3D) {
        changeTo3D();
    }
    if (hasAI) {
        initAI();
    }
    repaint();
}