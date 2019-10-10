"use strict";
var Board = /** @class */ (function () {
    function Board(turn) {
        this.data = new Array();
        this.SQLENGTH = 30;
        this.INPOSLIST = [[3, 3, 0], [3, 4, 1], [4, 3, 1], [4, 4, 0]];
        this.turn = turn;
        for (var i = 0; i < 8; i++) {
            this.data[i] = new Array();
            for (var j = 0; j < 8; j++) {
                this.data[i][j] = -1;
            }
        }
        for (var i = 0; i < this.INPOSLIST.length; i++) {
            this.data[this.INPOSLIST[i][0]][this.INPOSLIST[i][1]] = this.INPOSLIST[i][2];
        }
    }
    Board.prototype.setTurn = function (turn) {
        this.turn = turn;
    };
    Board.prototype.getTurn = function () {
        return this.turn;
    };
    Board.prototype.getData = function () {
        return this.data;
    };
    Board.prototype.drowBoard = function () {
        var canvas = document.createElement("canvas");
        canvas.width = this.SQLENGTH * 8;
        canvas.height = this.SQLENGTH * 8;
        document.body.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        if (ctx !== null) {
            ctx.beginPath();
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if ((i + j) % 2 == 0) {
                        ctx.fillStyle = "#abc";
                        ctx.rect(this.SQLENGTH + (i * this.SQLENGTH), this.SQLENGTH + (j * this.SQLENGTH), this.SQLENGTH, this.SQLENGTH);
                    }
                }
            }
            ctx.fill();
        }
    };
    Board.prototype.drowOthello = function () {
        var canvas = document.createElement("canvas");
        canvas.width = this.SQLENGTH * 8;
        canvas.height = this.SQLENGTH * 8;
        document.body.appendChild(canvas);
        var blackothello = canvas.getContext("2d");
        var whiteothello = canvas.getContext("2d");
        if (blackothello !== null) {
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if (this.data[i][j] == 0) {
                        blackothello.fillStyle = "#000";
                        blackothello.arc(this.SQLENGTH + (i * this.SQLENGTH), this.SQLENGTH + (j * this.SQLENGTH), this.SQLENGTH / 2 - 3, 0, 360);
                    }
                    else if (this.data[i][j] == 1) {
                    }
                }
            }
        }
    };
    Board.prototype.drow = function () {
        this.drowBoard();
        this.drowOthello();
    };
    return Board;
}());
var mainboard = new Board("AI");
mainboard.drow();
