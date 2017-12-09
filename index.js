'use strict';

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
  }

  push(val){
    if(this.first === null) this.first = this.last = [null, val, null];
    else this.last = this.last[2] = [this.last, val, null];
  }

  unshift(val){
    if(this.first === null) this.first = this.last = [null, val, null];
    else this.first = this.first[0] = [null, val, this.first];
  }

  pop(){
    if(this.first !== null){
      var val = this.last[1];
      if((this.last = this.last[0]) === null) this.first = null;
      else this.last[2] = null;
      return val;
    }
  }

  shift(){
    if(this.first !== null){
      var val = this.first[1];
      if((this.first = this.first[2]) === null) this.last = null;
      else this.first[0] = null;
      return val;
    }
  }
};

module.exports = Queue;