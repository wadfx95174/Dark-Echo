var num;
var clearN;
var clearEmeny;
//計時
var seconds = 0;
//畫線時每0.05秒增加10px
var c = 10;
//畫player's線用的
var insert = 0;
//畫emney's線用的
var insertEmeny = new Array(10);
for (var i = 0; i < 10; i++) {
    insertEmeny[i] = 0;
}
//player's線的透明度
var opa = new Array(12);
//emney's線的透明度
var opaEmeny_0 = new Array(12);
var opaEmeny_1 = new Array(12);
var opaEmeny_2 = new Array(12);
var opaEmeny_3 = new Array(12);
var opaEmeny_4 = new Array(12);
var opaEmeny_5 = new Array(12);
var opaEmeny_6 = new Array(12);
var opaEmeny_7 = new Array(12);
var opaEmeny_8 = new Array(12);
var opaEmeny_9 = new Array(12);
//SVG區塊的id
var s;
//player's的setInterval，用來清除player's直線的setInterval
var setPlayer;
//emney's的setInterval，用來清除emney's直線的setInterval
var setEmeny = new Array(10);
//time's setInterval，用來清除time's setInterval
var time;
//player's 在map上的X、Y軸位置
var X, Y;
//emney's 在map上的X、Y軸位置
var XX = new Array(10);
var YY = new Array(10);
//player's畫線的起始位置，共12條線
var dx = new Array(12);
var dy = new Array(12);
//emeny's畫線的起始位置，共12條線
var dex_0 = new Array(12);
var dey_0 = new Array(12);
var dex_1 = new Array(12);
var dey_1 = new Array(12);
var dex_2 = new Array(12);
var dey_2 = new Array(12);
var dex_3 = new Array(12);
var dey_3 = new Array(12);
var dex_4 = new Array(12);
var dey_4 = new Array(12);
var dex_5 = new Array(12);
var dey_5 = new Array(12);
var dex_6 = new Array(12);
var dey_6 = new Array(12);
var dex_7 = new Array(12);
var dey_7 = new Array(12);
var dex_8 = new Array(12);
var dey_8 = new Array(12);
var dex_9 = new Array(12);
var dey_9 = new Array(12);
// cubeSize & mapSize
var cubeSize = 60;
var mapSize = 66;
// Flags to determine which direction the player is moving
var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
// player's X,Y軸位置
var playerX;
var playerY;
//emeny's X,Y軸位置
var emenyX = new Array(10);
var emenyY = new Array(10);
//map陣列
var map;
var gauge1;


window.addEventListener("load", initial, false);

// Main function
function initial() {
    counterSetting();
    createMap();
    createMaze();
    window.setInterval("emeny(0)", 150);
    window.setInterval("emeny(1)", 150);
    window.setInterval("emeny(2)", 150);
    window.setInterval("emeny(3)", 150);
    window.setInterval("emeny(4)", 150);
    window.setInterval("emeny(5)", 150);
    window.setInterval("emeny(6)", 150);
    window.setInterval("emeny(7)", 150);
    window.setInterval("emeny(8)", 150);
    window.setInterval("emeny(9)", 150);
    listenForPlayerMovement();
    startDrawLine();
}

function counterSetting() {
    num = 0;
    gauge1 = loadLiquidFillGauge("fillgauge1", 0);
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 500;
    clearN = window.setInterval("add()", 1000);

}
function add() {
    num++;
    console.log(num);
    gauge1.update(num);
}

//按照秒數計數以及畫線
function startDrawLine() {
    X = playerX * cubeSize + 30;
    Y = playerY * cubeSize + 30;
    for (var i = 0 ; i < 10; i++) {
        XX[i] = emenyX[i] * cubeSize + 30;
        YY[i] = emenyY[i] * cubeSize + 30;
    }
    for (var i = 0; i < 12; i++) {
        opa[i] = 1;
        opaEmeny_0[i] = 1;
    }
    dx[1] = dx[2] = dx[3] = dx[4] = dx[5] = dx[6] = dx[7] = dx[8] = dx[9] = dx[10] = dx[11] = dx[0] = X;
    dy[1] = dy[2] = dy[3] = dy[4] = dy[5] = dy[6] = dy[7] = dy[8] = dy[9] = dy[10] = dy[11] = dy[0] = Y;
    dex_0[1] = dex_0[2] = dex_0[3] = dex_0[4] = dex_0[5] = dex_0[6] = dex_0[7] = dex_0[8] = dex_0[9] = dex_0[10] = dex_0[11] = dex_0[0] = XX[0];
    dey_0[1] = dey_0[2] = dey_0[3] = dey_0[4] = dey_0[5] = dey_0[6] = dey_0[7] = dey_0[8] = dey_0[9] = dey_0[10] = dey_0[11] = dey_0[0] = YY[0];
    dex_1[1] = dex_1[2] = dex_1[3] = dex_1[4] = dex_1[5] = dex_1[6] = dex_1[7] = dex_1[8] = dex_1[9] = dex_1[10] = dex_1[11] = dex_1[0] = XX[1];
    dey_1[1] = dey_1[2] = dey_1[3] = dey_1[4] = dey_1[5] = dey_1[6] = dey_1[7] = dey_1[8] = dey_1[9] = dey_1[10] = dey_1[11] = dey_1[0] = YY[1];
    dex_2[1] = dex_2[2] = dex_2[3] = dex_2[4] = dex_2[5] = dex_2[6] = dex_2[7] = dex_2[8] = dex_2[9] = dex_2[10] = dex_2[11] = dex_2[0] = XX[2];
    dey_2[1] = dey_2[2] = dey_2[3] = dey_2[4] = dey_2[5] = dey_2[6] = dey_2[7] = dey_2[8] = dey_2[9] = dey_2[10] = dey_2[11] = dey_2[0] = YY[2];
    dex_3[1] = dex_3[2] = dex_3[3] = dex_3[4] = dex_3[5] = dex_3[6] = dex_3[7] = dex_3[8] = dex_3[9] = dex_3[10] = dex_3[11] = dex_3[0] = XX[3];
    dey_3[1] = dey_3[2] = dey_3[3] = dey_3[4] = dey_3[5] = dey_3[6] = dey_3[7] = dey_3[8] = dey_3[9] = dey_3[10] = dey_3[11] = dey_3[0] = YY[3];
    dex_4[1] = dex_4[2] = dex_4[3] = dex_4[4] = dex_4[5] = dex_4[6] = dex_4[7] = dex_4[8] = dex_4[9] = dex_4[10] = dex_4[11] = dex_4[0] = XX[4];
    dey_4[1] = dey_4[2] = dey_4[3] = dey_4[4] = dey_4[5] = dey_4[6] = dey_4[7] = dey_4[8] = dey_4[9] = dey_4[10] = dey_4[11] = dey_4[0] = YY[4];
    dex_5[1] = dex_5[2] = dex_5[3] = dex_5[4] = dex_5[5] = dex_5[6] = dex_5[7] = dex_5[8] = dex_5[9] = dex_5[10] = dex_5[11] = dex_5[0] = XX[5];
    dey_5[1] = dey_5[2] = dey_5[3] = dey_5[4] = dey_5[5] = dey_5[6] = dey_5[7] = dey_5[8] = dey_5[9] = dey_5[10] = dey_5[11] = dey_5[0] = YY[5];
    dex_6[1] = dex_6[2] = dex_6[3] = dex_6[4] = dex_6[5] = dex_6[6] = dex_6[7] = dex_6[8] = dex_6[9] = dex_6[10] = dex_6[11] = dex_6[0] = XX[6];
    dey_6[1] = dey_6[2] = dey_6[3] = dey_6[4] = dey_6[5] = dey_6[6] = dey_6[7] = dey_6[8] = dey_6[9] = dey_6[10] = dey_6[11] = dey_6[0] = YY[6];
    dex_7[1] = dex_7[2] = dex_7[3] = dex_7[4] = dex_7[5] = dex_7[6] = dex_7[7] = dex_7[8] = dex_7[9] = dex_7[10] = dex_7[11] = dex_7[0] = XX[7];
    dey_7[1] = dey_7[2] = dey_7[3] = dey_7[4] = dey_7[5] = dey_7[6] = dey_7[7] = dey_7[8] = dey_7[9] = dey_7[10] = dey_7[11] = dey_7[0] = YY[7];
    dex_8[1] = dex_8[2] = dex_8[3] = dex_8[4] = dex_8[5] = dex_8[6] = dex_8[7] = dex_8[8] = dex_8[9] = dex_8[10] = dex_8[11] = dex_8[0] = XX[8];
    dey_8[1] = dey_8[2] = dey_8[3] = dey_8[4] = dey_8[5] = dey_8[6] = dey_8[7] = dey_8[8] = dey_8[9] = dey_8[10] = dey_8[11] = dey_8[0] = YY[8];
    dex_9[1] = dex_9[2] = dex_9[3] = dex_9[4] = dex_9[5] = dex_9[6] = dex_9[7] = dex_9[8] = dex_9[9] = dex_9[10] = dex_9[11] = dex_9[0] = XX[9];
    dey_9[1] = dey_9[2] = dey_9[3] = dey_9[4] = dey_9[5] = dey_9[6] = dey_9[7] = dey_9[8] = dey_9[9] = dey_9[10] = dey_9[11] = dey_9[0] = YY[9];

    //time = window.setInterval("updateTime()", 1000);
    s = document.getElementById("s");
    setPlayer = window.setInterval("setPlayerPath()", 51);
    setEmeny[0] = window.setInterval("setEmenyPath_0()", 51);
    setEmeny[1] = window.setInterval("setEmenyPath_1()", 51);
    setEmeny[2] = window.setInterval("setEmenyPath_2()", 51);
    setEmeny[3] = window.setInterval("setEmenyPath_3()", 51);
    setEmeny[4] = window.setInterval("setEmenyPath_4()", 51);
    setEmeny[5] = window.setInterval("setEmenyPath_5()", 51);
    setEmeny[6] = window.setInterval("setEmenyPath_6()", 51);
    setEmeny[7] = window.setInterval("setEmenyPath_7()", 51);
    setEmeny[8] = window.setInterval("setEmenyPath_8()", 51);
    setEmeny[9] = window.setInterval("setEmenyPath_9()", 51);
    window.setTimeout("resetDrawLine()", 1101);
    window.setTimeout("startDrawLine()", 1102);
}

//清除直線
function resetDrawLine() {
    clearInterval(setPlayer);
    //clearInterval(time);
    clearInterval(setEmeny[0]);
    clearInterval(setEmeny[1]);
    clearInterval(setEmeny[2]);
    clearInterval(setEmeny[3]);
    clearInterval(setEmeny[4]);
    clearInterval(setEmeny[5]);
    clearInterval(setEmeny[6]);
    clearInterval(setEmeny[7]);
    clearInterval(setEmeny[8]);
    clearInterval(setEmeny[9]);
    insert = 0;
    for (var i = 0; i < 12; i++) {
        opa[i] = 1;
        opaEmeny_0[i] = 1;
        opaEmeny_1[i] = 1;
        opaEmeny_2[i] = 1;
        opaEmeny_3[i] = 1;
        opaEmeny_4[i] = 1;
        opaEmeny_5[i] = 1;
        opaEmeny_6[i] = 1;
        opaEmeny_7[i] = 1;
        opaEmeny_8[i] = 1;
        opaEmeny_9[i] = 1;
    }
    for (var i = 0; i < 10; i++) {
        insertEmeny[i] = 0;
    }
    var sChild = s.childNodes;
    for (var i = sChild.length - 1; i >= 0; i--) {
        s.removeChild(sChild[i]);
    }
}


//檢查周圍是否有牆壁
function checkWall(dx, dy) {
    if (map[dx][dy] == 1) return true;
}

