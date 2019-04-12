var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = [];
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage.push(value);
};

stackMethods.pop = function() {
  return this.storage.pop();
};

stackMethods.size = function() {
  return this.storage.length;
};

