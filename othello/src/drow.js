// 盤面を描画
function DrowBoard(){
    // パスの設定を開始
    ctx.beginPath();
    // 盤面の色を設定する
    ctx.fillStyle = 'rgba(0, 170, 0, 1.0)';
    // 四角を描くパスを設定
    ctx.rect(0, 0, screenCanvas.width, screenCanvas.height);
    // 四角を描く
    ctx.fill();
}

// 枠線を描画
function DrowLine(){
    // パスの設定を開始
    ctx.beginPath();
    // 枠の色を設定する
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    // 枠線を描くパスを設定
    for(let i=1; i<8; i++){
        ctx.moveTo(i*wakusize, 0);
        ctx.lineTo(i*wakusize, screenCanvas.height)
    }
    for(let i=1; i<8; i++){
        ctx.moveTo(0, i*wakusize);
        ctx.lineTo(screenCanvas.width, i*wakusize)
    }
    // 線を描く
    ctx.closePath();
    ctx.stroke();
}

// 駒を描画
function DrowPiece(){
    // パスの設定を開始
    ctx.beginPath();
    // 駒の色を設定する
    ctx.fillStyle = PIECE_BLACK_COLOR;
    // 円を描くパスを設定
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if(boarddata[i][j]==BLACK){
                ctx.arc(wakusize*i+wakusize/2, wakusize*j+wakusize/2, wakusize/2-2, 0 * Math.PI/180, 360*Math.PI/180, false);
            }
        }
    }
    // 円を描く
    ctx.fill();

    // パスの設定を開始
    ctx.beginPath();
    // 駒の色を設定する
    ctx.fillStyle = PIECE_WHITE_COLOR;
    // 円を描くパスを設定
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if(boarddata[i][j]==WHITE){
                ctx.arc(wakusize*i+wakusize/2, wakusize*j+wakusize/2, wakusize/2-2, 0 * Math.PI/180, 360*Math.PI/180, false);
            }
        }
    }
    // 円を描く
    ctx.fill();
}

// 選択マスの描画
function DrowSelect(){
    // パスの設定を開始
    ctx.beginPath();
    // 選択マスの色を設定する
    ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
    // 四角を描くパスを設定
    cellx = mouse.x / wakusize | 0;
    celly = mouse.y / wakusize | 0;
    ctx.rect(cellx*wakusize, celly*wakusize, wakusize, wakusize);
    // 四角を描く
    ctx.fill();
}