//直線增長function
function setPlayerPath() {
    var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12;

    insert += c;
    for (var i = 0; i < 12; i++) {
        opa[i] -= 0.05;
    }
    dx[0] = (X + (insert - c));
    dx[1] = (X + (insert - c) * Math.cos(Math.PI / 6));
    dx[2] = (X + (insert - c) * Math.cos(Math.PI / 3));
    dx[3] = X;
    dx[4] = (X + (insert - c) * Math.cos(Math.PI * 2 / 3));
    dx[5] = (X + (insert - c) * Math.cos(Math.PI * 5 / 6));
    dx[6] = (X - (insert - c));
    dx[7] = (X + (insert - c) * Math.cos(Math.PI * 7 / 6));
    dx[8] = (X + (insert - c) * Math.cos(Math.PI * 4 / 3));
    dx[9] = X;
    dx[10] = (X + (insert - c) * Math.cos(Math.PI * 5 / 3));
    dx[11] = (X + (insert - c) * Math.cos(Math.PI * 11 / 6));
    dy[0] = Y;
    dy[1] = (Y + (insert - c) * Math.sin(Math.PI / 6));
    dy[2] = (Y + (insert - c) * Math.sin(Math.PI / 3));
    dy[3] = (Y + (insert - c));
    dy[4] = (Y + (insert - c) * Math.sin(Math.PI * 2 / 3));
    dy[5] = (Y + (insert - c) * Math.sin(Math.PI * 5 / 6));
    dy[6] = Y;
    dy[7] = (Y + (insert - c) * Math.sin(Math.PI * 7 / 6));
    dy[8] = (Y + (insert - c) * Math.sin(Math.PI * 4 / 3));
    dy[9] = (Y - (insert - c));
    dy[10] = (Y + (insert - c) * Math.sin(Math.PI * 5 / 3));
    dy[11] = (Y + (insert - c) * Math.sin(Math.PI * 11 / 6));
    if (checkWall(parseInt((dx[0] - 5) / cubeSize), parseInt((dy[0] - 5) / cubeSize)) == true) opa[0] = 0;
    if (checkWall(parseInt((dx[1] - 5) / cubeSize), parseInt((dy[1] - 5) / cubeSize)) == true) opa[1] = 0;
    if (checkWall(parseInt((dx[2] - 5) / cubeSize), parseInt((dy[2] - 5) / cubeSize)) == true) opa[2] = 0;
    if (checkWall(parseInt((dx[3] - 5) / cubeSize), parseInt((dy[3] - 5) / cubeSize)) == true) opa[3] = 0;
    if (checkWall(parseInt((dx[4] - 5) / cubeSize), parseInt((dy[4] - 5) / cubeSize)) == true) opa[4] = 0;
    if (checkWall(parseInt((dx[5] - 5) / cubeSize), parseInt((dy[5] - 5) / cubeSize)) == true) opa[5] = 0;
    if (checkWall(parseInt((dx[6] - 5) / cubeSize), parseInt((dy[6] - 5) / cubeSize)) == true) opa[6] = 0;
    if (checkWall(parseInt((dx[7] - 5) / cubeSize), parseInt((dy[7] - 5) / cubeSize)) == true) opa[7] = 0;
    if (checkWall(parseInt((dx[8] - 5) / cubeSize), parseInt((dy[8] - 5) / cubeSize)) == true) opa[8] = 0;
    if (checkWall(parseInt((dx[9] - 5) / cubeSize), parseInt((dy[9] - 5) / cubeSize)) == true) opa[9] = 0;
    if (checkWall(parseInt((dx[10] - 5) / cubeSize), parseInt((dy[10] - 5) / cubeSize)) == true) opa[10] = 0;
    if (checkWall(parseInt((dx[11] - 5) / cubeSize), parseInt((dy[11] - 5) / cubeSize)) == true) opa[11] = 0;
    d1 = 'M' + dx[0] + ' ' + dy[0] + 'L' + (X + insert) + ' ' + Y;
    d2 = 'M' + dx[1] + ' ' + dy[1] + 'L' + (X + insert * Math.cos(Math.PI / 6)) + ' ' + (Y + insert * Math.sin(Math.PI / 6));
    d3 = 'M' + dx[2] + ' ' + dy[2] + 'L' + (X + insert * Math.cos(Math.PI / 3)) + ' ' + (Y + insert * Math.sin(Math.PI / 3));
    d4 = 'M' + dx[3] + ' ' + dy[3] + 'L' + X + ' ' + (Y + insert);
    d5 = 'M' + dx[4] + ' ' + dy[4] + 'L' + (X + insert * Math.cos(Math.PI * 2 / 3)) + ' ' + (Y + insert * Math.sin(Math.PI * 2 / 3));
    d6 = 'M' + dx[5] + ' ' + dy[5] + 'L' + (X + insert * Math.cos(Math.PI * 5 / 6)) + ' ' + (Y + insert * Math.sin(Math.PI * 5 / 6));
    d7 = 'M' + dx[6] + ' ' + dy[6] + 'L' + (X - insert) + ' ' + Y;
    d8 = 'M' + dx[7] + ' ' + dy[7] + 'L' + (X + insert * Math.cos(Math.PI * 7 / 6)) + ' ' + (Y + insert * Math.sin(Math.PI * 7 / 6));
    d9 = 'M' + dx[8] + ' ' + dy[8] + 'L' + (X + insert * Math.cos(Math.PI * 4 / 3)) + ' ' + (Y + insert * Math.sin(Math.PI * 4 / 3));
    d10 = 'M' + dx[9] + ' ' + dy[9] + 'L' + X + ' ' + (Y - insert);
    d11 = 'M' + dx[10] + ' ' + dy[10] + 'L' + (X + insert * Math.cos(Math.PI * 5 / 3)) + ' ' + (Y + insert * Math.sin(Math.PI * 5 / 3));
    d12 = 'M' + dx[11] + ' ' + dy[11] + 'L' + (X + insert * Math.cos(Math.PI * 11 / 6)) + ' ' + (Y + insert * Math.sin(Math.PI * 11 / 6));
    var line1 = makeSVG('path', { 'd': d1, stroke: 'white', 'stroke-width': 2, 'opacity': opa[0] });
    s.appendChild(line1);
    var line2 = makeSVG('path', { 'd': d2, stroke: 'white', 'stroke-width': 2, 'opacity': opa[1] });
    s.appendChild(line2);
    var line3 = makeSVG('path', { 'd': d3, stroke: 'white', 'stroke-width': 2, 'opacity': opa[2] });
    s.appendChild(line3);
    var line4 = makeSVG('path', { 'd': d4, stroke: 'white', 'stroke-width': 2, 'opacity': opa[3] });
    s.appendChild(line4);
    var line5 = makeSVG('path', { 'd': d5, stroke: 'white', 'stroke-width': 2, 'opacity': opa[4] });
    s.appendChild(line5);
    var line6 = makeSVG('path', { 'd': d6, stroke: 'white', 'stroke-width': 2, 'opacity': opa[5] });
    s.appendChild(line6);
    var line7 = makeSVG('path', { 'd': d7, stroke: 'white', 'stroke-width': 2, 'opacity': opa[6] });
    s.appendChild(line7);
    var line8 = makeSVG('path', { 'd': d8, stroke: 'white', 'stroke-width': 2, 'opacity': opa[7] });
    s.appendChild(line8);
    var line9 = makeSVG('path', { 'd': d9, stroke: 'white', 'stroke-width': 2, 'opacity': opa[8] });
    s.appendChild(line9);
    var line10 = makeSVG('path', { 'd': d10, stroke: 'white', 'stroke-width': 2, 'opacity': opa[9] });
    s.appendChild(line10);
    var line11 = makeSVG('path', { 'd': d11, stroke: 'white', 'stroke-width': 2, 'opacity': opa[10] });
    s.appendChild(line11);
    var line12 = makeSVG('path', { 'd': d12, stroke: 'white', 'stroke-width': 2, 'opacity': opa[11] });
    s.appendChild(line12);
}

//敵人直線增長function
function setEmenyPath_0() {
    var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12;

    insertEmeny[0] += c;
    for (var i = 0; i < 12; i++) {
        opaEmeny_0[i] -= 0.05;
    }
    dex_0[0] = (XX[0] + (insertEmeny[0] - c));
    dex_0[1] = (XX[0] + (insertEmeny[0] - c) * Math.cos(Math.PI / 6));
    dex_0[2] = (XX[0] + (insertEmeny[0] - c) * Math.cos(Math.PI / 3));
    dex_0[3] = XX[0];
    dex_0[4] = (XX[0] + (insertEmeny[0] - c) * Math.cos(Math.PI * 2 / 3));
    dex_0[5] = (XX[0] + (insertEmeny[0] - c) * Math.cos(Math.PI * 5 / 6));
    dex_0[6] = (XX[0] - (insertEmeny[0] - c));
    dex_0[7] = (XX[0] + (insertEmeny[0] - c) * Math.cos(Math.PI * 7 / 6));
    dex_0[8] = (XX[0] + (insertEmeny[0] - c) * Math.cos(Math.PI * 4 / 3));
    dex_0[9] = XX[0];
    dex_0[10] = (XX[0] + (insertEmeny[0] - c) * Math.cos(Math.PI * 5 / 3));
    dex_0[11] = (XX[0] + (insertEmeny[0] - c) * Math.cos(Math.PI * 11 / 6));
    dey_0[0] = YY[0];
    dey_0[1] = (YY[0] + (insertEmeny[0] - c) * Math.sin(Math.PI / 6));
    dey_0[2] = (YY[0] + (insertEmeny[0] - c) * Math.sin(Math.PI / 3));
    dey_0[3] = (YY[0] + (insertEmeny[0] - c));
    dey_0[4] = (YY[0] + (insertEmeny[0] - c) * Math.sin(Math.PI * 2 / 3));
    dey_0[5] = (YY[0] + (insertEmeny[0] - c) * Math.sin(Math.PI * 5 / 6));
    dey_0[6] = YY[0];
    dey_0[7] = (YY[0] + (insertEmeny[0] - c) * Math.sin(Math.PI * 7 / 6));
    dey_0[8] = (YY[0] + (insertEmeny[0] - c) * Math.sin(Math.PI * 4 / 3));
    dey_0[9] = (YY[0] - (insertEmeny[0] - c));
    dey_0[10] = (YY[0] + (insertEmeny[0] - c) * Math.sin(Math.PI * 5 / 3));
    dey_0[11] = (YY[0] + (insertEmeny[0] - c) * Math.sin(Math.PI * 11 / 6));
    for (var i = 0 ; i < 12; i++) {
        if (checkWall(parseInt((dex_0[i] - 5) / cubeSize), parseInt((dey_0[i] - 5) / cubeSize)) == true) opaEmeny_0[i] = 0;
    }
    d1 = 'M' + dex_0[0] + ' ' + dey_0[0] + 'L' + (XX[0] + insertEmeny[0]) + ' ' + YY[0];
    d2 = 'M' + dex_0[1] + ' ' + dey_0[1] + 'L' + (XX[0] + insertEmeny[0] * Math.cos(Math.PI / 6)) + ' ' + (YY[0] + insertEmeny[0] * Math.sin(Math.PI / 6));
    d3 = 'M' + dex_0[2] + ' ' + dey_0[2] + 'L' + (XX[0] + insertEmeny[0] * Math.cos(Math.PI / 3)) + ' ' + (YY[0] + insertEmeny[0] * Math.sin(Math.PI / 3));
    d4 = 'M' + dex_0[3] + ' ' + dey_0[3] + 'L' + XX[0] + ' ' + (YY[0] + insertEmeny[0]);
    d5 = 'M' + dex_0[4] + ' ' + dey_0[4] + 'L' + (XX[0] + insertEmeny[0] * Math.cos(Math.PI * 2 / 3)) + ' ' + (YY[0] + insertEmeny[0] * Math.sin(Math.PI * 2 / 3));
    d6 = 'M' + dex_0[5] + ' ' + dey_0[5] + 'L' + (XX[0] + insertEmeny[0] * Math.cos(Math.PI * 5 / 6)) + ' ' + (YY[0] + insertEmeny[0] * Math.sin(Math.PI * 5 / 6));
    d7 = 'M' + dex_0[6] + ' ' + dey_0[6] + 'L' + (XX[0] - insertEmeny[0]) + ' ' + YY[0];
    d8 = 'M' + dex_0[7] + ' ' + dey_0[7] + 'L' + (XX[0] + insertEmeny[0] * Math.cos(Math.PI * 7 / 6)) + ' ' + (YY[0] + insertEmeny[0] * Math.sin(Math.PI * 7 / 6));
    d9 = 'M' + dex_0[8] + ' ' + dey_0[8] + 'L' + (XX[0] + insertEmeny[0] * Math.cos(Math.PI * 4 / 3)) + ' ' + (YY[0] + insertEmeny[0] * Math.sin(Math.PI * 4 / 3));
    d10 = 'M' + dex_0[9] + ' ' + dey_0[9] + 'L' + XX[0] + ' ' + (YY[0] - insertEmeny[0]);
    d11 = 'M' + dex_0[10] + ' ' + dey_0[10] + 'L' + (XX[0] + insertEmeny[0] * Math.cos(Math.PI * 5 / 3)) + ' ' + (YY[0] + insertEmeny[0] * Math.sin(Math.PI * 5 / 3));
    d12 = 'M' + dex_0[11] + ' ' + dey_0[11] + 'L' + (XX[0] + insertEmeny[0] * Math.cos(Math.PI * 11 / 6)) + ' ' + (YY[0] + insertEmeny[0] * Math.sin(Math.PI * 11 / 6));
    var line1 = makeSVG('path', { 'd': d1, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[0] });
    s.appendChild(line1);
    var line2 = makeSVG('path', { 'd': d2, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[1] });
    s.appendChild(line2);
    var line3 = makeSVG('path', { 'd': d3, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[2] });
    s.appendChild(line3);
    var line4 = makeSVG('path', { 'd': d4, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[3] });
    s.appendChild(line4);
    var line5 = makeSVG('path', { 'd': d5, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[4] });
    s.appendChild(line5);
    var line6 = makeSVG('path', { 'd': d6, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[5] });
    s.appendChild(line6);
    var line7 = makeSVG('path', { 'd': d7, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[6] });
    s.appendChild(line7);
    var line8 = makeSVG('path', { 'd': d8, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[7] });
    s.appendChild(line8);
    var line9 = makeSVG('path', { 'd': d9, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[8] });
    s.appendChild(line9);
    var line10 = makeSVG('path', { 'd': d10, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[9] });
    s.appendChild(line10);
    var line11 = makeSVG('path', { 'd': d11, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[10] });
    s.appendChild(line11);
    var line12 = makeSVG('path', { 'd': d12, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_0[11] });
    s.appendChild(line12);
}

