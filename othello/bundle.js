(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = /** @class */ (function () {
    function Board() {
        this.data = new Array();
        this.x = 0;
        this.y = 0;
        this.SQLENGTH = 50;
        this.INPOSLIST = [[3, 3, 0], [3, 4, 1], [4, 3, 1], [4, 4, 0]];
        for (var i = 0; i < 8; i++) {
            this.data[i] = new Array();
            for (var j = 0; j < 8; j++) {
                this.data[i][j] = -1;
            }
        }
        // 初期コマ設定
        for (var i = 0; i < this.INPOSLIST.length; i++) {
            this.data[this.INPOSLIST[i][0]][this.INPOSLIST[i][1]] = this.INPOSLIST[i][2];
        }
    }
    //　I/O
    Board.prototype.getData = function () {
        return this.data;
    };
    // クリック時の動作
    Board.prototype.onClick = function (e) {
        var rect = e.target.getBoundingClientRect();
        this.x = Math.floor((e.clientX - 58) / this.SQLENGTH);
        this.y = Math.floor((e.clientY - 58) / 50);
        console.log(e.clientX, e.clientY, this.x, this.y);
    };
    // ボードを描画
    Board.prototype.drowBoard = function (canvas) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#abc";
        if (ctx !== null) {
            ctx.beginPath();
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if ((i + j) % 2 == 0) {
                        ctx.rect(this.SQLENGTH + (i * this.SQLENGTH), this.SQLENGTH + (j * this.SQLENGTH), this.SQLENGTH, this.SQLENGTH);
                    }
                }
            }
            ctx.fill();
        }
    };
    // オセロの駒を描画
    Board.prototype.drowOthello = function (canvas) {
        var blackothello = canvas.getContext("2d");
        var whiteothello = canvas.getContext("2d");
        if (blackothello !== null) {
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if (this.data[i][j] == 0) {
                        blackothello.beginPath();
                        blackothello.fillStyle = "#000";
                        blackothello.arc(this.SQLENGTH * 1.5 + (i * this.SQLENGTH), this.SQLENGTH * 1.5 + (j * this.SQLENGTH), this.SQLENGTH / 2 - 3, 0, 360);
                        blackothello.fill();
                    }
                }
            }
        }
        if (whiteothello !== null) {
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if (this.data[i][j] == 1) {
                        whiteothello.beginPath();
                        whiteothello.fillStyle = "#000";
                        whiteothello.arc(this.SQLENGTH * 1.5 + (i * this.SQLENGTH), this.SQLENGTH * 1.5 + (j * this.SQLENGTH), this.SQLENGTH / 2 - 3, 0, 360);
                        whiteothello.stroke();
                    }
                }
            }
        }
    };
    // 盤面を描画
    Board.prototype.drow = function () {
        var canvas = document.createElement("canvas");
        canvas.width = this.SQLENGTH * 10;
        canvas.height = this.SQLENGTH * 10;
        document.body.appendChild(canvas);
        canvas.addEventListener('click', this.onClick, false);
        this.drowBoard(canvas);
        this.drowOthello(canvas);
    };
    return Board;
}());
exports.Board = Board;
var TURN = /** @class */ (function () {
    function TURN() {
    }
    return TURN;
}());
exports.TURN = TURN;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("./board");
var Game = /** @class */ (function () {
    function Game() {
        this.mainboard = new board_1.Board();
    }
    Game.prototype.getRandomTrun = function (max) {
        return Math.floor(Math.random() * (max + 1));
    };
    Game.prototype.processPhase = function () {
        var continueflag = 0;
        this.mainboard.drow();
        return continueflag;
    };
    Game.prototype.Main = function () {
        var TURN;
        (function (TURN) {
            TURN[TURN["AI"] = 0] = "AI";
            TURN[TURN["PL"] = 1] = "PL";
        })(TURN || (TURN = {}));
        ;
        var n_trun = TURN.AI;
        var i = 10;
        console.log(n_trun);
        // ターンの決定
        n_trun = this.getRandomTrun(2);
        // 描画
        this.processPhase();
        while (i >= 0) {
            console.info(i);
            i--;
        }
        // 置ける場所リストを生成
        // コマを置く
        // 結果
    };
    return Game;
}());
var script = new Game;
script.Main();

},{"./board":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYm9hcmQuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQm9hcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLlNRTEVOR1RIID0gNTA7XG4gICAgICAgIHRoaXMuSU5QT1NMSVNUID0gW1szLCAzLCAwXSwgWzMsIDQsIDFdLCBbNCwgMywgMV0sIFs0LCA0LCAwXV07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbaV0gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ldW2pdID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yid5pyf44Kz44Oe6Kit5a6aXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5JTlBPU0xJU1QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVt0aGlzLklOUE9TTElTVFtpXVswXV1bdGhpcy5JTlBPU0xJU1RbaV1bMV1dID0gdGhpcy5JTlBPU0xJU1RbaV1bMl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/jgIBJL09cbiAgICBCb2FyZC5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9O1xuICAgIC8vIOOCr+ODquODg+OCr+aZguOBruWLleS9nFxuICAgIEJvYXJkLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcigoZS5jbGllbnRYIC0gNTgpIC8gdGhpcy5TUUxFTkdUSCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoKGUuY2xpZW50WSAtIDU4KSAvIDUwKTtcbiAgICAgICAgY29uc29sZS5sb2coZS5jbGllbnRYLCBlLmNsaWVudFksIHRoaXMueCwgdGhpcy55KTtcbiAgICB9O1xuICAgIC8vIOODnOODvOODieOCkuaPj+eUu1xuICAgIEJvYXJkLnByb3RvdHlwZS5kcm93Qm9hcmQgPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjYWJjXCI7XG4gICAgICAgIGlmIChjdHggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpICsgaikgJSAyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZWN0KHRoaXMuU1FMRU5HVEggKyAoaSAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIICsgKGogKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCwgdGhpcy5TUUxFTkdUSCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDjgqrjgrvjg63jga7pp5LjgpLmj4/nlLtcbiAgICBCb2FyZC5wcm90b3R5cGUuZHJvd090aGVsbG8gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgIHZhciBibGFja290aGVsbG8gPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB2YXIgd2hpdGVvdGhlbGxvID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGJsYWNrb3RoZWxsbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhW2ldW2pdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYWNrb3RoZWxsby5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYWNrb3RoZWxsby5maWxsU3R5bGUgPSBcIiMwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYWNrb3RoZWxsby5hcmModGhpcy5TUUxFTkdUSCAqIDEuNSArIChpICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEggKiAxLjUgKyAoaiAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIIC8gMiAtIDMsIDAsIDM2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGFja290aGVsbG8uZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aGl0ZW90aGVsbG8gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVtpXVtqXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZW90aGVsbG8uYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZW90aGVsbG8uZmlsbFN0eWxlID0gXCIjMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZW90aGVsbG8uYXJjKHRoaXMuU1FMRU5HVEggKiAxLjUgKyAoaSAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIICogMS41ICsgKGogKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCAvIDIgLSAzLCAwLCAzNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVvdGhlbGxvLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnm6TpnaLjgpLmj4/nlLtcbiAgICBCb2FyZC5wcm90b3R5cGUuZHJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuU1FMRU5HVEggKiAxMDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuU1FMRU5HVEggKiAxMDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIGZhbHNlKTtcbiAgICAgICAgdGhpcy5kcm93Qm9hcmQoY2FudmFzKTtcbiAgICAgICAgdGhpcy5kcm93T3RoZWxsbyhjYW52YXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEJvYXJkO1xufSgpKTtcbmV4cG9ydHMuQm9hcmQgPSBCb2FyZDtcbnZhciBUVVJOID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRVUk4oKSB7XG4gICAgfVxuICAgIHJldHVybiBUVVJOO1xufSgpKTtcbmV4cG9ydHMuVFVSTiA9IFRVUk47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBib2FyZF8xID0gcmVxdWlyZShcIi4vYm9hcmRcIik7XG52YXIgR2FtZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHYW1lKCkge1xuICAgICAgICB0aGlzLm1haW5ib2FyZCA9IG5ldyBib2FyZF8xLkJvYXJkKCk7XG4gICAgfVxuICAgIEdhbWUucHJvdG90eXBlLmdldFJhbmRvbVRydW4gPSBmdW5jdGlvbiAobWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSkpO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUucHJvY2Vzc1BoYXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGludWVmbGFnID0gMDtcbiAgICAgICAgdGhpcy5tYWluYm9hcmQuZHJvdygpO1xuICAgICAgICByZXR1cm4gY29udGludWVmbGFnO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUuTWFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIFRVUk47XG4gICAgICAgIChmdW5jdGlvbiAoVFVSTikge1xuICAgICAgICAgICAgVFVSTltUVVJOW1wiQUlcIl0gPSAwXSA9IFwiQUlcIjtcbiAgICAgICAgICAgIFRVUk5bVFVSTltcIlBMXCJdID0gMV0gPSBcIlBMXCI7XG4gICAgICAgIH0pKFRVUk4gfHwgKFRVUk4gPSB7fSkpO1xuICAgICAgICA7XG4gICAgICAgIHZhciBuX3RydW4gPSBUVVJOLkFJO1xuICAgICAgICB2YXIgaSA9IDEwO1xuICAgICAgICBjb25zb2xlLmxvZyhuX3RydW4pO1xuICAgICAgICAvLyDjgr/jg7zjg7Pjga7msbrlrppcbiAgICAgICAgbl90cnVuID0gdGhpcy5nZXRSYW5kb21UcnVuKDIpO1xuICAgICAgICAvLyDmj4/nlLtcbiAgICAgICAgdGhpcy5wcm9jZXNzUGhhc2UoKTtcbiAgICAgICAgd2hpbGUgKGkgPj0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKGkpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICAgIC8vIOe9ruOBkeOCi+WgtOaJgOODquOCueODiOOCkueUn+aIkFxuICAgICAgICAvLyDjgrPjg57jgpLnva7jgY9cbiAgICAgICAgLy8g57WQ5p6cXG4gICAgfTtcbiAgICByZXR1cm4gR2FtZTtcbn0oKSk7XG52YXIgc2NyaXB0ID0gbmV3IEdhbWU7XG5zY3JpcHQuTWFpbigpO1xuIl19
