

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
    //   console.log(key)
    //   console.log(this.storage)
    if (this.storage[key].value === node) {
    // console.log('here is the this.storage[value]---->>>>', this.storage[key].value)
    // console.log('here is the node---->>>>', node)
      return true;
    } 
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.storage[node].edges) {
    console.log('here is the key', key);
    console.log('here is this.storage[node].edges', this.storage[node].edges);
    console.log(this.storage[key].edges[node]);
    delete this.storage[key].edges[node];
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

  // this.storage[toNode].edges.push(fromNode);
  // this.storage[fromNode].edges.push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];



  // for(var i = 0; i < this.storage[toNode].edges.length; i++) {
  //   var element = this.storage[toNode].edges[i];
  //   if(element === fromNode) {
  //       this.storage[toNode].edges.splice(i, 1);
  //   }
  // }
  // for(var x = 0; x < this.storage[fromNode].edges.length; x++) {
  //     var element = this.storage[fromNode].edges[x];
  //     if(element === toNode) {
  //         this.storage[fromNode].edges.splice(x, 1);
  //     }
  //   }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


