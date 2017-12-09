'use strict';

class Queue {
    constructor() {
        let first = null, last = null, temp = null;

        Object.defineProperties(this, {
            push: {
                value: v => {
                    if (last !== null) {
                        last = last.r = {
                            v: v,
                            l: last
                        }
                    } else {
                        last = first = {
                            v: v
                        }
                    }
                }
            },
            unshift: {
                value: v => {
                    if (first !== null) {
                        first = first.l = {
                            v: v,
                            r: first
                        }
                    } else {
                        last = first = {
                            v: v
                        }
                    }
                }
            },
            pop: {
                value: () => {
                    if (last !== null) {
                        temp = last;
                        if (first === last) {
                            first = last = null;
                        } else {
                            last = temp.l;
                        }
                        return temp.v;
                    }
                }
            },
            shift: {
                value: () => {
                    if (first !== null) {
                        temp = first;
                        if (first === last) {
                            first = last = null;
                        } else {
                            first = temp.r;
                        }
                        return temp.v;
                    }
                }
            }
        });
    }
}

module.exports = Queue;