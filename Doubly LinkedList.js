 class Node {
    constructor(value) {
        this.prev = null
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.Head = this.Head
        this.Tail = Tail
        this.Size = 0;
    }
    isEmpty(){
        return this.Size === 0
    }
    getSize(){
        return this.Size
    }
    prepend(Value){
        const node = new Node(Value)
        if (this.isEmpty()) {
            this.Head = node;
            this.Tail = node
        }else{
            node.next = this.Head
            this.Head.prev = node
            this.Head = node
        }
        this.Size++;
    }
    append(Value){
        const node = new Node(Value)
        if (this.isEmpty()) {
            this.Head = node
            this.Tail = node
        }else{
            this.Tail.next = node
            node.next = null
            this.Tail = node
        }
        this.Size++
    }
    removeFromFront(){
        if (this.isEmpty()) {
            console.log("list is empty there is nothing to remove");
        }if (this.Size === 1) {
            this.Head = null
            this.Tail = null
        }else{
            this.Head = this.Head.next
        }
        this.Size--
    }
    removeFromEnd(){
        if (this.isEmpty()) {
            return null
        }if (this.Size === 1) {
            this.Tail = null
            this.Head = null
        }else{
            this.Tail = this.Tail.prev
            this.Tail.next = null
        }
        this.Size--
    }
    print(){
        if (this.isEmpty()) {
            console.log("List is Empty  nothing to Print");
            
        }
        let curr = this.Head
        let list = ' ';
        while (curr) {
            list += `${curr.value} `
            curr = curr.next;
        }
        console.log(list);
    }
}

const list = new LinkedList();

console.log(list.isEmpty());
console.log(list.Size());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);

console.log(list.print());



