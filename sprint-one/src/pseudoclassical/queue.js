var Queue = function() {
  this.storage = {};
  this.i = 0; 
  this.counter = 0;
  this.sz = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.i] = value;
  this.i++;
  this.sz++;
},

Queue.prototype.dequeue = function() {
  var poppedItem = this.storage[this.counter];
  delete this.storage[this.counter]; 

  this.counter++;
  this.sz--;

  return poppedItem;
}, 

Queue.prototype.size = function() {
  if (this.sz >= 0) {
    return this.sz;
  } else { 
    this.sz = 0;
  }
  return this.sz;
};





