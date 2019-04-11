var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.i = 0; 
  someInstance.counter = 0;
  someInstance.sz = 0;


  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.i] = value;
    someInstance.i++;
    someInstance.sz++;
  };

  someInstance.dequeue = function() {
    var poppedItem = someInstance.storage[someInstance.counter];
    delete someInstance.storage[someInstance.counter]; 

    someInstance.counter++;
    someInstance.sz--;

    return poppedItem;
  };

  someInstance.size = function() {
    if (someInstance.sz >= 0) {
      return someInstance.sz;
    } else { 
      someInstance.sz = 0;
    }
    return someInstance.sz;
  }; 

  return someInstance;
};

