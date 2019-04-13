

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
  this.storage[node].value = node;
  this.storage[node].edges = {};//[];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.storage) {
    if (this.storage[key].value === node) {
      return true;
    } 
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  console.log('first time seeing edges', this.storage[node].edges);
  for (var key in this.storage[node].edges) { //this is looping through all edges object in the node we are checking to delete
    var edgeToRemove = this.storage[key].edges[node];
    console.log('here is edgeToRemove >>>>>>>>>>>>>>>>>>>>>>', edgeToRemove);
    console.log('node here', node);
    this.removeEdge(node, 5);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[toNode].edges[fromNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[toNode].edges[fromNode] = fromNode;
  this.storage[fromNode].edges[toNode] = toNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  console.log('args', fromNode, toNode);
  console.log('is there and edges property   ', this.storage[fromNode].edges);
  delete this.storage[fromNode].edges[toNode];
  console.log('this.storage[toNode].edges[fromNode] before delete            ', this.storage[toNode].edges[fromNode]);
  delete this.storage[toNode].edges[fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


