// - global -------------------------------------------------------------------
var screenCanvas, info;
var run = true;
var fps = 1000 / 30;
var mouse = new Point();
var ctx_cell, ctx_board;
var turn = false;
var boarddata = JSON.parse(JSON.stringify((new Array(8)).fill((new Array(8)).fill(0))));
var gamemode = true

// - const --------------------------------------------------------------------
var BLACK = 1
var WHITE = 2
var PIECE_BLACK_COLOR = 'rgba(0, 0, 0, 1)';
var PIECE_WHITE_COLOR = 'rgba(255, 255, 255, 1)';

// - main ---------------------------------------------------------------------
window.onload = function(){

    // スクリーンの初期化
    screensize = 400
    wakusize = screensize / 8
    screenCanvas = document.getElementById('screen');
    screenCanvas.width = screensize;
    screenCanvas.height = screensize;

    // 2dコンテキスト
    ctx = screenCanvas.getContext('2d');

    // イベントの登録
    screenCanvas.addEventListener('mousemove', mouseMove, true);
    screenCanvas.addEventListener('mousedown', mouseDown, true);
    window.addEventListener('keydown', keyDown, true);

    // エレメント関連
    info = document.getElementById('info');
    
    // 盤面の初期化
    initboard();

    // ループ処理を呼び出す
    (function(){
        // HTMLを更新
        info.innerHTML = mouse.x + ' : ' + mouse.y;

        // screenクリア 
        ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
        
        // ゲーム時
        if(gamemode){
            // パスの設定を開始
            ctx.beginPath();
            // 盤面の色を設定する
            ctx.fillStyle = 'rgba(0, 170, 0, 1.0)';
            // 四角を描くパスを設定
            ctx.rect(0, 0, screenCanvas.width, screenCanvas.height);
            // 四角を描く
            ctx.fill();

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

        // フラグにより再帰呼び出し
        if(run){setTimeout(arguments.callee, fps);}
    })();
};

// - event --------------------------------------------------------------------
function mouseMove(event){
    // マウスカーソル座標の更新
    mouse.x = event.clientX - screenCanvas.offsetLeft;
    mouse.y = event.clientY - screenCanvas.offsetTop;
}

function keyDown(event){
    // キーコードを取得
    var ck = event.keyCode;
    // Escキーが押されていたらフラグを降ろす
    if(ck === 27){run = false;}
}

function mouseDown(event){
    // フラグを立てる
    turn = true;
}
