'use strict';

class Queue {
    constructor() {
        let first = null, last = null, temp = null;
        Object.defineProperties(this, {
            push: {
                value: v => {
                    if (first === null) {
                        first = last = [null, v, null]
                    } else {
                        last = last[2] = [last, v, null];
                    }
                }
            },
            unshift: {
                value: v => {
                    if (first === null) {
                        first = last = [null, v, null]
                    } else {
                        first = first[0] = [null, v, first];
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
                            last = last[0];
                        }
                        return temp[1];
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
                            first = temp[2];
                        }
                        return temp[1];
                    }
                }
            }
        });
    }
}

module.exports = Queue;