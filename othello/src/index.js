"use strict";
var Board = /** @class */ (function () {
    function Board(turn) {
        this.data = new Array();
        this.INITPOSLIST = [[3, 3, 0], [3, 4, 1], [4, 3, 1], [4, 4, 0]];
        this.turn = turn;
    }
    Board.prototype.drow = function () {
        var canvas = document.createElement("canvas");
        canvas.width = 800;
        canvas.height = 800;
        document.body.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        if (ctx !== null) {
            ctx.beginPath();
            ctx.fillStyle = "#abc";
            ctx.rect(100, 100, 100, 100);
            ctx.rect(200, 200, 100, 100);
            ctx.rect(300, 300, 100, 100);
            ctx.fill();
        }
    };
    return Board;
}());
var mainboard = new Board("AI");
mainboard.drow();
