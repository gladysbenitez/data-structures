

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [[k, v]];
  var addIt = true;
  var bucket = this._storage.get(index);

  if (bucket === undefined) { // if the object  is empty.. do something
    this._storage.set(index, tuple);// we set a tuple inside our storage array and index position blah.. which 
  } else {
    for ( var i = 0; i < bucket.length; i++ ) { // looping through the big array on the index of storage 
      var currentTuple = bucket[i]; // setting a variable for current tuple
      if (currentTuple[0] === k ) {
        addIt = false;
        currentTuple = [k, v];
        bucket[i] = currentTuple;
      }
    }
    if (addIt === true) {
      bucket.push([k, v]);
    }
  }
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);


  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */







































// delete this._storage;
// for(var key in this._storage){
//   for (var i = 0 ; i < this._storage[key].length, i++){
//     if 
//   }
// }



// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   // console.log('this is limitedarray', LimitedArray)
//   // console.log('this is k', k)
//   // console.log('this is v', v)
//   // console.log('this is this.limit', this.limit)
//   // console.log('this is the index', index)
//   // console.log('this is this._storage', this._storage)
//   console.log('this is limitedArray.get', this._storage.limitedArray.get)

//   console.log( 'type of this._storage[index] ===>',this._storage[index]) 
//   if (this._storage[index] === undefined){ // does the index have a .length property
//     this._storage[index] = [[k,v]];
//   } else {
//     for ( var i = 0; i < this._storage[index].length; i++) {
//       ç
//       if (this._storage[index][i][0] === k && this._storage[index][i][1] === v) {
//         toAdd = false;
//       }
//     }
//     if (toAdd === true){
//       this._storage[index].push([k,v]);
//     }
//   }
// };