class Board {
    private turn: string;
    private data: number[][] = new Array();

    private SQLENGTH: number = 30;
    private INPOSLIST: number[][] = [[3,3,0],[3,4,1],[4,3,1],[4,4,0]];
    
    constructor(turn: string){
        this.turn = turn;
        for (var i=0; i<8; i++){
            this.data[i] = new Array();
            for (var j=0; j<8; j++){
                this.data[i][j] = -1
            }
        }
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

    private drowBoard(): void{
        const canvas = document.createElement("canvas");
        canvas.width = this.SQLENGTH*8;
        canvas.height = this.SQLENGTH*8;
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        if (ctx !== null){
            ctx.beginPath();
            for (var i=0; i<8; i++){
                for (var j=0; j<8; j++){
                    if ((i+j)%2 == 0){
                        ctx.fillStyle = "#abc";
                        ctx.rect(this.SQLENGTH+(i*this.SQLENGTH), this.SQLENGTH+(j*this.SQLENGTH), this.SQLENGTH, this.SQLENGTH);
                    }
                }
            }
            ctx.fill();
        }
    }

    private drowOthello(): void{
        const canvas = document.createElement("canvas");
        canvas.width = this.SQLENGTH*8;
        canvas.height = this.SQLENGTH*8;
        document.body.appendChild(canvas);
        const blackothello = canvas.getContext("2d");
        const whiteothello = canvas.getContext("2d");
        
        if (blackothello !== null){
            for (var i=0; i<8; i++){
                for (var j=0; j<8; j++){
                    if(this.data[i][j] == 0){
                        blackothello.fillStyle = "#000";
                        blackothello.arc(this.SQLENGTH+(i*this.SQLENGTH), this.SQLENGTH+(j*this.SQLENGTH), this.SQLENGTH/2-3, 0, 360);
                    }
                    else if(this.data[i][j] == 1){  

                    }
                }
            }
        }
    }

    public drow(): void{
        this.drowBoard()
        this.drowOthello()
    }
}


var mainboard = new Board("AI");
mainboard.drow();
