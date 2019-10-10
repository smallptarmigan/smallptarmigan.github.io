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
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if ((i + j) % 2 == 0) {
                        ctx.fillStyle = "#abc";
                        ctx.rect(30 + (i * 30), 30 + (j * 30), 30, 30);
                    }
                }
            }
            ctx.fill();
        }
    };
    return Board;
}());
var mainboard = new Board("AI");
mainboard.drow();
