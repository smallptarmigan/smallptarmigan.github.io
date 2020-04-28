class Board {
    private data: number[][] = new Array();
    private x:number = 0;
    private y:number = 0;

    private SQLENGTH: number = 50;
    private INPOSLIST: number[][] = [[3,3,0],[3,4,1],[4,3,1],[4,4,0]];
    
    constructor(){
        for (var i=0; i<8; i++){
            this.data[i] = new Array();
            for (var j=0; j<8; j++){
                this.data[i][j] = -1
            }
        }
        // 初期コマ設定
        for (var i=0; i<this.INPOSLIST.length; i++){
            this.data[this.INPOSLIST[i][0]][this.INPOSLIST[i][1]] = this.INPOSLIST[i][2];
        }
    }

    //　I/O
    public getData(): number[][]{
        return this.data;
    }

    // クリック時の動作
    private onClick(e: any): void{
        var rect = e.target.getBoundingClientRect();
        this.x = Math.floor((e.clientX - 58)/this.SQLENGTH);
        this.y = Math.floor((e.clientY - 58)/this.SQLENGTH);
        console.log(e.clientX, e.clientY, this.x, this.y)
    }

    // 

    // ボードを描画
    private drowBoard(canvas: any): void{
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#abc";

        if (ctx !== null){
            ctx.beginPath();
            for (var i=0; i<8; i++){
                for (var j=0; j<8; j++){
                    if ((i+j)%2 == 0){
                        ctx.rect(this.SQLENGTH+(i*this.SQLENGTH), this.SQLENGTH+(j*this.SQLENGTH), this.SQLENGTH, this.SQLENGTH);
                    }
                }
            }
            ctx.fill();
        }
    }

    // オセロの駒を描画
    private drowOthello(canvas: any): void{
        const blackothello = canvas.getContext("2d");
        const whiteothello = canvas.getContext("2d");
        
        if (blackothello !== null){
            for (var i=0; i<8; i++){
                for (var j=0; j<8; j++){
                    if(this.data[i][j] == 0){
                        blackothello.beginPath();
                        blackothello.fillStyle = "#000";
                        blackothello.arc(this.SQLENGTH*1.5+(i*this.SQLENGTH), this.SQLENGTH*1.5+(j*this.SQLENGTH), this.SQLENGTH/2-3, 0, 360);
                        blackothello.fill()
                    }
                }
            }
        }

        if (whiteothello !== null){
            for (var i=0; i<8; i++){
                for (var j=0; j<8; j++){
                    if(this.data[i][j] == 1){
                        whiteothello.beginPath();
                        whiteothello.fillStyle = "#000";
                        whiteothello.arc(this.SQLENGTH*1.5+(i*this.SQLENGTH), this.SQLENGTH*1.5+(j*this.SQLENGTH), this.SQLENGTH/2-3, 0, 360);
                        whiteothello.stroke();
                    }
                }
            }
        }
    }

    // 盤面を描画
    public drow(): void{
        const canvas = document.createElement("canvas");
        canvas.width = this.SQLENGTH*10;
        canvas.height = this.SQLENGTH*10;
        document.body.appendChild(canvas);
        canvas.addEventListener('click', this.onClick, false);

        this.drowBoard(canvas)
        this.drowOthello(canvas)
    }

    
}

class TURN {
    
}

class Game {
    private mainboard = new Board();

    private getRandomTrun(max: number) {
        return Math.floor(Math.random() * (max + 1));
    }

    public processPhase(): number{
        let continueflag:number = 0;

        this.mainboard.drow();


        return continueflag;
    }

    public Main(): void{
        enum TURN {AI, PL};
        var n_trun: number = TURN.AI;
        var i:number = 10;
        console.log(n_trun);

        // ターンの決定
        n_trun = this.getRandomTrun(2);

        // 描画
        this.processPhase()

        while (i >= 0) {
            console.info(i);
            i--;
        }

        // 置ける場所リストを生成
        

        // コマを置く


        // 結果


    }
}


var script = new Game;
script.Main()