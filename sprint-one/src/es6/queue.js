class Queue {
  constructor() {
    this.storage = {};
    this.i = 0; 
    this.counter = 0;
    this.sz = 0;
  }

  enqueue(value) {
    this.storage[this.i] = value;
    this.i++;
    this.sz++;
  }

  dequeue() {
    var poppedItem = this.storage[this.counter];
    delete this.storage[this.counter]; 
    this.counter++;
    this.sz--;

    return poppedItem;
  }

  size() {
    if (this.sz >= 0) {
      return this.sz;
    } else { 
      this.sz = 0;
    }
    return this.sz;
  }

}
