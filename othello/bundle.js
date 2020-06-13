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
    // クリックハンドラ
    Board.prototype.onClick = function (e) {
        var rect = e.target.getBoundingClientRect();
        this.x = Math.floor((e.clientX - 58) / 50);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYm9hcmQuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQm9hcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLlNRTEVOR1RIID0gNTA7XG4gICAgICAgIHRoaXMuSU5QT1NMSVNUID0gW1szLCAzLCAwXSwgWzMsIDQsIDFdLCBbNCwgMywgMV0sIFs0LCA0LCAwXV07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbaV0gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ldW2pdID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yid5pyf44Kz44Oe6Kit5a6aXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5JTlBPU0xJU1QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVt0aGlzLklOUE9TTElTVFtpXVswXV1bdGhpcy5JTlBPU0xJU1RbaV1bMV1dID0gdGhpcy5JTlBPU0xJU1RbaV1bMl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/jgIBJL09cbiAgICBCb2FyZC5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9O1xuICAgIC8vIOOCr+ODquODg+OCr+ODj+ODs+ODieODqVxuICAgIEJvYXJkLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcigoZS5jbGllbnRYIC0gNTgpIC8gNTApO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLmZsb29yKChlLmNsaWVudFkgLSA1OCkgLyA1MCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUuY2xpZW50WCwgZS5jbGllbnRZLCB0aGlzLngsIHRoaXMueSk7XG4gICAgfTtcbiAgICAvLyDjg5zjg7zjg4njgpLmj4/nlLtcbiAgICBCb2FyZC5wcm90b3R5cGUuZHJvd0JvYXJkID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2FiY1wiO1xuICAgICAgICBpZiAoY3R4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoaSArIGopICUgMiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgucmVjdCh0aGlzLlNRTEVOR1RIICsgKGkgKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCArIChqICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEgsIHRoaXMuU1FMRU5HVEgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g44Kq44K744Ot44Gu6aeS44KS5o+P55S7XG4gICAgQm9hcmQucHJvdG90eXBlLmRyb3dPdGhlbGxvID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICB2YXIgYmxhY2tvdGhlbGxvID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdmFyIHdoaXRlb3RoZWxsbyA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmIChibGFja290aGVsbG8gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVtpXVtqXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGFja290aGVsbG8uYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGFja290aGVsbG8uZmlsbFN0eWxlID0gXCIjMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGFja290aGVsbG8uYXJjKHRoaXMuU1FMRU5HVEggKiAxLjUgKyAoaSAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIICogMS41ICsgKGogKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCAvIDIgLSAzLCAwLCAzNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxhY2tvdGhlbGxvLmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAod2hpdGVvdGhlbGxvICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFbaV1bal0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVvdGhlbGxvLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVvdGhlbGxvLmZpbGxTdHlsZSA9IFwiIzAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVvdGhlbGxvLmFyYyh0aGlzLlNRTEVOR1RIICogMS41ICsgKGkgKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCAqIDEuNSArIChqICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEggLyAyIC0gMywgMCwgMzYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlb3RoZWxsby5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g55uk6Z2i44KS5o+P55S7XG4gICAgQm9hcmQucHJvdG90eXBlLmRyb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLlNRTEVOR1RIICogMTA7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLlNRTEVOR1RIICogMTA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZHJvd0JvYXJkKGNhbnZhcyk7XG4gICAgICAgIHRoaXMuZHJvd090aGVsbG8oY2FudmFzKTtcbiAgICB9O1xuICAgIHJldHVybiBCb2FyZDtcbn0oKSk7XG5leHBvcnRzLkJvYXJkID0gQm9hcmQ7XG52YXIgVFVSTiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUVVJOKCkge1xuICAgIH1cbiAgICByZXR1cm4gVFVSTjtcbn0oKSk7XG5leHBvcnRzLlRVUk4gPSBUVVJOO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYm9hcmRfMSA9IHJlcXVpcmUoXCIuL2JvYXJkXCIpO1xudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgdGhpcy5tYWluYm9hcmQgPSBuZXcgYm9hcmRfMS5Cb2FyZCgpO1xuICAgIH1cbiAgICBHYW1lLnByb3RvdHlwZS5nZXRSYW5kb21UcnVuID0gZnVuY3Rpb24gKG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCArIDEpKTtcbiAgICB9O1xuICAgIEdhbWUucHJvdG90eXBlLnByb2Nlc3NQaGFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRpbnVlZmxhZyA9IDA7XG4gICAgICAgIHRoaXMubWFpbmJvYXJkLmRyb3coKTtcbiAgICAgICAgcmV0dXJuIGNvbnRpbnVlZmxhZztcbiAgICB9O1xuICAgIEdhbWUucHJvdG90eXBlLk1haW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBUVVJOO1xuICAgICAgICAoZnVuY3Rpb24gKFRVUk4pIHtcbiAgICAgICAgICAgIFRVUk5bVFVSTltcIkFJXCJdID0gMF0gPSBcIkFJXCI7XG4gICAgICAgICAgICBUVVJOW1RVUk5bXCJQTFwiXSA9IDFdID0gXCJQTFwiO1xuICAgICAgICB9KShUVVJOIHx8IChUVVJOID0ge30pKTtcbiAgICAgICAgO1xuICAgICAgICB2YXIgbl90cnVuID0gVFVSTi5BSTtcbiAgICAgICAgdmFyIGkgPSAxMDtcbiAgICAgICAgY29uc29sZS5sb2cobl90cnVuKTtcbiAgICAgICAgLy8g44K/44O844Oz44Gu5rG65a6aXG4gICAgICAgIG5fdHJ1biA9IHRoaXMuZ2V0UmFuZG9tVHJ1bigyKTtcbiAgICAgICAgLy8g5o+P55S7XG4gICAgICAgIHRoaXMucHJvY2Vzc1BoYXNlKCk7XG4gICAgICAgIHdoaWxlIChpID49IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhpKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgICAgICAvLyDnva7jgZHjgovloLTmiYDjg6rjgrnjg4jjgpLnlJ/miJBcbiAgICAgICAgLy8g44Kz44Oe44KS572u44GPXG4gICAgICAgIC8vIOe1kOaenFxuICAgIH07XG4gICAgcmV0dXJuIEdhbWU7XG59KCkpO1xudmFyIHNjcmlwdCA9IG5ldyBHYW1lO1xuc2NyaXB0Lk1haW4oKTtcbiJdfQ==
