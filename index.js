class Queue {
    constructor() {
        let last, first;
        this.push = v => {
            if (!last) {
                last = {
                    v: v
                }
                first = last;
            } else {
                last.L = {
                    v: v,
                    R: last
                }
                last = last.L; 
            }
        }
        this.unshift = v => {
            if (!first) {
                first = {
                    v: v
                }
                last = first;
            } else {
                first.R = {
                    v: v,
                    L: first
                }
                first = first.R; 
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