function setEmenyPath_1() {
    var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12;

    insertEmeny[1] += c;
    for (var i = 0; i < 12; i++) {
        opaEmeny_1[i] -= 0.05;
    }
    dex_1[0] = (XX[1] + (insertEmeny[1] - c));
    dex_1[1] = (XX[1] + (insertEmeny[1] - c) * Math.cos(Math.PI / 6));
    dex_1[2] = (XX[1] + (insertEmeny[1] - c) * Math.cos(Math.PI / 3));
    dex_1[3] = XX[1];
    dex_1[4] = (XX[1] + (insertEmeny[1] - c) * Math.cos(Math.PI * 2 / 3));
    dex_1[5] = (XX[1] + (insertEmeny[1] - c) * Math.cos(Math.PI * 5 / 6));
    dex_1[6] = (XX[1] - (insertEmeny[1] - c));
    dex_1[7] = (XX[1] + (insertEmeny[1] - c) * Math.cos(Math.PI * 7 / 6));
    dex_1[8] = (XX[1] + (insertEmeny[1] - c) * Math.cos(Math.PI * 4 / 3));
    dex_1[9] = XX[1]
    dex_1[10] = (XX[1] + (insertEmeny[1] - c) * Math.cos(Math.PI * 5 / 3));
    dex_1[11] = (XX[1] + (insertEmeny[1] - c) * Math.cos(Math.PI * 11 / 6));
    dey_1[0] = YY[1]
    dey_1[1] = (YY[1] + (insertEmeny[1] - c) * Math.sin(Math.PI / 6));
    dey_1[2] = (YY[1] + (insertEmeny[1] - c) * Math.sin(Math.PI / 3));
    dey_1[3] = (YY[1] + (insertEmeny[1] - c));
    dey_1[4] = (YY[1] + (insertEmeny[1] - c) * Math.sin(Math.PI * 2 / 3));
    dey_1[5] = (YY[1] + (insertEmeny[1] - c) * Math.sin(Math.PI * 5 / 6));
    dey_1[6] = YY[1];
    dey_1[7] = (YY[1] + (insertEmeny[1] - c) * Math.sin(Math.PI * 7 / 6));
    dey_1[8] = (YY[1] + (insertEmeny[1] - c) * Math.sin(Math.PI * 4 / 3));
    dey_1[9] = (YY[1] - (insertEmeny[1] - c));
    dey_1[10] = (YY[1] + (insertEmeny[1] - c) * Math.sin(Math.PI * 5 / 3));
    dey_1[11] = (YY[1] + (insertEmeny[1] - c) * Math.sin(Math.PI * 11 / 6));
    for (var i = 0 ; i < 12; i++) {
        if (checkWall(parseInt((dex_1[i] - 5) / cubeSize), parseInt((dey_1[i] - 5) / cubeSize)) == true) opaEmeny_1[i] = 0;
    }
    d1 = 'M' + dex_1[0] + ' ' + dey_1[0] + 'L' + (XX[1] + insertEmeny[1]) + ' ' + YY[1];
    d2 = 'M' + dex_1[1] + ' ' + dey_1[1] + 'L' + (XX[1] + insertEmeny[1] * Math.cos(Math.PI / 6)) + ' ' + (YY[1] + insertEmeny[1] * Math.sin(Math.PI / 6));
    d3 = 'M' + dex_1[2] + ' ' + dey_1[2] + 'L' + (XX[1] + insertEmeny[1] * Math.cos(Math.PI / 3)) + ' ' + (YY[1] + insertEmeny[1] * Math.sin(Math.PI / 3));
    d4 = 'M' + dex_1[3] + ' ' + dey_1[3] + 'L' + XX[1] + ' ' + (YY[1] + insertEmeny[1]);
    d5 = 'M' + dex_1[4] + ' ' + dey_1[4] + 'L' + (XX[1] + insertEmeny[1] * Math.cos(Math.PI * 2 / 3)) + ' ' + (YY[1] + insertEmeny[1] * Math.sin(Math.PI * 2 / 3));
    d6 = 'M' + dex_1[5] + ' ' + dey_1[5] + 'L' + (XX[1] + insertEmeny[1] * Math.cos(Math.PI * 5 / 6)) + ' ' + (YY[1] + insertEmeny[1] * Math.sin(Math.PI * 5 / 6));
    d7 = 'M' + dex_1[6] + ' ' + dey_1[6] + 'L' + (XX[1] - insertEmeny[1]) + ' ' + YY[1];
    d8 = 'M' + dex_1[7] + ' ' + dey_1[7] + 'L' + (XX[1] + insertEmeny[1] * Math.cos(Math.PI * 7 / 6)) + ' ' + (YY[1] + insertEmeny[1] * Math.sin(Math.PI * 7 / 6));
    d9 = 'M' + dex_1[8] + ' ' + dey_1[8] + 'L' + (XX[1] + insertEmeny[1] * Math.cos(Math.PI * 4 / 3)) + ' ' + (YY[1] + insertEmeny[1] * Math.sin(Math.PI * 4 / 3));
    d10 = 'M' + dex_1[9] + ' ' + dey_1[9] + 'L' + XX[1] + ' ' + (YY[1] - insertEmeny[1]);
    d11 = 'M' + dex_1[10] + ' ' + dey_1[10] + 'L' + (XX[1] + insertEmeny[1] * Math.cos(Math.PI * 5 / 3)) + ' ' + (YY[1] + insertEmeny[1] * Math.sin(Math.PI * 5 / 3));
    d12 = 'M' + dex_1[11] + ' ' + dey_1[11] + 'L' + (XX[1] + insertEmeny[1] * Math.cos(Math.PI * 11 / 6)) + ' ' + (YY[1] + insertEmeny[1] * Math.sin(Math.PI * 11 / 6));
    var line1 = makeSVG('path', { 'd': d1, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[0] });
    s.appendChild(line1);
    var line2 = makeSVG('path', { 'd': d2, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[1] });
    s.appendChild(line2);
    var line3 = makeSVG('path', { 'd': d3, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[2] });
    s.appendChild(line3);
    var line4 = makeSVG('path', { 'd': d4, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[3] });
    s.appendChild(line4);
    var line5 = makeSVG('path', { 'd': d5, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[4] });
    s.appendChild(line5);
    var line6 = makeSVG('path', { 'd': d6, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[5] });
    s.appendChild(line6);
    var line7 = makeSVG('path', { 'd': d7, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[6] });
    s.appendChild(line7);
    var line8 = makeSVG('path', { 'd': d8, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[7] });
    s.appendChild(line8);
    var line9 = makeSVG('path', { 'd': d9, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[8] });
    s.appendChild(line9);
    var line10 = makeSVG('path', { 'd': d10, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[9] });
    s.appendChild(line10);
    var line11 = makeSVG('path', { 'd': d11, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[10] });
    s.appendChild(line11);
    var line12 = makeSVG('path', { 'd': d12, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_1[11] });
    s.appendChild(line12);
}
function setEmenyPath_2() {
    var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12;

    insertEmeny[2] += c;
    for (var i = 0; i < 12; i++) {
        opaEmeny_2[i] -= 0.05;
    }
    dex_2[0] = (XX[2] + (insertEmeny[2] - c));
    dex_2[1] = (XX[2] + (insertEmeny[2] - c) * Math.cos(Math.PI / 6));
    dex_2[2] = (XX[2] + (insertEmeny[2] - c) * Math.cos(Math.PI / 3));
    dex_2[3] = XX[2];
    dex_2[4] = (XX[2] + (insertEmeny[2] - c) * Math.cos(Math.PI * 2 / 3));
    dex_2[5] = (XX[2] + (insertEmeny[2] - c) * Math.cos(Math.PI * 5 / 6));
    dex_2[6] = (XX[2] - (insertEmeny[2] - c));
    dex_2[7] = (XX[2] + (insertEmeny[2] - c) * Math.cos(Math.PI * 7 / 6));
    dex_2[8] = (XX[2] + (insertEmeny[2] - c) * Math.cos(Math.PI * 4 / 3));
    dex_2[9] = XX[2];
    dex_2[10] = (XX[2] + (insertEmeny[2] - c) * Math.cos(Math.PI * 5 / 3));
    dex_2[11] = (XX[2] + (insertEmeny[2] - c) * Math.cos(Math.PI * 11 / 6));
    dey_2[0] = YY[2];
    dey_2[1] = (YY[2] + (insertEmeny[2] - c) * Math.sin(Math.PI / 6));
    dey_2[2] = (YY[2] + (insertEmeny[2] - c) * Math.sin(Math.PI / 3));
    dey_2[3] = (YY[2] + (insertEmeny[2] - c));
    dey_2[4] = (YY[2] + (insertEmeny[2] - c) * Math.sin(Math.PI * 2 / 3));
    dey_2[5] = (YY[2] + (insertEmeny[2] - c) * Math.sin(Math.PI * 5 / 6));
    dey_2[6] = YY[2];
    dey_2[7] = (YY[2] + (insertEmeny[2] - c) * Math.sin(Math.PI * 7 / 6));
    dey_2[8] = (YY[2] + (insertEmeny[2] - c) * Math.sin(Math.PI * 4 / 3));
    dey_2[9] = (YY[2] - (insertEmeny[2] - c));
    dey_2[10] = (YY[2] + (insertEmeny[2] - c) * Math.sin(Math.PI * 5 / 3));
    dey_2[11] = (YY[2] + (insertEmeny[2] - c) * Math.sin(Math.PI * 11 / 6));
    for (var i = 0 ; i < 12; i++) {
        if (checkWall(parseInt((dex_2[i] - 5) / cubeSize), parseInt((dey_2[i] - 5) / cubeSize)) == true) opaEmeny_2[i] = 0;
    }
    d1 = 'M' + dex_2[0] + ' ' + dey_2[0] + 'L' + (XX[2] + insertEmeny[2]) + ' ' + YY[2];
    d2 = 'M' + dex_2[1] + ' ' + dey_2[1] + 'L' + (XX[2] + insertEmeny[2] * Math.cos(Math.PI / 6)) + ' ' + (YY[2] + insertEmeny[2] * Math.sin(Math.PI / 6));
    d3 = 'M' + dex_2[2] + ' ' + dey_2[2] + 'L' + (XX[2] + insertEmeny[2] * Math.cos(Math.PI / 3)) + ' ' + (YY[2] + insertEmeny[2] * Math.sin(Math.PI / 3));
    d4 = 'M' + dex_2[3] + ' ' + dey_2[3] + 'L' + XX[2] + ' ' + (YY[2] + insertEmeny[2]);
    d5 = 'M' + dex_2[4] + ' ' + dey_2[4] + 'L' + (XX[2] + insertEmeny[2] * Math.cos(Math.PI * 2 / 3)) + ' ' + (YY[2] + insertEmeny[2] * Math.sin(Math.PI * 2 / 3));
    d6 = 'M' + dex_2[5] + ' ' + dey_2[5] + 'L' + (XX[2] + insertEmeny[2] * Math.cos(Math.PI * 5 / 6)) + ' ' + (YY[2] + insertEmeny[2] * Math.sin(Math.PI * 5 / 6));
    d7 = 'M' + dex_2[6] + ' ' + dey_2[6] + 'L' + (XX[2] - insertEmeny[2]) + ' ' + YY[2];
    d8 = 'M' + dex_2[7] + ' ' + dey_2[7] + 'L' + (XX[2] + insertEmeny[2] * Math.cos(Math.PI * 7 / 6)) + ' ' + (YY[2] + insertEmeny[2] * Math.sin(Math.PI * 7 / 6));
    d9 = 'M' + dex_2[8] + ' ' + dey_2[8] + 'L' + (XX[2] + insertEmeny[2] * Math.cos(Math.PI * 4 / 3)) + ' ' + (YY[2] + insertEmeny[2] * Math.sin(Math.PI * 4 / 3));
    d10 = 'M' + dex_2[9] + ' ' + dey_2[9] + 'L' + XX[2] + ' ' + (YY[2] - insertEmeny[2]);
    d11 = 'M' + dex_2[10] + ' ' + dey_2[10] + 'L' + (XX[2] + insertEmeny[2] * Math.cos(Math.PI * 5 / 3)) + ' ' + (YY[2] + insertEmeny[2] * Math.sin(Math.PI * 5 / 3));
    d12 = 'M' + dex_2[11] + ' ' + dey_2[11] + 'L' + (XX[2] + insertEmeny[2] * Math.cos(Math.PI * 11 / 6)) + ' ' + (YY[2] + insertEmeny[2] * Math.sin(Math.PI * 11 / 6));
    var line1 = makeSVG('path', { 'd': d1, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[0] });
    s.appendChild(line1);
    var line2 = makeSVG('path', { 'd': d2, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[1] });
    s.appendChild(line2);
    var line3 = makeSVG('path', { 'd': d3, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[2] });
    s.appendChild(line3);
    var line4 = makeSVG('path', { 'd': d4, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[3] });
    s.appendChild(line4);
    var line5 = makeSVG('path', { 'd': d5, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[4] });
    s.appendChild(line5);
    var line6 = makeSVG('path', { 'd': d6, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[5] });
    s.appendChild(line6);
    var line7 = makeSVG('path', { 'd': d7, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[6] });
    s.appendChild(line7);
    var line8 = makeSVG('path', { 'd': d8, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[7] });
    s.appendChild(line8);
    var line9 = makeSVG('path', { 'd': d9, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[8] });
    s.appendChild(line9);
    var line10 = makeSVG('path', { 'd': d10, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[9] });
    s.appendChild(line10);
    var line11 = makeSVG('path', { 'd': d11, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[10] });
    s.appendChild(line11);
    var line12 = makeSVG('path', { 'd': d12, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_2[11] });
    s.appendChild(line12);
}
function setEmenyPath_3() {
    var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12;

    insertEmeny[3] += c;
    for (var i = 0; i < 12; i++) {
        opaEmeny_3[i] -= 0.05;
    }
    dex_3[0] = (XX[3] + (insertEmeny[3] - c));
    dex_3[1] = (XX[3] + (insertEmeny[3] - c) * Math.cos(Math.PI / 6));
    dex_3[2] = (XX[3] + (insertEmeny[3] - c) * Math.cos(Math.PI / 3));
    dex_3[3] = XX[3];
    dex_3[4] = (XX[3] + (insertEmeny[3] - c) * Math.cos(Math.PI * 2 / 3));
    dex_3[5] = (XX[3] + (insertEmeny[3] - c) * Math.cos(Math.PI * 5 / 6));
    dex_3[6] = (XX[3] - (insertEmeny[3] - c));
    dex_3[7] = (XX[3] + (insertEmeny[3] - c) * Math.cos(Math.PI * 7 / 6));
    dex_3[8] = (XX[3] + (insertEmeny[3] - c) * Math.cos(Math.PI * 4 / 3));
    dex_3[9] = XX[3];
    dex_3[10] = (XX[3] + (insertEmeny[3] - c) * Math.cos(Math.PI * 5 / 3));
    dex_3[11] = (XX[3] + (insertEmeny[3] - c) * Math.cos(Math.PI * 11 / 6));
    dey_3[0] = YY[3];
    dey_3[1] = (YY[3] + (insertEmeny[3] - c) * Math.sin(Math.PI / 6));
    dey_3[2] = (YY[3] + (insertEmeny[3] - c) * Math.sin(Math.PI / 3));
    dey_3[3] = (YY[3] + (insertEmeny[3] - c));
    dey_3[4] = (YY[3] + (insertEmeny[3] - c) * Math.sin(Math.PI * 2 / 3));
    dey_3[5] = (YY[3] + (insertEmeny[3] - c) * Math.sin(Math.PI * 5 / 6));
    dey_3[6] = YY[3];
    dey_3[7] = (YY[3] + (insertEmeny[3] - c) * Math.sin(Math.PI * 7 / 6));
    dey_3[8] = (YY[3] + (insertEmeny[3] - c) * Math.sin(Math.PI * 4 / 3));
    dey_3[9] = (YY[3] - (insertEmeny[3] - c));
    dey_3[10] = (YY[3] + (insertEmeny[3] - c) * Math.sin(Math.PI * 5 / 3));
    dey_3[11] = (YY[3] + (insertEmeny[3] - c) * Math.sin(Math.PI * 11 / 6));
    for (var i = 0 ; i < 12; i++) {
        if (checkWall(parseInt((dex_3[i] - 5) / cubeSize), parseInt((dey_3[i] - 5) / cubeSize)) == true) opaEmeny_3[i] = 0;
    }
    d1 = 'M' + dex_3[0] + ' ' + dey_3[0] + 'L' + (XX[3] + insertEmeny[3]) + ' ' + YY[3];
    d2 = 'M' + dex_3[1] + ' ' + dey_3[1] + 'L' + (XX[3] + insertEmeny[3] * Math.cos(Math.PI / 6)) + ' ' + (YY[3] + insertEmeny[3] * Math.sin(Math.PI / 6));
    d3 = 'M' + dex_3[2] + ' ' + dey_3[2] + 'L' + (XX[3] + insertEmeny[3] * Math.cos(Math.PI / 3)) + ' ' + (YY[3] + insertEmeny[3] * Math.sin(Math.PI / 3));
    d4 = 'M' + dex_3[3] + ' ' + dey_3[3] + 'L' + XX[3] + ' ' + (YY[3] + insertEmeny[3]);
    d5 = 'M' + dex_3[4] + ' ' + dey_3[4] + 'L' + (XX[3] + insertEmeny[3] * Math.cos(Math.PI * 2 / 3)) + ' ' + (YY[3] + insertEmeny[3] * Math.sin(Math.PI * 2 / 3));
    d6 = 'M' + dex_3[5] + ' ' + dey_3[5] + 'L' + (XX[3] + insertEmeny[3] * Math.cos(Math.PI * 5 / 6)) + ' ' + (YY[3] + insertEmeny[3] * Math.sin(Math.PI * 5 / 6));
    d7 = 'M' + dex_3[6] + ' ' + dey_3[6] + 'L' + (XX[3] - insertEmeny[3]) + ' ' + YY[3];
    d8 = 'M' + dex_3[7] + ' ' + dey_3[7] + 'L' + (XX[3] + insertEmeny[3] * Math.cos(Math.PI * 7 / 6)) + ' ' + (YY[3] + insertEmeny[3] * Math.sin(Math.PI * 7 / 6));
    d9 = 'M' + dex_3[8] + ' ' + dey_3[8] + 'L' + (XX[3] + insertEmeny[3] * Math.cos(Math.PI * 4 / 3)) + ' ' + (YY[3] + insertEmeny[3] * Math.sin(Math.PI * 4 / 3));
    d10 = 'M' + dex_3[9] + ' ' + dey_3[9] + 'L' + XX[3] + ' ' + (YY[3] - insertEmeny[3]);
    d11 = 'M' + dex_3[10] + ' ' + dey_3[10] + 'L' + (XX[3] + insertEmeny[3] * Math.cos(Math.PI * 5 / 3)) + ' ' + (YY[3] + insertEmeny[3] * Math.sin(Math.PI * 5 / 3));
    d12 = 'M' + dex_3[11] + ' ' + dey_3[11] + 'L' + (XX[3] + insertEmeny[3] * Math.cos(Math.PI * 11 / 6)) + ' ' + (YY[3] + insertEmeny[3] * Math.sin(Math.PI * 11 / 6));
    var line1 = makeSVG('path', { 'd': d1, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[0] });
    s.appendChild(line1);
    var line2 = makeSVG('path', { 'd': d2, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[1] });
    s.appendChild(line2);
    var line3 = makeSVG('path', { 'd': d3, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[2] });
    s.appendChild(line3);
    var line4 = makeSVG('path', { 'd': d4, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[3] });
    s.appendChild(line4);
    var line5 = makeSVG('path', { 'd': d5, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[4] });
    s.appendChild(line5);
    var line6 = makeSVG('path', { 'd': d6, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[5] });
    s.appendChild(line6);
    var line7 = makeSVG('path', { 'd': d7, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[6] });
    s.appendChild(line7);
    var line8 = makeSVG('path', { 'd': d8, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[7] });
    s.appendChild(line8);
    var line9 = makeSVG('path', { 'd': d9, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[8] });
    s.appendChild(line9);
    var line10 = makeSVG('path', { 'd': d10, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[9] });
    s.appendChild(line10);
    var line11 = makeSVG('path', { 'd': d11, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[10] });
    s.appendChild(line11);
    var line12 = makeSVG('path', { 'd': d12, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_3[11] });
    s.appendChild(line12);
}
function setEmenyPath_4() {
    var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12;

    insertEmeny[4] += c;
    for (var i = 0; i < 12; i++) {
        opaEmeny_4[i] -= 0.05;
    }
    dex_4[0] = (XX[4] + (insertEmeny[4] - c));
    dex_4[1] = (XX[4] + (insertEmeny[4] - c) * Math.cos(Math.PI / 6));
    dex_4[2] = (XX[4] + (insertEmeny[4] - c) * Math.cos(Math.PI / 3));
    dex_4[3] = XX[4];
    dex_4[4] = (XX[4] + (insertEmeny[4] - c) * Math.cos(Math.PI * 2 / 3));
    dex_4[5] = (XX[4] + (insertEmeny[4] - c) * Math.cos(Math.PI * 5 / 6));
    dex_4[6] = (XX[4] - (insertEmeny[4] - c));
    dex_4[7] = (XX[4] + (insertEmeny[4] - c) * Math.cos(Math.PI * 7 / 6));
    dex_4[8] = (XX[4] + (insertEmeny[4] - c) * Math.cos(Math.PI * 4 / 3));
    dex_4[9] = XX[4];
    dex_4[10] = (XX[4] + (insertEmeny[4] - c) * Math.cos(Math.PI * 5 / 3));
    dex_4[11] = (XX[4] + (insertEmeny[4] - c) * Math.cos(Math.PI * 11 / 6));
    dey_4[0] = YY[4];
    dey_4[1] = (YY[4] + (insertEmeny[4] - c) * Math.sin(Math.PI / 6));
    dey_4[2] = (YY[4] + (insertEmeny[4] - c) * Math.sin(Math.PI / 3));
    dey_4[3] = (YY[4] + (insertEmeny[4] - c));
    dey_4[4] = (YY[4] + (insertEmeny[4] - c) * Math.sin(Math.PI * 2 / 3));
    dey_4[5] = (YY[4] + (insertEmeny[4] - c) * Math.sin(Math.PI * 5 / 6));
    dey_4[6] = YY[4];
    dey_4[7] = (YY[4] + (insertEmeny[4] - c) * Math.sin(Math.PI * 7 / 6));
    dey_4[8] = (YY[4] + (insertEmeny[4] - c) * Math.sin(Math.PI * 4 / 3));
    dey_4[9] = (YY[4] - (insertEmeny[4] - c));
    dey_4[10] = (YY[4] + (insertEmeny[4] - c) * Math.sin(Math.PI * 5 / 3));
    dey_4[11] = (YY[4] + (insertEmeny[4] - c) * Math.sin(Math.PI * 11 / 6));
    for (var i = 0 ; i < 12; i++) {
        if (checkWall(parseInt((dex_4[i] - 5) / cubeSize), parseInt((dey_4[i] - 5) / cubeSize)) == true) opaEmeny_4[i] = 0;
    }
    d1 = 'M' + dex_4[0] + ' ' + dey_4[0] + 'L' + (XX[4] + insertEmeny[4]) + ' ' + YY[4];
    d2 = 'M' + dex_4[1] + ' ' + dey_4[1] + 'L' + (XX[4] + insertEmeny[4] * Math.cos(Math.PI / 6)) + ' ' + (YY[4] + insertEmeny[4] * Math.sin(Math.PI / 6));
    d3 = 'M' + dex_4[2] + ' ' + dey_4[2] + 'L' + (XX[4] + insertEmeny[4] * Math.cos(Math.PI / 3)) + ' ' + (YY[4] + insertEmeny[4] * Math.sin(Math.PI / 3));
    d4 = 'M' + dex_4[3] + ' ' + dey_4[3] + 'L' + XX[4] + ' ' + (YY[4] + insertEmeny[4]);
    d5 = 'M' + dex_4[4] + ' ' + dey_4[4] + 'L' + (XX[4] + insertEmeny[4] * Math.cos(Math.PI * 2 / 3)) + ' ' + (YY[4] + insertEmeny[4] * Math.sin(Math.PI * 2 / 3));
    d6 = 'M' + dex_4[5] + ' ' + dey_4[5] + 'L' + (XX[4] + insertEmeny[4] * Math.cos(Math.PI * 5 / 6)) + ' ' + (YY[4] + insertEmeny[4] * Math.sin(Math.PI * 5 / 6));
    d7 = 'M' + dex_4[6] + ' ' + dey_4[6] + 'L' + (XX[4] - insertEmeny[4]) + ' ' + YY[4];
    d8 = 'M' + dex_4[7] + ' ' + dey_4[7] + 'L' + (XX[4] + insertEmeny[4] * Math.cos(Math.PI * 7 / 6)) + ' ' + (YY[4] + insertEmeny[4] * Math.sin(Math.PI * 7 / 6));
    d9 = 'M' + dex_4[8] + ' ' + dey_4[8] + 'L' + (XX[4] + insertEmeny[4] * Math.cos(Math.PI * 4 / 3)) + ' ' + (YY[4] + insertEmeny[4] * Math.sin(Math.PI * 4 / 3));
    d10 = 'M' + dex_4[9] + ' ' + dey_4[9] + 'L' + XX[4] + ' ' + (YY[4] - insertEmeny[4]);
    d11 = 'M' + dex_4[10] + ' ' + dey_4[10] + 'L' + (XX[4] + insertEmeny[4] * Math.cos(Math.PI * 5 / 3)) + ' ' + (YY[4] + insertEmeny[4] * Math.sin(Math.PI * 5 / 3));
    d12 = 'M' + dex_4[11] + ' ' + dey_4[11] + 'L' + (XX[4] + insertEmeny[4] * Math.cos(Math.PI * 11 / 6)) + ' ' + (YY[4] + insertEmeny[4] * Math.sin(Math.PI * 11 / 6));
    var line1 = makeSVG('path', { 'd': d1, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[0] });
    s.appendChild(line1);
    var line2 = makeSVG('path', { 'd': d2, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[1] });
    s.appendChild(line2);
    var line3 = makeSVG('path', { 'd': d3, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[2] });
    s.appendChild(line3);
    var line4 = makeSVG('path', { 'd': d4, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[3] });
    s.appendChild(line4);
    var line5 = makeSVG('path', { 'd': d5, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[4] });
    s.appendChild(line5);
    var line6 = makeSVG('path', { 'd': d6, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[5] });
    s.appendChild(line6);
    var line7 = makeSVG('path', { 'd': d7, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[6] });
    s.appendChild(line7);
    var line8 = makeSVG('path', { 'd': d8, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[7] });
    s.appendChild(line8);
    var line9 = makeSVG('path', { 'd': d9, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[8] });
    s.appendChild(line9);
    var line10 = makeSVG('path', { 'd': d10, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[9] });
    s.appendChild(line10);
    var line11 = makeSVG('path', { 'd': d11, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[10] });
    s.appendChild(line11);
    var line12 = makeSVG('path', { 'd': d12, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_4[11] });
    s.appendChild(line12);
}
function setEmenyPath_5() {
    var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12;

    insertEmeny[5] += c;
    for (var i = 0; i < 12; i++) {
        opaEmeny_5[i] -= 0.05;
    }
    dex_5[0] = (XX[5] + (insertEmeny[5] - c));
    dex_5[1] = (XX[5] + (insertEmeny[5] - c) * Math.cos(Math.PI / 6));
    dex_5[2] = (XX[5] + (insertEmeny[5] - c) * Math.cos(Math.PI / 3));
    dex_5[3] = XX[5];
    dex_5[4] = (XX[5] + (insertEmeny[5] - c) * Math.cos(Math.PI * 2 / 3));
    dex_5[5] = (XX[5] + (insertEmeny[5] - c) * Math.cos(Math.PI * 5 / 6));
    dex_5[6] = (XX[5] - (insertEmeny[5] - c));
    dex_5[7] = (XX[5] + (insertEmeny[5] - c) * Math.cos(Math.PI * 7 / 6));
    dex_5[8] = (XX[5] + (insertEmeny[5] - c) * Math.cos(Math.PI * 4 / 3));
    dex_5[9] = XX[5];
    dex_5[10] = (XX[5] + (insertEmeny[5] - c) * Math.cos(Math.PI * 5 / 3));
    dex_5[11] = (XX[5] + (insertEmeny[5] - c) * Math.cos(Math.PI * 11 / 6));
    dey_5[0] = YY[5];
    dey_5[1] = (YY[5] + (insertEmeny[5] - c) * Math.sin(Math.PI / 6));
    dey_5[2] = (YY[5] + (insertEmeny[5] - c) * Math.sin(Math.PI / 3));
    dey_5[3] = (YY[5] + (insertEmeny[5] - c));
    dey_5[4] = (YY[5] + (insertEmeny[5] - c) * Math.sin(Math.PI * 2 / 3));
    dey_5[5] = (YY[5] + (insertEmeny[5] - c) * Math.sin(Math.PI * 5 / 6));
    dey_5[6] = YY[5];
    dey_5[7] = (YY[5] + (insertEmeny[5] - c) * Math.sin(Math.PI * 7 / 6));
    dey_5[8] = (YY[5] + (insertEmeny[5] - c) * Math.sin(Math.PI * 4 / 3));
    dey_5[9] = (YY[5] - (insertEmeny[5] - c));
    dey_5[10] = (YY[5] + (insertEmeny[5] - c) * Math.sin(Math.PI * 5 / 3));
    dey_5[11] = (YY[5] + (insertEmeny[5] - c) * Math.sin(Math.PI * 11 / 6));
    for (var i = 0 ; i < 12; i++) {
        if (checkWall(parseInt((dex_5[i] - 5) / cubeSize), parseInt((dey_5[i] - 5) / cubeSize)) == true) opaEmeny_5[i] = 0;
    }
    d1 = 'M' + dex_5[0] + ' ' + dey_5[0] + 'L' + (XX[5] + insertEmeny[5]) + ' ' + YY[5];
    d2 = 'M' + dex_5[1] + ' ' + dey_5[1] + 'L' + (XX[5] + insertEmeny[5] * Math.cos(Math.PI / 6)) + ' ' + (YY[5] + insertEmeny[5] * Math.sin(Math.PI / 6));
    d3 = 'M' + dex_5[2] + ' ' + dey_5[2] + 'L' + (XX[5] + insertEmeny[5] * Math.cos(Math.PI / 3)) + ' ' + (YY[5] + insertEmeny[5] * Math.sin(Math.PI / 3));
    d4 = 'M' + dex_5[3] + ' ' + dey_5[3] + 'L' + XX[5] + ' ' + (YY[5] + insertEmeny[5]);
    d5 = 'M' + dex_5[4] + ' ' + dey_5[4] + 'L' + (XX[5] + insertEmeny[5] * Math.cos(Math.PI * 2 / 3)) + ' ' + (YY[5] + insertEmeny[5] * Math.sin(Math.PI * 2 / 3));
    d6 = 'M' + dex_5[5] + ' ' + dey_5[5] + 'L' + (XX[5] + insertEmeny[5] * Math.cos(Math.PI * 5 / 6)) + ' ' + (YY[5] + insertEmeny[5] * Math.sin(Math.PI * 5 / 6));
    d7 = 'M' + dex_5[6] + ' ' + dey_5[6] + 'L' + (XX[5] - insertEmeny[5]) + ' ' + YY[5];
    d8 = 'M' + dex_5[7] + ' ' + dey_5[7] + 'L' + (XX[5] + insertEmeny[5] * Math.cos(Math.PI * 7 / 6)) + ' ' + (YY[5] + insertEmeny[5] * Math.sin(Math.PI * 7 / 6));
    d9 = 'M' + dex_5[8] + ' ' + dey_5[8] + 'L' + (XX[5] + insertEmeny[5] * Math.cos(Math.PI * 4 / 3)) + ' ' + (YY[5] + insertEmeny[5] * Math.sin(Math.PI * 4 / 3));
    d10 = 'M' + dex_5[9] + ' ' + dey_5[9] + 'L' + XX[5] + ' ' + (YY[5] - insertEmeny[5]);
    d11 = 'M' + dex_5[10] + ' ' + dey_5[10] + 'L' + (XX[5] + insertEmeny[5] * Math.cos(Math.PI * 5 / 3)) + ' ' + (YY[5] + insertEmeny[5] * Math.sin(Math.PI * 5 / 3));
    d12 = 'M' + dex_5[11] + ' ' + dey_5[11] + 'L' + (XX[5] + insertEmeny[5] * Math.cos(Math.PI * 11 / 6)) + ' ' + (YY[5] + insertEmeny[5] * Math.sin(Math.PI * 11 / 6));
    var line1 = makeSVG('path', { 'd': d1, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[0] });
    s.appendChild(line1);
    var line2 = makeSVG('path', { 'd': d2, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[1] });
    s.appendChild(line2);
    var line3 = makeSVG('path', { 'd': d3, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[2] });
    s.appendChild(line3);
    var line4 = makeSVG('path', { 'd': d4, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[3] });
    s.appendChild(line4);
    var line5 = makeSVG('path', { 'd': d5, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[4] });
    s.appendChild(line5);
    var line6 = makeSVG('path', { 'd': d6, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[5] });
    s.appendChild(line6);
    var line7 = makeSVG('path', { 'd': d7, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[6] });
    s.appendChild(line7);
    var line8 = makeSVG('path', { 'd': d8, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[7] });
    s.appendChild(line8);
    var line9 = makeSVG('path', { 'd': d9, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[8] });
    s.appendChild(line9);
    var line10 = makeSVG('path', { 'd': d10, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[9] });
    s.appendChild(line10);
    var line11 = makeSVG('path', { 'd': d11, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[10] });
    s.appendChild(line11);
    var line12 = makeSVG('path', { 'd': d12, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_5[11] });
    s.appendChild(line12);
}
function setEmenyPath_6() {
    var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12;

    insertEmeny[6] += c;
    for (var i = 0; i < 12; i++) {
        opaEmeny_6[i] -= 0.05;
    }
    dex_6[0] = (XX[6] + (insertEmeny[6] - c));
    dex_6[1] = (XX[6] + (insertEmeny[6] - c) * Math.cos(Math.PI / 6));
    dex_6[2] = (XX[6] + (insertEmeny[6] - c) * Math.cos(Math.PI / 3));
    dex_6[3] = XX[6];
    dex_6[4] = (XX[6] + (insertEmeny[6] - c) * Math.cos(Math.PI * 2 / 3));
    dex_6[5] = (XX[6] + (insertEmeny[6] - c) * Math.cos(Math.PI * 5 / 6));
    dex_6[6] = (XX[6] - (insertEmeny[6] - c));
    dex_6[7] = (XX[6] + (insertEmeny[6] - c) * Math.cos(Math.PI * 7 / 6));
    dex_6[8] = (XX[6] + (insertEmeny[6] - c) * Math.cos(Math.PI * 4 / 3));
    dex_6[9] = XX[6];
    dex_6[10] = (XX[6] + (insertEmeny[6] - c) * Math.cos(Math.PI * 5 / 3));
    dex_6[11] = (XX[6] + (insertEmeny[6] - c) * Math.cos(Math.PI * 11 / 6));
    dey_6[0] = YY[6];
    dey_6[1] = (YY[6] + (insertEmeny[6] - c) * Math.sin(Math.PI / 6));
    dey_6[2] = (YY[6] + (insertEmeny[6] - c) * Math.sin(Math.PI / 3));
    dey_6[3] = (YY[6] + (insertEmeny[6] - c));
    dey_6[4] = (YY[6] + (insertEmeny[6] - c) * Math.sin(Math.PI * 2 / 3));
    dey_6[5] = (YY[6] + (insertEmeny[6] - c) * Math.sin(Math.PI * 5 / 6));
    dey_6[6] = YY[6];
    dey_6[7] = (YY[6] + (insertEmeny[6] - c) * Math.sin(Math.PI * 7 / 6));
    dey_6[8] = (YY[6] + (insertEmeny[6] - c) * Math.sin(Math.PI * 4 / 3));
    dey_6[9] = (YY[6] - (insertEmeny[6] - c));
    dey_6[10] = (YY[6] + (insertEmeny[6] - c) * Math.sin(Math.PI * 5 / 3));
    dey_6[11] = (YY[6] + (insertEmeny[6] - c) * Math.sin(Math.PI * 11 / 6));
    for (var i = 0 ; i < 12; i++) {
        if (checkWall(parseInt((dex_6[i] - 5) / cubeSize), parseInt((dey_6[i] - 5) / cubeSize)) == true) opaEmeny_6[i] = 0;
    }
    d1 = 'M' + dex_6[0] + ' ' + dey_6[0] + 'L' + (XX[6] + insertEmeny[6]) + ' ' + YY[6];
    d2 = 'M' + dex_6[1] + ' ' + dey_6[1] + 'L' + (XX[6] + insertEmeny[6] * Math.cos(Math.PI / 6)) + ' ' + (YY[6] + insertEmeny[6] * Math.sin(Math.PI / 6));
    d3 = 'M' + dex_6[2] + ' ' + dey_6[2] + 'L' + (XX[6] + insertEmeny[6] * Math.cos(Math.PI / 3)) + ' ' + (YY[6] + insertEmeny[6] * Math.sin(Math.PI / 3));
    d4 = 'M' + dex_6[3] + ' ' + dey_6[3] + 'L' + XX[6] + ' ' + (YY[6] + insertEmeny[6]);
    d5 = 'M' + dex_6[4] + ' ' + dey_6[4] + 'L' + (XX[6] + insertEmeny[6] * Math.cos(Math.PI * 2 / 3)) + ' ' + (YY[6] + insertEmeny[6] * Math.sin(Math.PI * 2 / 3));
    d6 = 'M' + dex_6[5] + ' ' + dey_6[5] + 'L' + (XX[6] + insertEmeny[6] * Math.cos(Math.PI * 5 / 6)) + ' ' + (YY[6] + insertEmeny[6] * Math.sin(Math.PI * 5 / 6));
    d7 = 'M' + dex_6[6] + ' ' + dey_6[6] + 'L' + (XX[6] - insertEmeny[6]) + ' ' + YY[6];
    d8 = 'M' + dex_6[7] + ' ' + dey_6[7] + 'L' + (XX[6] + insertEmeny[6] * Math.cos(Math.PI * 7 / 6)) + ' ' + (YY[6] + insertEmeny[6] * Math.sin(Math.PI * 7 / 6));
    d9 = 'M' + dex_6[8] + ' ' + dey_6[8] + 'L' + (XX[6] + insertEmeny[6] * Math.cos(Math.PI * 4 / 3)) + ' ' + (YY[6] + insertEmeny[6] * Math.sin(Math.PI * 4 / 3));
    d10 = 'M' + dex_6[9] + ' ' + dey_6[9] + 'L' + XX[6] + ' ' + (YY[6] - insertEmeny[6]);
    d11 = 'M' + dex_6[10] + ' ' + dey_6[10] + 'L' + (XX[6] + insertEmeny[6] * Math.cos(Math.PI * 5 / 3)) + ' ' + (YY[6] + insertEmeny[6] * Math.sin(Math.PI * 5 / 3));
    d12 = 'M' + dex_6[11] + ' ' + dey_6[11] + 'L' + (XX[6] + insertEmeny[6] * Math.cos(Math.PI * 11 / 6)) + ' ' + (YY[6] + insertEmeny[6] * Math.sin(Math.PI * 11 / 6));
    var line1 = makeSVG('path', { 'd': d1, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[0] });
    s.appendChild(line1);
    var line2 = makeSVG('path', { 'd': d2, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[1] });
    s.appendChild(line2);
    var line3 = makeSVG('path', { 'd': d3, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[2] });
    s.appendChild(line3);
    var line4 = makeSVG('path', { 'd': d4, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[3] });
    s.appendChild(line4);
    var line5 = makeSVG('path', { 'd': d5, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[4] });
    s.appendChild(line5);
    var line6 = makeSVG('path', { 'd': d6, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[5] });
    s.appendChild(line6);
    var line7 = makeSVG('path', { 'd': d7, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[6] });
    s.appendChild(line7);
    var line8 = makeSVG('path', { 'd': d8, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[7] });
    s.appendChild(line8);
    var line9 = makeSVG('path', { 'd': d9, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[8] });
    s.appendChild(line9);
    var line10 = makeSVG('path', { 'd': d10, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[9] });
    s.appendChild(line10);
    var line11 = makeSVG('path', { 'd': d11, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[10] });
    s.appendChild(line11);
    var line12 = makeSVG('path', { 'd': d12, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_6[11] });
    s.appendChild(line12);
}
function setEmenyPath_7() {
    var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12;

    insertEmeny[7] += c;
    for (var i = 0; i < 12; i++) {
        opaEmeny_7[i] -= 0.05;
    }
    dex_7[0] = (XX[7] + (insertEmeny[7] - c));
    dex_7[1] = (XX[7] + (insertEmeny[7] - c) * Math.cos(Math.PI / 6));
    dex_7[2] = (XX[7] + (insertEmeny[7] - c) * Math.cos(Math.PI / 3));
    dex_7[3] = XX[7];
    dex_7[4] = (XX[7] + (insertEmeny[7] - c) * Math.cos(Math.PI * 2 / 3));
    dex_7[5] = (XX[7] + (insertEmeny[7] - c) * Math.cos(Math.PI * 5 / 6));
    dex_7[6] = (XX[7] - (insertEmeny[7] - c));
    dex_7[7] = (XX[7] + (insertEmeny[7] - c) * Math.cos(Math.PI * 7 / 6));
    dex_7[8] = (XX[7] + (insertEmeny[7] - c) * Math.cos(Math.PI * 4 / 3));
    dex_7[9] = XX[7];
    dex_7[10] = (XX[7] + (insertEmeny[7] - c) * Math.cos(Math.PI * 5 / 3));
    dex_7[11] = (XX[7] + (insertEmeny[7] - c) * Math.cos(Math.PI * 11 / 6));
    dey_7[0] = YY[7];
    dey_7[1] = (YY[7] + (insertEmeny[7] - c) * Math.sin(Math.PI / 6));
    dey_7[2] = (YY[7] + (insertEmeny[7] - c) * Math.sin(Math.PI / 3));
    dey_7[3] = (YY[7] + (insertEmeny[7] - c));
    dey_7[4] = (YY[7] + (insertEmeny[7] - c) * Math.sin(Math.PI * 2 / 3));
    dey_7[5] = (YY[7] + (insertEmeny[7] - c) * Math.sin(Math.PI * 5 / 6));
    dey_7[6] = YY[7];
    dey_7[7] = (YY[7] + (insertEmeny[7] - c) * Math.sin(Math.PI * 7 / 6));
    dey_7[8] = (YY[7] + (insertEmeny[7] - c) * Math.sin(Math.PI * 4 / 3));
    dey_7[9] = (YY[7] - (insertEmeny[7] - c));
    dey_7[10] = (YY[7] + (insertEmeny[7] - c) * Math.sin(Math.PI * 5 / 3));
    dey_7[11] = (YY[7] + (insertEmeny[7] - c) * Math.sin(Math.PI * 11 / 6));
    for (var i = 0 ; i < 12; i++) {
        if (checkWall(parseInt((dex_7[i] - 5) / cubeSize), parseInt((dey_7[i] - 5) / cubeSize)) == true) opaEmeny_7[i] = 0;
    }
    d1 = 'M' + dex_7[0] + ' ' + dey_7[0] + 'L' + (XX[7] + insertEmeny[7]) + ' ' + YY[7];
    d2 = 'M' + dex_7[1] + ' ' + dey_7[1] + 'L' + (XX[7] + insertEmeny[7] * Math.cos(Math.PI / 6)) + ' ' + (YY[7] + insertEmeny[7] * Math.sin(Math.PI / 6));
    d3 = 'M' + dex_7[2] + ' ' + dey_7[2] + 'L' + (XX[7] + insertEmeny[7] * Math.cos(Math.PI / 3)) + ' ' + (YY[7] + insertEmeny[7] * Math.sin(Math.PI / 3));
    d4 = 'M' + dex_7[3] + ' ' + dey_7[3] + 'L' + XX[7] + ' ' + (YY[7] + insertEmeny[7]);
    d5 = 'M' + dex_7[4] + ' ' + dey_7[4] + 'L' + (XX[7] + insertEmeny[7] * Math.cos(Math.PI * 2 / 3)) + ' ' + (YY[7] + insertEmeny[7] * Math.sin(Math.PI * 2 / 3));
    d6 = 'M' + dex_7[5] + ' ' + dey_7[5] + 'L' + (XX[7] + insertEmeny[7] * Math.cos(Math.PI * 5 / 6)) + ' ' + (YY[7] + insertEmeny[7] * Math.sin(Math.PI * 5 / 6));
    d7 = 'M' + dex_7[6] + ' ' + dey_7[6] + 'L' + (XX[7] - insertEmeny[7]) + ' ' + YY[7];
    d8 = 'M' + dex_7[7] + ' ' + dey_7[7] + 'L' + (XX[7] + insertEmeny[7] * Math.cos(Math.PI * 7 / 6)) + ' ' + (YY[7] + insertEmeny[7] * Math.sin(Math.PI * 7 / 6));
    d9 = 'M' + dex_7[8] + ' ' + dey_7[8] + 'L' + (XX[7] + insertEmeny[7] * Math.cos(Math.PI * 4 / 3)) + ' ' + (YY[7] + insertEmeny[7] * Math.sin(Math.PI * 4 / 3));
    d10 = 'M' + dex_7[9] + ' ' + dey_7[9] + 'L' + XX[7] + ' ' + (YY[7] - insertEmeny[7]);
    d11 = 'M' + dex_7[10] + ' ' + dey_7[10] + 'L' + (XX[7] + insertEmeny[7] * Math.cos(Math.PI * 5 / 3)) + ' ' + (YY[7] + insertEmeny[7] * Math.sin(Math.PI * 5 / 3));
    d12 = 'M' + dex_7[11] + ' ' + dey_7[11] + 'L' + (XX[7] + insertEmeny[7] * Math.cos(Math.PI * 11 / 6)) + ' ' + (YY[7] + insertEmeny[7] * Math.sin(Math.PI * 11 / 6));
    var line1 = makeSVG('path', { 'd': d1, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[0] });
    s.appendChild(line1);
    var line2 = makeSVG('path', { 'd': d2, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[1] });
    s.appendChild(line2);
    var line3 = makeSVG('path', { 'd': d3, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[2] });
    s.appendChild(line3);
    var line4 = makeSVG('path', { 'd': d4, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[3] });
    s.appendChild(line4);
    var line5 = makeSVG('path', { 'd': d5, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[4] });
    s.appendChild(line5);
    var line6 = makeSVG('path', { 'd': d6, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[5] });
    s.appendChild(line6);
    var line7 = makeSVG('path', { 'd': d7, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[6] });
    s.appendChild(line7);
    var line8 = makeSVG('path', { 'd': d8, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[7] });
    s.appendChild(line8);
    var line9 = makeSVG('path', { 'd': d9, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[8] });
    s.appendChild(line9);
    var line10 = makeSVG('path', { 'd': d10, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[9] });
    s.appendChild(line10);
    var line11 = makeSVG('path', { 'd': d11, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[10] });
    s.appendChild(line11);
    var line12 = makeSVG('path', { 'd': d12, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_7[11] });
    s.appendChild(line12);
}
function setEmenyPath_8() {
    var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12;

    insertEmeny[8] += c;
    for (var i = 0; i < 12; i++) {
        opaEmeny_8[i] -= 0.05;
    }
    dex_8[0] = (XX[8] + (insertEmeny[8] - c));
    dex_8[1] = (XX[8] + (insertEmeny[8] - c) * Math.cos(Math.PI / 6));
    dex_8[2] = (XX[8] + (insertEmeny[8] - c) * Math.cos(Math.PI / 3));
    dex_8[3] = XX[8];
    dex_8[4] = (XX[8] + (insertEmeny[8] - c) * Math.cos(Math.PI * 2 / 3));
    dex_8[5] = (XX[8] + (insertEmeny[8] - c) * Math.cos(Math.PI * 5 / 6));
    dex_8[6] = (XX[8] - (insertEmeny[8] - c));
    dex_8[7] = (XX[8] + (insertEmeny[8] - c) * Math.cos(Math.PI * 7 / 6));
    dex_8[8] = (XX[8] + (insertEmeny[8] - c) * Math.cos(Math.PI * 4 / 3));
    dex_8[9] = XX[8];
    dex_8[10] = (XX[8] + (insertEmeny[8] - c) * Math.cos(Math.PI * 5 / 3));
    dex_8[11] = (XX[8] + (insertEmeny[8] - c) * Math.cos(Math.PI * 11 / 6));
    dey_8[0] = YY[8];
    dey_8[1] = (YY[8] + (insertEmeny[8] - c) * Math.sin(Math.PI / 6));
    dey_8[2] = (YY[8] + (insertEmeny[8] - c) * Math.sin(Math.PI / 3));
    dey_8[3] = (YY[8] + (insertEmeny[8] - c));
    dey_8[4] = (YY[8] + (insertEmeny[8] - c) * Math.sin(Math.PI * 2 / 3));
    dey_8[5] = (YY[8] + (insertEmeny[8] - c) * Math.sin(Math.PI * 5 / 6));
    dey_8[6] = YY[8];
    dey_8[7] = (YY[8] + (insertEmeny[8] - c) * Math.sin(Math.PI * 7 / 6));
    dey_8[8] = (YY[8] + (insertEmeny[8] - c) * Math.sin(Math.PI * 4 / 3));
    dey_8[9] = (YY[8] - (insertEmeny[8] - c));
    dey_8[10] = (YY[8] + (insertEmeny[8] - c) * Math.sin(Math.PI * 5 / 3));
    dey_8[11] = (YY[8] + (insertEmeny[8] - c) * Math.sin(Math.PI * 11 / 6));
    for (var i = 0 ; i < 12; i++) {
        if (checkWall(parseInt((dex_8[i] - 5) / cubeSize), parseInt((dey_8[i] - 5) / cubeSize)) == true) opaEmeny_8[i] = 0;
    }
    d1 = 'M' + dex_8[0] + ' ' + dey_8[0] + 'L' + (XX[8] + insertEmeny[8]) + ' ' + YY[8];
    d2 = 'M' + dex_8[1] + ' ' + dey_8[1] + 'L' + (XX[8] + insertEmeny[8] * Math.cos(Math.PI / 6)) + ' ' + (YY[8] + insertEmeny[8] * Math.sin(Math.PI / 6));
    d3 = 'M' + dex_8[2] + ' ' + dey_8[2] + 'L' + (XX[8] + insertEmeny[8] * Math.cos(Math.PI / 3)) + ' ' + (YY[8] + insertEmeny[8] * Math.sin(Math.PI / 3));
    d4 = 'M' + dex_8[3] + ' ' + dey_8[3] + 'L' + XX[8] + ' ' + (YY[8] + insertEmeny[8]);
    d5 = 'M' + dex_8[4] + ' ' + dey_8[4] + 'L' + (XX[8] + insertEmeny[8] * Math.cos(Math.PI * 2 / 3)) + ' ' + (YY[8] + insertEmeny[8] * Math.sin(Math.PI * 2 / 3));
    d6 = 'M' + dex_8[5] + ' ' + dey_8[5] + 'L' + (XX[8] + insertEmeny[8] * Math.cos(Math.PI * 5 / 6)) + ' ' + (YY[8] + insertEmeny[8] * Math.sin(Math.PI * 5 / 6));
    d7 = 'M' + dex_8[6] + ' ' + dey_8[6] + 'L' + (XX[8] - insertEmeny[8]) + ' ' + YY[8];
    d8 = 'M' + dex_8[7] + ' ' + dey_8[7] + 'L' + (XX[8] + insertEmeny[8] * Math.cos(Math.PI * 7 / 6)) + ' ' + (YY[8] + insertEmeny[8] * Math.sin(Math.PI * 7 / 6));
    d9 = 'M' + dex_8[8] + ' ' + dey_8[8] + 'L' + (XX[8] + insertEmeny[8] * Math.cos(Math.PI * 4 / 3)) + ' ' + (YY[8] + insertEmeny[8] * Math.sin(Math.PI * 4 / 3));
    d10 = 'M' + dex_8[9] + ' ' + dey_8[9] + 'L' + XX[8] + ' ' + (YY[8] - insertEmeny[8]);
    d11 = 'M' + dex_8[10] + ' ' + dey_8[10] + 'L' + (XX[8] + insertEmeny[8] * Math.cos(Math.PI * 5 / 3)) + ' ' + (YY[8] + insertEmeny[8] * Math.sin(Math.PI * 5 / 3));
    d12 = 'M' + dex_8[11] + ' ' + dey_8[11] + 'L' + (XX[8] + insertEmeny[8] * Math.cos(Math.PI * 11 / 6)) + ' ' + (YY[8] + insertEmeny[8] * Math.sin(Math.PI * 11 / 6));
    var line1 = makeSVG('path', { 'd': d1, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[0] });
    s.appendChild(line1);
    var line2 = makeSVG('path', { 'd': d2, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[1] });
    s.appendChild(line2);
    var line3 = makeSVG('path', { 'd': d3, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[2] });
    s.appendChild(line3);
    var line4 = makeSVG('path', { 'd': d4, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[3] });
    s.appendChild(line4);
    var line5 = makeSVG('path', { 'd': d5, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[4] });
    s.appendChild(line5);
    var line6 = makeSVG('path', { 'd': d6, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[5] });
    s.appendChild(line6);
    var line7 = makeSVG('path', { 'd': d7, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[6] });
    s.appendChild(line7);
    var line8 = makeSVG('path', { 'd': d8, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[7] });
    s.appendChild(line8);
    var line9 = makeSVG('path', { 'd': d9, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[8] });
    s.appendChild(line9);
    var line10 = makeSVG('path', { 'd': d10, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[9] });
    s.appendChild(line10);
    var line11 = makeSVG('path', { 'd': d11, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[10] });
    s.appendChild(line11);
    var line12 = makeSVG('path', { 'd': d12, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_8[11] });
    s.appendChild(line12);
}
function setEmenyPath_9() {
    var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12;

    insertEmeny[9] += c;
    for (var i = 0; i < 12; i++) {
        opaEmeny_9[i] -= 0.05;
    }
    dex_9[0] = (XX[9] + (insertEmeny[9] - c));
    dex_9[1] = (XX[9] + (insertEmeny[9] - c) * Math.cos(Math.PI / 6));
    dex_9[2] = (XX[9] + (insertEmeny[9] - c) * Math.cos(Math.PI / 3));
    dex_9[3] = XX[9];
    dex_9[4] = (XX[9] + (insertEmeny[9] - c) * Math.cos(Math.PI * 2 / 3));
    dex_9[5] = (XX[9] + (insertEmeny[9] - c) * Math.cos(Math.PI * 5 / 6));
    dex_9[6] = (XX[9] - (insertEmeny[9] - c));
    dex_9[7] = (XX[9] + (insertEmeny[9] - c) * Math.cos(Math.PI * 7 / 6));
    dex_9[8] = (XX[9] + (insertEmeny[9] - c) * Math.cos(Math.PI * 4 / 3));
    dex_9[9] = XX[9];
    dex_9[10] = (XX[9] + (insertEmeny[9] - c) * Math.cos(Math.PI * 5 / 3));
    dex_9[11] = (XX[9] + (insertEmeny[9] - c) * Math.cos(Math.PI * 11 / 6));
    dey_9[0] = YY[9];
    dey_9[1] = (YY[9] + (insertEmeny[9] - c) * Math.sin(Math.PI / 6));
    dey_9[2] = (YY[9] + (insertEmeny[9] - c) * Math.sin(Math.PI / 3));
    dey_9[3] = (YY[9] + (insertEmeny[9] - c));
    dey_9[4] = (YY[9] + (insertEmeny[9] - c) * Math.sin(Math.PI * 2 / 3));
    dey_9[5] = (YY[9] + (insertEmeny[9] - c) * Math.sin(Math.PI * 5 / 6));
    dey_9[6] = YY[9];
    dey_9[7] = (YY[9] + (insertEmeny[9] - c) * Math.sin(Math.PI * 7 / 6));
    dey_9[8] = (YY[9] + (insertEmeny[9] - c) * Math.sin(Math.PI * 4 / 3));
    dey_9[9] = (YY[9] - (insertEmeny[9] - c));
    dey_9[10] = (YY[9] + (insertEmeny[9] - c) * Math.sin(Math.PI * 5 / 3));
    dey_9[11] = (YY[9] + (insertEmeny[9] - c) * Math.sin(Math.PI * 11 / 6));
    for (var i = 0 ; i < 12; i++) {
        if (checkWall(parseInt((dex_9[i] - 5) / cubeSize), parseInt((dey_9[i] - 5) / cubeSize)) == true) opaEmeny_9[i] = 0;
    }
    d1 = 'M' + dex_9[0] + ' ' + dey_9[0] + 'L' + (XX[9] + insertEmeny[9]) + ' ' + YY[9];
    d2 = 'M' + dex_9[1] + ' ' + dey_9[1] + 'L' + (XX[9] + insertEmeny[9] * Math.cos(Math.PI / 6)) + ' ' + (YY[9] + insertEmeny[9] * Math.sin(Math.PI / 6));
    d3 = 'M' + dex_9[2] + ' ' + dey_9[2] + 'L' + (XX[9] + insertEmeny[9] * Math.cos(Math.PI / 3)) + ' ' + (YY[9] + insertEmeny[9] * Math.sin(Math.PI / 3));
    d4 = 'M' + dex_9[3] + ' ' + dey_9[3] + 'L' + XX[9] + ' ' + (YY[9] + insertEmeny[9]);
    d5 = 'M' + dex_9[4] + ' ' + dey_9[4] + 'L' + (XX[9] + insertEmeny[9] * Math.cos(Math.PI * 2 / 3)) + ' ' + (YY[9] + insertEmeny[9] * Math.sin(Math.PI * 2 / 3));
    d6 = 'M' + dex_9[5] + ' ' + dey_9[5] + 'L' + (XX[9] + insertEmeny[9] * Math.cos(Math.PI * 5 / 6)) + ' ' + (YY[9] + insertEmeny[9] * Math.sin(Math.PI * 5 / 6));
    d7 = 'M' + dex_9[6] + ' ' + dey_9[6] + 'L' + (XX[9] - insertEmeny[9]) + ' ' + YY[9];
    d8 = 'M' + dex_9[7] + ' ' + dey_9[7] + 'L' + (XX[9] + insertEmeny[9] * Math.cos(Math.PI * 7 / 6)) + ' ' + (YY[9] + insertEmeny[9] * Math.sin(Math.PI * 7 / 6));
    d9 = 'M' + dex_9[8] + ' ' + dey_9[8] + 'L' + (XX[9] + insertEmeny[9] * Math.cos(Math.PI * 4 / 3)) + ' ' + (YY[9] + insertEmeny[9] * Math.sin(Math.PI * 4 / 3));
    d10 = 'M' + dex_9[9] + ' ' + dey_9[9] + 'L' + XX[9] + ' ' + (YY[9] - insertEmeny[9]);
    d11 = 'M' + dex_9[10] + ' ' + dey_9[10] + 'L' + (XX[9] + insertEmeny[9] * Math.cos(Math.PI * 5 / 3)) + ' ' + (YY[9] + insertEmeny[9] * Math.sin(Math.PI * 5 / 3));
    d12 = 'M' + dex_9[11] + ' ' + dey_9[11] + 'L' + (XX[9] + insertEmeny[9] * Math.cos(Math.PI * 11 / 6)) + ' ' + (YY[9] + insertEmeny[9] * Math.sin(Math.PI * 11 / 6));
    var line1 = makeSVG('path', { 'd': d1, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[0] });
    s.appendChild(line1);
    var line2 = makeSVG('path', { 'd': d2, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[1] });
    s.appendChild(line2);
    var line3 = makeSVG('path', { 'd': d3, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[2] });
    s.appendChild(line3);
    var line4 = makeSVG('path', { 'd': d4, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[3] });
    s.appendChild(line4);
    var line5 = makeSVG('path', { 'd': d5, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[4] });
    s.appendChild(line5);
    var line6 = makeSVG('path', { 'd': d6, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[5] });
    s.appendChild(line6);
    var line7 = makeSVG('path', { 'd': d7, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[6] });
    s.appendChild(line7);
    var line8 = makeSVG('path', { 'd': d8, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[7] });
    s.appendChild(line8);
    var line9 = makeSVG('path', { 'd': d9, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[8] });
    s.appendChild(line9);
    var line10 = makeSVG('path', { 'd': d10, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[9] });
    s.appendChild(line10);
    var line11 = makeSVG('path', { 'd': d11, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[10] });
    s.appendChild(line11);
    var line12 = makeSVG('path', { 'd': d12, stroke: 'red', 'stroke-width': 2, 'opacity': opaEmeny_9[11] });
    s.appendChild(line12);
}
//給SVG Attribute
function makeSVG(path, attrs) {
    var line = document.createElementNS('http://www.w3.org/2000/svg', path);

    for (var k in attrs) {
        line.setAttribute(k, attrs[k]);
    }
    return line;
}

