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
        this.mainboard.drow();
    };
    return Game;
}());
var script = new Game;
script.Main();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQm9hcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLlNRTEVOR1RIID0gNTA7XG4gICAgICAgIHRoaXMuSU5QT1NMSVNUID0gW1szLCAzLCAwXSwgWzMsIDQsIDFdLCBbNCwgMywgMV0sIFs0LCA0LCAwXV07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbaV0gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ldW2pdID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yid5pyf44Kz44Oe6Kit5a6aXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5JTlBPU0xJU1QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVt0aGlzLklOUE9TTElTVFtpXVswXV1bdGhpcy5JTlBPU0xJU1RbaV1bMV1dID0gdGhpcy5JTlBPU0xJU1RbaV1bMl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm9hcmQucHJvdG90eXBlLmdldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfTtcbiAgICAvLyDjgq/jg6rjg4Pjgq/mmYLjga7li5XkvZxcbiAgICBCb2FyZC5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMueCA9IChlLmNsaWVudFggLSByZWN0LmxlZnQpIC8gdGhpcy5TUUxFTkdUSDtcbiAgICAgICAgdGhpcy55ID0gKGUuY2xpZW50WSAtIHJlY3QudG9wKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy54LCB0aGlzLnkpO1xuICAgIH07XG4gICAgLy8g44Oc44O844OJ44KS5o+P55S7XG4gICAgQm9hcmQucHJvdG90eXBlLmRyb3dCb2FyZCA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNhYmNcIjtcbiAgICAgICAgaWYgKGN0eCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGkgKyBqKSAlIDIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJlY3QodGhpcy5TUUxFTkdUSCArIChpICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEggKyAoaiAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RILCB0aGlzLlNRTEVOR1RIKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOOCquOCu+ODreOBrumnkuOCkuaPj+eUu1xuICAgIEJvYXJkLnByb3RvdHlwZS5kcm93T3RoZWxsbyA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICAgICAgdmFyIGJsYWNrb3RoZWxsbyA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHZhciB3aGl0ZW90aGVsbG8gPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBpZiAoYmxhY2tvdGhlbGxvICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFbaV1bal0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxhY2tvdGhlbGxvLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxhY2tvdGhlbGxvLmZpbGxTdHlsZSA9IFwiIzAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxhY2tvdGhlbGxvLmFyYyh0aGlzLlNRTEVOR1RIICogMS41ICsgKGkgKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCAqIDEuNSArIChqICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEggLyAyIC0gMywgMCwgMzYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYWNrb3RoZWxsby5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdoaXRlb3RoZWxsbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhW2ldW2pdID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlb3RoZWxsby5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlb3RoZWxsby5maWxsU3R5bGUgPSBcIiMwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlb3RoZWxsby5hcmModGhpcy5TUUxFTkdUSCAqIDEuNSArIChpICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEggKiAxLjUgKyAoaiAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIIC8gMiAtIDMsIDAsIDM2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZW90aGVsbG8uc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOebpOmdouOCkuaPj+eUu1xuICAgIEJvYXJkLnByb3RvdHlwZS5kcm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5TUUxFTkdUSCAqIDEwO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5TUUxFTkdUSCAqIDEwO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljaywgZmFsc2UpO1xuICAgICAgICB0aGlzLmRyb3dCb2FyZChjYW52YXMpO1xuICAgICAgICB0aGlzLmRyb3dPdGhlbGxvKGNhbnZhcyk7XG4gICAgfTtcbiAgICByZXR1cm4gQm9hcmQ7XG59KCkpO1xudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgdGhpcy5tYWluYm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgICB9XG4gICAgR2FtZS5wcm90b3R5cGUuTWFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tYWluYm9hcmQuZHJvdygpO1xuICAgIH07XG4gICAgcmV0dXJuIEdhbWU7XG59KCkpO1xudmFyIHNjcmlwdCA9IG5ldyBHYW1lO1xuc2NyaXB0Lk1haW4oKTtcbiJdfQ==
