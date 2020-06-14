// - global -------------------------------------------------------------------
var screenCanvas, info;
var run = true;
var fps = 1000 / 30;
var mouse = new Point();
var ctx;
var turn = false;

// - const --------------------------------------------------------------------
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

    // ループ処理を呼び出す
    (function(){
        // HTMLを更新
        info.innerHTML = mouse.x + ' : ' + mouse.y;

        // screenクリア 
        ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);

        // パスの設定を開始
        ctx.beginPath();

        // 選択マスの色を設定する
        ctx.fillStyle = 'rgba(255, 255, 0, 0.75)';

        // 四角を描くパスを設定
        cellx = mouse.x / wakusize | 0;
        celly = mouse.y / wakusize | 0;
        ctx.rect(cellx*wakusize, celly*wakusize, wakusize, wakusize);

        // 四角を描く
        ctx.fill();

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
