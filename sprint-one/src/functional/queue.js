var Queue = function() {
  var someInstance = {};


  // Use an object with numeric keys to store values
  someInstance.storage = {};
  // someInstance.storage.head = null;
  // someInstance.storage.tail = null;
  someInstance.i = 0; 
  //track index and counter;////////////////////////////////////////////////////

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.i]= value;
    someInstance.storage
    someInstance.i++;
  };

  someInstance.dequeue = function() {
    var poppedItem = someInstance.storage[0]

     console.log( ' someInstance.storage[0]')
    delete someInstance.storage[0]; 
    
    someInstance.i--;
    console.log('popped item', poppedItem)
    return poppedItem
    
  };

  someInstance.size = function() {
    if (someInstance.i >= 0 ){
       return someInstance.i
    } else{ 
      someInstance.i = 0
    }
    return someInstance.i;
  };

  console.log(" is someInstance", someInstance.storage)
  return someInstance;
};



// delete someInstance.storage[0]; 
// if (someInstance.i > Object.keys(someInstance.storage).length){
//   someInstance.i = 0
// }
// for(var key in someInstance.storage){
//   key = JSON.stringify(parseInt(key)-1);
// }
// someInstance.i--;
//  return(someInstance.storage[someInstance.i])