// 設定 Maze
function createMaze() {
    var windowX = window.screen.width;
    var windowY = window.screen.height;
    var count=0;

    for (var i = 0; i < mapSize; i++) {
        for (var j = 0; j < mapSize; j++) {
            if (map[i][j] == 1) {
                var newWall = document.createElement("div");
                newWall.setAttribute("class", "wall");
                newWall.style.top = j * cubeSize + "px";
                newWall.style.left = i * cubeSize + "px";
                document.body.appendChild(newWall);
            }
            else if (map[i][j] == 2) {
                var player = document.createElement("div");
                player.setAttribute("id", "player");
                player.style.top = j * cubeSize +25+ "px";
                player.style.left = i * cubeSize +25+ "px";
                document.body.appendChild(player);
                map[i][j] = 0;
                playerX = i;
                playerY = j;
            }
            else if (map[i][j] == 3) {
                var emeny = document.createElement("div");
                emeny.setAttribute("id", "emeny");
                emeny.style.top = j * cubeSize + "px";
                emeny.style.left = i * cubeSize + "px";
                document.body.appendChild(emeny);
                emenyX[count] = i;
                emenyY[count] = j;
                map[i][j] = 0;
                count++;
            }
        }

    }
}

// 監聽方向鍵，呼叫playerStep
function listenForPlayerMovement() {
    var onKeyDown = function (event) {

        switch (event.keyCode) {

            case 38: // up
            case 87: // w
                moveForward = true;
                break;

            case 37: // left
            case 65: // a
                moveLeft = true;
                break;

            case 40: // down
            case 83: // s
                moveBackward = true;
                break;

            case 39: // right
            case 68: // d
                moveRight = true;
                break;
        }
        playerAct();
    };

    var onKeyUp = function (event) {

        switch (event.keyCode) {

            case 38: // up
            case 87: // w

                moveForward = false;
                break;

            case 37: // left
            case 65: // a
                moveLeft = false;
                break;

            case 40: // down
            case 83: // s
                moveBackward = false;
                break;

            case 39: // right
            case 68: // d
                moveRight = false;
                break;
        }
    };
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);
}

