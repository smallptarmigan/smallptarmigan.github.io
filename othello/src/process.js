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
function canFlip(){
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var flipped = getFlipCells(x, y, color);
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
        message = "exist";
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