class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.Head =Node;
        this.size = 0
    }

    isEmpty(){
        return this.size ==0;
    }
     getSize(){
        return this.size;
     }
   perapend(value){
    const node = new Node(value);
    if (this.isEmpty) {
        this.Head = node
    }else{
        node.next = this.Head;
        this.Head = node;
    }
    this.size++;
   }
   append(value){
    const node = new Node(value);
      if (this.isEmpty) {
        this.Head = node;
      }else{
        let prev = this.Head;
        if (prev.next!=null) {
            prev = prev.next;
        }
        prev.next = node;
      }
      this.size++;
   }

   insert(value,index){
    if (index < 0 || index > this.size) {
        return 
    }else{
        const node = new Node(value)
        let prev = this.Head;
       for (let i=0; i<index-1;i++) {
            prev = prev.next;
       }
       node.next = prev.next;
       prev.next = node;
       this.size++;
    }
   }
  remove(index){
    if (index <0|| index>this.size) {
        return null;
    }
    let removedNode;
    if (index ===0) {
        removedNode = this.Head;
        this.Head = this.Head.next;
    }else{
        let prev = this.Head
        for (let i = 0; i < index-1; i++) {
           prev = prev.next; 
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  remmoveValue(value){
    if (this.isEmpty()) {
        return null;
    }
    if (this.Head.value === value) {
        this.Head= this.Head.next;
        this.size--;
        return value
    }else{
        let prev = this.Head;
        while(prev.next && prev.next !==value){
            prev = prev.next;
        }
        if (prev.next) {
            removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return value;
        }
        return null
    }
  }
 
search(value){
    if (this.isEmpty()) {
        return -1;
    }
    let index =0;
    let curr = this.Head;
    // while(curr.next!=null)
    while (curr) {
        if (curr.value === value) {
            return index;
        }
        curr = curr.next;
        index++;
    }
    return -1;
}

reverse(){
    let prev = null;
    let curr = this.Head;
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.Head = prev
}
   print(){
    if (this.isEmpty()) {
        console.log("the List is Empty");
    } else {
        let curr = curr.Head;
        let list = " ";
        while (curr) {
            list +=`${curr.value} `
            curr = curr.next;
        }     
    }console.log(list);
    
   }
}
const list  = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());

list.perapend(10);

console.log(list.isEmpty());