// Player移動
function playerAct() {

    var player = document.getElementById('player');
    var tempLeft, tempTop, judge;

    if (moveForward && map[playerX][playerY - 1] == 0) {
        playerY--;
        //console.log("up:", playerX, playerY);
        player.style.top = playerY * cubeSize +25+ "px";
        window.scrollBy(0, -60);
    }

    if (moveBackward && map[playerX][playerY + 1] == 0) {
        playerY++;
        //console.log("down:", playerX, playerY);
        player.style.top = playerY * cubeSize +25+ "px";
        window.scrollBy(0, 60);
    }

    if (moveLeft && map[playerX - 1][playerY] == 0) {
        playerX--;
        //console.log("left:", playerX, playerY);
        player.style.left = playerX * cubeSize +25+ "px";
        window.scrollBy(-60, 0);
    }

    if (moveRight && map[playerX + 1][playerY] == 0) {
        playerX++;
        //console.log("right:", playerX, playerY);
        player.style.left = playerX * cubeSize +25+ "px";
        window.scrollBy(60, 0);
    }

    //window.scrollTo(playerX * 60, playerY * 60);
    for (var i = 0; i < 10; i++) {
        if (playerX == emenyX[i] && playerY == emenyY[i]) {
            died();
        }
    }

}

function died() {

    var count = num;
    //clearInterval(clearN);
   // clearInterval(clearEmeny);
    console.log("t1");
    setTimeout(function () {
        
        $("#finalResult").fadeIn(2500);
        document.getElementById("lifeTime").innerText = "存活時間：" + count;
    }, 1000);

    $("#backButton").click(function () {

        $("body").fadeOut(2000);
        setTimeout(function () {
            window.location.href = 'HomePage.html';
        }, 2000);

    });

    $("#restartButton").click(function () {

        $("body").fadeOut(2000);
        setTimeout(function () { 
            window.location.reload();
        }, 2000);

    });


}

