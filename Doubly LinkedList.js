class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedListStack {
    constructor() {
        this.Head = null;
        this.Tail = null
        this.Size = 0;
    }
    isEmpty(){
        return this.Size===0
    }
    getSize(){
        return this.Size
    }
    enqueue(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.Head = node
            this.Tail = node
        }else{
            node.next = this.Head
            this.Head =node
        }
        this.Size++;
    }
    dequeue(){
        if (this.isEmpty()) {
            this.Head = null
            this.Tail = null
        }else{
            let curr = this.Head
            while (curr.next !== this.Tail) {
                curr = curr.next
            }
            curr.next = null
            this.Tail = curr;
            this.Size--;
        }
    }
    print(){
        if (this.isEmpty()) {
            console.log("List is empty");
        }
        let curr = this.Head
        let list = ' '
        while (curr) {
            list += `${curr.value} `
            curr = curr.next
            
        }
        console.log(list);        
    }
    printReverse(){
        if (this.isEmpty()) {
            console.log("List is Empty ");
        }
        else{
            let curr = this.Tail
            let list = ' '
            while(curr.prev!==null){
                list += `${curr.value} `;
                curr = curr.prev;
            }
            console.log(list);
            
        }
    }
}

const list = new LinkedListStack()
list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.enqueue(40)
list.enqueue(50)

console.log(list.print());

