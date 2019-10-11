class Board {
    private turn: string;
    private data: number[][] = new Array();

    private SQLENGTH: number = 50;
    private INPOSLIST: number[][] = [[3,3,0],[3,4,1],[4,3,1],[4,4,0]];
    
    constructor(turn: string){
        this.turn = turn;
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

    public setTurn(turn: string): void{
        this.turn = turn
    }

    public getTurn(): string{
        return this.turn;
    }

    public getData(): number[][]{
        return this.data;
    }

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

        this.drowBoard(canvas)
        this.drowOthello(canvas)
    }
}


var mainboard = new Board("AI");
mainboard.drow();
