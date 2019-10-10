class Board {
    private turn: string;
    private data: number[][] = new Array();
    private INITPOSLIST: number[][] = [[3,3,0],[3,4,1],[4,3,1],[4,4,0]];

    constructor(turn: string){
        this.turn = turn;
    }

    public drow(): void{
        const canvas = document.createElement("canvas");
        canvas.width = 800;
        canvas.height = 800;
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        if (ctx !== null){
            ctx.beginPath();
            ctx.fillStyle = "#abc";
            ctx.rect(100, 100, 100, 100);
            ctx.rect(200, 200, 100, 100);
            ctx.rect(300, 300, 100, 100);
            ctx.fill();
        }
    }
}

var mainboard = new Board("AI");
mainboard.drow();
