var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return this.children[i].contains(target);
      }
    }
    return false;
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
