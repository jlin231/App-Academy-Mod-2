const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let str = sha256(key);
    return parseInt(str.slice(0, 8), 16);
  }

  hashMod(key) {
    //returns an index
    return this.hash(key) % this.data.length;
  }

  insertNoCollisions(key, value) {
    //for a specific key, get an index to put hash at and put it into the array
    let newKey = new KeyValuePair(key, value)
    let index = this.hashMod(key);

    //check if index is already used in the data array
    if (this.data[index] !== null) {
      throw Error("hash collision or same key/value pair already exists!");
    }
    //check if key-value pair already exists 

    //add key value pair
    this.data[index] = newKey;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    let newKey = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    this.count++;
    if (this.data[index]) newKey.next = this.data[index];
    this.data[index] = newKey;
  }

  insert(key, value) {
    let newKey = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    //check if index is already used in array
    if (!this.data[index]) {
      this.data[index] = newKey;
      this.count++;
    }
    else {
      //see if key has already been used at this index, if so then update 
      let current = this.data[index];
      while (current) {
        if (current.key === key) {
          //replace value at current key
          current.value = value;
          return;
        }
        current = current.next
      }
      newKey.next = this.data[index];
      this.data[index] = newKey;
      this.count++;
    }
  }

}


module.exports = HashTable;
