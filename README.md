# install
npm i queue.o

# queue
fast queue
all methods take O(1) 

```js
const Queue = require('queue.o');

let q = new Queue;

q.push(1);
q.first; //1
q.unshift(2);
q.unshift(3);
q.pop() //1
q.pop() //2
q.shift() //3
q.last; //undefined
q.last = 1;
q.first; //1

let a = new Queue;
a.push(1);
a.push(2);
a.push(3);

for (let el of a) {
   console.log(el); //1, 2, 3
}

a.forEach(el => {
    console.log(el); //1, 2, 3
});
```
