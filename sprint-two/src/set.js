var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var included = false;
  for ( var i = 0; i < this._storage.length; i++ ) {
    if ( this._storage[i] === item ) {
      included = true;
    }
  }
  if ( included === false ) {
    this._storage.push(item);
    // console.log(this._storage[i])
  }
};

setPrototype.contains = function(item) {
  for ( var i = 0; i < this._storage.length; i++ ) {
    if ( this._storage[i] === item ) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for ( var i = 0; i < this._storage.length; i++) {
    if ( this._storage[i] === item ) {
      this._storage.splice(i, 1);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */




// var Set = function() {
//   var set = Object.create(setPrototype);
//   set._storage = {}; // fix me
//   return set;
// };

// var setPrototype = {};

// setPrototype.add = function(item) {
//   for (var key in this._storage) {
//     if(this._storage[this._storage[key]])

//   } 

// };

// setPrototype.contains = function(item) {

// };

// setPrototype.remove = function(item) {
  
// };