function createMap() {
    map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    for (var i = 1; i < mapSize - 1; i++) {
        for (var j = 1; j < mapSize - 1; j++) {

            var create = Math.random() - 0.3;
            if (map[i + 1][j] == 1 && map[i][j + 1] == 1 && map[i - 1][j] == 1 && map[i][j - 1] == 1 && map[i + 1][j + 1] == 1 && map[i + 1][j - 1] == 1 && map[i - 1][j + 1] == 1 && map[i - 1][j - 1] == 1) {
                var randI = Math.ceil(Math.random() * 2) - 1;
                var randJ = Math.ceil(Math.random() * 2) - 1;
                map[i + randI][j + randJ] = 0;
            }

            else {
                if (create >= 0.5)
                    map[i][j] = 1;

            }
        }
    }

    for (var i = 2; i < mapSize - 2; i++) {
        for (var j = 2; j < mapSize - 2; j++) {

            if (map[i][j + 1] == 1 && map[i][j - 1] == 1 && map[i + 1][j] == 1 && map[i - 1][j] == 1) {
                var rand = Math.ceil(Math.random() * 2) - 1;

                map[i + rand][j] = 0;
                map[i][j + rand] = 0;
            }

        }
    }

    map[parseInt(window.screen.width / cubeSize / 2)][parseInt(window.screen.height / cubeSize / 2)] = 2;

    map[5][10] = 3;
    map[5][30] = 3;
    map[5][50] = 3;
    map[30][5] = 3;
    map[20][20] = 3;
    map[35][35] = 3;
    map[50][15] = 3;
    map[50][30] = 3;
    map[40][50] = 3;
    map[20][40] = 3;

}

function emeny(count) {

    var dirRand;
    var emeny = document.getElementById("emeny");

    if (map[emenyX[count] - 1][emenyY[count]] == 0) {
        dirRand = Math.random();
        if (dirRand >= 0.5) {
            emenyX[count]--;
            emeny.style.left = emenyX[count] * cubeSize + "px";
            return;
        }

    }

    if (map[emenyX[count] + 1][emenyY[count]] == 0) {

        dirRand = Math.random();
        if (dirRand >= 0.5) {
            emenyX[count]++;
            emeny.style.left = emenyX[count] * cubeSize + "px";
            return;
        }
    }

    if (map[emenyX[count]][emenyY[count] - 1] == 0) {

        dirRand = Math.random();
        if (dirRand >= 0.5) {
            emenyY[count]--;
            emeny.style.top = emenyY[count] * cubeSize + "px";
            return;
        }
    }

    if (map[emenyX[count]][emenyY[count] + 1] == 0) {
        dirRand = Math.random();
        if (dirRand >= 0.5) {
            emenyY[count]++;
            emeny.style.top = emenyY[count] * cubeSize + "px";
            return;
        }
    }

    if (playerX == emenyX[count] && playerY == emenyY[count]) {
        died();
    }
}