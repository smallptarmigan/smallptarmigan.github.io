(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
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
        this.x = (e.clientX - rect.left) / this.SQLENGTH;
        this.y = (e.clientY - rect.top);
        console.log(this.x, this.y);
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
var Game = /** @class */ (function () {
    function Game() {
        this.mainboard = new Board();
    }
    Game.prototype.Main = function () {
        var TURN;
        (function (TURN) {
            TURN[TURN["AI"] = 0] = "AI";
            TURN[TURN["PL"] = 1] = "PL";
        })(TURN || (TURN = {}));
        ;
        var n_trun = TURN.AI;
        console.log(n_trun);
        // ターンの決定
        // 描画
        this.mainboard.drow();
        // 置ける場所リストを生成
        // コマを置く
    };
    return Game;
}());
var script = new Game;
script.Main();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBCb2FyZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuU1FMRU5HVEggPSA1MDtcbiAgICAgICAgdGhpcy5JTlBPU0xJU1QgPSBbWzMsIDMsIDBdLCBbMywgNCwgMV0sIFs0LCAzLCAxXSwgWzQsIDQsIDBdXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpXSA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbaV1bal0gPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDliJ3mnJ/jgrPjg57oqK3lrppcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLklOUE9TTElTVC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhW3RoaXMuSU5QT1NMSVNUW2ldWzBdXVt0aGlzLklOUE9TTElTVFtpXVsxXV0gPSB0aGlzLklOUE9TTElTVFtpXVsyXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+OAgEkvT1xuICAgIEJvYXJkLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH07XG4gICAgLy8g44Kv44Oq44OD44Kv5pmC44Gu5YuV5L2cXG4gICAgQm9hcmQucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLnggPSAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIHRoaXMuU1FMRU5HVEg7XG4gICAgICAgIHRoaXMueSA9IChlLmNsaWVudFkgLSByZWN0LnRvcCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMueCwgdGhpcy55KTtcbiAgICB9O1xuICAgIC8vIOODnOODvOODieOCkuaPj+eUu1xuICAgIEJvYXJkLnByb3RvdHlwZS5kcm93Qm9hcmQgPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjYWJjXCI7XG4gICAgICAgIGlmIChjdHggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpICsgaikgJSAyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZWN0KHRoaXMuU1FMRU5HVEggKyAoaSAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIICsgKGogKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCwgdGhpcy5TUUxFTkdUSCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDjgqrjgrvjg63jga7pp5LjgpLmj4/nlLtcbiAgICBCb2FyZC5wcm90b3R5cGUuZHJvd090aGVsbG8gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgIHZhciBibGFja290aGVsbG8gPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB2YXIgd2hpdGVvdGhlbGxvID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGJsYWNrb3RoZWxsbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhW2ldW2pdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYWNrb3RoZWxsby5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYWNrb3RoZWxsby5maWxsU3R5bGUgPSBcIiMwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYWNrb3RoZWxsby5hcmModGhpcy5TUUxFTkdUSCAqIDEuNSArIChpICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEggKiAxLjUgKyAoaiAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIIC8gMiAtIDMsIDAsIDM2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGFja290aGVsbG8uZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aGl0ZW90aGVsbG8gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVtpXVtqXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZW90aGVsbG8uYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZW90aGVsbG8uZmlsbFN0eWxlID0gXCIjMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZW90aGVsbG8uYXJjKHRoaXMuU1FMRU5HVEggKiAxLjUgKyAoaSAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIICogMS41ICsgKGogKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCAvIDIgLSAzLCAwLCAzNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVvdGhlbGxvLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnm6TpnaLjgpLmj4/nlLtcbiAgICBCb2FyZC5wcm90b3R5cGUuZHJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuU1FMRU5HVEggKiAxMDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuU1FMRU5HVEggKiAxMDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIGZhbHNlKTtcbiAgICAgICAgdGhpcy5kcm93Qm9hcmQoY2FudmFzKTtcbiAgICAgICAgdGhpcy5kcm93T3RoZWxsbyhjYW52YXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEJvYXJkO1xufSgpKTtcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgICAgIHRoaXMubWFpbmJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgfVxuICAgIEdhbWUucHJvdG90eXBlLk1haW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBUVVJOO1xuICAgICAgICAoZnVuY3Rpb24gKFRVUk4pIHtcbiAgICAgICAgICAgIFRVUk5bVFVSTltcIkFJXCJdID0gMF0gPSBcIkFJXCI7XG4gICAgICAgICAgICBUVVJOW1RVUk5bXCJQTFwiXSA9IDFdID0gXCJQTFwiO1xuICAgICAgICB9KShUVVJOIHx8IChUVVJOID0ge30pKTtcbiAgICAgICAgO1xuICAgICAgICB2YXIgbl90cnVuID0gVFVSTi5BSTtcbiAgICAgICAgY29uc29sZS5sb2cobl90cnVuKTtcbiAgICAgICAgLy8g44K/44O844Oz44Gu5rG65a6aXG4gICAgICAgIC8vIOaPj+eUu1xuICAgICAgICB0aGlzLm1haW5ib2FyZC5kcm93KCk7XG4gICAgICAgIC8vIOe9ruOBkeOCi+WgtOaJgOODquOCueODiOOCkueUn+aIkFxuICAgICAgICAvLyDjgrPjg57jgpLnva7jgY9cbiAgICB9O1xuICAgIHJldHVybiBHYW1lO1xufSgpKTtcbnZhciBzY3JpcHQgPSBuZXcgR2FtZTtcbnNjcmlwdC5NYWluKCk7XG4iXX0=
