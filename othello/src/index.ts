class Board {
    private turn: string;
    private data: number[][] = new Array();

    private SQLENGTH: number = 30;
    private INITPOSLIST: number[][] = [[3,3,0],[3,4,1],[4,3,1],[4,4,0]];
    
    constructor(turn: string){
        this.turn = turn;
    }

    public setTurn(turn: string): void{
        this.turn = turn
    }

    public getTurn(): string{
        return this.turn;
    }

    private drowboard(): void{
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

    public drow(): void{
        this.drowboard()
    }
}


var mainboard = new Board("AI");
mainboard.drow();
