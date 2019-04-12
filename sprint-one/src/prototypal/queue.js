var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.i = 0; 
  someInstance.counter = 0;
  someInstance.sz = 0;

  return someInstance;

};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.storage[this.i] = value;
  this.i++;
  this.sz++;
},

queueMethods.dequeue = function() {
  var poppedItem = this.storage[this.counter];
  delete this.storage[this.counter]; 

  this.counter++;
  this.sz--;

  return poppedItem;
}, 

queueMethods.size = function() {
  if (this.sz >= 0) {
    return this.sz;
  } else { 
    this.sz = 0;
  }
  return this.sz;
};





