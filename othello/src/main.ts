import { Board } from './board';

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