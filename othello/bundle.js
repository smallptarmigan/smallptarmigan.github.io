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
    Board.prototype.getData = function () {
        return this.data;
    };
    // クリック時の動作
    Board.prototype.onClick = function (e) {
        var rect = e.target.getBoundingClientRect();
        this.x = e.clientX - rect.left;
        this.y = e.clientY - rect.top;
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
        this.mainboard.drow();
    };
    return Game;
}());
var script = new Game;
script.Main();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQm9hcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLlNRTEVOR1RIID0gNTA7XG4gICAgICAgIHRoaXMuSU5QT1NMSVNUID0gW1szLCAzLCAwXSwgWzMsIDQsIDFdLCBbNCwgMywgMV0sIFs0LCA0LCAwXV07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbaV0gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ldW2pdID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yid5pyf44Kz44Oe6Kit5a6aXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5JTlBPU0xJU1QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVt0aGlzLklOUE9TTElTVFtpXVswXV1bdGhpcy5JTlBPU0xJU1RbaV1bMV1dID0gdGhpcy5JTlBPU0xJU1RbaV1bMl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm9hcmQucHJvdG90eXBlLmdldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfTtcbiAgICAvLyDjgq/jg6rjg4Pjgq/mmYLjga7li5XkvZxcbiAgICBCb2FyZC5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMueCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgdGhpcy55ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMueCwgdGhpcy55KTtcbiAgICB9O1xuICAgIC8vIOODnOODvOODieOCkuaPj+eUu1xuICAgIEJvYXJkLnByb3RvdHlwZS5kcm93Qm9hcmQgPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjYWJjXCI7XG4gICAgICAgIGlmIChjdHggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpICsgaikgJSAyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZWN0KHRoaXMuU1FMRU5HVEggKyAoaSAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIICsgKGogKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCwgdGhpcy5TUUxFTkdUSCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDjgqrjgrvjg63jga7pp5LjgpLmj4/nlLtcbiAgICBCb2FyZC5wcm90b3R5cGUuZHJvd090aGVsbG8gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgIHZhciBibGFja290aGVsbG8gPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB2YXIgd2hpdGVvdGhlbGxvID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGJsYWNrb3RoZWxsbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhW2ldW2pdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYWNrb3RoZWxsby5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYWNrb3RoZWxsby5maWxsU3R5bGUgPSBcIiMwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYWNrb3RoZWxsby5hcmModGhpcy5TUUxFTkdUSCAqIDEuNSArIChpICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEggKiAxLjUgKyAoaiAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIIC8gMiAtIDMsIDAsIDM2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGFja290aGVsbG8uZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aGl0ZW90aGVsbG8gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVtpXVtqXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZW90aGVsbG8uYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZW90aGVsbG8uZmlsbFN0eWxlID0gXCIjMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZW90aGVsbG8uYXJjKHRoaXMuU1FMRU5HVEggKiAxLjUgKyAoaSAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIICogMS41ICsgKGogKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCAvIDIgLSAzLCAwLCAzNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVvdGhlbGxvLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnm6TpnaLjgpLmj4/nlLtcbiAgICBCb2FyZC5wcm90b3R5cGUuZHJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuU1FMRU5HVEggKiAxMDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuU1FMRU5HVEggKiAxMDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIGZhbHNlKTtcbiAgICAgICAgdGhpcy5kcm93Qm9hcmQoY2FudmFzKTtcbiAgICAgICAgdGhpcy5kcm93T3RoZWxsbyhjYW52YXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEJvYXJkO1xufSgpKTtcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgICAgIHRoaXMubWFpbmJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgfVxuICAgIEdhbWUucHJvdG90eXBlLk1haW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWFpbmJvYXJkLmRyb3coKTtcbiAgICB9O1xuICAgIHJldHVybiBHYW1lO1xufSgpKTtcbnZhciBzY3JpcHQgPSBuZXcgR2FtZTtcbnNjcmlwdC5NYWluKCk7XG4iXX0=
