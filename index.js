class Queue {
    constructor() {
        let last, first, temp;
        Object.defineProperties(this, {
            push: {
                value: v => {
                    if (last) {
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
                    if (first) {
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
                    if (last) {
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
                    if (first) {
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