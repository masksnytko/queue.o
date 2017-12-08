class Queue {
    constructor() {
        let last, first;
        this.push = v => {
            if (last) {
                last.L = {
                    v: v,
                    R: last
                }
                last = last.L;
            } else {
                last = {
                    v: v
                }
                first = last;
            }
        }
        this.unshift = v => {
            if (first) {
                first.R = {
                    v: v,
                    L: first
                }
                first = first.R;
            } else {
                first = {
                    v: v
                }
                last = first;
            }
        }
        this.pop = () => {
            let v = last;
            if (v) {
                if (first === last) {
                    first = undefined;
                    last = undefined;
                } else {
                    last = v.R;
                }
                return v.v;
            }
        }
        this.shift = () => {
            let v = first;
            if (v) {
                if (first === last) {
                    first = undefined;
                    last = undefined;
                } else {
                    first = v.L;
                }
                return v.v;
            }
        }
    }
}

module.exports = Queue;