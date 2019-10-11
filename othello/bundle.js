(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var Board = /** @class */ (function () {
    function Board(turn) {
        this.data = new Array();
        this.SQLENGTH = 50;
        this.INPOSLIST = [[3, 3, 0], [3, 4, 1], [4, 3, 1], [4, 4, 0]];
        this.turn = turn;
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
    Board.prototype.setTurn = function (turn) {
        this.turn = turn;
    };
    Board.prototype.getTurn = function () {
        return this.turn;
    };
    Board.prototype.getData = function () {
        return this.data;
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
        this.drowBoard(canvas);
        this.drowOthello(canvas);
    };
    return Board;
}());
var mainboard = new Board("AI");
mainboard.drow();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQm9hcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9hcmQodHVybikge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5TUUxFTkdUSCA9IDUwO1xuICAgICAgICB0aGlzLklOUE9TTElTVCA9IFtbMywgMywgMF0sIFszLCA0LCAxXSwgWzQsIDMsIDFdLCBbNCwgNCwgMF1dO1xuICAgICAgICB0aGlzLnR1cm4gPSB0dXJuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtpXVtqXSA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOWIneacn+OCs+ODnuioreWumlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuSU5QT1NMSVNULmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbdGhpcy5JTlBPU0xJU1RbaV1bMF1dW3RoaXMuSU5QT1NMSVNUW2ldWzFdXSA9IHRoaXMuSU5QT1NMSVNUW2ldWzJdO1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvYXJkLnByb3RvdHlwZS5zZXRUdXJuID0gZnVuY3Rpb24gKHR1cm4pIHtcbiAgICAgICAgdGhpcy50dXJuID0gdHVybjtcbiAgICB9O1xuICAgIEJvYXJkLnByb3RvdHlwZS5nZXRUdXJuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50dXJuO1xuICAgIH07XG4gICAgQm9hcmQucHJvdG90eXBlLmdldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfTtcbiAgICAvLyDjg5zjg7zjg4njgpLmj4/nlLtcbiAgICBCb2FyZC5wcm90b3R5cGUuZHJvd0JvYXJkID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2FiY1wiO1xuICAgICAgICBpZiAoY3R4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoaSArIGopICUgMiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgucmVjdCh0aGlzLlNRTEVOR1RIICsgKGkgKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCArIChqICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEgsIHRoaXMuU1FMRU5HVEgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g44Kq44K744Ot44Gu6aeS44KS5o+P55S7XG4gICAgQm9hcmQucHJvdG90eXBlLmRyb3dPdGhlbGxvID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICB2YXIgYmxhY2tvdGhlbGxvID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdmFyIHdoaXRlb3RoZWxsbyA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmIChibGFja290aGVsbG8gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVtpXVtqXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGFja290aGVsbG8uYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGFja290aGVsbG8uZmlsbFN0eWxlID0gXCIjMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGFja290aGVsbG8uYXJjKHRoaXMuU1FMRU5HVEggKiAxLjUgKyAoaSAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RIICogMS41ICsgKGogKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCAvIDIgLSAzLCAwLCAzNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxhY2tvdGhlbGxvLmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAod2hpdGVvdGhlbGxvICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFbaV1bal0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVvdGhlbGxvLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVvdGhlbGxvLmZpbGxTdHlsZSA9IFwiIzAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVvdGhlbGxvLmFyYyh0aGlzLlNRTEVOR1RIICogMS41ICsgKGkgKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCAqIDEuNSArIChqICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEggLyAyIC0gMywgMCwgMzYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlb3RoZWxsby5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g55uk6Z2i44KS5o+P55S7XG4gICAgQm9hcmQucHJvdG90eXBlLmRyb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLlNRTEVOR1RIICogMTA7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLlNRTEVOR1RIICogMTA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgdGhpcy5kcm93Qm9hcmQoY2FudmFzKTtcbiAgICAgICAgdGhpcy5kcm93T3RoZWxsbyhjYW52YXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEJvYXJkO1xufSgpKTtcbnZhciBtYWluYm9hcmQgPSBuZXcgQm9hcmQoXCJBSVwiKTtcbm1haW5ib2FyZC5kcm93KCk7XG4iXX0=
