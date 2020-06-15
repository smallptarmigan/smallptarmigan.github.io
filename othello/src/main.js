// - global -------------------------------------------------------------------
var screenCanvas, info, gamemessage;
var run = true;
var fps = 1000 / 30;
var mouse = new Point();
var ctx_cell, ctx_board;
var turn = true;
var pcolor, ccolor;
var boarddata = JSON.parse(JSON.stringify((new Array(8)).fill((new Array(8)).fill(0))));
var log = [];
var gamemode = true;
var message = "", infomes = "";

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
    screenCanvas.addEventListener('mouseup', mouseUp, true);
    window.addEventListener('keydown', keyDown, true);

    // エレメント関連
    info = document.getElementById('info');
    gamemessage = document.getElementById('gamemessage');
    
    // 盤面の初期化
    initBoard();

    // ターンの決定
    pcolor = BLACK;
    ccolor = WHITE;

    // ループ処理を呼び出す
    (function(){
        // HTMLを更新
        info.innerHTML = infomes;
        gamemessage.innerHTML = message;

        // screenクリア 
        ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
        
        // ゲーム時
        if(gamemode){
            // 盤面の描画
            DrowBoard();
            // 枠線の描画
            DrowLine();
            // 駒を描画
            DrowPiece();
            // 選択マスの描画
            DrowSelect();            
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

function mouseUp(event){
    
    // ゲーム中のマウス処理
    if(gamemode){
        // プレイヤーのターンの時動作
        if(turn && canFlip(pcolor)){
            // 選択マス座標計算
            mouse.x = event.clientX - screenCanvas.offsetLeft;
            mouse.y = event.clientY - screenCanvas.offsetTop;
            cellx = mouse.x / wakusize | 0;
            celly = mouse.y / wakusize | 0;

            // 駒を置く
            var flipped = getFlipCells(cellx, celly, pcolor);
            if (flipped.length>0){
                for(var k=0; k<flipped.length; k++){
                    putPiece(flipped[k][0], flipped[k][1], pcolor);
                }
                putPiece(cellx, celly, pcolor);
                log.push([cellx, celly, pcolor]);
                turn = false;
                think();
            }
        }
        else{
            // PCの思考中
            think();
        }

        // 駒の数
        infomes = "black:"+countPiece(BLACK)+" white:"+countPiece(WHITE);

        // ゲーム終了
        if(!canFlip(pcolor) && !canFlip(ccolor)){
            if(countPiece(BLACK)==countPiece(WHITE)){
                message = "draw";
            }
            else if(countPiece(BLACK)<countPiece(WHITE)){
                message = "win white player";
            }
            else{
                message = "win black player";
            }
            //run = false;
        }

        //　デバックメッセージ
        //console.log("turn : "+turn);
        //console.log("canfliped "+pcolor+" : "+canFlip(pcolor));
        //console.log("canfliped "+ccolor+" : "+canFlip(ccolor));
    }
}
