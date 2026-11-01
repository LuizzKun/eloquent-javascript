class Group {
  constructor() {
    this.values = [];
  }

  has(value) {
    return this.values.indexOf(value) !=-1;
  }

  add(value) {
    if(!this.has(value)) {
      this.values.push(value)
    }
  }

  delete(value){
    let index = this.values.indexOf(value)
    
    if (index !== -1){
      this.values.splice(index, 1)
    }
  }

  static from(iterable) {
    let group = new Group();
    for (let value of iterable) {
      group.add(value)
    }
    return group;
  }
}


let array = [1,1,2,2,3,4,5,5];

let group1 = Group.from(array);

console.log(group1);


