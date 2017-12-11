'use strict';

class Queue {
    constructor() {
        let first = null, last = null, temp;
        Object.defineProperties(this, {
            push: {
                value: v => {
                    if (first === null) {
                        first = last = [null, v, null];
                    } else {
                        last = last[2] = [last, v, null];
                    }
                }
            },
            unshift: {
                value: v => {
                    if (first === null) {
                        first = last = [null, v, null];
                    } else {
                        first = first[0] = [null, v, first];
                    }
                }
            },
            pop: {
                value: () => {
                    if (last !== null) {
                        temp = last[1];
                        if (first === last) {
                            first = last = null;
                        } else {
                            last = last[0];
                        }
                        return temp;
                    }
                }
            },
            shift: {
                value: () => {
                    if (first !== null) {
                        temp = first[1];
                        if (first === last) {
                            first = last = null;
                        } else {
                            first = first[2];
                        }
                        return temp;
                    }
                }
            },
            last: {
                get: () => {
                    if (last !== null) {
                        return last[1];
                    }
                } 
            },
            first: {
                get: () => {
                    if (first !== null) {
                        return first[1];
                    }
                } 
            }
        });
    }
}

module.exports = Queue;