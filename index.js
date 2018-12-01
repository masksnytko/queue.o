'use strict';

class Queue {
    constructor() {
        this._first = null;
        this._last = null;
    }
    *[Symbol.iterator]() {
        let temp = this._first;
        while (temp !== null) {
            yield temp[1];
            temp = temp[2];
        }
    }
    push(v) {
        if (this._last === null) {
            this._last = this._first = [null, v, null];
        } else {
            this._last = this._last[2] = [this._last, v, null];
        }
    }
    unshift(v) {
        if (this._first === null) {
            this._first = this._last = [null, v, null];
        } else {
            this._first = this._first[0] = [null, v, this._first];
        }
    }
    pop() {
        if (this._last !== null) {
            let temp = this._last[1];
            if (this._first === this._last) {
                this._first = this._last = null;
            } else {
                this._last = this._last[0];
            }
            return temp;
        }
    }
    shift() {
        if (this._first !== null) {
            let temp = this._first[1];
            if (this._first === this._last) {
                this._first = this._last = null;
            } else {
                this._first = this._first[2];
            }
            return temp;
        }
    }
    forEach(cb) {
        let temp = this._first;
        while (temp !== null) {
            cb(temp[1]);
            temp = temp[2];
        }
    }
    get last() {
        if (this._last !== null) {
            return this._last[1];
        }
    }
    set last(v) {
        if (this._last === null) {
            this.push(v);
        } else {
            this._last[1] = v;
        }
    }
    get first() {
        if (this._first !== null) {
            return this._first[1];
        }
    }
    set first(v) {
        if (this._first === null) {
            this.unshift(v);
        } else {
            this._first[1] = v;
        }
    }
}

module.exports = Queue;