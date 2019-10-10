(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQm9hcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9hcmQodHVybikge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5TUUxFTkdUSCA9IDMwO1xuICAgICAgICB0aGlzLklOUE9TTElTVCA9IFtbMywgMywgMF0sIFszLCA0LCAxXSwgWzQsIDMsIDFdLCBbNCwgNCwgMF1dO1xuICAgICAgICB0aGlzLnR1cm4gPSB0dXJuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtpXVtqXSA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5JTlBPU0xJU1QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVt0aGlzLklOUE9TTElTVFtpXVswXV1bdGhpcy5JTlBPU0xJU1RbaV1bMV1dID0gdGhpcy5JTlBPU0xJU1RbaV1bMl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm9hcmQucHJvdG90eXBlLnNldFR1cm4gPSBmdW5jdGlvbiAodHVybikge1xuICAgICAgICB0aGlzLnR1cm4gPSB0dXJuO1xuICAgIH07XG4gICAgQm9hcmQucHJvdG90eXBlLmdldFR1cm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR1cm47XG4gICAgfTtcbiAgICBCb2FyZC5wcm90b3R5cGUuZHJvd0JvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5TUUxFTkdUSCAqIDg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLlNRTEVOR1RIICogODtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKGN0eCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGkgKyBqKSAlIDIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2FiY1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJlY3QodGhpcy5TUUxFTkdUSCArIChpICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEggKyAoaiAqIHRoaXMuU1FMRU5HVEgpLCB0aGlzLlNRTEVOR1RILCB0aGlzLlNRTEVOR1RIKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJvYXJkLnByb3RvdHlwZS5kcm93T3RoZWxsbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuU1FMRU5HVEggKiA4O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5TUUxFTkdUSCAqIDg7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgdmFyIGJsYWNrb3RoZWxsbyA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHZhciB3aGl0ZW90aGVsbG8gPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBpZiAoYmxhY2tvdGhlbGxvICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFbaV1bal0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxhY2tvdGhlbGxvLmZpbGxTdHlsZSA9IFwiIzAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxhY2tvdGhlbGxvLmFyYyh0aGlzLlNRTEVOR1RIICsgKGkgKiB0aGlzLlNRTEVOR1RIKSwgdGhpcy5TUUxFTkdUSCArIChqICogdGhpcy5TUUxFTkdUSCksIHRoaXMuU1FMRU5HVEggLyAyIC0gMywgMCwgMzYwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRhdGFbaV1bal0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBCb2FyZC5wcm90b3R5cGUuZHJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kcm93Qm9hcmQoKTtcbiAgICAgICAgdGhpcy5kcm93T3RoZWxsbygpO1xuICAgIH07XG4gICAgcmV0dXJuIEJvYXJkO1xufSgpKTtcbnZhciBtYWluYm9hcmQgPSBuZXcgQm9hcmQoXCJBSVwiKTtcbm1haW5ib2FyZC5kcm93KCk7XG4iXX0=
