var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = [];

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage.push(value);
  };

  someInstance.pop = function() {
    return someInstance.storage.pop();
  };

  someInstance.size = function() {
    return someInstance.storage.length;
  };

  return someInstance;
};
