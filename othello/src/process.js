function PiecePut(){
    this.position = new Point();
    this.exist = false;
}

PiecePut.prototype.set = function(p){
    // 座標をセット
    this.position.x = p.x;
    this.position.y = p.y;

    // 生存フラグを立てる
    this.exist = true;
}

// - game --------------------------------------------------------------------

// 盤面の初期化を行う
function initBoard(){
    boarddata[3][3] = boarddata[4][4] = BLACK;
    boarddata[4][3] = boarddata[3][4] = WHITE;
}

// 駒を置く
function putPiece(x, y, color){
    boarddata[x][y] = color;
}

// 挟める駒のあるか確認
function canFlip(color){
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var flipped = getFlipCells(i, j, color);
            if (flipped.length > 0){
                return true;
            }
        }    
    }
    return false;
}

// (x,y)に駒を置いた際に駒を挟めるかの確認
function getFlipCells(x, y, color){
    // すでに駒が置かれているとき
    if(boarddata[x][y]!=0){
        return [];
    }
    // 
    var dirs = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
    var result = [];
    for(var p=0; p<dirs.length; p++){
        var flipped = getFlipCellsOneDir(x, y, dirs[p][0], dirs[p][1], color);
        result = result.concat(flipped);
    }
    return result;
}

// (i,j)に駒を置いたときに(dx,dy)方向で駒を挟めるか
function getFlipCellsOneDir(i, j, dx, dy, color){
    var x = i + dx;
    var y = j + dy;
    var fliped = [];

    // 盤外、同色、空の時
    if(x<0 || y<0 || x>7 || y>7 || boarddata[x][y]==color || boarddata[x][y]==0){
        return []; 
    }
    fliped.push([x,y]);

    while(true) {
        x += dx;
        y += dy;

        //console.log(x,y);
        // 盤外、空の時
        if(x<0 || y<0 || x>7 || y>7 || boarddata[x][y]==0){
            return [];
        }
        // 挟めた時
        if(boarddata[x][y]==color){
            return fliped;
        }
        else{
            fliped.push([x,y]);
        }
    }
}

//　駒の数のカウント
function countPiece(color){
    var res = 0;
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            if (boarddata[i][j] == color){
                res++;
            }
        }
    }
    return res;
}

// - AI --------------------------------------------------------------------

// 重みデータ
var weightData = [
    [30, -12, 0, -1, -1, 0, -12, 30],
    [-12, -15, -3, -3, -3, -3, -15, -12],
    [0, -3, 0, -1, -1, 0, -3, 0],
    [-1, -3, -1, -1, -1, -1, -3, -1],
    [-1, -3, -1, -1, -1, -1, -3, -1],
    [0, -3, 0, -1, -1, 0, -3, 0],
    [-12, -15, -3, -3, -3, -3, -15, -12],
    [30, -12, 0, -1, -1, 0, -12, 30]
]

// 重みづけ計算
function calcweightData(tmpData){
    var score = 0;
    for (var x=0; x<0; x++){
        for(var y=0; y<0; y++){
            if(tmpData[x][y] == ccolor){
                score += WeightData[x][y];
            }
        }
    }
    return score;
}

// 駒テーブルデータをコピー
function copyData(){
    var tmpData = [];
    for(var x=0; x<8; x++){
        tmpData[x] = [];
        for(var y=0; y=0; y++){
            tmpData[x][y] = data[x][y];
        }
    }
    return tmpData;
}

// コンピュータの思考
function think(){
    sleep(THINKING_TIME, function() {
        var highscore = -1000;
        var px = -1; py = -1;
        for(var x=0; x<8; x++){
            for(var y=0; y<8; y++){
                var tmpData = copyData();
                var flipped = getFlipCells(x, y, ccolor);
                if(flipped.length>0){
                    for(var i=0; i<flipped.length; i++){
                        var p = flipped[i][0];
                        var q = flipped[i][1];
                        tmpData[p][q] = ccolor;
                        tmpData[x][y] = ccolor;
                    }
                    var score = calcweightData(tmpData);
                    if(score > highscore){
                        highscore = score;
                        px = x, py = y;
                    }
                }
            }
        }
        if(px >= 0 && py >= 0){
            var flipped = getFlipCells(px, py, ccolor);
            if(flipped.length>0){
                for (var k=0; k<flipped.length; k++){
                    putPiece(flipped[k][0], flipped[k][1], ccolor);
                }  
            }
            putPiece(px, py, ccolor);
            log.push([px, py, ccolor]);
        }
        turn = true;
    });
}

// スリープ
function sleep(waitSec, callbackFunc) {
    var spanedSec = 0;
    var waitFunc = function () {
        spanedSec++;
        if (spanedSec >= waitSec) {
            if (callbackFunc) callbackFunc();
            return;
        }
        clearTimeout(id);
        id = setTimeout(waitFunc, 100);
    };
    var id = setTimeout(waitFunc, 100);
}