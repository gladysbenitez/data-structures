var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);  
    if (!list.tail) {
      list.head = newNode; 
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var removedItem = list.head.value;
    if (!list.head) {
      return null;
    }
    list.head = list.head.next;
    return removedItem;
  };

  list.contains = function(target) {
    var currentNode = list.head; 
    while (currentNode) {
      if (currentNode.value === target) {
        return true; 
      } else {
        currentNode = currentNode.next;
      }
    } 
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 add to tail: Constant time  O(1)
 remove head: Constant time O(1)
 contains: Linear time O(n)

 */
