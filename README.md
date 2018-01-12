# install
npm i queue.o

# queue
speed queue node js javascript

```js
const Queue = require('queue.o');

var q = new Queue;

q.push(1);
q.first; //1
q.unshift([2]);
q.unshift([1, 2]);
q.pop() //1
q.pop() //[2]
q.shift() //[1, 2]
q.last; //[1, 2]
q.pop() //undefined
q.last = 1;//set value
q.first; //1
q.push(2);

q.forEach((v) => {
  console.log(v); //1, 2
});
```
