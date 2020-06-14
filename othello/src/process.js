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

function initboard(){
    boarddata[3][3] = boarddata[4][4] = BLACK;
    boarddata[4][3] = boarddata[3][4] = WHITE;
}

